#!/usr/bin/env node

import * as braingame from '..'

braingame.printCongratulation("Welcome to the Brain Games!");
 
const name = braingame.askAboutName();

braingame.printUserCongratulation(name);



