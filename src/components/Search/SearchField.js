import { Input, Paper } from "@mui/material";
import React, { useRef } from "react";

const SearchField = ({ onBlur, onQueryChange, query }) => {
  const inputEl = useRef(null);
  return (
    <Paper elevation={1} square={false}>
      <Input
        style={{ marginLeft: 8, width: "100%" }}
        inputRef={inputEl}
        value={query}
        placeholder={"Søk..."}
        onBlur={onBlur}
        onChange={onQueryChange}
        disableUnderline={true}
      />
    </Paper>
  );
};

export default SearchField;
