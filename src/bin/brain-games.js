#!/usr/bin/env node

import * as braingame from '..'

braingame.printCongratulation();
 
const name = braingame.askAboutName();

braingame.printUserCongratulation(name);



