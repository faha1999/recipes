import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Recipes = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('Instruction');

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
    );
    const detailsData = await data.json();
    setDetails(detailsData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="details">
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="{details.title" />
      </div>

      <div className="info">
        <button
          className={activeTab === 'instruction' ? 'active' : ''}
          onClick={() => setActiveTab('instruction')}
        >
          Instruction
        </button>
        <button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </button>
      </div>
    </div>
  );
};
