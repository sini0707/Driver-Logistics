// import React from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { ChevronUp, ChevronDown, Edit2 } from 'lucide-react';

// const OrderSummary = ({ orderData }) => {
//   const [isExpanded, setIsExpanded] = React.useState(true);

//   const defaultData = {
//     totalDistance: '56km',
//     pickup: {
//       address: 'Burger St, near Police Station, Fort Nagar, Fort Kochi, Kerala 682001, India',
//       contact: {
//         name: 'Jack Cole',
//         phone: '+91 9876542210',
//         email: 'jack.goa15215@gmail.com'
//       },
//       datetime: '24/07/2024 | 16:00 - 20:00'
//     },
//     delivery: {
//       address: 'G/46, Mattancherry Cochin, Jew Town Rd, Ernakulam, Kochi, Kerala 682002, India',
//       contact: {
//         name: 'Handler',
//         phone: '+91 9876548210',
//         email: 'handler15215@gmail.com'
//       }
//     },
//     product: {
//       category: 'Electronics',
//       loadCategory: 'Carton Box'
//     },
//     payment: {
//       totalShipmentCount: '10.00',
//       baseAmount: '₹450',
//       additionalWeightAmount: '₹450',
//       pocketCharges: '₹780.00',
//       stationeryCharges: '₹50.00'
//     }
//   };

//   const data = orderData || defaultData;

//   return (
//     <Card className="w-full max-w-md">
//       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//         <CardTitle className="text-xl font-bold">Order Summary</CardTitle>
//         <div className="flex items-center gap-2">
//           <span className="text-sm text-gray-500">Total distance {data.totalDistance}</span>
//           <Button 
//             variant="ghost" 
//             size="sm"
//             onClick={() => setIsExpanded(!isExpanded)}
//           >
//             {isExpanded ? <ChevronUp /> : <ChevronDown />}
//           </Button>
//         </div>
//       </CardHeader>

//       {isExpanded && (
//         <CardContent>
//           <div className="space-y-6">
//             {/* Pickup Section */}
//             <section>
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="font-semibold">Pickup Address</h3>
//                 <Button variant="ghost" size="sm">
//                   <Edit2 className="h-4 w-4" />
//                   <span className="ml-1">Edit</span>
//                 </Button>
//               </div>
//               <p className="text-sm text-gray-600">{data.pickup.address}</p>
              
//               <h4 className="font-semibold mt-3 mb-1">Pickup Contact details</h4>
//               <p className="text-sm text-gray-600">
//                 {data.pickup.contact.name} | {data.pickup.contact.phone} | {data.pickup.contact.email}
//               </p>
              
//               <h4 className="font-semibold mt-3 mb-1">Pickup Time & Date</h4>
//               <p className="text-sm text-gray-600">{data.pickup.datetime}</p>
//             </section>

//             {/* Delivery Section */}
//             <section>
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="font-semibold">Delivery Address</h3>
//                 <Button variant="ghost" size="sm">
//                   <Edit2 className="h-4 w-4" />
//                   <span className="ml-1">Edit</span>
//                 </Button>
//               </div>
//               <p className="text-sm text-gray-600">{data.delivery.address}</p>
              
//               <h4 className="font-semibold mt-3 mb-1">Delivery Contact details</h4>
//               <p className="text-sm text-gray-600">
//                 {data.delivery.contact.name} | {data.delivery.contact.phone} | {data.delivery.contact.email}
//               </p>
//             </section>

//             {/* Product Details */}
//             <section>
//               <h3 className="font-semibold mb-2">Product category</h3>
//               <p className="text-sm text-gray-600">{data.product.category}</p>
              
//               <h4 className="font-semibold mt-3 mb-1">Load category</h4>
//               <p className="text-sm text-gray-600">{data.product.loadCategory}</p>
//             </section>

//             {/* Payment Summary */}
//             <section>
//               <h3 className="font-semibold mb-3">Payment Summary</h3>
//               <div className="space-y-2">
//                 <div className="flex justify-between text-sm">
//                   <span>Total Shipment Count</span>
//                   <span>{data.payment.totalShipmentCount}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span>Base Amount</span>
//                   <span>{data.payment.baseAmount}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span>Additional Weight Amount</span>
//                   <span>{data.payment.additionalWeightAmount}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span>Pocket Charges</span>
//                   <span>{data.payment.pocketCharges}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span>Stationery Charges</span>
//                   <span>{data.payment.stationeryCharges}</span>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </CardContent>
//       )}
//     </Card>
//   );
// };

// export default OrderSummary;



import React, { useState } from 'react';

const OrderSummary = ({ orderData }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const defaultData = {
    totalDistance: '56km',
    pickup: {
      address: 'Burger St, near Police Station, Fort Nagar, Fort Kochi, Kerala 682001, India',
      contact: {
        name: 'Jack Cole',
        phone: '+91 9876542210',
        email: 'jack.goa15215@gmail.com'
      },
      datetime: '24/07/2024 | 16:00 - 20:00'
    },
    delivery: {
      address: 'G/46, Mattancherry Cochin, Jew Town Rd, Ernakulam, Kochi, Kerala 682002, India',
      contact: {
        name: 'Handler',
        phone: '+91 9876548210',
        email: 'handler15215@gmail.com'
      }
    },
    product: {
      category: 'Electronics',
      loadCategory: 'Carton Box'
    },
    payment: {
      totalShipmentCount: '10.00',
      baseAmount: '₹450',
      additionalWeightAmount: '₹450',
      pocketCharges: '₹780.00',
      stationeryCharges: '₹50.00'
    }
  };

  const data = orderData || defaultData;

  return (
    <div className="w-full max-w-lg bg-white rounded-lg shadow-md border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-sm">Total distance {data.totalDistance}</span>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            {isExpanded ? '▼' : '▲'}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 space-y-6">
          {/* Pickup Section */}
          <section>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Pickup Address</h3>
              <button className="text-blue-600 text-sm hover:text-blue-700">Edit</button>
            </div>
            <p className="text-sm text-gray-600">{data.pickup.address}</p>
            
            <h4 className="font-semibold mt-3 mb-1">Pickup Contact details</h4>
            <p className="text-sm text-gray-600">
              {data.pickup.contact.name} | {data.pickup.contact.phone} | {data.pickup.contact.email}
            </p>
            
            <h4 className="font-semibold mt-3 mb-1">Pickup Time & Date</h4>
            <p className="text-sm text-gray-600">{data.pickup.datetime}</p>
          </section>

          {/* Delivery Section */}
          <section>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Delivery Address</h3>
              <button className="text-blue-600 text-sm hover:text-blue-700">Edit</button>
            </div>
            <p className="text-sm text-gray-600">{data.delivery.address}</p>
            
            <h4 className="font-semibold mt-3 mb-1">Delivery Contact details</h4>
            <p className="text-sm text-gray-600">
              {data.delivery.contact.name} | {data.delivery.contact.phone} | {data.delivery.contact.email}
            </p>
          </section>

          {/* Product Details */}
          <section>
            <h3 className="font-semibold mb-2">Product category</h3>
            <p className="text-sm text-gray-600">{data.product.category}</p>
            
            <h4 className="font-semibold mt-3 mb-1">Load category</h4>
            <p className="text-sm text-gray-600">{data.product.loadCategory}</p>
          </section>

          {/* Payment Summary */}
          {/* <section>
            <h3 className="font-semibold mb-3">Payment Summary</h3>
            <div className="space-y-2">
              {Object.entries(data.payment).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm text-gray-600">
                  <span>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </section> */}
        </div>
      )}
    </div>
  );
};

export default OrderSummary;