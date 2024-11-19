import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        py: 2,
        px: 4,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        borderTop: "1px solid #ddd",
      }}
    >
      <Typography variant="body2" sx={{ display: "flex", gap: 3 }}>
        <Link href="/" color="inherit" underline="hover">
          Home |
        </Link>
        <Link href="/contact" color="inherit" underline="hover">
          Contact Us |
        </Link>
        <Link href="/system-config" color="inherit" underline="hover">
          System Configuration
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
