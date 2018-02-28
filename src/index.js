import './style.scss';
import './bg.css';
import { map } from 'lodash';

import { log } from './app2';

const html = `<div class="red">This is very cool</div>`;

map([1, 2, 3], () => {});

log(html);

document.body.innerHTML = html;
