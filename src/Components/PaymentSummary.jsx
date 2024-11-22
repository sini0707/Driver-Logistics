import React, { useState,useEffect} from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Card} from '@mui/material';

import BookingConfirmation from './BookingConfirmation'; 

const PaymentSummary = ({ orders, actualWeight }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false); 
  const [subTotal, setSubTotal] = useState(0);
 // Calculate Total Weight
 const totalWeight = orders.reduce((total, order) => {
    return total + order.actualWeight * order.quantity;
  }, 0); // Initial value is 0

   // Dynamic calculation of subtotal based on `orders`
   useEffect(() => {
    const calculateSubTotal = () => {
      const baseFreight = 10.0;
      const docketCharge = 2016.0;
      const stationaryCharge = 50.0;
      const handlingCharge = 500.0;
      const cgst = 200.0;
      const sgst = 200.0;
      const igst = 0.0;

      const subTotalValue =
        baseFreight +
        docketCharge +
        stationaryCharge +
        handlingCharge +
        cgst +
        sgst +
        igst +
        totalWeight * 5; // Assuming a rate per kg (adjust accordingly)

      return subTotalValue.toFixed(2);
    };

    setSubTotal(calculateSubTotal());
  }, [orders, totalWeight]);


  const paymentDetails = [
    { label: "Total Shipment Count", value: orders.length },
    { label: "Total Weight", value: `${totalWeight} Kg` },
    { label: "Base Freight Amount", value: "₹10.00" },
    { label: "Accessorial Freight Amount", value: "546kg" },
    { label: "Docket Charge", value: "₹2,016.00" },
    { label: "Stationary Charge", value: "₹50.00" },
    { label: "Handling Charge(Per Box)", value: "₹500.00" },
    { label: "CGST 8%", value: "₹200.00" },
    { label: "SGST 8%", value: "₹200.00" },
    { label: "IGST 8%", value: "₹00.00" },
  ];

  const handlePayNow = () => {
    setShowConfirmation(true); 
  };

 
  if (showConfirmation) {
    return <BookingConfirmation />;
   
  }

  return (
    <Card
    sx={{
      maxWidth: "400px",
      margin: "20px auto",
      backgroundColor: "white",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px",
    }}
  >
    <div
      className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center justify-between w-full">
        <h2 className="text-lg font-semibold text-gray-900">Payment Summary</h2>
        <div className="flex items-center">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </div>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
        <span className="text-gray-900">Total Weight</span>
        <span className="text-gray-900">{totalWeight}kg</span>
      </div>

      {/* Sub Total */}
      <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center">
        <span className="font-medium text-gray-900">SUB TOTAL</span>
        <span className="font-medium text-gray-900">₹{subTotal}</span>
      </div>


    {isExpanded && (
      <div className="p-4 border-t border-gray-200">
        <div className="space-y-3">
          {paymentDetails.map((item, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <span className="text-gray-600">{item.label}</span>
              <span className="font-medium text-gray-900">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* <div className="p-4 border-t border-gray-200">
      <div className="space-y-4">
        <button
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          onClick={handlePayNow}
        >
          Pay INR 2976.00
        </button>
      </div>
    </div> */}
  </Card>
  );
};

export default PaymentSummary;
