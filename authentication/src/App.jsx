import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';
import './index.scss';
import Routs from './Routs';

const App = () => <Routs />;
const root = document.getElementById('app');
const rootElement = createRoot(root);
rootElement.render(<App />);
// ReactDOM.render(<App />, document.getElementById('app'));
