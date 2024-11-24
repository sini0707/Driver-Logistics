import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
  TextField,
  Card,
  Modal,
  Dialog,
  DialogContent,
  FormHelperText,
} from "@mui/material";
import {
  Kitchen,
  Computer,
  SportsSoccer,
  ShoppingBag,
  Home,
  MoreHoriz,
} from "@mui/icons-material";
import PickupDetailsForm from "./PickupDetailsForm";
import DeliveryDetails from "./DeliveryDetails";

import { ChevronDown, ChevronUp } from "lucide-react";
import PaymentSummary from "./PaymentSummary";

import BookingConfirmation from "./BookingConfirmation";

const OrderManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loadType, setLoadType] = useState("");
  const [orders, setOrders] = useState([]);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [actualWeight, setActualWeight] = useState("");
  const [volumetric, setVolumetric] = useState({
    length: "",
    width: "",
    height: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedOrder, setEditedOrder] = useState(null);
  const [tempCategory, setTempCategory] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPickupForm, setShowPickupForm] = useState(true); // Form is shown by default
 
  
  const [pickupDetails, setPickupDetails] = useState({
    selectDate: "",
    selectTime: "",
    DeliveryContactName: "",
    DeliveryContactNumber: "",
    address: " ",
    pincode: "",
    city: "",
  });
  const [orderSummary, setOrderSummary] = useState({});
  const [bookingDetails, setBookingDetails] = useState({});

  const categories = [
    { name: "Consumables", icon: <Kitchen fontSize="large" /> },
    { name: "Electronics", icon: <Computer fontSize="large" /> },
    { name: "Sports Equipment", icon: <SportsSoccer fontSize="large" /> },
    { name: "Clothes Items", icon: <ShoppingBag fontSize="large" /> },
    { name: "Household Items", icon: <Home fontSize="large" /> },
    { name: "Other", icon: <MoreHoriz fontSize="large" /> },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Calculate total pages
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  // Get current page's data
  const currentOrders = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

 // Pagination handlers
 const handlePageClick = (page) => {
  setCurrentPage(page);
};
  const handleAddOrder = () => {
    if (
      !selectedCategory ||
      !loadType ||
      !invoiceNumber ||
      !actualWeight ||
      !volumetric.length ||
      !volumetric.width ||
      !volumetric.height
    ) {
      alert("Please fill all fields before adding the order.");
      return;
    }

    if (isNaN(actualWeight) || actualWeight <= 0) {
      alert("Please enter a valid actual weight.");
      return;
    }

    if (
      isNaN(volumetric.length) ||
      isNaN(volumetric.width) ||
      isNaN(volumetric.height) ||
      volumetric.length <= 0 ||
      volumetric.width <= 0 ||
      volumetric.height <= 0
    ) {
      alert("Please enter valid volumetric dimensions.");
      return;
    }
    const newOrder = {
      invoiceNumber,
      loadType,
      quantity: quantity || 0,
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
    setInvoiceNumber("");
    setActualWeight("");
    setVolumetric({ length: "", width: "", height: "" });
    setSelectedCategory("");
    setLoadType("");
    setQuantity(""); 
  };
  const handleCloseModal = () => setIsModalOpen(false);
  const handleClosePaymentModal = () => setIsPaymentModalOpen(false);

  const handleDeleteOrder = (indexToDelete) => {
    setOrders(orders.filter((_, index) => index !== indexToDelete));
  };
  
  const startEditing = (index) => {
    setEditIndex(index);
    setShowPickupForm(false); 
    setEditedOrder({ ...orders[index] });
  };
  
  const cancelEditing = () => {
    setEditIndex(null);
     setEditedOrder(null);
  };

  const saveChanges = () => {
    const updatedOrders = [...orders];
    updatedOrders[editIndex] = { ...editedOrder };
    console.log("Updated Orders:", updatedOrders);
    setOrders(updatedOrders);
    cancelEditing();
  };

  const handleFieldChange = (field, value) => {
    console.log("Updating field:", field, "Value:", value);

    setEditedOrder((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].productCategory = tempCategory;
    setOrders(updatedOrders);
    cancelEditing();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPickupDetails({ ...pickupDetails, [name]: value });
  };
  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setPickupDetails({ ...pickupDetails, [name]: value });
  };
  //  const handleEditClick = () => setIsEditing(true);
  const handleAddDetails = () => {
    setOrderSummary(pickupDetails);
    setIsEditing(false);
  };
  const handleAddDetails1 = () => {
    setIsEditing(false);
  };

  const handlePayNow = () => setIsPaymentModalOpen(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleEditClick = () => {
    setOpen(true);
  };
  const handleEditClick1 = () => {
    setIsEditing(true);
  };
  const handleUpdatePickupDetails = (details) => {
    setPickupDetails(details);
    handleClose();
  };
  const handleUpdatePickupDetails1 = (details) => {
    setPickupDetails(details);
    setIsEditing(false);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };
  const handleFormSubmit = (details) => {
    setPickupDetails(details);
  };
  const calculateTotal = () => {};
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleExpand1 = () => {
    setIsExpanded(!isExpanded);
  };
  const handleAddOrderz = () => {
    const newOrder = {
      category: selectedCategory,
      loadType,
      quantity,
      invoiceNumber,
      actualWeight,
      volumetric,
    };

    setOrders([...orders, newOrder]);

    setQuantity("");
    setLoadType("");
    setSelectedCategory("");
    setInvoiceNumber("");
    setActualWeight("");
    setVolumetric({ length: "", width: "", height: "" });
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col min-h-screen bg-transparent relative">
        <Box p={3}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
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
                      variant={
                        selectedCategory === category.name
                          ? "contained"
                          : "outlined"
                      }
                      onClick={() => setSelectedCategory(category.name)}
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
              <Box my={2} display="flex" alignItems="center" gap={2}></Box>
              <Typography variant="h6">Select Load Type</Typography>
              <Box my={2}>
              <Select
    value={loadType}
    onChange={(e) => setLoadType(e.target.value)}
    displayEmpty
    sx={{
      width: "300px", // Fixed width for the dropdown
    }}
  >
    <MenuItem value="" disabled>
      Choose Load Type
    </MenuItem>
    <MenuItem value="Carton Box">Carton Box</MenuItem>
    <MenuItem value="Wooden Box">Wooden Box</MenuItem>
    <MenuItem value="Plastic">Plastic</MenuItem>
    <MenuItem value="Other">Other</MenuItem>
  </Select>
  <TextField
    type="number"
    label="Quantity"
    value={quantity}
    onChange={(e) => {
      const value = e.target.value;
      if (value === "" || Number(value) >= 0) {
        setQuantity(value);
      }
    }}
    sx={{
      width: "150px", // Fixed width for the input field
    }}
    InputLabelProps={{
      sx: {
        fontWeight: "normal",
        "&.Mui-focused": {
          fontWeight: "bold",
        },
      },
    }}
  />

                <TextField
                  label="Invoice Number"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  fullWidth
                  sx={{ my: 2 }}
                  InputLabelProps={{
                    sx: {
                      fontWeight: "normal",
                      "&.Mui-focused": {
                        fontWeight: "bold",
                      },
                    },
                  }}
                />

                <TextField
                  label="Actual Weight (Kg)"
                  value={actualWeight}
                  onChange={(e) => setActualWeight(e.target.value)}
                  fullWidth
                  sx={{ my: 1 }}
                  InputLabelProps={{
                    sx: {
                      fontWeight: "normal",
                      "&.Mui-focused": {
                        fontWeight: "bold",
                      },
                    },
                  }}
                />

                <FormHelperText sx={{ color: "grey" }}>
                  Packaged weight should be at least 50 grams.
                </FormHelperText>

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Volumetric Dimensions (cm)
                </Typography>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item>
                    <TextField
                      label="Length"
                      value={volumetric.length}
                      onChange={(e) =>
                        setVolumetric({ ...volumetric, length: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Width"
                      value={volumetric.width}
                      onChange={(e) =>
                        setVolumetric({ ...volumetric, width: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Height"
                      value={volumetric.height}
                      onChange={(e) =>
                        setVolumetric({ ...volumetric, height: e.target.value })
                      }
                    />
                  </Grid>
                </Grid>
                <FormHelperText sx={{ color: "grey" }}>
                  length+breadth+height should be at least 15cm
                </FormHelperText>
                <Box mt={4} display="flex" justifyContent="center">
                  <button
                    onClick={handleAddOrder}
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Add order
                  </button>
                </Box>
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
  Order Overview
</Typography>
<div
  className="relative shadow-md sm:rounded-lg overflow-y-auto"
  style={{ maxHeight: "70vh" }} // Limit the height of the container
>
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          No
        </th>
        <th scope="col" className="px-6 py-3">
          Invoice No
        </th>
        <th scope="col" className="px-6 py-3">
          Load Type
        </th>
        <th scope="col" className="px-6 py-3">
          Quantity
        </th>
        <th scope="col" className="px-6 py-3">
          Actual Weight
        </th>
        <th scope="col" className="px-6 py-3">
          Volumetric (cm)
        </th>
        <th scope="col" className="px-6 py-3">
          Product Category
        </th>
        <th scope="col" className="px-6 py-3">
          HAZMAT Class
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
    {currentOrders.map((order, index) => (
        <tr
          key={index}
            className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b dark:border-gray-700"
        >
           <td className="px-6 py-4">{(currentPage - 1) * itemsPerPage + index + 1}</td>
          {/* <td className="px-6 py-4">{index + 1}</td> */}
          <td className="px-6 py-4">
            {editIndex === index ? (
              <input
                type="text"
                value={editedOrder.invoiceNumber}
                onChange={(e) =>
                  handleFieldChange("invoiceNumber", e.target.value)
                }
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
                onChange={(e) =>
                  handleFieldChange("loadType", e.target.value)
                }
                className="border rounded p-2 w-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                style={{ minWidth: "120px" }} // Adjust dropdown width
              >
                <option value="Carton Box">Carton Box</option>
                <option value="Wooden Box">Wooden Box</option>
                <option value="Plastic">Plastic</option>
                <option value="Other">Other</option>

              </select>
            ) : (
              order.loadType
            )}
          </td>
          <td className="px-6 py-4">
            {editIndex === index ? (
              <input
                type="number"
                value={editedOrder.quantity || 0}
                onChange={(e) =>
                  handleFieldChange("quantity", e.target.value)
                }
                className="border rounded p-2 w-full"
                min="0"
              />
            ) : (
              order.quantity || 0
            )}
          </td>
          <td className="px-6 py-4">
            {editIndex === index ? (
              <input
                type="text"
                value={editedOrder.actualWeight}
                onChange={(e) =>
                  handleFieldChange("actualWeight", e.target.value)
                }
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
                onChange={(e) =>
                  handleFieldChange("productCategory", e.target.value)
                }
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
                onChange={(e) =>
                  handleFieldChange("HAZMATclass", e.target.value)
                }
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
                    onClick={() => handleDeleteOrder(index)}
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
<div className="flex justify-center items-center mt-4 space-x-2">
  {/* Backward Arrow */}
  <button
    onClick={() => handlePageClick(currentPage - 1)}
    disabled={currentPage === 1}
    className="px-3 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
  >
    &lt;
  </button>

  {/* Page Numbers */}
  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => handlePageClick(index + 1)}
      className={`px-3 py-2 rounded ${
        currentPage === index + 1
          ? "bg-blue-500 text-white font-bold"
          : "bg-gray-300 text-gray-700 hover:bg-gray-400"
      }`}
    >
      {index + 1}
    </button>
  ))}

  {/* Forward Arrow */}
  <button
    onClick={() => handlePageClick(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="px-3 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
  >
    &gt;
  </button>
</div>

    

            </Grid>
            <Grid item xs={4}>
              <Card
                sx={{
                  p: 2,
                  mb: 3,
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  borderRadius: 2,
                  border: "1px solid lightgray",
                }}
              >
                <div className="max-w-2xl mx-auto p-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div
                      onClick={toggleExpand}
                      className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                    >
                      {/* <h2 className="text-xl font-bold">Order Summary</h2> */}
                      <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-500" />
                      )}
                    </div>

                    {isExpanded && (
                      <div className="p-4 border-t border-gray-200">
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold">Pickup details</h3>
                            <button
                              onClick={handleEditClick}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              (Edit)
                            </button>
                          </div>

                          <div className="space-y-2">
                            <p className="flex">
                              <span className="font-bold w-32">Name:</span>
                              <span className="text-gray-600">
                                {pickupDetails.name}
                              </span>
                            </p>
                            <p className="flex">
                              <span className="font-bold w-32">
                                Contact Number:
                              </span>
                              <span className="text-gray-600">
                                {pickupDetails.contactNumber}
                              </span>
                            </p>
                            <p className="flex">
                              <span className="font-bold w-32">
                                Email Address:
                              </span>
                              <span className="text-gray-600">
                                {pickupDetails.emailAddress}
                              </span>
                            </p>
                            <p className="flex">
                              <span className="font-bold w-32">
                                Pickup Time & Date:
                              </span>
                              <span className="text-gray-600">
                                {pickupDetails.pickupDate} |{" "}
                                {pickupDetails.pickupTime}
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="h-px bg-gray-200 my-4" />

                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold">Delivery details</h3>
                            <button
                              onClick={handleEditClick1}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              (Edit)
                            </button>
                          </div>
                        </div>
                        <DeliveryDetails
                          pickupDetails={pickupDetails}
                          isEditing={isEditing}
                          onEditClick={handleEditClick1}
                          onInputChange={handleInputChange1}
                          onAddDetails={handleAddDetails1}
                          onUpdatePickupDetails={handleUpdatePickupDetails1}
                        />

                        {(selectedCategory || loadType) && (
                          <div className="space-y-2 mb-4">
                            {selectedCategory && (
                              <p className="flex">
                                <span className="font-bold w-32">
                                  Product Category:
                                </span>
                                <span className="text-gray-600">
                                  {selectedCategory}
                                </span>
                              </p>
                            )}
                            {loadType && (
                              <p className="flex">
                                <span className="font-bold w-32">
                                  Load Type:
                                </span>
                                <span className="text-gray-600">
                                  {loadType}
                                </span>
                              </p>
                            )}
                          </div>
                        )}

                        <p className="flex">
                          <span className="font-bold w-32">
                            Total Shipment:
                          </span>
                          <span className="text-gray-600">{orders.length}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <Dialog
                  open={open}
                  onClose={handleClose}
                  fullWidth
                  maxWidth="sm"
                >
                  <DialogContent>
                    <PickupDetailsForm
                      onClose={handleClose}
                      onSubmit={handleUpdatePickupDetails}
                      existingDetails={pickupDetails}
                    />
                  </DialogContent>
                </Dialog>
              </Card>
              <div style={{ textAlign: "center", padding: "20px" }}>
                <Card
                  style={{
                    maxWidth: "400px",
                    margin: "20px auto",
                    padding: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                  }}
                >
                  <PaymentSummary orders={orders} />
                 



                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handlePayNow}
                    e
                    style={{ margin: "20px auto", display: "block" }}
                  >
                    Pay Now
                  </Button>
                </Card>
                <Modal
                  open={isPaymentModalOpen}
                  onClose={handleClosePaymentModal}
                  aria-labelledby="payment-confirmation-title"
                  aria-describedby="payment-confirmation-description"
                >
                  <Box sx={{ ...modalStyle }}>
                    <BookingConfirmation
                      bookingDetails={bookingDetails}
                      pickupDetails={pickupDetails}
                      handleCloseModal={handleClosePaymentModal}
                    />
                  </Box>
                </Modal>
              </div>
            </Grid>
          </Grid>
          <Modal
            open={isModalOpen}
            onClose={handleCloseModal}
            aria-labelledby="order-added-modal"
            aria-describedby="order-added-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography
                id="order-added-modal"
                variant="h6"
                component="h2"
                gutterBottom
              >
                Your order has been added!
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={2}
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
