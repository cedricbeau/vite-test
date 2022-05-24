import Alpine from 'alpinejs';

// Import custom components
import toggle from './js/toggle.js';
import tab from './js/tab';
import posts from './js/posts.js';
import modal from './js/modal.js'

// Add custom components
Alpine.data('toggle', toggle);
Alpine.data('tab', tab);
Alpine.data('posts', posts);
Alpine.data('modal', modal);


window.Alpine = Alpine;
Alpine.start();