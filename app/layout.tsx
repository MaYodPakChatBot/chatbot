// app/layout.tsx
import './globals.css'; // นำเข้า Global CSS ที่เราแก้ไขไปก่อนหน้านี้
import { Inter } from 'next/font/google'; // นำเข้า Font Inter จาก next/font/google

// กำหนดค่าสำหรับ Font Inter
// subsets: ['latin'] เป็นการระบุชุดตัวอักษรที่ต้องการโหลด
const inter = Inter({ subsets: ['latin'] });

// Metadata สำหรับหน้าเว็บ (แสดงผลใน Tab ของ Browser หรือสำหรับ SEO)
export const metadata = {
  title: 'กรอกข้อมูลสต๊อกสินค้า - ร้านมะยอดผัก',
  description: 'ระบบกรอกข้อมูลสต๊อกสินค้าสำหรับร้านมะยอดผัก',
};

// Root Layout Component ของ Next.js App Router
// จะเป็นโครงสร้างหลักที่ครอบคลุมทุกหน้าในแอปพลิเคชันของคุณ
export default function RootLayout({
  children, // children คือเนื้อหาของหน้า Page Component ที่จะถูก Render ภายใน Layout นี้
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th"> {/* กำหนดภาษาของ HTML เป็นภาษาไทย */}
      {/* กำหนด className ของ body โดยใช้ inter.className เพื่อให้ Font Inter ถูกนำไปใช้กับทั้ง body
        และเพิ่ม Tailwind CSS classes สำหรับการจัด Layout ทั่วไป
        - min-h-screen: ความสูงขั้นต่ำเต็มหน้าจอ
        - bg-gray-100: สีพื้นหลังเทาอ่อน
        - p-4: padding 4 หน่วยรอบๆ
        - flex items-center justify-center: จัดเนื้อหาตรงกลาง (สำหรับหน้าหลัก)
      */}
      <body className={`${inter.className} min-h-screen bg-gray-100 p-4 flex items-center justify-center`}>
        {children} {/* แสดงเนื้อหาของหน้า Page Component */}
      </body>
    </html>
  );
}
