// app/stock-summary/page.tsx
'use client'; // กำหนดให้เป็น Client Component เพราะมีการใช้ React Hooks (useState, useEffect, useMemo) และ Event Handlers

import React, { useState, useEffect, useMemo } from 'react';
import { mockStockRecords, allProductsWithTargets, summaryBranches, getProductUnit, StockRecord, AllProductWithTarget } from '../../utils/mockData'; // นำเข้า Mock Data และ Helper

// Type สำหรับรายการสรุปสต๊อกที่รวมกันแล้ว
interface AggregatedStockSummary {
  name: string;
  quantity: number; // จำนวนคงเหลือ
  unit: string;
  targetQuantity: number; // ปริมาณเป้าหมาย
  quantityToSend: number; // จำนวนที่ต้องส่ง (คำนวณจาก target - current)
}

export default function StockSummaryPage() {
  // State สำหรับสาขาที่เลือก (ตั้งค่าเริ่มต้นเป็น 'rachawat' ตามที่ระบุใน HTML)
  const [selectedBranch, setSelectedBranch] = useState<string>('rachawat');
  // State สำหรับวันที่ที่เลือก (ตั้งค่าเริ่มต้นเป็นวันที่ปัจจุบัน)
  const [selectedDate, setSelectedDate] = useState<string>('');
  // State สำหรับชื่อพนักงานที่กรอกข้อมูลในวันที่และสาขาที่เลือก
  const [staffNames, setStaffNames] = useState<string[]>([]);
  // State สำหรับข้อมูลสรุปรายการคงเหลือที่จะแสดงในตาราง
  const [stockSummary, setStockSummary] = useState<AggregatedStockSummary[]>([]);

  // ตั้งค่าวันที่ปัจจุบันเมื่อ Component โหลดครั้งแรก
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setSelectedDate(`${year}-${month}-${day}`);
  }, []);

  // ใช้ useMemo ในการประมวลผลข้อมูลสรุปรายการคงเหลือ
  // จะคำนวณใหม่เมื่อ selectedBranch, selectedDate, หรือ mockStockRecords เปลี่ยนแปลง
  const aggregatedSummary = useMemo(() => {
    const aggregatedStock: { [productName: string]: Omit<AggregatedStockSummary, 'name' | 'quantityToSend'> } = {};

    // 1. Initialize aggregated stock with all products from the master list, with 0 quantity
    //    and store targetQuantity for later calculation
    allProductsWithTargets.forEach(product => {
      aggregatedStock[product.name] = {
        quantity: 0, // เริ่มต้นจำนวนคงเหลือเป็น 0
        unit: product.unit,
        targetQuantity: product.targetQuantity || 0 // ใช้ 0 ถ้า targetQuantity ไม่ได้กำหนด
      };
    });

    // 2. กรองบันทึกสต๊อกตามสาขาและวันที่ที่เลือก
    const filteredRecords = mockStockRecords.filter(record =>
      record.branch === selectedBranch && record.date === selectedDate
    );

    // 3. รวบรวมชื่อพนักงาน
    const uniqueStaffNames = [...new Set(filteredRecords.map(record => record.staffName))];
    setStaffNames(uniqueStaffNames); // อัปเดต State ชื่อพนักงาน

    // 4. รวมปริมาณสินค้าจากบันทึกที่กรองแล้ว
    filteredRecords.forEach(record => {
      record.products.forEach(product => {
        if (aggregatedStock[product.name]) {
          aggregatedStock[product.name].quantity += product.quantity;
        }
        // ไม่ต้องมี else ที่นี่ เพราะสินค้าทั้งหมดถูก Initialize ไว้แล้ว
      });
    });

    // 5. แปลง Object ให้เป็น Array เพื่อนำไป Render ในตารางและจัดเรียง
    const summaryArray = Object.keys(aggregatedStock).map(productName => {
      const item = aggregatedStock[productName];
      const quantityToSend = Math.max(0, item.targetQuantity - item.quantity); // คำนวณ 'จำนวนที่ต้องส่ง'
      return {
        name: productName,
        quantity: item.quantity,
        unit: item.unit,
        targetQuantity: item.targetQuantity,
        quantityToSend: quantityToSend,
      };
    });

    // 6. จัดเรียงตามชื่อสินค้า (ภาษาไทย)
    summaryArray.sort((a, b) => a.name.localeCompare(b.name, 'th', { sensitivity: 'base' }));

    return summaryArray;
  }, [selectedBranch, selectedDate, mockStockRecords]); // Dependencies: จะรัน useMemo ใหม่เมื่อค่าเหล่านี้เปลี่ยน

  // useEffect สำหรับอัปเดต stockSummary เมื่อ aggregatedSummary เปลี่ยน
  useEffect(() => {
    setStockSummary(aggregatedSummary);
  }, [aggregatedSummary]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">สรุปรายการคงเหลือ</h2>

      {/* Dropdowns สำหรับเลือกสาขาและวันที่ */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="summaryBranchSelect" className="block text-gray-700 text-sm font-medium mb-2">เลือกสาขา:</label>
          <select
            id="summaryBranchSelect"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out appearance-none bg-white"
          >
            {summaryBranches.map((branch: BranchData) => (
              <option key={branch.value} value={branch.value}>{branch.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="summaryDateSelect" className="block text-gray-700 text-sm font-medium mb-2">เลือกวันที่:</label>
          <input
            type="date"
            id="summaryDateSelect"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          />
        </div>
      </div>

      {/* Staff Names Display Area */}
      <div id="staffNamesDisplay" className="mb-4 text-gray-700 text-sm">
        {staffNames.length > 0 ? (
          <p className="font-semibold">ผู้กรอกข้อมูลสำหรับวันนี้: <span className="font-normal">{staffNames.join(', ')}</span></p>
        ) : (
          <p className="text-gray-500">ไม่มีข้อมูลผู้กรอกสำหรับวันที่และสาขาที่เลือก</p>
        )}
      </div>

      {/* Stock Summary Display Area */}
      <div id="stockSummaryDisplay" className="table-container border border-gray-200 rounded-lg shadow-sm">
        {stockSummary.length === 0 ? (
          <p className="p-6 text-center text-gray-500">ไม่มีข้อมูลสต็อกสำหรับวันที่และสาขาที่เลือก</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">สินค้า</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">จำนวนคงเหลือ</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">จำนวนที่ต้องส่ง</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">หน่วย</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stockSummary.map((item, index) => (
                <tr key={item.name}> {/* ใช้ item.name เป็น key ถ้ามั่นใจว่าไม่ซ้ำกัน */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">{item.quantityToSend}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.unit || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
