import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a onClick={() => props.tutorial()} className="what" href="#what">
            What?
          </a>
        </li>
        <li>
          <a className="new" href="#">
            + New Game
          </a>
        </li>
      </ul>
    </nav>
  );
}
