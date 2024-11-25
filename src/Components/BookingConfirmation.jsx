import React from 'react';


import { Download } from 'lucide-react';
import {  FileText } from "lucide-react";

const BookingConfirmation = ({ pickupDetails, onClose }) => {
    const handleDownload = () => {
        const details = `
          Booking Confirmation:
          ---------------------
          Pickup Details:
          - Pickup Date: ${pickupDetails?.pickupDate || "N/A"}
          - Pickup Time: ${pickupDetails?.pickupTime || "N/A"}
          - Contact Name: ${pickupDetails?.name || "N/A"}
          - Contact Number: ${pickupDetails?.contactNumber || "N/A"}
          - Email Address: ${pickupDetails?.emailAddress || "N/A"}
          
          Delivery Details:
          - Delivery Date: ${pickupDetails?.selectDate || "N/A"}
          - Delivery Time: ${pickupDetails?.selectTime || "N/A"}
          - Contact Name: ${pickupDetails?.DeliveryContactName || "N/A"}
          - Contact Number: ${pickupDetails?.DeliveryContactNumber || "N/A"}
          - Address: ${pickupDetails?.address || "N/A"}
          - Pincode: ${pickupDetails?.pincode || "N/A"}
          - City: ${pickupDetails?.city || "N/A"}
        `;
    
        const blob = new Blob([details], { type: "text/plain" });
    
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "BookingDetails.txt";
        link.click();
    
        URL.revokeObjectURL(link.href);
      };
  return (
    
 

  <div className="fixed inset-0 bg-gray-100 flex items-center justify-center p-4">
  <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
    <div className="p-4">
     

     
      <div className="text-center mb-6">
       
        <h2 className="text-xl font-semibold mb-1">Your Booking is Confirmed. Thank you!</h2>
        <p className="text-sm text-gray-600">Order confirmation details sent to Mobile and email</p>
      </div>

      
      <div className="space-y-2 mb-6">
        <div className="flex border-b py-2">
          <div className="w-1/3 text-gray-600">Booked on</div>
          <div className="w-2/3">{pickupDetails?.pickupDate}</div>
        </div>
        <div className="flex border-b py-2">
          <div className="w-1/3 text-gray-600">Booked Time</div>
          <div className="w-2/3">{pickupDetails?.pickupTime}</div>
        </div>
        <div className="flex border-b py-2">
          <div className="w-1/3 text-gray-600">Contact number</div>
          <div className="w-2/3">{pickupDetails?.contactNumber}</div>
        </div>
        <div className="flex border-b py-2">
          <div className="w-1/3 text-gray-600">From</div>
          <div className="w-2/3">{pickupDetails?.place}</div>
        </div>
        <div className="flex border-b py-2">
          <div className="w-1/3 text-gray-600">To</div>
          <div className="w-2/3">{pickupDetails?.city}</div>
        </div>
        <div className="flex border-b py-2">
          <div className="w-1/3 text-gray-600">Name</div>
          <div className="w-2/3">{pickupDetails?.name}</div>
        </div>
        {/* <div className="flex border-b py-2">
          <div className="w-1/3 text-gray-600">Product Category</div>
          <div className="w-2/3">{}</div>
        </div> */}
        {/* <div className="flex border-b py-2">
          <div className="w-1/3 text-gray-600">Amount Paid</div>
          <div className="w-2/3 text-green-600">₹2967.00</div>
        </div> */}
        <div className="flex border-b py-2">
          <div className="w-1/3 text-gray-600">EST Delivery Date</div>
          <div className="w-2/3">{pickupDetails?.selectDate}</div>
        </div>
      </div>

     
      <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
           <button
            onClick={onClose}
             className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
         >
            <FileText className="w-5 h-5" />
           View Order Confirmation
           </button>
          <button
            onClick={handleDownload}
             className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
           >
             <Download className="w-5 h-5" />
             Download Receipt
         </button>
        </div>
    </div>
  </div>
</div>
  );
};

export default BookingConfirmation;