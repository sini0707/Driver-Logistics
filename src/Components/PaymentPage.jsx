import React, { useState } from "react";
import { Button, Card } from "@mui/material";
import PaymentSummary from "./PaymentSummary"; 

const PaymentPage = ({ orders }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);


  const totalWeight = orders.reduce((total, order) => {
    return total + order.actualWeight * order.quantity;
  }, 0);

  const baseRatePerKg = 25;
  const subTotal = totalWeight * baseRatePerKg;

  const handlePayNow = () => {
    setShowConfirmation(true);
  };

  if (showConfirmation) {
    return <div>Payment Successful!</div>;
  }

  return (
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
     
        <PaymentSummary totalWeight={totalWeight} subTotal={subTotal} />

     
        <Button
          variant="contained"
          color="primary"
          onClick={handlePayNow}
          style={{ margin: "20px auto", display: "block" }}
        >
          Pay INR {subTotal.toFixed(2)}
        </Button>
      </Card>
    </div>
  );
};

export default PaymentPage;
