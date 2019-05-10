import { Input, Paper } from "@material-ui/core";
import React, { useEffect, useRef } from "react";

const SearchBox = ({ isSearching, onBlur, onQueryChange, query }) => {
  const inputEl = useRef(null);
  useEffect(() => {
    if (isSearching) inputEl.current.focus();
  }, [isSearching]);
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

export default SearchBox;
