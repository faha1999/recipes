import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

export const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=$(name)`,
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <div className="grid">
      {cuisine.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.image} alt="{item.title}" />
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
};
