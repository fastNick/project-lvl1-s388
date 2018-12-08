install:
	npm install

start:
	npx babel-node -- src/bin/brain-arithmetic-progression.js

publish:
	npm publish

lint:
	npx eslint --debug .
