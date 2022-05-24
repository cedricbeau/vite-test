import Alpine from 'alpinejs';
import hello from './hello.js';
import posts from './posts.js';

// Add custom components
Alpine.data('hello', hello);
Alpine.data('posts', posts);


window.Alpine = Alpine;
Alpine.start();