import React from "react";

const Projeksjon = ({ epsg }) => {
  const e = projections[epsg] ? (
    <a href={projections[epsg].url}>{epsg}</a>
  ) : (
    epsg
  );
  return <div style={{ paddingRight: 4 }}>{e}</div>;
};

const projections = {
  3857: {
    url:
      "http://spatialreference.org/ref/sr-org/epsg3857-wgs84-web-mercator-auxiliary-sphere/"
  },
  4326: { url: "http://spatialreference.org/ref/epsg/4326/" },
  32633: { url: "http://spatialreference.org/ref/epsg/32633/" }
};

export default Projeksjon;
