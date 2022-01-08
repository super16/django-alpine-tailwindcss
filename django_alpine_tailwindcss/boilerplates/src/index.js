import './style.css';
import Alpine from 'alpinejs';

Alpine.data('app', () => ({
  open: false,
}));

window.Alpine = Alpine;
Alpine.start();
