import {writeFile} from 'node:fs';

writeFile('./hell.html', '<h1>Learning Nodejs</h1>', () => {
    console.log('file was created');
});