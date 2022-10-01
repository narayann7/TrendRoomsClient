import React from "react";
import common_components from "./CommonComponents";
import { Box, InputBase } from "@mui/material";
import {
  center_column,
  textfield_style,
  app_button_2,
} from "../theme/CommonStyles";
import Spacer from "./Spacer";
import { RiArrowRightSLine } from "react-icons/ri";
function AskName() {
  return (
    <Box sx={center_column}>
      <Text variant="h6">🤔 What's your full name? </Text>
      <Spacer height={10} />
      <Box sx={textfield_style}>
        <InputBase
          type="text"
          placeholder="Your name"
          sx={{
            color: "white",
          }}
        />
      </Box>
      <Spacer height={10} />
      <AppButton
        sx={app_button_2}
        endIcon={<RiArrowRightSLine color="white" />}
      >
        <Text>Next</Text>
      </AppButton>
    </Box>
  );
}

export default AskName;
const Text = common_components.Text;
const AppButton = common_components.AppButton;