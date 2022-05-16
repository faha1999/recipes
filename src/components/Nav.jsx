import React from 'react';
import { Link } from 'react-router-dom';

import { BiFoodMenu } from 'react-icons/bi';

export const Nav = () => {
  return (
    <Link to={'/'}>
      <nav>
        <BiFoodMenu /> <span className="logo">recipes</span>
      </nav>
    </Link>
  );
};
