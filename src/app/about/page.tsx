import React from 'react'

import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className="grid pr-[10px] grid-cols-1  md:grid-cols-2 gap-[30px]">
        <Image src='/about1_img.png '  width={1024} height={863} alt='about'/>
        
        {/* Accordion section */}
        
        <Image src='/about2_img.png '  width={1024} height={863} alt='about'/>
        
      </div>


    </div>
  )
}

export default page