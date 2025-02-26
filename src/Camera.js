import React, { useState } from 'react';
import CameraPhoto from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const ImageCapture = () => {
  const [image, setImage] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(true); // เปิดกล้องตั้งแต่เริ่มต้น
  const [isFileUploadOpen, setIsFileUploadOpen] = useState(false); // เปิดเมนูเลือกไฟล์หรือไม่

  const handleTakePhoto = (dataUri) => {
    setImage(dataUri); // เก็บข้อมูลภาพที่ถ่าย
    setIsCameraOpen(false); // ปิดกล้องหลังจากถ่ายเสร็จ
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // เก็บข้อมูลภาพจากไฟล์
    };
    reader.readAsDataURL(file);
  };

  const handleRetakePhoto = () => {
    setImage(null); // ลบภาพที่ถ่ายก่อนหน้า
    setIsCameraOpen(true); // เปิดกล้องใหม่
  };

  return (
    <div className="image-capture-container">

      {/* เมนูเลือกว่าจะเลือกรูปภาพจากไฟล์ */}
      <div className="menu">
        <button onClick={() => setIsFileUploadOpen(true)}>
          Select Image from File
        </button>
      </div>

      {/* กล้องถ่ายภาพจะเปิดตลอดเวลา */}
      {isCameraOpen && (
        <div>
          <CameraPhoto
            idealResolution={{ width: 320, height: 240 }}
            onTakePhoto={(dataUri) => handleTakePhoto(dataUri)}
          />
        </div>
      )}

      {/* เมนูเลือกรูปภาพจากไฟล์ */}
      {isFileUploadOpen && (
        <div className="file-upload-section" style={{ marginTop: '20px' }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ marginTop: '10px' }}
          />
          <p>Select an image from your device</p>
        </div>
      )}

      {/* แสดงภาพที่ถ่ายหรือเลือกรูปจากไฟล์ */}
      {image && (
        <div className="image-preview">
          <img
            src={image}
            alt="Captured"
            style={{ width: '300px', height: 'auto', marginTop: '20px' }}
          />
          {/* ปุ่มให้ถ่ายใหม่ */}
          <button onClick={handleRetakePhoto} style={{ marginTop: '20px' }}>
            Retake Photo
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCapture;
