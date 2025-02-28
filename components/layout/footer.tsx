import { Mail, MapPin, Phone } from "lucide-react";
import Facebook from "@/assets/facebook";
import Instagram from "@/assets/instagram";
import Linkedin from "@/assets/linkedin";
import Logo from "@/assets/logo";
import X from "@/assets/x";

export default function Footer() {
  return (
    <div className="bg-[#1A1B1E]">
      <div className="container py-20">
        <div className="flex flex-col md:flex-row gap-20 justify-between mb-[160px]">
          <div className="flex flex-col">
            <Logo />
            <h1 className="text-[#606060] mt-3">Dokan FrontEnd Test</h1>
            <div className="flex gap-2 mt-[28px]">
              <div className="p-2">
                <Linkedin />
              </div>
              <div className="p-2">
                <Instagram />
              </div>
              <div className="p-2">
                <Facebook />
              </div>
              <div className="p-2">
                <X />
              </div>
            </div>
          </div>

          <div className="flex gap-[60px] md:gap-[120px] flex-wrap md:flex-nowrap">
            <ul className="text-primary-foreground flex flex-col gap-3 text-xl">
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
            <ul className="text-primary-foreground flex flex-col gap-3 text-xl">
              <li>About Us</li>
              <li>Integrations</li>
              <li>FAQs</li>
            </ul>
            <ul className="text-primary-foreground flex flex-col gap-3 text-xl">
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Terms & Policies</li>
            </ul>
            <div className="text-primary-foreground flex flex-col gap-3 text-xl">
              <h2>Our Contact</h2>

              <p className="flex items-center gap-3 text-lg text-[#C2C2C2]">
                <Mail className="!size-4" /> dokan@test.sa
              </p>

              <p className="flex items-center gap-3 text-lg text-[#C2C2C2]">
                <Phone className="!size-4" /> +999-234-324
              </p>

              <p className="flex items-center gap-3 text-lg text-[#C2C2C2]">
                <MapPin className="!size-4" /> Saudi Arabia, Jeddah
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-20 justify-between">
          <p className="text-[#606060]">
            &copy; 2025 Dokan Inc. All rights reserved.
          </p>
          <p className="text-[#606060] flex gap-[20px] md:gap-[45px]">
            <span>Privacy policy</span>
            <span>GDPR</span>
            <span>Terms of service</span>
          </p>
        </div>
      </div>
    </div>
  );
}
