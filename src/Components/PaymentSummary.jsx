import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Card } from '@mui/material';  

const PaymentSummary = ({ orders }) => {
  const [isExpanded, setIsExpanded] = useState(false);
 
  const [subTotal, setSubTotal] = useState(null);
  const [totalWeight, setTotalWeight] = useState(0);


  useEffect(() => {
    if (orders && orders.length > 0) {
     
      const weight = orders.reduce((total, order) => {
        return total + (order.actualWeight || 0) * (order.quantity || 1);
      }, 0);
      setTotalWeight(weight);

   
      const calculateSubTotal = () => {
        const baseFreight = 10.0;
        const docketCharge = 2016.0;
        const stationaryCharge = 50.0;
        const handlingCharge = 500.0;
        const cgst = 200.0;
        const sgst = 200.0;
        const igst = 0.0;

        return (
          baseFreight +
          docketCharge +
          stationaryCharge +
          handlingCharge +
          cgst +
          sgst +
          igst +
          weight * 5
        ).toFixed(2);
      };

      setSubTotal(calculateSubTotal());
    } else {
     
      setTotalWeight(0);
      setSubTotal(null);
    }
  }, [orders]);

  const paymentDetails = [
    { label: "Total Shipment Count", value: orders?.length || 0 },
    { label: "Total Weight", value: `${totalWeight} Kg` },
    { label: "Base Freight Amount", value: orders?.length ? "₹10.00" : "₹0.00" },
    { label: "Accessorial Freight Amount", value: `${totalWeight}kg` },
    { label: "Docket Charge", value: orders?.length ? "₹2,016.00" : "₹0.00" },
    { label: "Stationary Charge", value: orders?.length ? "₹50.00" : "₹0.00" },
    { label: "Handling Charge(Per Box)", value: orders?.length ? "₹500.00" : "₹0.00" },
    { label: "CGST 8%", value: orders?.length ? "₹200.00" : "₹0.00" },
    { label: "SGST 8%", value: orders?.length ? "₹200.00" : "₹0.00" },
    { label: "IGST 8%", value: "₹0.00" },
  ];

  return (
    <Card className="max-w-md mx-auto my-5">
      <div className="space-y-4">
     
        <div
          className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="text-lg font-semibold text-gray-900">Payment Summary</h2>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>

        {/* Total Weight */}
        <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
          <span className="text-gray-900">Total Weight</span>
          <span className="text-gray-900">{totalWeight}kg</span>
        </div>

        {orders?.length > 0 && (
          <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center">
            <span className="font-medium text-gray-900">SUB TOTAL</span>
            <span className="font-medium text-gray-900">
              {subTotal ? `₹${subTotal}` : "Calculating..."}
            </span>
          </div>
        )}

      
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

      
      </div>
    </Card>
  );
};

export default PaymentSummary;