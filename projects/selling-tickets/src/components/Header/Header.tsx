import { FC } from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

export type HeaderProps = {
  title: string;
};

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="Header">
      <Logo className="Header__logo" />
      <h1 className="Header__title">{title}</h1>
    </header>
  );
};
