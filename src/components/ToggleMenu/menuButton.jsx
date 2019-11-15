import React from 'react';
import { Pane, Text, Tooltip } from '@cybercongress/gravity';
// import { Tooltip } from '..';

const stausImgCyb = require('../../image/cyb.svg');
const bug = require('../../image/bug.svg');

export const MenuButton = ({ imgLogo, ...props }) => (
  <Tooltip
    content="The app is not production ready and is for testing and experimentation only. All send tokens will be lost."
    position="bottom"
  >
    <Pane {...props} display="flex" alignItems="center" cursor="pointer">
      <Pane
        width={50}
        // height={50}
        position="relative"
        display="flex"
        align-items="flex-end"
      >
        <img
          style={{ width: 'inherit' }}
          alt="cyb"
          src={imgLogo || stausImgCyb}
        />
        <img
          src={bug}
          alt="bug"
          style={{
            // width: 15,
            height: 20,
            position: 'absolute',
            bottom: '-20%',
            left: '100%'
          }}
        />
      </Pane>
    </Pane>
  </Tooltip>
);