
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MdAccessTime, MdEmail, MdLocationOn, MdPhone } from "react-icons/md"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Contact Us</Button>
      </SheetTrigger>
      <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-center">Get In Touch With Us</SheetTitle>
        <SheetDescription className="items-center m-4">
          <div className="flex items-center">
            <MdEmail className="mr-2" />
            <strong>Email:</strong> info@example.com
          </div>
          <div className="flex items-center">
            <MdPhone className="mr-2" />
            <strong>Phone:</strong> +25477777777
          </div>
          <div className="flex-col items-center mt-4">
            <p>Office Hours</p>
            <p><strong>Monday-Friday:</strong> 9:00 AM - 5:00 PM</p>
            <p><strong>Saturday: </strong>9:00 AM - 2:00 PM</p>
          </div>
          <div className="flex-col items-center mt-4">
            <h2>Location</h2>
            <strong>Austin House, 1st floor Room no.7,Moi avenue, Mombasa Kenya</strong>
          </div>
        </SheetDescription>
      </SheetHeader>
      <SheetFooter>
      <div className="mt-20 w-full rounded-lg">
                {/* Replace the iframe with your provided iframe code */}
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7948535071887!2d39.664585310759215!3d-4.062197295894507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18401320d31815ed%3A0xd55464186204883!2sAustin%20House!5e0!3m2!1sen!2ske!4v1704977773912!5m2!1sen!2ske"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
      </SheetFooter>

      <p className="text-sm pt-8 pl-5">Developed by mfnyakundi © 2024</p>
    </SheetContent>
    </Sheet>
  )
}
