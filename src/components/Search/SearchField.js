import { Input, Paper } from "@material-ui/core";
import React, { useEffect, useRef } from "react";

const SearchBox = ({ isSearching, onBlur, onQueryChange, query, classes }) => {
  const inputEl = useRef(null);
  useEffect(() => {
    if (isSearching) inputEl.current.focus();
  }, [isSearching]);
  return (
    <Paper
      elevation={3}
      square={false}
      style={{ _color: "#4c4a48", _margin: 0 }}
    >
      <Input
        style={{ marginLeft: 8 }}
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

export default SearchBox;
