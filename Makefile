install:
	npm install

start:
	npx babel-node -- src/bin/games/brain-even.js

publish:
	npm publish

lint:
	npx eslint --fix --debug .
