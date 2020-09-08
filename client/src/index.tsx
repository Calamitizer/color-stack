import React from 'react';
import { render } from 'react-dom';
import App from '@client/App';
import configureStore from '@client/redux/store';
import theme from '@client/theme';

const app = <App store={configureStore()} {...{ theme }} />;
const mountPoint = document.getElementById('mount-point');

render(app, mountPoint);
