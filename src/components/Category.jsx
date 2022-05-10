import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

export const Category = () => {
  return (
    <div className="Category">
      <NavLink className="nav" to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>

      <NavLink className="nav" to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>

      <NavLink className="nav" to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>

      <NavLink className="nav" to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>

      <NavLink className="nav" to={'/cuisine/Chinese'}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </NavLink>
    </div>
  );
};
