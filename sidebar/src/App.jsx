import React from 'react';
import ReactDOM from 'react-dom';

import Sidbarexpo from './Sidbarexpo';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <div>
    <BrowserRouter>
      <Sidbarexpo />
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
