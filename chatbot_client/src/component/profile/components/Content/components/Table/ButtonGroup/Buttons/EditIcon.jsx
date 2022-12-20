import React from "react";
import { IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

function Edit(props) {
  return (
    <IconButton colorScheme="green" icon={<EditIcon />} aria-label="Edit" />
  );
}

export default Edit;
