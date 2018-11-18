import React from  'react';
import { Menu, Image, Header, Icon } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return  (
    <Menu style={{ marginTop: '15px' }}>
      <Menu.Item>
        <Link route="/">
        <a>
          <Image
            size="tiny"
            src="https://image.ibb.co/ib5rs0/jetpack.png" />
        </a>
        </Link>
      </Menu.Item>
      <Link route="/">
        <a className="item">
          <Header
            as='h1'>JetPack</Header>
        </a>
      </Link>
      <Menu.Menu position="right">
      <Menu.Item>
        <Link route="/">
          <a>
            <Header as='h3'>Projects</Header>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link route="/campaigns/new">
          <a style={{marginLeft: 15, marginRight: 10}}>
            <Icon name='plus' size="large" circular/>
          </a>
        </Link>
      </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
