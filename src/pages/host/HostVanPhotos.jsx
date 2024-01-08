import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos() {
  const [currentVan, setCurrentVan] = useOutletContext();
  return <h1>HostVan photos here</h1>;
}
