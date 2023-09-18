import '../assets/styles/reset.scss';
import '../assets/styles/index.scss';
import  '../assets/styles/index.md.scss';
import '../assets/styles/index.lg.scss';

import {burgerInit} from "./burger";
import {init as cardValidatorInit} from "./cardValidator";
import {init as petsCarouseInit} from "./petsCarousel";
import {init as bpInit} from "shelter/jsSrc/breakpoints";

bpInit();
burgerInit();
cardValidatorInit();
petsCarouseInit(1,2, 3);
