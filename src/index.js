import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './icon.png';
import DataXML from './data.xml';
import DataCSV from './data.csv';
import DataJSON from './data.json';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    element.appendChild(btn);

    console.log('Data XML', DataXML);
    console.log('Data CSV', DataCSV);
    console.log('Data JSON', DataJSON);

    return element;
}

document.body.appendChild(component());
