
import "./initStyles";
import {burgerInit} from "./burger";
import {init as cardValidatorInit} from "./cardValidator";
import {init as petsCarouseInit} from "./petsCarousel";
import {init as bpInit} from "shelter/jsSrc/breakpoints";
import {init as modalInit} from "shelter/jsSrc/petsModal";

bpInit();
modalInit();
burgerInit();
cardValidatorInit();
petsCarouseInit(1,2, 3);
