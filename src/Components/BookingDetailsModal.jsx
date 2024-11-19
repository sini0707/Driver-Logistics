import React from 'react';
import { Download, FileText } from 'lucide-react';

const BookingConfirmationModal = ({ pickupDetails, onClose }) => {
  const handleDownload = () => {
    // Combine pickup and delivery details into a formatted string
    const details = `
      Booking Confirmation:
      ---------------------
      Pickup Details:
      - Pickup Date: ${pickupDetails?.pickupDate || 'N/A'}
      - Pickup Time: ${pickupDetails?.pickupTime || 'N/A'}
      - Contact Name: ${pickupDetails?.name || 'N/A'}
      - Contact Number: ${pickupDetails?.contactNumber || 'N/A'}
      - Email Address: ${pickupDetails?.emailAddress || 'N/A'}
      
      Delivery Details:
      - Delivery Date: ${pickupDetails?.selectDate || 'N/A'}
      - Delivery Time: ${pickupDetails?.selectTime || 'N/A'}
      - Contact Name: ${pickupDetails?.DeliveryContactName || 'N/A'}
      - Contact Number: ${pickupDetails?.DeliveryContactNumber || 'N/A'}
      - Address: ${pickupDetails?.address || 'N/A'}
      - Pincode: ${pickupDetails?.pincode || 'N/A'}
      - City: ${pickupDetails?.city || 'N/A'}
    `;

    // Create a Blob for the details
    const blob = new Blob([details], { type: 'text/plain' });

    // Create a temporary download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'BookingDetails.txt'; // Set the file name
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="p-6">
          {/* Header */}
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Your Booking is Confirmed, Thank You
          </h2>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pickup Details */}
            <div className="space-y-3">
              <p className="text-gray-700">Pickup Date: {pickupDetails?.pickupDate}</p>
              <p className="text-gray-700">Pickup Time: {pickupDetails?.pickupTime}</p>
              <p className="text-gray-700">Contact Name: {pickupDetails?.name}</p>
              <p className="text-gray-700">Contact Number: {pickupDetails?.contactNumber}</p>
              <p className="text-gray-700">Email Address: {pickupDetails?.emailAddress}</p>
            </div>
          </div>

          {/* Delivery Details Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Delivery Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <p className="text-gray-700">Delivery Date: {pickupDetails?.selectDate}</p>
                <p className="text-gray-700">Delivery Time: {pickupDetails?.selectTime}</p>
                <p className="text-gray-700">Contact Name: {pickupDetails?.DeliveryContactName}</p>
                <p className="text-gray-700">Contact Number: {pickupDetails?.DeliveryContactNumber}</p>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">Address: {pickupDetails?.address}</p>
                <p className="text-gray-700">Pincode: {pickupDetails?.pincode}</p>
                <p className="text-gray-700">City: {pickupDetails?.city}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
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

export default BookingConfirmationModal;
