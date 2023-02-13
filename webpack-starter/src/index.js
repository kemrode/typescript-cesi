import { Header } from './app/header';
import { Footer } from './app/footer';
import '../src/style.css';
import './styles/scss/main.scss';
import cuirassejpeg from './assets/images/cuirasse.jpeg';

let header = new Header();
let firstHeading = header.getFirstHeading();
console.log(firstHeading);

let footer = new Footer();
let footerText = footer.getFooterText();
console.log(footerText);


document.getElementById('cuirasse-jpeg').setAttribute('src', cuirassejpeg);