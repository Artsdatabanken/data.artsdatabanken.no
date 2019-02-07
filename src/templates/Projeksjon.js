import React, { Component } from "react";
import PropTypes from "prop-types";

const Projeksjon = ({ epsg }) => {
  if (projections[epsg]) return <a href={projections[epsg].url}>{epsg}</a>;
  return epsg;
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
