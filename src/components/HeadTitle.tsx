import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/logo-gndx.png';

type TitleProps = {
  title: String;
};

const HeadTitle = ({ title }: TitleProps) => {
  return (
    <h1 className="Header-title">
      <img src={logo} alt="Logo" width="32px" />
      <Link to="/">{title}</Link>
    </h1>
  );
};

export default HeadTitle;
