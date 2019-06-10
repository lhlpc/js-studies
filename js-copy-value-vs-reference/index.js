// Copied by value:
// Boolean, null, undefined, String, and Number

// Copied by reference: 
// Objects
// Obs.: Object, Function and Array are Objects

// Source: https://www.educative.io/collection/page/5679346740101120/5707702298738688/5685265389584384

// ------- By value
const var1 = 1;
const var2 = var1;
var1 = -1;

console.log(var1, var2);

// ------- By Reference
const a = {
  name: 'a'
}
const b = a;
a.name = 'changed';

console.log(a, b);

// ------- Copy of a property inside and Object
const c = {
  id: 1
}
const propertyCopy = c.id; // copied by value
c.id = -1;

console.log(c, propertyCopy);
// a.name = ''
// console.log
