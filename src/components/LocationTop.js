import React from "react";

function LocationTop({clickButtonCity}) {
  const cities = [
    {
      id: 1,
      region:"Da Nang, Viet Nam",
      city: "Da nang",
    },
    {
      id: 2,
      region:"Paris, France",
      city: "Paris",
    },
    {
      id: 3,
      region:"London, United Kingdom",
      city: "London",
    },
    {
      id: 4,
      region:"Tokyo, Japan",
      city: "Tokyo",
    },
    {
      id: 5,
      region:"New York,United States of America",
      city: "New york",
    },

  ];
  return (
    <div className="hidden sm:flex items-center justify-around my-2">
      {cities.map(({id,region,city}) => (
        <button onClick={()=>{clickButtonCity(region)}} key={id} className="text-white text-lg font-medium">{city}</button>
      ))}
    </div>
  );
};

export default LocationTop;