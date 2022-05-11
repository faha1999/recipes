import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`,
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="grid">
      {searchedRecipes.map((item) => {
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
