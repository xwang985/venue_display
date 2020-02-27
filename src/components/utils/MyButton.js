import React, { Component } from "react";
import { Button } from "@material-ui/core";
import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = ({ text, background, color, link }) => {
  return (
    <Button
      href={link}
      variant="contained"
      size="small"
      style={{ background, color }}
    >
      <img src={TicketIcon} className="iconImage" alt="iconButton" />
      {text}
    </Button>
  );
};

export default MyButton;
