import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

export const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`,
    );
    const data = await api.json();
    setPopular(data.recipes);
    console.log(data.recipes);
  };

  return (
    <div className="wrapper">
      <h3>Popular Picks</h3>

      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="card">
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <div className="shadow"></div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};
