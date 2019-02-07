import React from "react";

const arealFastland = 385180000000;
const Statistikk = ({
  tittel,
  areal,
  geometrier,
  arealPrefix,
  geometrierPrefix
}) => {
  if (!areal) return null;
  return (
    <div>
      <div>
        {tittel} areal:&nbsp;
        {tilArealString(areal)} ({((areal / arealFastland) * 100).toFixed(1)}%
        av datasettet)
        <p />
        Datasettet dekker med {tilArealString(arealPrefix)}{" "}
        {((arealPrefix / arealFastland) * 100).toFixed(1)}% av Fastlands-Norge.
      </div>
    </div>
  );
};

function tilArealString(areal) {
  if (areal < 50000) return areal.toFixed(0) + " m²";
  areal /= 1000000;
  return areal.toFixed(0) + " km²";
}

export default Statistikk;
