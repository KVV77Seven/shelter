import './initStyles';
import {burgerInit} from "./burger";
import {init as paginationInit} from "shelter/jsSrc/pagination";
import {init as bpInit} from "shelter/jsSrc/breakpoints";
import {init as modalInit} from "shelter/jsSrc/petsModal";

bpInit();
modalInit();
burgerInit();
paginationInit(3, 6, 8);