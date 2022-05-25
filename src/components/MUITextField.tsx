import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

function MUITextField() {
  const [value, setValue] = useState<string>("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Primary Name" variant="outlined"></TextField>
        <TextField label="Primary Name" variant="standard"></TextField>
        <TextField label="Primary Name" variant="filled"></TextField>
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Secondary Name"
          size="small"
          color="secondary"
        ></TextField>

        <TextField
          label="Username"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={!value ? "Required" : "Proceed with password"}
          error={!value}
        ></TextField>
        <TextField
          label="Password"
          required
          helperText="Enter 8 digit password"
          type="password"
        ></TextField>
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rs.</InputAdornment>
            ),
          }}
        ></TextField>

        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        ></TextField>
      </Stack>
    </Stack>
  );
}

export default MUITextField;
