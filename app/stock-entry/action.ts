// app/stock-entry/actions.ts
'use server'; // กำหนดให้ไฟล์นี้เป็น Server Action

// กำหนด Type สำหรับข้อมูลสต๊อกที่จะรับเข้ามา
// นี่คือ Type ที่ตรงกับโครงสร้างของ stockData ที่ส่งมาจาก page.tsx
interface StockEntryData {
  branch: string;
  date: string;
  staffName: string;
  products: Array<{
    name: string;
    quantity: number;
    unit: string;
    category: string;
  }>;
}

/**
 * ฟังก์ชัน Server Action สำหรับบันทึกข้อมูลสต๊อกสินค้า
 * ในตอนนี้จะยังเป็นการจำลองการบันทึกเท่านั้น
 * ในอนาคตจะมีการเชื่อมต่อกับฐานข้อมูลจริงผ่าน Prisma Client ที่นี่
 *
 * @param stockData ข้อมูลสต๊อกสินค้าที่ต้องการบันทึก
 * @returns Object ที่ระบุสถานะการบันทึก (success และ message)
 */
export async function saveStockEntry(stockData: StockEntryData) {
  console.log('Received stock data in Server Action:', stockData);

  // TODO: ในอนาคต คุณจะใช้ Prisma Client ที่นี่เพื่อบันทึกข้อมูลลง Database
  // ตัวอย่าง (เมื่อ Prisma ถูกตั้งค่าแล้ว):
  /*
  import prisma from '../../lib/prisma'; // ต้องสร้างไฟล์ lib/prisma.ts ก่อน

  try {
    // 1. ค้นหาหรือสร้าง Branch
    let branchRecord = await prisma.branch.findUnique({
      where: { name: stockData.branch },
    });
    if (!branchRecord) {
      // อาจจะต้องจัดการกรณีที่สาขาไม่มีอยู่ หรือสร้างสาขาใหม่
      branchRecord = await prisma.branch.create({
        data: { name: stockData.branch, location: 'Unknown' }, // เพิ่ม location ถ้ามี
      });
    }

    // 2. ค้นหาหรือสร้าง Staff
    let staffRecord = await prisma.staff.findFirst({
      where: { name: stockData.staffName },
    });
    if (!staffRecord) {
      staffRecord = await prisma.staff.create({
        data: { name: stockData.staffName },
      });
    }

    // 3. สร้าง StockEntry (บันทึกหลัก)
    const newStockEntry = await prisma.stockEntry.create({
      data: {
        branchId: branchRecord.id,
        entryDate: new Date(stockData.date), // แปลง string เป็น Date object
        staffId: staffRecord.id,
        notes: 'บันทึกสต๊อกประจำวัน', // หรือเพิ่มช่อง notes ใน UI
      },
    });

    // 4. สร้าง StockEntryItems (รายการสินค้าในสต๊อก)
    const stockEntryItemsData = stockData.products.map(async (product) => {
      // ค้นหา ProductID จากชื่อสินค้า
      const productRecord = await prisma.product.findUnique({
        where: { name: product.name },
      });

      if (!productRecord) {
        console.warn(`Product "${product.name}" not found in database. Skipping.`);
        return null; // หรือจัดการ error ตามความเหมาะสม
      }

      return {
        stockEntryId: newStockEntry.id,
        productId: productRecord.id,
        quantity: product.quantity,
        unitUsed: product.unit,
      };
    });

    // กรอง null ออกแล้วบันทึก
    const resolvedStockEntryItems = (await Promise.all(stockEntryItemsData)).filter(Boolean);

    await prisma.stockEntryItem.createMany({
      data: resolvedStockEntryItems as any, // Cast to any for createMany data type
    });

    return { success: true, message: 'บันทึกข้อมูลสต๊อกสำเร็จ!' };

  } catch (error) {
    console.error('Error saving stock data to DB:', error);
    return { success: false, message: 'เกิดข้อผิดพลาดในการบันทึกข้อมูลสต๊อก' };
  }
  */

  // ในตอนนี้ แค่จำลองว่าบันทึกสำเร็จ
  return { success: true, message: 'บันทึกข้อมูลชั่วคราวสำเร็จ (ยังไม่ได้เชื่อมต่อ Database)' };
}
