// components/ui/Modal.tsx
import React from 'react';

// กำหนด Type สำหรับ Props ของ Modal Component
interface ModalProps {
  isOpen: boolean; // สถานะว่า Modal เปิดอยู่หรือไม่
  message: string; // ข้อความที่จะแสดงใน Modal
  onClose: () => void; // Function ที่จะถูกเรียกเมื่อ Modal ถูกปิด
}

// Modal Functional Component
const Modal: React.FC<ModalProps> = ({ isOpen, message, onClose }) => {
  // ถ้า isOpen เป็น false, ไม่ต้อง Render Modal
  if (!isOpen) return null;

  return (
    // Overlay สำหรับ Modal: ครอบคลุมทั้งหน้าจอ, พื้นหลังทึบแสงเล็กน้อย, จัดเนื้อหาตรงกลาง
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      {/* กล่อง Modal: พื้นหลังขาว, ขอบมน, เงา, padding, ขนาดสูงสุด, จัดข้อความตรงกลาง */}
      <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full text-center">
        {/* ข้อความใน Modal */}
        <p className="text-gray-800 text-lg mb-4">{message}</p>
        {/* ปุ่ม "ตกลง" สำหรับปิด Modal */}
        <button
          onClick={onClose} // เมื่อคลิก จะเรียกฟังก์ชัน onClose ที่ส่งมาจาก Parent Component
          className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          ตกลง
        </button>
      </div>
    </div>
  );
};

export default Modal;
