import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

const footerStyles = {
  backgroundColor: (theme) =>
    theme.palette.mode === "light"
      ? theme.palette.grey[200]
      : theme.palette.grey[800],
  padding: 6,
  position: "absolute",
  bottom: 0,
  width: "100%",
};

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh", // This makes the container take up the full viewport height
};

export default function Footer() {
  return (
    <Box sx={containerStyles}>
      <Container sx={footerStyles} component="footer" maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}
