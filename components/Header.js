import React from  'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from '../routes';
import logo from './jetpack.png';

export default () => {
  return  (
    <Menu style={{ marginTop: '15px' }}>
      <Menu.Item>
        <Image src={logo} />
      </Menu.Item>
      <Link route="/">
        <a className="item">JetPack</a>
      </Link>
      <Menu.Menu position="right">
      <Link route="/">
        <a className="item">Campaigns</a>
      </Link>
      <Link route="/campaigns/new">
        <a className="item">+</a>
      </Link>
      </Menu.Menu>
    </Menu>
  );
};
