import React from 'react';
import { MenuButton } from '../../components';

const Menu = ({ imgLogo, openMenu, toggleMenu }) => (
  <MenuButton imgLogo={imgLogo} openmenu={openMenu} onClick={toggleMenu} />
);

export default Menu;
