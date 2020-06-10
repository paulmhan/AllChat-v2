const translate = require('translate'); // Old school
translate.engine = 'google';
translate.key = 'allchat-1591569731268';

const foo =  translate('Hello world', 'es');
console.log(foo);
 
// Same as this:
const bar =  translate('Hello world', { to: 'es' });
console.log(bar);