import React, { useState, useEffect } from "react";
import SearchField from "./SearchField";

const LookupControl = ({ query, classes, onBlur, onQueryChange }) => {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <SearchField
      isSearching={isSearching}
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
