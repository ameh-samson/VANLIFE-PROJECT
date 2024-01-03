import React, { useEffect } from "react";

export default function Vans() {
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <></>;
}
