// app/stock-entry/page.tsx
'use client'; // กำหนดให้ไฟล์นี้เป็น Client Component เพราะมีการใช้ React Hooks (useState, useEffect) และ Event Handlers

import React, { useState, useEffect, useMemo } from 'react';
import Modal from '../../components/ui/Modal'; // นำเข้า Modal Component ที่สร้างไว้
import { productsData, branches, ProductData, BranchData } from '../../utils/mockData'; // นำเข้า Mock Data
import { saveStockEntry } from './action'; // นำเข้า Server Action ที่สร้างไว้ (ตอนนี้ยังเป็นแค่ Placeholder)

// กำหนด Type สำหรับโครงสร้างของสินค้าที่จัดกลุ่มตามหมวดหมู่
interface CategorizedProducts {
  [categoryName: string]: ProductData[];
}

/**
 * ฟังก์ชันช่วยในการจัดกลุ่มสินค้าตามหมวดหมู่
 * @param products Array ของข้อมูลสินค้าทั้งหมด
 * @returns Object ที่มี Key เป็นชื่อหมวดหมู่ และ Value เป็น Array ของสินค้าในหมวดหมู่นั้น
 */
function groupProductsByCategory(products: ProductData[]): CategorizedProducts {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as CategorizedProducts); // ใช้ Type Assertion เพื่อช่วย TypeScript ในการอนุมาน Type
}

// Component หลักสำหรับหน้ากรอกข้อมูลสต๊อกสินค้า
export default function StockEntryPage() {
  // States สำหรับเก็บข้อมูลพื้นฐานของฟอร์ม
  const [branch, setBranch] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [staffName, setStaffName] = useState<string>('');

  // State สำหรับเก็บจำนวนสินค้าแต่ละรายการ
  // Key คือ product.name, Value คือ quantity (number)
  const [productQuantities, setProductQuantities] = useState<Record<string, number>>(() => {
    const initialQuantities: Record<string, number> = {};
    productsData.forEach(product => {
      initialQuantities[product.name] = 0; // ตั้งค่าเริ่มต้นเป็น 0 สำหรับทุกรายการสินค้า
    });
    return initialQuantities;
  });

  // States สำหรับจัดการ Custom Modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');

  // State สำหรับเก็บสถานะการเปิด/ปิดของแต่ละหมวดหมู่ (collapsed = true คือปิดอยู่)
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

  // ใช้ useMemo เพื่อจัดกลุ่มสินค้าตามหมวดหมู่เพียงครั้งเดียวเมื่อ productsData ไม่เปลี่ยนแปลง
  const categorizedProducts = useMemo(() => {
    return groupProductsByCategory(productsData);
  }, []); // Dependency array ว่างเปล่า หมายถึงจะคำนวณแค่ครั้งเดียวเมื่อ Component mount

  // useEffect สำหรับตั้งค่าเริ่มต้นเมื่อ Component โหลดครั้งแรก
  useEffect(() => {
    // ตั้งค่าวันที่ปัจจุบันในช่อง input date
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setDate(`${year}-${month}-${day}`);

    // ตั้งค่าสถานะเริ่มต้นของหมวดหมู่ให้เปิดทั้งหมด (false = ไม่ได้ collapsed)
    const initialCollapsedState: Record<string, boolean> = {};
    Object.keys(categorizedProducts).forEach(category => {
      initialCollapsedState[category] = false;
    });
    setCollapsedCategories(initialCollapsedState);
  }, [categorizedProducts]); // Dependency array: รันอีกครั้งถ้า categorizedProducts เปลี่ยน (ซึ่งในเคสนี้มันไม่เปลี่ยน)

  /**
   * ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงจำนวนสินค้าในช่อง input
   * @param productName ชื่อสินค้าที่กำลังเปลี่ยนจำนวน
   * @param value ค่าจาก input (string)
   */
  const handleQuantityChange = (productName: string, value: string) => {
    const quantity = parseInt(value, 10); // แปลงค่าเป็น Integer
    setProductQuantities(prevQuantities => ({
      ...prevQuantities,
      [productName]: isNaN(quantity) || quantity < 0 ? 0 : quantity, // ตรวจสอบค่า: ถ้าไม่ใช่ตัวเลขหรือติดลบ ให้เป็น 0
    }));
  };

  /**
   * ฟังก์ชันสำหรับแสดง Custom Modal
   * @param message ข้อความที่จะแสดงใน Modal
   */
  const showCustomModal = (message: string) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  /**
   * ฟังก์ชันสำหรับปิด Custom Modal
   */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  /**
   * ฟังก์ชันสำหรับสลับสถานะการเปิด/ปิดของหมวดหมู่
   * @param categoryName ชื่อหมวดหมู่ที่ต้องการสลับ
   */
  const handleCategoryToggle = (categoryName: string) => {
    setCollapsedCategories(prevState => ({
      ...prevState,
      [categoryName]: !prevState[categoryName], // สลับค่า true/false
    }));
  };

  /**
   * ฟังก์ชันสำหรับจัดการการบันทึกข้อมูลเมื่อกดปุ่ม "บันทึกข้อมูล"
   * @param event Event object จากการ Submit Form
   */
  const handleSaveData = async (event: React.FormEvent) => {
    event.preventDefault(); // ป้องกันการ Submit Form แบบปกติของ HTML

    // 1. ตรวจสอบข้อมูลพื้นฐาน
    if (!branch) {
      showCustomModal('กรุณาเลือกสาขา');
      return;
    }
    if (!staffName.trim()) {
      showCustomModal('กรุณากรอกชื่อผู้กรอก');
      return;
    }

    // 2. รวบรวมข้อมูลสินค้าที่กรอก
    const productsToSave = productsData
      .map(product => ({
        name: product.name,
        quantity: productQuantities[product.name] || 0, // ดึงค่า quantity จาก state
        unit: product.unit,
        category: product.category,
      }))
      .filter(p => p.quantity > 0); // กรองเฉพาะสินค้าที่มีจำนวนมากกว่า 0 เพื่อบันทึก

    if (productsToSave.length === 0) {
      showCustomModal('กรุณากรอกจำนวนสินค้าอย่างน้อยหนึ่งรายการ');
      return;
    }

    // 3. สร้าง Object ข้อมูลสต๊อกทั้งหมด
    const stockData = {
      branch: branch,
      date: date,
      staffName: staffName,
      products: productsToSave,
    };

    console.log('Stock Data to Save:', stockData);

    // 4. เรียกใช้ Server Action เพื่อบันทึกข้อมูล (ในอนาคตจะเชื่อมต่อ DB ที่นี่)
    try {
      const result = await saveStockEntry(stockData); // เรียก Server Action
      if (result.success) {
        showCustomModal(result.message); // แสดงข้อความสำเร็จจาก Server Action
        // 5. Reset Form หลังจากบันทึกสำเร็จ (ยกเว้นวันที่)
        setBranch('');
        setStaffName('');
        setProductQuantities(() => {
          const resetQuantities: Record<string, number> = {};
          productsData.forEach(product => {
            resetQuantities[product.name] = 0;
          });
          return resetQuantities;
        });
      } else {
        showCustomModal(result.message); // แสดงข้อความผิดพลาดจาก Server Action
      }
    } catch (error) {
      console.error('Error calling saveStockEntry Server Action:', error);
      showCustomModal('เกิดข้อผิดพลาดในการส่งข้อมูล');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">กรอกข้อมูลสต๊อกสินค้า</h2>

      {/* ใช้ Form tag เพื่อจัดการการ Submit */}
      <form onSubmit={handleSaveData}>
        {/* ส่วนข้อมูลพื้นฐาน */}
        <div className="mb-4">
          <label htmlFor="branch" className="block text-gray-700 text-sm font-medium mb-2">สาขา:</label>
          <select
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out appearance-none bg-white"
          >
            <option value="">เลือกสาขา</option>
            {branches.map((b: BranchData) => (
              <option key={b.value} value={b.value}>{b.label}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 text-sm font-medium mb-2">วันที่:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="staffName" className="block text-gray-700 text-sm font-medium mb-2">ชื่อผู้กรอก:</label>
          <input
            type="text"
            id="staffName"
            placeholder="ชื่อ-นามสกุล"
            value={staffName}
            onChange={(e) => setStaffName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          />
        </div>

        {/* ส่วนรายการสินค้าคงเหลือ (จัดหมวดหมู่) */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">รายการสินค้าคงเหลือ</h3>
        <div id="category-list-container">
          {/* Loop ผ่านหมวดหมู่สินค้าที่จัดกลุ่มไว้ */}
          {Object.keys(categorizedProducts).map(categoryName => (
            <div key={categoryName} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              {/* Category Header (ส่วนหัวของแต่ละหมวดหมู่) */}
              <div
                className="flex justify-between items-center p-4 bg-blue-100 text-gray-800 font-semibold cursor-pointer select-none hover:bg-blue-200 transition-colors duration-200 ease-in-out"
                onClick={() => handleCategoryToggle(categoryName)} // เมื่อคลิกจะสลับการเปิด/ปิด
              >
                <span className="text-base">{categoryName}</span>
                <svg
                  className={`chevron-icon w-5 h-5 text-gray-600 ${collapsedCategories[categoryName] ? '' : 'rotate-180'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>

              {/* Product List Content (รายการสินค้าภายในหมวดหมู่) */}
              <div className={`${collapsedCategories[categoryName] ? 'hidden' : ''} p-4 bg-white space-y-3`}>
                {/* Loop ผ่านสินค้าแต่ละรายการในหมวดหมู่นั้น */}
                {categorizedProducts[categoryName].map(product => (
                  <div key={product.name} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg shadow-sm">
                    <span className="flex-1 text-sm font-medium text-gray-700">{product.name}</span>
                    <input
                      type="number"
                      data-product-name={product.name}
                      placeholder="จำนวน"
                      value={productQuantities[product.name] || 0} // ดึงค่าจาก state productQuantities
                      min="0"
                      onChange={(e) => handleQuantityChange(product.name, e.target.value)} // เมื่อค่าเปลี่ยนจะอัปเดต state
                      className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm text-center"
                    />
                    <span className="w-24 text-sm text-gray-600">{product.unit || ''}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ปุ่มบันทึกข้อมูล */}
        <button
          type="submit" // กำหนดเป็น type="submit" เพื่อให้ Form handle การ Submit
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out w-full shadow-lg text-lg font-semibold mt-6"
        >
          บันทึกข้อมูล
        </button>
      </form>

      {/* Custom Modal Component */}
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={closeModal} />
    </div>
  );
}
