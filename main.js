import Alpine from 'alpinejs';

// Import custom components
import menu from './js/menu';
import toggle from './js/toggle.js';
import tab from './js/tab';
import posts from './js/posts.js';
import modal from './js/modal.js';
import books from './js/books.js';
import pokemons from './js/pokemons';
import todos from './js/todos';
import colors from './js/colors';

// Add custom components
Alpine.data('menu', menu);
Alpine.data('toggle', toggle);
Alpine.data('tab', tab);
Alpine.data('posts', posts);
Alpine.data('modal', modal);
Alpine.data('books', books);
Alpine.data('pokemons', pokemons);
Alpine.data('todos', todos);
Alpine.data('colors', colors);

window.Alpine = Alpine;
Alpine.start();