// utils/mockData.ts

// กำหนด Type Interface สำหรับข้อมูลสินค้าแต่ละรายการ
export interface ProductData {
  category: string; // หมวดหมู่ของสินค้า (เช่น 'วัตถุดิบ', 'เส้นและแป้ง')
  name: string;     // ชื่อสินค้า (เช่น 'หมู ชิ้น', 'เส้น ใหญ่')
  unit: string;     // หน่วยของสินค้า (เช่น 'ถุง / 1 กก.', '1 ห่อ')
}

// ข้อมูลสินค้าทั้งหมด (Mock Data) ที่จะนำไปแสดงในฟอร์มกรอกสต๊อก
export const productsData: ProductData[] = [
  // วัตถุดิบ (Raw Materials)
  { category: 'วัตถุดิบ', name: 'หมู ชิ้น', unit: 'ถุง / 1 กก.' },
  { category: 'วัตถุดิบ', name: 'เนื้อ', unit: '1 ห่อ / 60 กรัม' },
  { category: 'วัตถุดิบ', name: 'กุ้ง ราดหน้า แบบ มี หัว กุ้ง', unit: '1 แพค / 2 ตัว' },
  { category: 'วัตถุดิบ', name: 'ปลา กะพง', unit: '1 แพค / 3 ชิ้น' },
  { category: 'วัตถุดิบ', name: 'กุ้ง ผัด ซีอิ้ว / ผัด', unit: '1 แพค / 4 ตัว' },
  { category: 'วัตถุดิบ', name: 'หมู ลับ', unit: '1 แพค / 60 กรัม' },
  { category: 'วัตถุดิบ', name: 'ไก่', unit: '1 แพค / 70 กรัม' },
  { category: 'วัตถุดิบ', name: 'ปลาหมึก', unit: '1 แพค / 80 กรัม' },
  { category: 'วัตถุดิบ', name: 'เนื้อ ปู ก้อน', unit: '' },
  { category: 'วัตถุดิบ', name: 'ก้าน คะน้า', unit: '1 ถุง' },
  { category: 'วัตถุดิบ', name: 'คะน้า', unit: '1 ถุง / 5 โล' },
  { category: 'วัตถุดิบ', name: 'คะน้า ทำ น้ำ ซุป', unit: 'ถุง' },
  { category: 'วัตถุดิบ', name: 'กระดูก หมู ต้ม น้ำ ซุป', unit: 'เล้ง 5 + ขา ตั้ง 3' },
  { category: 'วัตถุดิบ', name: 'ไข่ ไก่', unit: '1 แผง / 30 ลูก' },
  { category: 'วัตถุดิบ', name: 'พริก เหลือง เม็ด', unit: '' },
  { category: 'วัตถุดิบ', name: 'พริก เหลือง หัน', unit: '' },
  { category: 'วัตถุดิบ', name: 'กระเทียม เม็ด', unit: '' },
  { category: 'วัตถุดิบ', name: 'กระเทียม ปั่น', unit: '' },
  { category: 'วัตถุดิบ', name: 'พริก แดง ปั่น', unit: '' },
  { category: 'วัตถุดิบ', name: 'พริก เขียว หั่น', unit: '' },

  // เส้นและแป้ง (Noodles & Flour)
  { category: 'เส้นและแป้ง', name: 'เส้น ใหญ่', unit: '1 ถุง / 5 กก.' },
  { category: 'เส้นและแป้ง', name: 'เส้น หมี่', unit: '1 ห่อ' },
  { category: 'เส้นและแป้ง', name: 'หมี่ ขาว ทอด กรอบ', unit: '1 แพค' },
  { category: 'เส้นและแป้ง', name: 'บะหมี่ เหลือง ทอด กรอบ', unit: '1 แพค' },
  { category: 'เส้นและแป้ง', name: 'แป้ง มัน', unit: '1 ถุง / 250 กรัม' },

  // เครื่องปรุงและซอส (Seasonings & Sauces)
  { category: 'เครื่องปรุงและซอส', name: 'น้ำมัน พืช', unit: '1 ถัง / 1 ลิตร X12 ถุง' },
  { category: 'เครื่องปรุงและซอส', name: 'เต้าเจี้ยว', unit: 'แกลอน' },
  { category: 'เครื่องปรุงและซอส', name: 'น้ำตาล', unit: '1 ถุง / ครึ่ง โล' },
  { category: 'เครื่องปรุงและซอส', name: 'น้ำปลา', unit: 'ขวด' },
  { category: 'เครื่องปรุงและซอส', name: 'ซีอิ้ว ดำ', unit: 'ขวด' },
  { category: 'เครื่องปรุงและซอส', name: 'พริก ป่น', unit: '1 ถุง / 1 กก.' },
  { category: 'เครื่องปรุงและซอส', name: 'พริกไท', unit: '1 แพค / 500 กรัม' },
  { category: 'เครื่องปรุงและซอส', name: 'น้ำ ส้ม สาย ชู', unit: 'แกลอน' },
  { category: 'เครื่องปรุงและซอส', name: 'พริก น้ำปลา แพด', unit: '' },
  { category: 'เครื่องปรุงและซอส', name: 'พริก น้ำตาล แบบ ของ', unit: '' },
  { category: 'เครื่องปรุงและซอส', name: 'พริก น้ำ ส้ม แพค', unit: '' },

  // บรรจุภัณฑ์และอุปกรณ์ (Packaging & Supplies)
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'ขี้ เถ้า', unit: '1 ถุง / 1 กก.' },
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'น้ำยา ล้าง จาน', unit: '1 แพค / 3 ห่อ' },
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'ถุง หู หิ้ว', unit: '' },
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'ถุง ขยะ', unit: '' },
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'ถุง ร้อน ขาว ขุ่น', unit: '' },
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'กล่อง แบบ ฝา ใส', unit: '' },
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'ช้อน / ส้อม', unit: '' },
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'ตะเกียบ', unit: '' },
];

// กำหนด Type Interface สำหรับข้อมูลสาขาแต่ละรายการ
export interface BranchData {
  value: string; // ค่าที่จะใช้ใน HTML select option (เช่น 'main-branch')
  label: string; // ข้อความที่จะแสดงให้ผู้ใช้เห็น (เช่น 'สาขาหลัก')
}

// ข้อมูลสาขา (Mock Data) สำหรับหน้ากรอกสต๊อก
export const branches: BranchData[] = [
  { value: 'main-branch', label: 'สาขาหลัก' },
  { value: 'branch-a', label: 'สาขา A' },
  { value: 'branch-b', label: 'สาขา B' },
];

// --- New Mock Data for Order Summary Page ---

// Type สำหรับรายการสินค้าที่สั่งซื้อ
export interface OrderedProduct {
  name: string;
  quantity: number;
}

// Type สำหรับบันทึกการสั่งซื้อแต่ละครั้ง
export interface OrderRecord {
  date: string;
  supplier: string; // ID ของ Supplier (เช่น 'meat_supplier')
  supplierName: string; // ชื่อที่แสดงของ Supplier (เช่น 'ร้านค้าเนื้อสด')
  products: OrderedProduct[];
}

// Mock Data: จำลองบันทึกการสั่งซื้อที่ผ่านมา
export const mockOrderRecords: OrderRecord[] = [
  {
    date: '2025-06-07',
    supplier: 'meat_supplier',
    supplierName: 'ร้านค้าเนื้อสด',
    products: [
      { name: 'หมู ชิ้น', quantity: 15 },
      { name: 'เนื้อ', quantity: 10 }
    ]
  },
  {
    date: '2025-06-07',
    supplier: 'vegetable_supplier',
    supplierName: 'ตลาดสดผักผลไม้',
    products: [
      { name: 'คะน้า', quantity: 10 },
      { name: 'พริก เหลือง เม็ด', quantity: 2 },
      { name: 'ไข่ ไก่', quantity: 30 }
    ]
  },
  {
    date: '2025-06-07',
    supplier: 'seasoning_supplier',
    supplierName: 'บจก. เครื่องปรุงรส',
    products: [
      { name: 'น้ำมัน พืช', quantity: 2 },
      { name: 'น้ำปลา', quantity: 3 }
    ]
  },
  {
    date: '2025-06-07',
    supplier: 'packaging_supplier',
    supplierName: 'โรงงานบรรจุภัณฑ์',
    products: [
      { name: 'ถุง หู หิ้ว', quantity: 100 },
      { name: 'กล่อง แบบ ฝา ใส', quantity: 50 }
    ]
  },
  { // Order from a previous date
    date: '2025-06-06',
    supplier: 'meat_supplier',
    supplierName: 'ร้านค้าเนื้อสด',
    products: [
      { name: 'หมู ชิ้น', quantity: 10 },
      { name: 'ปลา กะพง', quantity: 5 }
    ]
  },
  { // Another order on the same day from a different supplier, potentially overlapping products
    date: '2025-06-07',
    supplier: 'meat_supplier', // Same supplier, but different order batch / time
    supplierName: 'ร้านค้าเนื้อสด',
    products: [
      { name: 'ไก่', quantity: 10 },
      { name: 'หมู ชิ้น', quantity: 5 } // This will sum up with the first 'หมู ชิ้น' order
    ]
  }
];

// List of all possible suppliers (for dropdown)
export const suppliers = [
  { value: 'all', label: 'ทั้งหมด' },
  { value: 'meat_supplier', label: 'ร้านค้าเนื้อสด' },
  { value: 'vegetable_supplier', label: 'ตลาดสดผักผลไม้' },
  { value: 'seasoning_supplier', label: 'บจก. เครื่องปรุงรส' },
  { value: 'packaging_supplier', label: 'โรงงานบรรจุภัณฑ์' },
];

// Helper to get product unit from productsData
export function getProductUnit(productName: string): string {
  const product = productsData.find(p => p.name === productName);
  return product ? product.unit : '';
}

// --- New Mock Data for Stock Summary Page ---

// Type สำหรับรายการสินค้าในบันทึกสต๊อก
export interface StockProduct {
  name: string;
  quantity: number;
  unit: string;
}

// Type สำหรับบันทึกสต๊อกแต่ละครั้ง
export interface StockRecord {
  branch: string; // ID ของสาขา
  date: string;
  staffName: string;
  products: StockProduct[];
}

// Mock Data: จำลองบันทึกสต๊อกที่ผ่านมา
export const mockStockRecords: StockRecord[] = [
  {
    branch: 'rachawat',
    date: '2025-06-07',
    staffName: 'สมใจ',
    products: [
      { name: 'หมู ชิ้น', quantity: 5, unit: 'ถุง / 1 กก.' },
      { name: 'เนื้อ', quantity: 10, unit: '1 ห่อ / 60 กรัม' },
      { name: 'ไข่ ไก่', quantity: 20, unit: '1 แผง / 30 ลูก' }
    ]
  },
  {
    branch: 'emporium',
    date: '2025-06-07',
    staffName: 'ปรีชา',
    products: [
      { name: 'หมู ชิ้น', quantity: 2, unit: 'ถุง / 1 กก.' },
      { name: 'ไข่ ไก่', quantity: 15, unit: '1 แผง / 30 ลูก' },
      { name: 'เส้น ใหญ่', quantity: 3, unit: '1 ถุง / 5 กก.' }
    ]
  },
  {
    branch: 'rachawat',
    date: '2025-06-06',
    staffName: 'สมใจ',
    products: [
      { name: 'หมู ชิ้น', quantity: 3, unit: 'ถุง / 1 กก.' },
      { name: 'ปลา กะพง', quantity: 4, unit: '1 แพค / 3 ชิ้น' },
      { name: 'น้ำมัน พืช', quantity: 1, unit: '1 ถัง / 1 ลิตร X12 ถุง' }
    ]
  },
  {
    branch: 'rachawat',
    date: '2025-06-07',
    staffName: 'มาลี',
    products: [
      { name: 'หมู ชิ้น', quantity: 1, unit: 'ถุง / 1 กก.' },
      { name: 'พริก ป่น', quantity: 5, unit: '1 ถุง / 1 กก.' }
    ]
  },
  {
    branch: 'bangkapi',
    date: '2025-06-07',
    staffName: 'มานะ',
    products: [
      { name: 'เส้น ใหญ่', quantity: 8, unit: '1 ถุง / 5 กก.' },
      { name: 'น้ำมัน พืช', quantity: 2, unit: '1 ถัง / 1 ลิตร X12 ถุง' },
      { name: 'ไข่ ไก่', quantity: 10, unit: '1 แผง / 30 ลูก' },
      { name: 'น้ำปลา', quantity: 1, unit: 'ขวด' }
    ]
  },
  {
    branch: 'paragon',
    date: '2025-06-07',
    staffName: 'อนงค์',
    products: [
      { name: 'เนื้อ', quantity: 3, unit: '1 ห่อ / 60 กรัม' },
      { name: 'น้ำปลา', quantity: 1, unit: 'ขวด' },
      { name: 'กุ้ง ราดหน้า แบบ มี หัว กุ้ง', quantity: 2, unit: '1 แพค / 2 ตัว' }
    ]
  }
];

// Type สำหรับรายการสินค้าทั้งหมดพร้อม Target Quantity
export interface AllProductWithTarget extends ProductData {
  targetQuantity: number;
}

// List of all possible products with their default units and TARGET QUANTITIES
export const allProductsWithTargets: AllProductWithTarget[] = [
  { category: 'วัตถุดิบ', name: 'หมู ชิ้น', unit: 'ถุง / 1 กก.', targetQuantity: 10 },
  { category: 'วัตถุดิบ', name: 'เนื้อ', unit: '1 ห่อ / 60 กรัม', targetQuantity: 5 },
  { category: 'วัตถุดิบ', name: 'กุ้ง ราดหน้า แบบ มี หัว กุ้ง', unit: '1 แพค / 2 ตัว', targetQuantity: 3 },
  { category: 'วัตถุดิบ', name: 'ปลา กะพง', unit: '1 แพค / 3 ชิ้น', targetQuantity: 2 },
  { category: 'วัตถุดิบ', name: 'กุ้ง ผัด ซีอิ้ว / ผัด', unit: '1 แพค / 4 ตัว', targetQuantity: 4 },
  { category: 'วัตถุดิบ', name: 'หมู ลับ', unit: '1 แพค / 60 กรัม', targetQuantity: 7 },
  { category: 'วัตถุดิบ', name: 'ไก่', unit: '1 แพค / 70 กรัม', targetQuantity: 8 },
  { category: 'วัตถุดิบ', name: 'ปลาหมึก', unit: '1 แพค / 80 กรัม', targetQuantity: 5 },
  { category: 'วัตถุดิบ', name: 'เนื้อ ปู ก้อน', unit: '', targetQuantity: 2 },
  { category: 'วัตถุดิบ', name: 'ก้าน คะน้า', unit: '1 ถุง', targetQuantity: 5 },
  { category: 'วัตถุดิบ', name: 'คะน้า', unit: '1 ถุง / 5 โล', targetQuantity: 3 },
  { category: 'วัตถุดิบ', name: 'คะน้า ทำ น้ำ ซุป', unit: 'ถุง', targetQuantity: 4 },
  { category: 'วัตถุดิบ', name: 'กระดูก หมู ต้ม น้ำ ซุป', unit: 'เล้ง 5 + ขา ตั้ง 3', targetQuantity: 2 },
  { category: 'วัตถุดิบ', name: 'ไข่ ไก่', unit: '1 แผง / 30 ลูก', targetQuantity: 30 },
  { category: 'วัตถุดิบ', name: 'พริก เหลือง เม็ด', unit: '', targetQuantity: 1 },
  { category: 'วัตถุดิบ', name: 'พริก เหลือง หัน', unit: '', targetQuantity: 1 },
  { category: 'วัตถุดิบ', name: 'กระเทียม เม็ด', unit: '', targetQuantity: 2 },
  { category: 'วัตถุดิบ', name: 'กระเทียม ปั่น', unit: '', targetQuantity: 1 },
  { category: 'วัตถุดิบ', name: 'พริก แดง ปั่น', unit: '', targetQuantity: 1 },
  { category: 'วัตถุดิบ', name: 'พริก เขียว หั่น', unit: '', targetQuantity: 1 },
  { category: 'เส้นและแป้ง', name: 'เส้น ใหญ่', unit: '1 ถุง / 5 กก.', targetQuantity: 5 },
  { category: 'เส้นและแป้ง', name: 'เส้น หมี่', unit: '1 ห่อ', targetQuantity: 10 },
  { category: 'เส้นและแป้ง', name: 'หมี่ ขาว ทอด กรอบ', unit: '1 แพค', targetQuantity: 3 },
  { category: 'เส้นและแป้ง', name: 'บะหมี่ เหลือง ทอด กรอบ', unit: '1 แพค', targetQuantity: 3 },
  { category: 'เส้นและแป้ง', name: 'แป้ง มัน', unit: '1 ถุง / 250 กรัม', targetQuantity: 2 },
  { category: 'เครื่องปรุงและซอส', name: 'น้ำมัน พืช', unit: '1 ถัง / 1 ลิตร X12 ถุง', targetQuantity: 2 },
  { category: 'เครื่องปรุงและซอส', name: 'เต้าเจี้ยว', unit: 'แกลอน', targetQuantity: 1 },
  { category: 'เครื่องปรุงและซอส', name: 'น้ำตาล', unit: '1 ถุง / ครึ่ง โล', targetQuantity: 5 },
  { category: 'เครื่องปรุงและซอส', name: 'น้ำปลา', unit: 'ขวด', targetQuantity: 3 },
  { category: 'เครื่องปรุงและซอส', name: 'ซีอิ้ว ดำ', unit: 'ขวด', targetQuantity: 1 },
  { category: 'เครื่องปรุงและซอส', name: 'พริก ป่น', unit: '1 ถุง / 1 กก.', targetQuantity: 2 },
  { category: 'เครื่องปรุงและซอส', name: 'พริกไท', unit: '1 แพค / 500 กรัม', targetQuantity: 1 },
  { category: 'เครื่องปรุงและซอส', name: 'น้ำ ส้ม สาย ชู', unit: 'แกลอน', targetQuantity: 1 },
  { category: 'เครื่องปรุงและซอส', name: 'พริก น้ำปลา แพด', unit: '', targetQuantity: 20 },
  { category: 'เครื่องปรุงและซอส', name: 'พริก น้ำตาล แบบ ของ', unit: '', targetQuantity: 20 },
  { category: 'เครื่องปรุงและซอส', name: 'พริก น้ำ ส้ม แพค', unit: '', targetQuantity: 20 },
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'ขี้ เถ้า', unit: '1 ถุง / 1 กก.', targetQuantity: 1 },
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'น้ำยา ล้าง จาน', unit: '1 แพค / 3 ห่อ', targetQuantity: 1 },
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'ถุง หู หิ้ว', unit: '', targetQuantity: 50 },
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'ถุง ขยะ', unit: '', targetQuantity: 10 },
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'ถุง ร้อน ขาว ขุ่น', unit: '', targetQuantity: 50 },
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'กล่อง แบบ ฝา ใส', unit: '', targetQuantity: 50 },
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'ช้อน / ส้อม', unit: '', targetQuantity: 100 },
  { category: 'บรรจุภัณฑ์และอุปกรณ์', name: 'ตะเกียบ', unit: '', targetQuantity: 100 }
];

// ข้อมูลสาขา (Mock Data) สำหรับหน้าสรุปรายการคงเหลือ
export const summaryBranches: BranchData[] = [
  { value: 'rachawat', label: 'ราชวัตร' },
  { value: 'emporium', label: 'เอมโพเรี่ยม' },
  { value: 'bangkapi', label: 'บางกะปิ' },
  { value: 'bangkae', label: 'บางแค' },
  { value: 'paragon', label: 'พารากอน' },
];
