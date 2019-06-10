const scale = {standart: '22', other: '24'};

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
// const strings = ['E', 'B', 'G', 'D', 'A', 'E'];

const sequence = [
  {key: '0', value: '1'},
  {key: '0', value: '3'},
  {key: '0', value: '4'},
];

const inputExample = [ 'E' ];
const index = notes.indexOf(inputExample[inputExample.length - 1]);
console.log('Last input item position: ', index);
let remainingLength = scale.standard - inputExample.length;
let result = [];
console.log(remainingLength);

for(let i = index + 1; remainingLength !== 0 ; i++) {
  
  remainingLength--;
  result.push(notes[i]);
  if(i === notes.length - 1) {
    i = 0;
  }
  console.log(notes[i]);
}
console.log(result);

let output = inputExample.concat(result);
console.log(output);

