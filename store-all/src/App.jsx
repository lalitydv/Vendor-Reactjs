import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Routings from './Routing/Routings';

const App = () => (
  <div>
    <Routings />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
