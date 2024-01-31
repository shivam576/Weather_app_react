import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Kolkata",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "Punjab",
    },
    {
      id: 4,
      title: "Chennai",
    },
    {
      id: 5,
      title: "Patna",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
