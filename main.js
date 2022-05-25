import Alpine from 'alpinejs';

// Import custom components
import toggle from './js/toggle.js';
import tab from './js/tab';
import posts from './js/posts.js';
import modal from './js/modal.js';
import books from './js/books.js';

// Add custom components
Alpine.data('toggle', toggle);
Alpine.data('tab', tab);
Alpine.data('posts', posts);
Alpine.data('modal', modal);
Alpine.data('books', books);


window.Alpine = Alpine;
Alpine.start();