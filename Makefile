install:
	npm install

start:
	npx babel-node -- src/bin/games/brain-calc.js

publish:
	npm publish

lint:
	npx eslint --fix --debug .
