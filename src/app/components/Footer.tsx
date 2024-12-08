import React from 'react';
import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      {/* Main Container */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
        {/* Exclusive Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-semibold text-lg">Exclusive</h2>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded text-black"
            />
            <button className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700 transition-all duration-300">
              Submit
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-semibold text-lg">Support</h2>
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-semibold text-lg">Account</h2>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        {/* Quick Link Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-semibold text-lg">Quick Link</h2>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        {/* Download App Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-semibold text-lg">Download App</h2>
          <p>Save $3 with App New User Only</p>
          
          {/* QR Code and Store Links */}
          <div className="flex flex-col items-center">
            <img
              src="..//QrCode.png" // Replace with your actual QR code image path
              alt="QR Code"
              className="w-24 h-24 mb-4" // Adjust the size
            />
            <div className="flex gap-4">
              <img
                src="..//GooglePlay.png"
                alt="Google Play"
                className="w-16 h-16 bg-white rounded"
              />
              <img
                src="..//AppStore.png"
                alt="App Store"
                className="w-16 h-16 bg-white rounded"
              />
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-2">
            <CiFacebook className="text-white text-2xl hover:text-blue-500 cursor-pointer" />
            <CiTwitter className="text-white text-2xl hover:text-blue-500 cursor-pointer" />
            <CiInstagram className="text-white text-2xl hover:text-blue-500 cursor-pointer" />
            <CiLinkedin className="text-white text-2xl hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto text-center mt-8">
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
