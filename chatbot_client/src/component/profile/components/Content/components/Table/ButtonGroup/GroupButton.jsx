import React from "react";
import { ButtonGroup, Flex } from "@chakra-ui/react";
import ExternalLink from "./Buttons/ExternalLink";
import Edit from "./Buttons/EditIcon";
import Delete from "./Buttons/DeleteIcon";
import ViewProfile from "./Buttons/ViewProfile";

function GroupButton({token}) {
  return (
    <>

        <ButtonGroup variant="solid" size="sm" spacing={3}>
          <ExternalLink token={token} />
          <Delete  />
        </ButtonGroup>

    </>
  );
}

export default GroupButton;
