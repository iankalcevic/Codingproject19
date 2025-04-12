import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, setTours, onRemove }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    try {
      const response = await fetch("https://course-api.com/react-tours-project");
      const data = await response.json();
      setTours(data);
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Something went wrong...</h2>;

  return (
    <section className="tour-list">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Gallery;
