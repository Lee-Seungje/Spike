"use client";

import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { useState, useEffect } from "react";

const Test = () => {
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState([]);

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);
    return new Blob([ab], { type: "image/jpeg" });
  };

  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const imageBlob = dataURItoBlob(imageSrc);
    setImage(imageBlob);
  }, [webcamRef]);

  const getImageUrl = () => URL.createObjectURL(image);

  useEffect(() => {
    if (image) setImgUrl((prev) => [...prev, getImageUrl()]);
  }, [image]);

  return (
    <div className="relative flex flex-col items-center">
      <div className="flex">
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        {imgUrl.map((image, i) => (
          <img
            className="grayscale"
            width={String(400 + i * 150) + "px"}
            src={image}
            key={image}
          />
        ))}
      </div>
      <button
        className="absolute text-xl duration-200 ease-in-out bg-blue-500 hover:bg-blue-600 w-custom h-14 bottom-28 rounded-xl"
        onClick={capture}
      >
        사진 찍기
      </button>
    </div>
  );
};

export default Test;
