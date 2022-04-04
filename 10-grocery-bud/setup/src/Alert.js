import React, { useEffect } from "react";

const Alert = ({ alert ,removeAlert}) => {
  const { type, msg } = alert;

  useEffect(() => {
    setTimeout(() => {
      removeAlert();
    },3000);
  });

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
