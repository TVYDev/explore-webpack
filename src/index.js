import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import DataXML from './data.xml';
import DataCSV from './data.csv';
import DataJSON from './data.json';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    console.log('Data XML', DataXML);
    console.log('Data CSV', DataCSV);
    console.log('Data JSON', DataJSON);

    return element;
}

document.body.appendChild(component());
