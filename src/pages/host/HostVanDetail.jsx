import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans[0]));
  }, []);

  return (
    <>
      {!currentVan ? (
        <h1>Loading.....</h1>
      ) : (
        <div>
          <img src={currentVan.imageUrl} width={150} alt={currentVan.name} />
          <h2>{currentVan.name}</h2>
          <p>{currentVan.price}</p>
          <p>{currentVan.type}</p>
        </div>
      )}
    </>
  );
}
