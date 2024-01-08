import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const [currentVan] = useOutletContext();

  console.log(currentVan);
  return <h1>Host Van info here</h1>;
}
