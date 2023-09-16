import '../assets/styles/reset.scss';
import '../assets/styles/index.scss';
import  '../assets/styles/index.md.scss';
import '../assets/styles/index.lg.scss';

import {burgerInit} from "./burger";
import {init as petsModalInit} from './petsModal';
import {init as cardValidatorInit} from "./cardValidator";

burgerInit();
petsModalInit();
cardValidatorInit();