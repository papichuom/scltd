

import React from 'react';


import { Card,} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image";

const Projects = [
  {
    "id": 1,
    "src": "/mdpd.png",
    "title":"Mombasa Port Development project phase III (MPDP)",
    "location":"Mombasa Port",
    "detail": "Environmental and social impact assessment "
    
  },
  {
    "id": 2,
    "src": "/ADC.png",
    "title":"Proposed irrigation scheme at agricultural development corporation (ADC)",
    "location":"Galana Kulalu Ranch ",
    "detail": "Prefeasibility and feasibility studies,project design and overall project management."
    
  },
  {
    "id": 3,
    "src": "/GTC.png",
    "title":"Proposed Mixed Farming project by Garder general trading company ltd",
    "location":"Matolani Kilifi",
    "detail": "Environmental and social impact assessment. "
    
  },
  {
    "id": 4,
    "src": "/mdpd.png",
    "title":"Mombasa Port Development project phase II (MPDP)",
    "location":"Mombasa Port",
    "detail": "Monitoring implementation of Environmental management & Monitoring plan (EMMP). "
    
  },
  {
    "id": 5,
    "src": "/LAPSET.png",
    "title":"Lamu Port-south sudan-Ethiopia (LAPSSET).",
    "location":"Lamu Port",
    "detail": "Impacts of large-scale infastructure development on coastal biodiversity."
    
  },
  {
    "id": 6,
    "src": "/TVT.png",
    "title":"Feasibility study on development of taveta inland container Depot.",
    "location":"Taveta",
    "detail": "Assessment and preparation of environmental consideration for inland container depots."
    
  },
  {
    "id": 7,
    "src": "/mdpd.png",
    "title":"Mombasa Port Development project phase I (MPDP)",
    "location":"Mombasa Port",
    "detail": "Monitoring implementation of Environmental management & Monitoring plan (EMMP). "
  },
  {
    "id": 8,
    "src": "/GSR.png",
    "title":"Intergrated Green Ship Recycling plant",
    "location":"Mombasa Port",
    "detail": "Environmental and social impact assessment "
    
  },
  {
    "id": 9,
    "src": "/SPD.png",
    "title":"Shimoni Port Development.",
    "location":"Shimoni Port",
    "detail": "Preparation of a Preliminary Environmental and Social Impact Assessment "
    
  },
  {
    "id": 10,
    "src": "/ODM.png",
    "title":"offshore Disposal Site for Dredged Material.",
    "location":"Mombasa Port",
    "detail": "Environmental and Social Audit Study "
    
  },
  {
    "id": 11,
    "src": "/SAI.png",
    "title":"Swami Agri Irrigation Project.",
    "location":"senegal"
    
    
  },
  {
    "id": 12,
    "src": "/KQ.png",
    "title":"Proposed Kavee Quarries.",
    "location":"kavee quarries ltd",
    "detail": "Environmental and Social Impact Assessment "
    
  },
  {
    "id": 13,
    "src": "/QC.png",
    "title":"Proposed Quarry and Crusher.",
    "location":"Kokotoni, Kaliango’mbe",
    "detail": "Environmental and Social Impact Assessment "
    
  },
  {
    "id": 14,
    "src": "/MCF.png",
    "title":"Proposed Cement Factory.",
    "location":" vipingo (mombasa cement ltd)",
    "detail": "Environmental and Social Impact Assessment "
    
  },
  {
    "id": 15,
    "src": "/FLATS.png",
    "title":" Proposed construction of 224 flats-Akshardham Apartments Limited.",
    "location":"Mshomoroni mombasa",
    "detail": "Environmental and Social Impact Assessment "
    
  },
  {
    "id": 16,
    "src": "/MCFA.png",
    "title":"Proposed Cement Factory.",
    "location":"Athi River Machakos (mombasa cement ltd)",
    "detail": "Environmental and Social Impact Assessment "
    
  },

  {
    "id": 17,
    "src": "/LT.png",
    "title":" Assessment for the Proposed construction of Likoni Towers.",
    "location":" likoni,mombasa",
    "detail": "Environmental and Social Impact Assessment "
    
  },
  {
    "id": 18,
    "src": "/JH.png",
    "title":" Proposed residential Flats (Jocham Hospital).",
    "location":"Nyali",
    "detail": "Environmental and Social Impact Assessment "
    
  },
  {
    "id": 19,
    "src": "/SM.png",
    "title":" Proposed Shopping Mall.",
    "location":"Ideal Locations Ltd ",
    "detail": "Environmental and Social Impact Assessment "
    
  },
  {
    "id": 20,
    "src": "/OPM.png",
    "title":" Office of the prime Minister-Government Training Institute.",
    "location":"Mombasa",
    "detail": "Environmental and Social Impact Assessment "
    
  },
  {
    "id": 21,
    "src": "/MEC.png",
    "title":" Mtwapa Educational Complex.",
    "location":"Mtwapa",
    "detail": "Environmental and Social Impact Assessment "
    
  },
  {
    "id": 22,
    "src": "/SC.png",
    "title":" Proposed Establishment of Secondary School.",
    "location":"Mlolongo",
    "detail": "Environmental and Social Impact Assessment "
    
  },
  {
    "id": 23,
    "src": "/MLC.png",
    "title":" Proposed Construction of Malindi Law Courts.",
    "location":"Malindi",
    "detail": "Environmental and Social Impact Assessment "
    
  },
  {
    "id": 24,
    "src": "/JPIP.png",
    "title":"Judicial Performance Improvement Project (JPIP). ",
    "location":"Kangema",
    "detail": "Environmental and Social Impact Assessment & Environmental and Social Management Plan "
    
  },
  {
    "id": 25,
    "src": "/JH.png",
    "title":"Jocham Hopital Limited. ",
    "location":"Mombasa",
    "detail": "Environmental audit "
    
  },
  {
    "id": 26,
    "src": "/KCDP.png",
    "title":"Kenya Coastal Development Project (KCDP). ",
    "location":"Coast Region",
    "detail": "Environmental and social audit  "
    
  },
  {
    "id": 27,
    "src": "/KEMSFED.png",
    "title":"Kenya Marine Fisheries Socio-Economic Development Project (KEMFSED). ",
    "location":"Mombasa",
    "detail": "Mainstreaming of Environmental and Social Safeguards in the CMA Guidelines, Standard Operating Procedures (SoPs). "
    
  },
  {
    "id": 28,
    "src": "/KRB.png",
    "title":"Kenya Roads Board (KRB) Road Maintenance ",
    "location":"Coast Region",
    "detail": "provision of technical, financial and performance audit "
    
  },
  {
    "id": 29,
    "src": "/MARINA.png",
    "title":"Proposed Construction of a Floating Jetty. ",
    "location":"English Point marina -Mombasa",
    "detail": "Environmental and Social Impact Assessment "
    
  },
  {
    "id": 30,
    "src": "/SF.png",
    "title":"Proposed Solar Farm -Standard Rolling Mills Limited,. ",
    "location":"Kokotoni",
    "detail": "Environmental and Social Impact Assessment "
    
  }
  
]

export function ProjectsDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Projects?.map((item) => (
          
          <CarouselItem key={item.id}> {/* Adding key prop */}
          <Card>
            {/* Using Next.js Image component for image optimization */}
            <Image src={item.src} alt="Projects" width={500} height={100} className="rounded-lg" />
            <span className='text-blue-800 font-bold'>{item.title}</span>
            <span className="text-orange-700"><br />
              <span>{item.location}</span><br />
            </span>
            <span className="text-black font-semibold">{item.detail}</span>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}