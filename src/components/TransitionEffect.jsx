import React from 'react'
import {motion} from "framer-motion"

const TransitionEffect = () => {
  return (
    <>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#ECECEC] dark:bg-primary'
        initial={{x:"100%",width:"100%"}}
        animate={{x:"0%", width:"0%"}}
        exit={{x:["0%", "100%"], width:["0%", "100%"]}}
        transition={{duration:0.8, ease:"easeInOut"}}

         />
         <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#E6E6E6] dark:bg-[#444444]'
        initial={{x:"100%",width:"100%"}}
        animate={{x:"0%", width:"0%"}}
        transition={{delay:0.2, duration:0.8, ease:"easeInOut"}}
         />
         <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#D3D3D3] dark:bg-dark'
        initial={{x:"100%",width:"100%"}}
        animate={{x:"0%", width:"0%"}}
        transition={{delay:0.4,  duration:0.8, ease:"easeInOut"}}
         />
    </>
  )
}

export default TransitionEffect