import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';

import App from './App';

import * as serviceWorker from './serviceWorker';

import './index.css';

window.renderTemplate = (containerId, history) => {
	ReactDOM.render(
		<App history={history} />,
		document.getElementById(containerId)
	);

	serviceWorker.unregister();
};

window.unmountTemplate = containerId => {
	ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Template-container')) {
	ReactDOM.render(
	  <React.StrictMode>
	    <App />
	  </React.StrictMode>,
	  document.getElementById('root')
	);

	serviceWorker.unregister();
}
