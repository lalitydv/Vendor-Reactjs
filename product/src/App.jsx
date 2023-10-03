import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Routings from './Routing/Routings';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <div>
    <BrowserRouter>
      <Routings />
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
