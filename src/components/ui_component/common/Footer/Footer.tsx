import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutubeSquare,
  FaTiktok,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">FinX Shop</h1>
          <p className="text-sm text-gray-400">
            Welcome to FinX e-commerce store! We offer a wide range of
            high-quality products at the best prices. Shop with confidence and
            enjoy fast delivery.
          </p>
          <p className="text-sm text-gray-400">Head Office: Mirpur-2, Dhaka.</p>
          <p className="text-sm text-gray-400">Email: findx.info@gmail.com</p>
          <p className="text-sm text-gray-400">© FindX Shop bd.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <div className="grid grid-cols-2">
            <ul className="space-y-2">
              <li>
                <Link href="" className="hover:underline">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Online Delivery
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Refund and Return Policy
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <Link href="" className="hover:underline">
                  EMI Terms
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-5 border rounded-full px-10 py-2 w-60 hover:border-pink-500 cursor-pointer">
              <div>
                <IoCallOutline />
              </div>
              <div className="border-l hover:border-l-pink-500 pl-4">
                <p>9AM - 8PM</p>
                <h3>16793</h3>
              </div>
            </div>
            <div className="flex items-center gap-5 border rounded-full px-10 py-2 w-60 hover:border-pink-500 cursor-pointer">
              <div>
                <CiLocationOn />
              </div>
              <div className="border-l hover:border-l-pink-500 pl-4">
                <p>Store Locator</p>
                <h3>Find Our Store</h3>
              </div>
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <Link href="3" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl"></FaFacebook>
            </Link>
            <Link href="3" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl"></FaInstagram>
            </Link>
            <Link href="3" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl"></FaLinkedin>
            </Link>
            <Link href="3" target="_blank" rel="noopener noreferrer">
              <FaYoutubeSquare className="text-2xl"></FaYoutubeSquare>
            </Link>
            <Link href="3" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-2xl"></FaTiktok>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
