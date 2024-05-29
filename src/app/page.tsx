'use client'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import React from 'react';

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div className="">
      <MaxWidthWrapper >
      <section>
        <div className="pb-2 pt-5 lg:grid lg:grid-cols-3 sm:pb-12 lg:gap-x-0 xl:gap-x-8 lg:pt-14 xl:pt-22 lg:pb-32">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className=" my-1 ml-2 mb-4 max-w-fit items-start  space-x-2 overflow-hidden rounded-full border border-zinc-400 bg-black px-4 py-2 shadow-md backdrop-blur transition-all hover:border-green-300 hover:bg-green/50">
                       <p className="text-sm    text-slate-100">
                      Research, Consultancy & Innovation centre
                   </p>
                      </div>

             <Card className="w-[400px] bg-transparent border-transparent mt-5  "> 
              <CardContent className="grid gap-4 h-[300px]">
                   
                <div className="text-center">
                <h1 className="pl-1 font-bold text-7xl my-4">
                <span className="text-blue-500">Linking </span>
                 <span className="text-orange-500">Academia</span><br />
                <span className="text-slate-300 mx-">to</span>
                 <span className="text-green-500"> Industry</span>
                 </h1>
                 </div>
  </CardContent>
</Card>
             <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image src='/mombasa cement.png' alt="user image" width={40} height={40} className="inline-block rounded-full ring-2 ring-transparent"/>
                  <Image src='/kmfri.png' alt="user image" width={40} height={40} className="inline-block rounded-full ring-2 ring-transparent"/>
                  <Image src='/toyo (1).png' alt="user image" width={40} height={40} className="inline-block rounded-full ring-2 ring-transparent"/>
                  <Image src='/csl.png' alt="user image" width={40} height={40} className="inline-block rounded-full ring-2 ring-transparent"/>
                  <Image src='/kpa.png' alt="user image" width={40} height={40} className="inline-block object-cover rounded-full ring-2 ring-transparent"/>
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                    <div className="flex gap-0.5">
                       <Star className="h-4 w-4 text-green-600 fill-blue-600"/>
                       <Star className="h-4 w-4 text-green-600 fill-blue-600"/>
                       <Star className="h-4 w-4 text-green-600 fill-blue-600"/>
                       <Star className="h-4 w-4 text-green-600 fill-blue-600"/>
                       <Star className="h-4 w-4 text-green-600 fill-blue-600"/>
                    </div>
                    <p className="text-white">
                      <span className="font-semibold text-orange-600">400+</span> Happy Clients
                    </p>
                </div>
             </div>
          </div>
          </div>
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
        <Accordion type="single" collapsible className="w-[400px] mt-[30px] text-white rounded-lg text-center ">FAQs
      <AccordionItem value="item-1">
        <AccordionTrigger>Do you offer opportunities for student attachment or internships?</AccordionTrigger>
        <AccordionContent>
        Yes, we provide valuable attachment and internship opportunities for students seeking practical experience.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger> How experienced is your team in handling research projects?</AccordionTrigger>
        <AccordionContent>
        Our team comprises seasoned professionals with extensive experience in academia and industry, ensuring high-quality research outcomes and actionable insights.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can you accommodate urgent research requests?</AccordionTrigger>
        <AccordionContent>
        Yes, we understand the importance of time-sensitive projects and have the flexibility to prioritize urgent requests while maintaining the rigor and accuracy of our research methodologies.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <div className="grid grid-cols-1 mt-6 ">
    
    <Card className="w-[400px]">
      <Image  src="/cons.png" width={400} height={100} alt="card" className="rounded-lg"/>
    </Card>
        </div>
       
    </div>
    </div>
    </section>
        </MaxWidthWrapper>
      

    </div>
  );
}
