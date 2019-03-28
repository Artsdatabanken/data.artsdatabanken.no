import React from "react";

//const arealFastland = 385180000000;
const Statistikk = ({
  tittel,
  areal,
  geometrier,
  arealPrefix,
  geometrierPrefix
}) => {
  if (!areal) return null;
  return (
    <div
      style={{
        paddingBottom: 12,
        fontWeight: 500,
        color: "hsla(0, 0%, 0%, 0.5)"
      }}
    >
      <div>Areal:&nbsp;{tilArealString(areal)}</div>
    </div>
  );
};

/*         ({((areal / arealFastland) * 100).toFixed(1)}%
        av Fastlands-Norge)
*/

function tilArealString(areal) {
  if (areal < 50000) return areal.toFixed(0) + " m²";
  areal /= 1000000;
  return areal.toFixed(0) + " km²";
}

export default Statistikk;
