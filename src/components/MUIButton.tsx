import React from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

import { useState } from "react";

function MUIButton() {
  const [formats, setFormats] = useState<string | null>(null);
  console.log(formats);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };

  return (
    <Stack spacing={6}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://www.google.com">
          TEXT
        </Button>
        <Button variant="contained">CONTAINED</Button>
        <Button variant="outlined">OUTLINED</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="large">
          Large
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="small">
          Small
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon></SendIcon>}
          onClick={() => alert("Clicked")}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon></SendIcon>}>
          Send
        </Button>

        <IconButton araia-label="send" color="success">
          <SendIcon></SendIcon>
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          aria-label="alignment button group"
        >
          <Button color="primary">Primary</Button>
          <Button color="warning">Warning</Button>
          <Button color="success">Success</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="success"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon></FormatBoldIcon>
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon></FormatItalicIcon>
          </ToggleButton>
          <ToggleButton value="underline" aria-label="underlined">
            <FormatUnderlinedIcon></FormatUnderlinedIcon>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MUIButton;
