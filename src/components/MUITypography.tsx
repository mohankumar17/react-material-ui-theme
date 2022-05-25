import React from "react";
import { Typography } from "@mui/material";

function MUITypography() {
  return (
    <div>
      <Typography variant="h3">H3 Heading</Typography>

      {/*Overriding semantics using component*/}
      <Typography variant="h4" component="h2">
        H2 Heading
      </Typography>

      <Typography variant="subtitle1">Subtitle</Typography>

      <Typography variant="body1">
        A set of reusable components for design tools is available, designed to
        match the React components and to help you craft great products
      </Typography>
    </div>
  );
}

export default MUITypography;
