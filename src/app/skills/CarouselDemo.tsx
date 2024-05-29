import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const careerData =[
  {
    name: 'John Doe',
    roleDuringInternship: 'Software Engineering Intern',
    currentRole: 'Software Engineer at Company X',
    duration: '3 months'
  },
  {
    name: 'Jane Smith',
    roleDuringInternship: 'Marketing Intern',
    currentRole: 'Marketing Specialist at Company Y',
    duration: '1 year'
  },
]

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {careerData.map((career, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold">{career.name}</h2>
                  <p><strong>Role During Internship:</strong> {career.roleDuringInternship}</p>
                  <p><strong>Current Role:</strong> {career.currentRole}</p>
                  <p><strong>Duration:</strong> {career.duration}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
