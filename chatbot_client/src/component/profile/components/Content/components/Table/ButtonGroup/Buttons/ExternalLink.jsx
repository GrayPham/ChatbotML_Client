import React from "react";
import { IconButton } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function ExternalLink({token}) {
  const handleOnClick = (e) => {
    e.preventDefault();
    console.log("Token clicked", token)
  }
  return (
    <IconButton
      colorScheme="blue"
      icon={<ExternalLinkIcon />}
      aria-label="Up"
      onClick={handleOnClick}
    />
  );
}

export default ExternalLink;
