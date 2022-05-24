import Alpine from 'alpinejs';

// Import custom components
import toggle from './js/toggle.js';
import hello from './js/hello.js';
import posts from './js/posts.js';

// Add custom components
Alpine.data('toggle', toggle);
Alpine.data('hello', hello);
Alpine.data('posts', posts);


window.Alpine = Alpine;
Alpine.start();