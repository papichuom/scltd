import React from 'react'

import Image from 'next/image'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const page = () => {
  return (
    <MaxWidthWrapper className='bg-slate-100 rounded-lg'>
      <div className="grid pr-[10px] grid-cols-1  md:grid-cols-2 gap-[30px]">
      <div>
          
          <p className='my-4'>
            Sigtuna centre for research, consultancy and innovation offers various services to government, corporate, non-governmental organisations and individuals in the area of environment, natural resources, geology, agriculture, infastructure development and community development. we provide a wide range of proffessional and technical solutions on environment, sustainable development and energy
          </p>
          <h2 className='text-5xl font-bold  my-3 text-blue-700'>Mission</h2>
          <p>
            To offer our clients focused, quality, holistic and sustainable
            solutions that promote, safeguard and enhance the quality of
            Environment for all in line with global standards and
            declarations and as per Environmental Management and coordination
            Act of 1999 and other related regulations.
          </p>
          
        </div>
        
        <div>
          <h2 className='text-5xl font-bold  my-3 text-orange-700'>Our Core Values</h2>
          <p>
            Our institution values the virtues of professionalism, compliance
            to the rule of law, honesty, transparency, integrity, respect to
            the culture and diversity. We ensure that clienteles are treated
            with dignity and integrity at all times. Quality is a pillar in
            all our operations and we are highly committed to keep secret of
            all confidential information regarding its clients and cannot
            disclose under instruction of the client. We work with proven
            methodologies, frameworks and approaches that are adapted to fit
            clients’ specific requirements in line with relevant policies and
            legislation at the same time working alongside them to understand
            their organization and agenda towards sustainable development.
          </p>
          <h2 className='text-5xl font-bold  my-3 text-green-600'>Vision</h2>
          <p className='mb-6' >
          To be a world class institution in the area of Environment, natural
resources, agriculture, infrastructure development and community
development that is geared towards promoting, safeguarding and
enhancing the quality of environment for all.
          </p>
        </div>
        
        {/* Accordion section */}
        

        
      </div>


    </MaxWidthWrapper>
  )
}

export default page