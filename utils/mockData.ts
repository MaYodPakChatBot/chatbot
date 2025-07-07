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

// ข้อมูลสาขา (Mock Data)
export const branches: BranchData[] = [
  { value: 'main-branch', label: 'สาขาหลัก' },
  { value: 'branch-a', label: 'สาขา A' },
  { value: 'branch-b', label: 'สาขา B' },
];
