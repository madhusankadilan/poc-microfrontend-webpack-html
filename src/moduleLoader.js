// src/moduleLoader.js
import { loadMicroFrontend } from './utils/index.js';

// Separate initialization logic
async function initializeMicroFrontends() {
   await loadMicroFrontend('module1Container', './modules/module1.html');
   await loadMicroFrontend('module2Container', './modules/module2.html');
 }
 
 // Initialize micro frontends when this module is imported
initializeMicroFrontends();