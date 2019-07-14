import '../css/main.css';
import { init } from './modules/initialize';

window.onload = () => {
    console.log('%c Loaded', 'color:lightgreen;')
    init();
}