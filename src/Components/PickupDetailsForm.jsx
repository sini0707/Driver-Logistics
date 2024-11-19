import React, { useState } from "react";
import { Button, TextField, Grid, Typography } from "@mui/material";

const PickupDetailsForm = ({ onClose, onSubmit, existingDetails }) => {
console.log("details of user")
 

  // const [pickupDetails, setPickupDetails] = useState(existingDetails);
  const [pickupDetails, setPickupDetails] = useState({
    pickupDate: "",
    pickupTime: "",
    name: "",
    contactNumber: "",
    emailAddress: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPickupDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddDetails = () => {
    // Pass updated details to parent via onSubmit
    if (onSubmit) {
      onSubmit(pickupDetails);
    }
  };

  return (
    <div>
    <Typography variant="h6" gutterBottom>
      Pickup Details
    </Typography>

    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Pickup Date"
          type="date"
          fullWidth
          name="pickupDate"
          value={pickupDetails.pickupDate}
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Pickup Time"
          type="time"
          fullWidth
          name="pickupTime"
          value={pickupDetails.pickupTime}
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Name"
          fullWidth
          name="name"
          value={pickupDetails.name}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Contact Number"
          fullWidth
          name="contactNumber"
          value={pickupDetails.contactNumber}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email Address"
          fullWidth
          name="emailAddress"
          value={pickupDetails.emailAddress}
          onChange={handleInputChange}
        />
      </Grid>
    </Grid>

    <Button
      variant="contained"
      color="primary"
      onClick={handleAddDetails}
      style={{ marginTop: "16px" }}
    >
      Add Details
    </Button>
  </div>
  );
};

export default PickupDetailsForm;
