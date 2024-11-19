import React, { useState } from 'react';
import { Box, Button,Grid ,Typography,Select,MenuItem,TextField,Card, Modal, Dialog, DialogContent} from '@mui/material';
import {Kitchen,Computer,SportsSoccer,ShoppingBag,Home,MoreHoriz,} from '@mui/icons-material';
// import { Edit, Delete,Save, Cancel,  } from '@mui/icons-material';
import PickupDetailsForm from './PickupDetailsForm';
import DeliveryDetails from './DeliveryDetails';
import ParticlesBg from "particles-bg";
import BookingDetailsModal from './BookingDetailsModal';



const OrderManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loadType, setLoadType] = useState('');
  const [orders, setOrders] = useState([]);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [actualWeight, setActualWeight] = useState('');
  const [volumetric, setVolumetric] = useState({ length: '', width: '', height: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedOrder, setEditedOrder] = useState(null);
  const [tempCategory, setTempCategory] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [pickupDetails, setPickupDetails] = useState({
    selectDate: "24/07/2024",
    selectTime: "16:00 - 20:00",
    DeliveryContactName:"anupama",
    DeliveryContactNumber:"9562756449",
    address: " mavely,angamaly,",
    pincode: "654534",
    city: "ernakulam",
  });


  const [orderSummary, setOrderSummary] = useState({});

  const [bookingDetails, setBookingDetails] = useState({
    pickupDate: '',
    city: '',
    AWBId: '',
    from: '',
    to: '',
    totalDistance: '',
    productCategory: '',
    amountPaid: '',
    estDeliveryDate: '',
  });

  const categories = [
    { name: 'Consumables', icon: <Kitchen fontSize="large" /> },
    { name: 'Electronics', icon: <Computer fontSize="large" /> },
    { name: 'Sports Equipment', icon: <SportsSoccer fontSize="large" /> },
    { name: 'Clothes Items', icon: <ShoppingBag fontSize="large" /> },
    { name: 'Household Items', icon: <Home fontSize="large" /> },
    { name: 'Other', icon: <MoreHoriz fontSize="large" /> },
  ];

  // Add a new order
  const handleAddOrder = () => {

// Validate the form data before adding the order
if (!selectedCategory || !loadType || !invoiceNumber || !actualWeight || !volumetric.length || !volumetric.width || !volumetric.height) {
  alert("Please fill all fields before adding the order.");
  return;
}

// Validate if actual weight is a number
if (isNaN(actualWeight) || actualWeight <= 0) {
  alert("Please enter a valid actual weight.");
  return;
}

// Validate if volumetric dimensions are numbers and greater than 0
if (isNaN(volumetric.length) || isNaN(volumetric.width) || isNaN(volumetric.height) || 
    volumetric.length <= 0 || volumetric.width <= 0 || volumetric.height <= 0) {
  alert("Please enter valid volumetric dimensions.");
  return;
}




    const newOrder = {
      invoiceNumber,
      loadType,
      actualWeight,
      volumetric,
      productCategory: selectedCategory,
      HAZMATclass: "No",
    };
    setOrders([...orders, newOrder]);
    resetOrderForm();
    setIsModalOpen(true);
  };

  const resetOrderForm = () => {
    setInvoiceNumber('');
    setActualWeight('');
    setVolumetric({ length: '', width: '', height: '' });
    setSelectedCategory('');
    setLoadType('');
  };


  const handleCloseModal = () => setIsModalOpen(false);
  const handleClosePaymentModal = () => setIsPaymentModalOpen(false);
  const handleOpenModal = () => {
    setIsPaymentModalOpen(true); // Open the modal
  };

 


  // Delete an order
  const handleDeleteOrder = (indexToDelete) => {
    setOrders(orders.filter((_, index) => index !== indexToDelete));
  };

  // Edit order
  const startEditing = (index) => {
    setEditIndex(index);
    setEditedOrder({ ...orders[index] });
    setTempCategory(orders[index].productCategory);
    setOpen(true);
  };

  const cancelEditing = () => {
    setEditIndex(null);
    setEditedOrder(null);
  };

  const saveChanges = () => {
    const updatedOrders = [...orders];
    updatedOrders[editIndex] = editedOrder;
    setOrders(updatedOrders);
    cancelEditing();
  };

  const handleFieldChange = (field, value) => {
    setEditedOrder((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Save and cancel edits
  const handleSaveOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].productCategory = tempCategory;
    setOrders(updatedOrders);
    cancelEditing();
  };

  // Add and edit pickup details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPickupDetails({ ...pickupDetails, [name]: value });
  };
  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setPickupDetails({ ...pickupDetails, [name]: value });
  };
  // const handleEditClick = () => setIsEditing(true);
  const handleAddDetails = () => {
    setOrderSummary(pickupDetails);
    setIsEditing(false);
  };
  const handleAddDetails1 = () => {
    setIsEditing(false);
  };
  

  // Payment modal
  const handlePayNow = () => setIsPaymentModalOpen(true);

  const handleOpen = () => {
    setOpen(true); // Open the dialog/modal
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog/modal
  };


  const handleEditClick = () => {
    setOpen(true);
  };
  const handleEditClick1 = () => {
    setIsEditing(true);
  };
  const handleUpdatePickupDetails = (details) => {
    setPickupDetails(details);
    handleClose(); // Close the dialog
  };
  const handleUpdatePickupDetails1 = (details) => {
    setPickupDetails(details);
    setIsEditing(false); // Close the edit view
  };

  
  // Modal style
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };
  const handleFormSubmit = (details) => {
    setPickupDetails(details); // Set the updated details
  };
  

 
  
    
  return (


    <>
    

<Box bgcolor="white" padding={2}>
  
      <Grid container alignItems="center">
        {/* Left Section - Order Management System */}
        <Grid item xs={6}>
        <Typography
  variant="subtitle1"
  gutterBottom
  sx={{
    color: "gray", 
    fontWeight: "bold", // Make the text bold
    textDecoration: "underline",  // Underline the text
    background: "linear-gradient(to right, cyan, blue)",  // Gradient effect on text
    backgroundClip: "text", // Make the gradient apply to the text itself
    WebkitBackgroundClip: "text", // For Safari support
    color: "transparent",  // Make the actual text color transparent so the gradient shows
    transition: "color 0.3s ease, text-decoration 0.3s ease",  // Smooth transition effect
    "&:hover": {
      textDecoration: "underline",  // Keep underline on hover
      color: "transparent",  // Maintain transparent text color for gradient effect
      background: "linear-gradient(to bottom left, cyan, blue)",  // Gradient direction change on hover
      backgroundClip: "text",  // Ensure the gradient is applied to the text on hover
      WebkitBackgroundClip: "text"  // Safari support for background clip
    }
  }}
>
  Order Management System
</Typography>



        </Grid>

        {/* Right Section - Welcome Guest */}
        <Grid item xs={6} style={{ textAlign: "right" }}>
        <Typography
  variant="subtitle1"
  gutterBottom
  sx={{
    color: "gray", 
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"  // Adds a shadow to the text
  }}
>
  Welcome Guest
</Typography>

        </Grid>
      </Grid>
    </Box>
    
  {/* This is an example component */}
  <div className="flex items-center justify-center flex-col min-h-screen bg-transparent relative">
  {/* <MouseImageTrail/> */}
    <ParticlesBg type='random' bg={true} />
    <Box p={3}>
    

      <Grid container spacing={3}>
        {/* Main Content */}
        <Grid item xs={8}>
          {/* Product Category Selection */}
          <Typography variant="h6">Select Product Category</Typography>
<Grid
  container
  spacing={2}
  sx={{
    mb: 3,
   
    overflowX: "auto", 
  }}
   direction="row"
>
{categories.map((category) => (
        <Grid item key={category.name}>
          <Button
            variant={selectedCategory === category.name ? "contained" : "outlined"}
            onClick={() => setSelectedCategory(category.name)} // Update selected category
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              padding: 2,
              width: 120,
              height: 120,
            }}
          >
            {category.icon}
            <Typography variant="body2">{category.name}</Typography>
          </Button>
        </Grid>
      ))}
    </Grid>


          {/* Load Type Selection */}
          <Typography variant="h6">Select Load Type</Typography>
          <Box my={2}>
  <Select
    value={loadType}
    onChange={(e) => setLoadType(e.target.value)}
    fullWidth
    displayEmpty
  >
    <MenuItem value="" disabled>
      Choose Load Type
    </MenuItem>
    <MenuItem value="Carton Box">Carton Box</MenuItem>
    <MenuItem value="Wooden Box">Wooden Box</MenuItem>
  </Select>
  
  <TextField
    label="Invoice Number"
    value={invoiceNumber}
    onChange={(e) => setInvoiceNumber(e.target.value)}
    fullWidth
    sx={{ my: 2 }} // Space between inputs
  />
  
  <TextField
    label="Actual Weight (Kg)"
    value={actualWeight}
    onChange={(e) => setActualWeight(e.target.value)}
    fullWidth
    sx={{ my: 2 }} // Add space here too
  />
  
  <Typography sx={{ mt: 2 }}>Volumetric Dimensions (cm)</Typography>
  <Grid container spacing={2} sx={{ mt: 1 }}>
    <Grid item>
      <TextField
        label="Length"
        value={volumetric.length}
        onChange={(e) => setVolumetric({ ...volumetric, length: e.target.value })}
      />
    </Grid>
    <Grid item>
      <TextField
        label="Width"
        value={volumetric.width}
        onChange={(e) => setVolumetric({ ...volumetric, width: e.target.value })}
      />
    </Grid>
    <Grid item>
      <TextField
        label="Height"
        value={volumetric.height}
        onChange={(e) => setVolumetric({ ...volumetric, height: e.target.value })}
      />
    </Grid>
  </Grid>
  
  {/* Add space between the content and the button */}
  <Box mt={4} display="flex" justifyContent="center">
   
   <button onClick={handleAddOrder}
  type="button"
  className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
>
  Add order
</button>


  </Box>
</Box>


          {/* Order Overview Table */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">No</th>
        <th scope="col" className="px-6 py-3">Invoice No</th>
        <th scope="col" className="px-6 py-3">Load Type</th>
        <th scope="col" className="px-6 py-3">Actual Weight</th>
        <th scope="col" className="px-6 py-3">Volumetric (cm)</th>
        <th scope="col" className="px-6 py-3">Product Category</th>
        <th scope="col" className="px-6 py-3">HAZMAT Class</th>
        <th scope="col" className="px-6 py-3">Action</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order, index) => (
        <tr
          key={index}
          className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
        >
          <td className="px-6 py-4">{index + 1}</td>
          <td className="px-6 py-4">
            {editIndex === index ? (
              <input
                type="text"
                value={editedOrder.invoiceNumber}
                onChange={(e) => handleFieldChange("invoiceNumber", e.target.value)}
                className="border rounded p-2 w-full"
              />
            ) : (
              order.invoiceNumber
            )}
          </td>
          <td className="px-6 py-4">
            {editIndex === index ? (
              <select
                value={editedOrder.loadType}
                onChange={(e) => handleFieldChange("loadType", e.target.value)}
                className="border rounded p-2 w-full"
              >
                <option value="Carton Box">Carton Box</option>
                <option value="Wooden Box">Wooden Box</option>
                <option value="Pallet">Pallet</option>
              </select>
            ) : (
              order.loadType
            )}
          </td>
          <td className="px-6 py-4">
            {editIndex === index ? (
              <input
                type="text"
                value={editedOrder.actualWeight}
                onChange={(e) => handleFieldChange("actualWeight", e.target.value)}
                className="border rounded p-2 w-full"
              />
            ) : (
              order.actualWeight
            )}
          </td>
          <td className="px-6 py-4">
            {editIndex === index ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={editedOrder.volumetric.length}
                  onChange={(e) =>
                    handleFieldChange("volumetric", {
                      ...editedOrder.volumetric,
                      length: e.target.value,
                    })
                  }
                  placeholder="L"
                  className="border rounded p-2 w-1/3"
                />
                <input
                  type="text"
                  value={editedOrder.volumetric.width}
                  onChange={(e) =>
                    handleFieldChange("volumetric", {
                      ...editedOrder.volumetric,
                      width: e.target.value,
                    })
                  }
                  placeholder="W"
                  className="border rounded p-2 w-1/3"
                />
                <input
                  type="text"
                  value={editedOrder.volumetric.height}
                  onChange={(e) =>
                    handleFieldChange("volumetric", {
                      ...editedOrder.volumetric,
                      height: e.target.value,
                    })
                  }
                  placeholder="H"
                  className="border rounded p-2 w-1/3"
                />
              </div>
            ) : (
              `${order.volumetric.length} x ${order.volumetric.width} x ${order.volumetric.height}`
            )}
          </td>
          <td className="px-6 py-4">
            {editIndex === index ? (
              <input
                type="text"
                value={editedOrder.productCategory}
                onChange={(e) => handleFieldChange("productCategory", e.target.value)}
                className="border rounded p-2 w-full"
              />
            ) : (
              order.productCategory
            )}
          </td>
          <td className="px-6 py-4">
            {editIndex === index ? (
              <select
                value={editedOrder.HAZMATclass}
                onChange={(e) => handleFieldChange("HAZMATclass", e.target.value)}
                className="border rounded p-2 w-full"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            ) : (
              order.HAZMATclass
            )}
          </td>
          <td className="px-6 py-4">
            <div className="flex gap-2">
              {editIndex === index ? (
                <>
                  <button
                    onClick={saveChanges}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEditing}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => startEditing(index)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      setOrders(orders.filter((_, i) => i !== index))
                    }
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        </Grid>

        {/* Right Sidebar */}
        <Grid item xs={4}>
          {/* Order Summary */}
        
<Card
  sx={{
    p: 2,
    mb: 3,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Transparent white background with reduced opacity
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add subtle shadow for better visibility
    borderRadius: 2,
    border: "1px solid lightgray", // Optional border for a clean look
  }}
>
  <Typography variant="h6" sx={{ mb: 2 }}>
    Order Summary
  </Typography>

  {/* Pickup Details Section */}
  <Typography variant="body1">
    Pickup Address:{" "}
    <span
      onClick={handleEditClick}
      style={{ color: "blue", cursor: "pointer" }}
    >
      (Edit)
    </span>
  </Typography>
  <Typography>Name: {pickupDetails.name}</Typography>
  <Typography>Contact Number: {pickupDetails.contactNumber}</Typography>
  <Typography>Email Address: {pickupDetails.emailAddress}</Typography>
  <Typography>
    Pickup Time & Date: {pickupDetails.pickupDate} | {pickupDetails.pickupTime}
  </Typography>

  {/* Gray Line Divider */}
  <div
    style={{
      margin: "16px 0", // Spacing above and below
      height: "1px",
      backgroundColor: "gray", // Gray line color
      opacity: 0.5, // Optional transparency for the line
    }}
  />

  {/* Delivery Details Section */}
  <Typography variant="body1">
    Delivery Address:{" "}
    <span
      onClick={handleEditClick1}
      style={{ color: "blue", cursor: "pointer" }}
    >
      (Edit)
    </span>
  </Typography>
  <DeliveryDetails
    pickupDetails={pickupDetails}
    isEditing={isEditing}
    onEditClick={handleEditClick1}
    onInputChange={handleInputChange1}
    onAddDetails={handleAddDetails1}
    onUpdatePickupDetails={handleUpdatePickupDetails1}
  />
  
  {/* <Typography>Product Category: {selectedCategory}</Typography> */}

  {selectedCategory && ( // Render order summary only when a category is selected
      <Card
        sx={{
          p: 2,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: 2,
          mt: 3,
        }}
      >
       
        <Typography variant="body1">
           Product Category: {selectedCategory}
        </Typography>
      </Card>
    )}
    {loadType && ( // Render order summary only when a category is selected
      <Card
        sx={{
          p: 2,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: 2,
          mt: 3,
        }}
      >
       
        <Typography variant="body1">
          Load Type: {loadType}
        </Typography>
      </Card>
    )}
    {/* <Typography>Total Shipment Count: {orders.length}</Typography> */}
    <Typography variant="body1">
    Total Shipment Count: {orders.length}
        </Typography>

    
  {/* Dialog to edit pickup details */}
  <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
    <DialogContent>
      <PickupDetailsForm
        onClose={handleClose}
        onSubmit={handleUpdatePickupDetails}
        existingDetails={pickupDetails}
      />
    </DialogContent>
  </Dialog>
</Card>


     
        
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Payment Summary
      </Typography>
      <Typography>
        Total Weight: 10 Kg
      </Typography>
      <Typography>Taxes: $10</Typography>
      <Typography>Total: $110</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenModal}
        style={{ marginTop: '20px' }}
      >
        Pay Now
      </Button>

      {/* Payment Confirmation Modal */}
      <Modal
        open={isPaymentModalOpen}
        onClose={handleClosePaymentModal}
        aria-labelledby="payment-confirmation-title"
        aria-describedby="payment-confirmation-description"
      >
        <Box sx={{ ...modalStyle }}>
          <BookingDetailsModal 
            bookingDetails={bookingDetails}
            pickupDetails={pickupDetails}
            handleCloseModal={handleClosePaymentModal}
          />
        </Box>
      </Modal>
    </div>


        </Grid>
      </Grid>

      {/* Modal for "Order Added" */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="order-added-modal"
        aria-describedby="order-added-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="order-added-modal" variant="h6" component="h2" gutterBottom>
            Your order has been added!
          </Typography>
          <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  mt={2} // Optional: Adds spacing above the button
>
  <Button variant="contained" onClick={handleCloseModal}>
    OK
  </Button>
</Box>

        </Box>
      </Modal>
    </Box>
    
    </div>

    
</>
  );
};

export default OrderManagement;
