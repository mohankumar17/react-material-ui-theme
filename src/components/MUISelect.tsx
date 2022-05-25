import React from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useState } from "react";

//Drop Down
// function MUISelect() {
//   const [country, setCountry] = useState("");
//   console.log(country);
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCountry(event.target.value as string);
//   };
//   return (
//     <Box width="250px">
//       <TextField
//         label="Select Country"
//         select
//         value={country}
//         onChange={handleChange}
//         fullWidth
//       >
//         <MenuItem value="IND">India</MenuItem>
//         <MenuItem value="USA">America</MenuItem>
//         <MenuItem value="AUS">Australia</MenuItem>
//       </TextField>
//     </Box>
//   );
// }

//Multi Select
function MUISelect() {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="IND">India</MenuItem>
        <MenuItem value="USA">America</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
    </Box>
  );
}

export default MUISelect;
