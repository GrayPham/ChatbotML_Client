import React from "react";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function Delete(props) {
  return (
    <IconButton
      colorScheme="red"
      variant="outline"
      icon={<DeleteIcon />}
      aria-label="Delete"
    />
  );
}

export default Delete;
