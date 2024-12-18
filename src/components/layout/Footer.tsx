import React from "react";
import { Building2, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-blue-900 text-white">
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8" />
            <span className="font-bold text-xl">Digital Bank</span>
          </div>
          <p className="mt-2 text-sm">Innovative banking services</p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+1-123-456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>info@digitalbank.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>123 Main St, Cityville</span>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Banking Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Banking Services</h3>
          <ul className="space-y-2">
            <li>Bank Accounts</li>
            <li>Credit Cards</li>
            <li>Loans</li>
            <li>Online Banking</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 pt-8 border-t border-blue-800">
        <p className="text-center text-sm">
          © 2024 Digital Bank. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
