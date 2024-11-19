import React from "react";
import { Dialog, DialogContent, TextField, Button, Typography } from "@mui/material";

const DeliveryDetails = ({
  pickupDetails,
  isEditing,
  onEditClick,
  onInputChange,
  onAddDetails,
  onUpdatePickupDetails,
}) => {
  // Handle local state for editing if needed (optional)
  const handleSaveDetails = () => {
    onUpdatePickupDetails(pickupDetails); // Save changes
  };

  return (
    <div>
     
      <div>
        <Typography>Pickup Date: {pickupDetails.selectDate}</Typography>
        <Typography>Pickup Time: {pickupDetails.selectTime}</Typography>
       
        <Typography>Delivery-Contact Number: {pickupDetails.DeliveryContactName}</Typography>
        <Typography>Contact Number: {pickupDetails.DeliveryContactNumber}</Typography>
        <Typography>Address: {pickupDetails.address}</Typography>
        <Typography>Pincode: {pickupDetails.pincode}</Typography>
        <Typography>City: {pickupDetails.city}</Typography>
        {/* <Button onClick={onEditClick} style={{ marginTop: "10px" }}>
          Edit
        </Button> */}
      </div>

      {/* Edit Modal */}
      <Dialog open={isEditing} onClose={onAddDetails}>
        <DialogContent>
          <Typography variant="h6">Edit Delivery Details</Typography>
          <form>
            <TextField
              label="Select Date"
              name="selectDate"
              fullWidth
              margin="normal"
              value={pickupDetails.selectDate}
              onChange={onInputChange}
            />
            <TextField
              label="Select Time"
              name="selectTime"
              fullWidth
              margin="normal"
              value={pickupDetails.selectTime}
              onChange={onInputChange}
            />
            <TextField
              label="Delivery Contact Name"
              name="Delivery contact name"
              fullWidth
              margin="normal"
              value={pickupDetails.DeliveryContactName}
              onChange={onInputChange}
            />
            <TextField
              label="Delivery Contact Number"
              name="deliverycontactNumber"
              fullWidth
              margin="normal"
              value={pickupDetails.DeliveryContactNumber}
              onChange={onInputChange}
            />
            <TextField
              label=" Address"
              name="Address"
              fullWidth
              margin="normal"
              value={pickupDetails.address}
              onChange={onInputChange}
            />
             <TextField
              label=" Pincode"
              name="pincode"
              fullWidth
              margin="normal"
              value={pickupDetails.pincode}
              onChange={onInputChange}
            />
             <TextField
              label=" City"
              name="city"
              fullWidth
              margin="normal"
              value={pickupDetails.city}
              onChange={onInputChange}
            />
            <div style={{ marginTop: "20px" }}>
              <Button variant="contained" color="primary" onClick={handleSaveDetails}>
                Save
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={onAddDetails}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeliveryDetails;
