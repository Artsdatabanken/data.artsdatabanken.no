import React, { useState } from "react";
import SearchField from "./SearchField";

const LookupControl = ({ query, onBlur, onQueryChange }) => {
  return (
    <SearchField
      query={query}
      onFocus={() => {}}
      onBlur={onBlur}
      onQueryChange={onQueryChange}
      onExitToRoot={() => {}}
      onKeyEnter={() => {}}
      isAtRoot={true}
    />
  );
};

export default LookupControl;
