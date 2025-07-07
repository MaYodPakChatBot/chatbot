// app/order-summary/page.tsx
'use client'; // กำหนดให้เป็น Client Component เพราะมีการใช้ React Hooks (useState, useEffect, useMemo) และ Event Handlers

import React, { useState, useEffect, useMemo } from 'react';
import { mockOrderRecords, suppliers, getProductUnit, OrderRecord, OrderedProduct, ProductData } from '../../utils/mockData'; // นำเข้า Mock Data และ Helper

// Type สำหรับรายการสรุปสินค้าที่รวมกันแล้ว
interface AggregatedProductSummary {
  name: string;
  totalQuantity: number;
  unit: string;
  suppliers: Set<string>; // ใช้ Set เพื่อเก็บชื่อ Supplier ที่ไม่ซ้ำกัน
}

export default function OrderSummaryPage() {
  // State สำหรับวันที่ที่เลือก (ตั้งค่าเริ่มต้นเป็น '2025-06-07' ตามที่ระบุ)
  const [selectedDate, setSelectedDate] = useState<string>('2025-06-07');
  // State สำหรับ Supplier ที่เลือก
  const [selectedSupplier, setSelectedSupplier] = useState<string>('all');
  // State สำหรับข้อมูลสรุปรายการสั่งซื้อที่จะแสดงในตาราง
  const [orderSummary, setOrderSummary] = useState<AggregatedProductSummary[]>([]);

  // ใช้ useMemo ในการประมวลผลข้อมูลสรุปรายการสั่งซื้อ
  // จะคำนวณใหม่เมื่อ selectedDate หรือ selectedSupplier เปลี่ยนแปลง
  const aggregatedSummary = useMemo(() => {
    const aggregatedProducts: { [productName: string]: AggregatedProductSummary } = {};

    // กรองบันทึกการสั่งซื้อตามวันที่ที่เลือก
    const filteredByDateRecords = mockOrderRecords.filter(record =>
      record.date === selectedDate
    );

    // รวมปริมาณสินค้าและ Supplier
    filteredByDateRecords.forEach(record => {
      // ใช้ Supplier Filter
      if (selectedSupplier === 'all' || record.supplier === selectedSupplier) {
        record.products.forEach(product => {
          if (!aggregatedProducts[product.name]) {
            // ถ้ายังไม่มีสินค้านี้ใน aggregatedProducts ให้สร้าง Object ใหม่
            aggregatedProducts[product.name] = {
              name: product.name,
              totalQuantity: 0,
              suppliers: new Set(), // เริ่มต้นด้วย Set ว่างเปล่า
              unit: getProductUnit(product.name) // ดึงหน่วยจาก Helper
            };
          }
          // เพิ่มจำนวนและ Supplier
          aggregatedProducts[product.name].totalQuantity += product.quantity;
          aggregatedProducts[product.name].suppliers.add(record.supplierName);
        });
      }
    });

    // แปลง Object ให้เป็น Array เพื่อนำไป Render ในตารางและจัดเรียง
    const summaryArray = Object.keys(aggregatedProducts).map(productName => ({
      name: productName,
      totalQuantity: aggregatedProducts[productName].totalQuantity,
      unit: aggregatedProducts[productName].unit,
      suppliers: Array.from(aggregatedProducts[productName].suppliers).join(', ') // แปลง Set เป็น String ที่คั่นด้วย comma
    }));

    // จัดเรียงตามชื่อสินค้า (ภาษาไทย)
    summaryArray.sort((a, b) => a.name.localeCompare(b.name, 'th', { sensitivity: 'base' }));

    return summaryArray;
  }, [selectedDate, selectedSupplier, mockOrderRecords]); // Dependencies: จะรัน useMemo ใหม่เมื่อค่าเหล่านี้เปลี่ยน

  // useEffect สำหรับอัปเดต orderSummary เมื่อ aggregatedSummary เปลี่ยน
  useEffect(() => {
    setOrderSummary(aggregatedSummary);
  }, [aggregatedSummary]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">สรุปรายการสั่งซื้อ</h2>

      {/* Dropdowns สำหรับเลือกวันที่และผู้จำหน่าย */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="orderDateSelect" className="block text-gray-700 text-sm font-medium mb-2">เลือกวันที่สั่งซื้อ:</label>
          <input
            type="date"
            id="orderDateSelect"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          />
        </div>
        <div>
          <label htmlFor="orderSupplierSelect" className="block text-gray-700 text-sm font-medium mb-2">สั่งจากร้าน:</label>
          <select
            id="orderSupplierSelect"
            value={selectedSupplier}
            onChange={(e) => setSelectedSupplier(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out appearance-none bg-white"
          >
            {suppliers.map(supplier => (
              <option key={supplier.value} value={supplier.value}>{supplier.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ส่วนแสดงตารางสรุปรายการสั่งซื้อ */}
      <div id="orderSummaryDisplay" className="table-container border border-gray-200 rounded-lg shadow-sm">
        {orderSummary.length === 0 ? (
          <p className="p-6 text-center text-gray-500">ไม่มีรายการสั่งซื้อสำหรับวันที่และผู้จำหน่ายที่เลือก</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0 z-10"> {/* sticky top-0 เพื่อให้ Header อยู่ด้านบนเมื่อ Scroll */}
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">สินค้า</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">จำนวนที่สั่ง</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">หน่วย</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">สั่งจากร้าน</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orderSummary.map((item, index) => (
                <tr key={index}> {/* ใช้ index เป็น key ชั่วคราว ถ้าไม่มี id ที่ไม่ซ้ำกัน */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.totalQuantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.unit || '-'}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{item.suppliers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
