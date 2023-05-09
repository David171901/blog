import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import normalImage from "../../public/images/profile/profile.png";
import hoverImage from "../../public/images/profile/hoverProfile.png";
import {motion} from "framer-motion"

const Avatar = ({className}) => {

  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  return (
      <Image
        src={isHovering ? hoverImage : normalImage}
        alt="Texto alternativo de la imagen"
        className={`${className} bg-light text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-dark dark:border-light dark:bg-primary`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
  )
}

export default Avatar