
import React, { useState } from 'react';
import { Button, Modal, Box, Typography, Grid } from '@mui/material';


const PaymentButton = ({orders}) => {
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    
  // Booking details
  const bookingDetails = {
    bookingDate: '20-01-2023',
    hub: 'Ernakulam Unit Hub',
    AWBId: 'AWB123456',
    from: 'Kochi',
    to: 'Chennai',
    totalDistance: '500 km',
    productCategory: 'Electronics',
    amountPaid: '$110',
    estDeliveryDate: '25-01-2023',
  };

  // Modal open/close handlers
  const handleOpenModal = () => {
    setIsPaymentModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsPaymentModalOpen(false);
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



  return (
    <div>
      

      <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h6">Payment Summary</Typography>
      <Typography>
  Total Weight: {(orders || []).reduce((sum, order) => sum + parseFloat(order.actualWeight || 0), 0)} Kg
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
        onClose={handleCloseModal}
        aria-labelledby="payment-confirmation-title"
        aria-describedby="payment-confirmation-description"
      >
        <Box sx={modalStyle}>
          <Typography id="payment-confirmation-title" variant="h6" component="h2" gutterBottom>
            Your Booking is Confirmed, Thank You
          </Typography>
          <Typography>
            <strong>Booked on:</strong> {bookingDetails.bookingDate}
          </Typography>
          <Typography>
            <strong>Hub:</strong> {bookingDetails.hub}
          </Typography>
          <Grid container spacing={1} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography><strong>AWB Id:</strong></Typography>
              <Typography><strong>From:</strong></Typography>
              <Typography><strong>To:</strong></Typography>
              <Typography><strong>Total Distance:</strong></Typography>
              <Typography><strong>Product Category:</strong></Typography>
              <Typography><strong>Amount Paid:</strong></Typography>
              <Typography><strong>EST Delivery Date:</strong></Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{bookingDetails.AWBId}</Typography>
              <Typography>{bookingDetails.from}</Typography>
              <Typography>{bookingDetails.to}</Typography>
              <Typography>{bookingDetails.totalDistance}</Typography>
              <Typography>{bookingDetails.productCategory}</Typography>
              <Typography>{bookingDetails.amountPaid}</Typography>
              <Typography>{bookingDetails.estDeliveryDate}</Typography>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" color="primary" onClick={handleCloseModal}>
              View Order Confirmation
            </Button>
            <Button variant="outlined" color="secondary">
              Download Receipt
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>

    </div>
  )
}

export default PaymentButton
