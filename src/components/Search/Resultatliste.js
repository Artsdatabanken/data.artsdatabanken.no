import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper
} from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import Bildeavatar from "./Bildeavatar";

const styles = {
  listitemtext: {
    fontSize: 13,
    display: "flex",
    justifyContent: "space-between"
  },
  text: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  inset: { marginLeft: 48 },
  listitem: { height: 38, cursor: "pointer" },
  kode: {
    color: "#999",
    fontSize: 13,
    fontWeight: 400,
    hyphens: "unset",
    whiteSpace: "nowrap"
  },
  textmatch: { color: "hsl(30, 3%, 29%)", fontWeight: 500 },
  textnomatch: { color: "#333", fontWeight: 400 }
};

class ResultatListe extends Component {
  filtrer(kode) {
    const prefix = kode.substring(0, 2);
    switch (prefix) {
      case "AR":
      case "AO":
      case "VV":
        return "";
      default:
        return kode.substring(3);
    }
  }

  render() {
    const { query, searchResults, classes } = this.props;
    if (!searchResults) return null;
    if (!searchResults.length > 0) return null;
    return (
      <Paper elevation={1}>
        <List
          style={{
            paddingTop: 0,
            paddingBottom: 0,
            maxHeight: "90%"
          }}
        >
          {searchResults.map(item => {
            const navn = item.title;
            return (
              <React.Fragment key={item.url}>
                <ListItem
                  button={true}
                  className={classes.listitem}
                  onMouseDown={() => {
                    window.location = item.url;
                  }}
                  key={item.url}
                >
                  <Bildeavatar size="small" kode={item.kode} url={item.url} />
                  <ListItemText classes={{ primary: classes.listitemtext }}>
                    <div className={classes.text}>
                      {ResultatListe.highlightMatch(navn, query, classes)}
                    </div>
                    <div className={classes.kode}>
                      {ResultatListe.highlightMatch(
                        this.filtrer(item.kode),
                        query,
                        classes
                      )}
                    </div>
                  </ListItemText>
                </ListItem>
                <Divider className={classes.inset} />
              </React.Fragment>
            );
          })}
        </List>
      </Paper>
    );
  }

  static highlightMatch(text, query, classes) {
    if (!query) return text;
    const q = query.toLowerCase().split(" ")[0];
    const offset = text.toLowerCase().indexOf(q);
    if (offset < 0) return text;

    const end = offset + q.length;
    return (
      <span className={classes.textnomatch}>
        {text.substring(0, offset)}
        <span className={classes.textmatch}>{text.substring(offset, end)}</span>
        {text.substring(end, text.length)}
      </span>
    );
  }
}

export default withStyles(styles)(ResultatListe);
