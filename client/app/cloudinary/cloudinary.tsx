"use client";
import React, { useState } from "react";
import axios from "axios";

const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "qncgi1tt");

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/dubduh12x/image/upload`,
          formData
        );
        setImage(response.data.secure_url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div>
      <h2>Image Uploader</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded Image" />}
    </div>
  );
};

export default ImageUploader;
