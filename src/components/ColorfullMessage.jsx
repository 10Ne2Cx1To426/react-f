import React from "react";

export const ColorfullMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px",
    border: `${color} solid 1px`
  };
  return <p style={contentStyle}>{children}</p>;
};
