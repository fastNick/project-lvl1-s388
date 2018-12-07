#!/usr/bin/env node

import * as braineven from '..'

const numberOfQuestions = 3;
const maxNumberForRandomValues = 20;

braineven.initializeAnswers();

braineven.printCongratulation();
 
const name = braineven.askAboutName();

braineven.printUserCongratulation(name);

braineven.giveTask(numberOfQuestions, maxNumberForRandomValues, name);

