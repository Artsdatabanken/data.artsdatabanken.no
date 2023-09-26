import { Avatar } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";

const styles = {
  img: {
    width: 24,
    height: 24,
    position: "relative",
    objectFit: "contain",
    filter: "drop-shadow(1px 1px 2px #999)"
  },
  big: {},
  root: {
    display: "contents",
    borderRadius: 0
  }
};

class BildeAvatar extends Component {
  render() {
    const { classes, url } = this.props;
    return (
      <Avatar
        alt="logo"
        classes={{
          root: classes.root,
          img: classes.img
        }}
        src={"https://data.artsdatabanken.no" + 
        "/Administrativ_grense/Territorialområde/Fastlands-Norge/Trøndelag" + "/logo_24.png"}
      />
    );
  }
}

export default withStyles(styles)(BildeAvatar);
