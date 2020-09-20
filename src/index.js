import React from 'react';
import ReactDOM from 'react-dom';

// Bootstrap
import './assets/imports/bootstrap.js';
// animate.css
import 'animate.css/animate.min.css'

import { HeroesApp } from './HeroesApp';

ReactDOM.render(
  <HeroesApp />,
  document.getElementById('root')
);
