"use client";

import { StaticImageData } from "next/image";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGalleryComponent = (props: any) => {
  return (
    <div className="md:border-4 border-2 border-black shadow-lg w-2/3">
      <ImageGallery {...props} showThumbnails={false} autoPlay={true} />
    </div>
  );
};

export default ImageGalleryComponent;
