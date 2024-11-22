import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const DeliveryDetails = ({
  pickupDetails,
  isEditing,
  onInputChange,
  onAddDetails,
  onUpdatePickupDetails,
}) => {
  const [error, setError] = useState(false); 

  const handleSaveDetails = () => {
    // Validate the phone number
    if (!/^\d{10}$/.test(pickupDetails.DeliveryContactNumber)) {
      setError(true); // Set error if the phone number is not 10 digits
    } else {
      setError(false); // Clear error if the phone number is valid
      onUpdatePickupDetails(pickupDetails); // Call update function if valid
    }
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <div>
      <Typography> <strong>Pickup Date:</strong> {pickupDetails.selectDate}</Typography>
        <Typography> <strong>Pickup Time:</strong>{pickupDetails.selectTime}</Typography>
        <Typography> <strong>Delivery-Contact Name:</strong>
           {pickupDetails.DeliveryContactName}
        </Typography>
        <Typography><strong>Delivery-Contact Number:</strong>
          {pickupDetails.DeliveryContactNumber}
        </Typography>
        <Typography><strong>Address</strong>: {pickupDetails.address}</Typography>
        <Typography><strong>Pincode</strong>: {pickupDetails.pincode}</Typography>
        <Typography><strong>City</strong>: {pickupDetails.city}</Typography>
      </div>

      <Dialog open={isEditing} onClose={onAddDetails}>
        <DialogContent>
          <Typography variant="h6">Edit Delivery Details</Typography>
          <form>
            <TextField
              label="Select Date"
              name="selectDate"
              type="date" 
              fullWidth
              margin="normal"
              value={pickupDetails.selectDate}
              onChange={onInputChange}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: today, 
              }}
            />
            <TextField
              label="Select Time"
              name="selectTime"
              type="time" 
              fullWidth
              margin="normal"
              value={pickupDetails.selectTime}
              onChange={onInputChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Delivery Contact Name"
              name="DeliveryContactName"
              fullWidth
              margin="normal"
              value={pickupDetails.DeliveryContactName}
              onChange={onInputChange}
            />
            <TextField
              label="Delivery Contact Number"
              name="DeliveryContactNumber"
              fullWidth
              margin="normal"
              value={pickupDetails.DeliveryContactNumber}
              onChange={onInputChange}
              error={error}
              helperText={error ? "Phone number must be 10 digits." : ""} // Error message
            />
            <TextField
              label="Address"
              name="address"
              fullWidth
              margin="normal"
              value={pickupDetails.address}
              onChange={onInputChange}
            />
            <TextField
              label="Pincode"
              name="pincode"
              fullWidth
              margin="normal"
              value={pickupDetails.pincode}
              onChange={onInputChange}
            />
            <TextField
              label="City"
              name="city"
              fullWidth
              margin="normal"
              value={pickupDetails.city}
              onChange={onInputChange}
            />
            <div style={{ marginTop: "20px" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveDetails}
              >
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
