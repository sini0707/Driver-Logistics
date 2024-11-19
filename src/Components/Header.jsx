import React from "react";
import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
      bgcolor="lightgray"
    >
      {/* Left Section - Font Awesome Icon and Company Name */}
      <Box display="flex" alignItems="center">
        <FontAwesomeIcon
          icon={faCompass}
          style={{ fontSize: "30px", color: "purple", marginRight: "10px" }}
        />
<Typography
  variant="h6"
  component="div"
  sx={{
    color: "#FF914D",
    textShadow: "0 0 10px #FF914D, 0 0 20px #FF6F61",
    fontWeight: "bold",
  }}
>
  Driver Logistics
</Typography>




      </Box>

      {/* Right Section - Contact Info */}
      <Box display="flex" alignItems="center" gap={2}>
        {/* Phone Section */}
        <Box
  display="flex"
  alignItems="center"
  sx={{
    "&:hover": {
      background: "linear-gradient(90deg, #FF6F61, #FF914D)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      transition: "background 0.3s ease-in-out",
    },
  }}
>
  <PhoneIcon sx={{ color: "gray", marginRight: 0.5 }} />
  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
    917736172777
  </Typography>
</Box>


        {/* Email Section */}
        <Box display="flex" alignItems="center">
          <EmailIcon sx={{ color: "blue", marginRight: 0.5 }} />
          <Box
  sx={{
    display: "flex",
    alignItems: "center",
    "&:hover .email-text": {
      color: "blueviolet", // Changes to blueviolet on hover
      fontWeight: "bold", // Adds slight boldness on hover
      transition: "color 0.3s ease, font-weight 0.3s ease",
    },
  }}
>
  <Typography
    variant="body1"
    className="email-text"
    sx={{
      color: "blue", // Default blue color
      cursor: "pointer", // Pointer cursor for interactivity
    }}
  >
    itsupport@Driverlogistics.in
  </Typography>
</Box>

         
          {/* /* Blue Circle */}
          <Box
    className="blue-circle"
    sx={{
      width: 40, // Increased size for avatar look
      height: 40,
      backgroundColor: "blue",
      borderRadius: "50%",
      marginLeft: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
    }}
  >
    D {/* Add a letter or icon here */}
  </Box>
</Box>

      </Box>
    </Box> // Properly closing the outermost Box
  );
};

export default Header;

