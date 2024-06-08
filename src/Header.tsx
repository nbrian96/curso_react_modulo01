import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className='container'>
      <a href="#">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="#">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h2>
        {title}
      </h2>
    </div>
  );
}

export default Header;
