import React, { useEffect, useState } from "react";
import Resultatliste from "./Search/Resultatliste";
import LookupControl from "./Search/LookupControl";
import axios from "axios";
import HeaderView from "./HeaderView";

const Header = ({ title }) => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState();
  useEffect(() => {
    if (!query) return setHits([]);

    const fetchData = async () => {
      const result = await axios("https://lookup.artsdatabanken.no/" + query);
      setHits(result.data.result);
    };
    fetchData();
  }, [query]);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 5 }}>
      <HeaderView title={title} />
      <div
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          color: "#4c4a48",
          zIndex: 5,
          right: 12,
          top: 9,
          paddingLeft: 8,
          paddingRight: 8,
          width: 392
        }}
      >
        {!title && (
          <>
            <LookupControl
              onBlur={() => {
                setQuery("");
              }}
              onQueryChange={e => setQuery(e.target.value)}
              query={query}
            />
            <div
              style={{
                marginTop: 1
              }}
            >
              <Resultatliste
                query={query}
                searchResults={hits}
                onSelect={() => {
                  setQuery(null);
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
