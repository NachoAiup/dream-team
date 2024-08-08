import React, { useEffect, useState } from "react";
import Image from "next/image";

interface PropTypes {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export const ImageWithFallback = (props: PropTypes) => {
  const { src, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      alt={alt}
      src={imgSrc}
      onError={() => {
        setImgSrc("/blur.jpg");
      }}
    />
  );
};
