import { configure } from '@storybook/vue';

// automatically import all files ending in *.stories.js
// configure(require.context('../stories', true, /\.stories\.js$/), module);

const req = require.context('../src', true, /.stories.(j|t)s$/);
function loadStories() {
	req.keys().foreach(filename => req(filename));
}

configure(loadStories, module)
