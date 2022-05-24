import Alpine from 'alpinejs';

// Import custom components
import toggle from './toggle.js';
import hello from './hello.js';
import posts from './posts.js';

// Add custom components
Alpine.data('toggle', toggle);
Alpine.data('hello', hello);
Alpine.data('posts', posts);


window.Alpine = Alpine;
Alpine.start();