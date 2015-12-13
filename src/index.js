// Load styles

require('./styles/style.css');

// Load modules

import MyApp from './modules/MyApp';

// Load controllers

import MainController from './controllers/MainController';

MyApp.controller('MainController', MainController);
