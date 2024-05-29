'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import React from 'react'

const resumes = [
  {
    id: 1,
    name: "Philip M. Omenge",
    jobTitle: "Lead Expert",
    description: "PhD, MEIK, MEnPAx, MIAIA",
    "src": "/profile.png", 
    email:"",
    phone:"",
    expertise:"",
    address:"",
    qualifications:"",
    specialization:"",
    professional:"",
    work:"",
    projects:"",
    research:"",
    publications:"",
    phd:"",
    membership:""

  },
  {
    id: 2,
    name: "James M. Mong’oni",
    jobTitle: "OSH EXPERT",
    description: "BSc.MSc. MBA, MEIK, MEBK, MIEK",
    "src": "/profile.png", 
    email:"",
    expertise:"",
    phone:"",
    address:"",
    qualifications:"",
    specialization:"",
    professional:"",
    work:"",
    projects:"",
    research:"",
    publications:"",
    phd:"",
    membership:""
  },
  ,
  {
    id: 3,
    name: "Dr. Justus B. Aungo.",
    jobTitle: "Web Developer",
    description: "PHD",
    "src": "/profile.png", 
    email:"",
    expertise:"",
    phone:"",
    address:"",
    qualifications:"",
    specialization:"",
    professional:"",
    work:"",
    projects:"",
    research:"",
    publications:"",
    phd:"",
    membership:""
  },
  ,
  {
    id: 4,
    name: "Jonathan K. Yeri.",
    jobTitle: "LEAD EXPERT",
    description: "BSc. Eng., MEIK, MEBK.",
    "src": "/profile.png", 
    email:"",
    expertise:"",
    phone:"",
    address:"",
    qualifications:"",
    specialization:"",
    professional:"",
    work:"",
    projects:"",
    research:"",
    publications:"",
    phd:"",
    membership:""
  },
  ,
  {
    id: 5,
    name: "Philip O. Manua.",
    jobTitle: "GIS EXPERT",
    description: "BSc. Eng., MIEK, MEBK, MISK.",
    "src": "/profile.png", 
    email:"",
    expertise:"",
    phone:"",
    address:"",
    qualifications:"",
    specialization:"",
    professional:"",
    work:"",
    projects:"",
    research:"",
    publications:"",
    phd:"",
    membership:""
  },
  ,
  {
    id: 6,
    name: "Richard M. Kerongo",
    jobTitle: "ECOLOGIST",
    description: "Bsc. MSc",
    "src": "/profile.png", 
    email:"",
    expertise:"",
    phone:"",
    address:"",
    qualifications:"",
    specialization:"",
    professional:"",
    work:"",
    projects:"",
    research:"",
    publications:"",
    phd:"",
    membership:""
  },
  ,
  {
    id: 7,
    name: "Christopher Nyongesa Wanyama ",
    jobTitle: "STAKEHOLDER MANAGEMENT EXPERT",
    description: "BSc",
    "src": "/profile.png", 
    email:"",
    expertise:"",
    phone:"",
    address:"",
    qualifications:"",
    specialization:"",
    professional:"",
    work:"",
    projects:"",
    research:"",
    publications:"",
    phd:"",
    membership:""
  },
  {
    id: 8,
    name: "Morembe Morangi",
    jobTitle: "MARINE ENGINEER",
    description: "BSc",
    "src": "/profile.png", 
    email:"",
    expertise:"",
    phone:"",
    address:"",
    qualifications:"",
    specialization:"",
    professional:"",
    work:"",
    projects:"",
    research:"",
    publications:"",
    phd:"",
    membership:""
  },
  {
    id: 9,
    name: "Fabian N. Mongare",
    jobTitle: "MARINE ECOLOGIST",
    description: "BSc",
    "src": "/fabian_img.jpg", 
    email:"",
    expertise:"",
    phone:"",
    address:"",
    qualifications:"",
    specialization:"",
    professional:"",
    work:"",
    projects:"",
    research:"",
    publications:"",
    phd:"",
    membership:""
  },
  ,
  {
    id: 10,
    name: "Ernest H. Alunyu",
    jobTitle: "Office Admin",
    
    "src": "/profile.png", 
    email:"",
    expertise:"",
    phone:"",
    address:"",
    qualifications:"",
    specialization:"",
    professional:"",
    work:"",
    projects:"",
    research:"",
    publications:"",
    phd:"",
    membership:""
  },
  // Add more resumes as needed
];

const page = () => {
  return (
    <MaxWidthWrapper>
    <Carousel className="w-full h-full md:h-full items-center bg-slate-300 rounded-lg">
      <CarouselContent>
        {resumes.map((resume) => (
          <CarouselItem key={resume?.id}>
            {resume && (
            <div className="p-7">
              <div className="grid grid-cols-1">
                  <div className=" top-3 left-8 w-20 h-20 rounded-lg overflow-hidden ">
                  <Image src={resume.src} alt="Projects" width={500}  height={100} className="rounded-lg" onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {const target = e.target as HTMLImageElement;target.onerror = null; target.src = '/profile.png';}}/>
                  </div>
                  <div className="pl-[1px]">
                    <h2 className="text-lg font-semibold">{resume.name}</h2>
                    <p className="text-sm text-gray-500">{resume.description}</p>
                    <p className="text-sm text-gray-600 ">{resume.jobTitle}</p>
                  </div>
                  
                  </div>
                   <br />
                  <div className="">
                    <h2>Corporate Email</h2>
                    <p className="text-sm text-gray-500">{resume.email}</p>
                    <h2>Phone Number</h2>
                    <p className="text-sm text-gray-600 ">{resume.phone}</p>
                    <h2>Expertise</h2>
                    <p className="text-sm text-gray-600 ">{resume.expertise}</p>
                    <h2>Address</h2>
                    <p className="text-sm text-gray-600 ">{resume.address}</p>
                  </div><br />
                  <div className="">
                    <h1>ACADEMIC  QUALIFICATIONS</h1>
                    <p className="text-sm text-gray-500">{resume.qualifications}</p>
                    
                  </div>
                  <br />
                  <div className="">
                    <h1>FIELD OF SPECIALIZATION</h1>
                    <p className="text-sm text-gray-500">{resume.specialization}</p>
                    
                  </div>
                  <br />
                  <div className="">
                    <h1>PROFESSIONAL QUALIFICATIONS</h1>
                    <p className="text-sm text-gray-500">{resume.professional}</p>
                    
                  </div>
                  <br />
                  <div className="">
                    <h1>WORK EXPERIENCE</h1>
                    <p className="text-sm text-gray-500">{resume.work}</p>
                    
                  </div>
                  <br />
                  <div className="">
                    <h1>KEY PROJECTS</h1>
                    <p className="text-sm text-gray-500">{resume.projects}</p>
                    
                  </div>
                  <br />
                  <div className="">
                    <h1>RESEARCH INTEREST</h1>
                    <p className="text-sm text-gray-500">{resume.research}</p>
                    
                  </div>
                  <br />
                  <div className="">
                    <h1>LIST OF PUBLICATIONS</h1>
                    <p className="text-sm text-gray-500">{resume.publications}</p>
                    
                  </div>
                  <br />
                  <div className="">
                    <h1>POSTGRADUATE SUPERVISION</h1>
                    <p className="text-sm text-gray-500">{resume.phd}</p>
                    
                  </div>
                  <br />
                  <div className="">
                    <h1>MEMBERSHIP</h1>
                    <p className="text-sm text-gray-500">{resume.membership}</p>
                    
                  </div>

                  

                
            </div>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </MaxWidthWrapper>
  )
}

export default page