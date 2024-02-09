"use client";

import { StaticImageData } from "next/image";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGalleryComponent = (props: any) => {
  return (
    <div className="border-4 border-black">
      <ImageGallery {...props} showThumbnails={false} autoPlay={true} />
    </div>
  );
};

export default ImageGalleryComponent;
