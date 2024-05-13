"use client";
import React, { useState } from "react";
import axios from "axios";

const Page = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
      console.log(images);
    } catch (error) {
      console.error("Images fetching Error");
    }
  };

  return (
    <>
      <button
        onClick={getImages}
        className="px-5 py-2 bg-green-400 text-white rounded-md mb-4 ml-4 "
      >
        Get Images
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((elem, i) => (
          <img
            key={i}
            src={elem.download_url}
            alt={`Image ${i}`}
            className="rounded-lg"
          />
        ))}
      </div>
    </>
  );
};

export default Page;
