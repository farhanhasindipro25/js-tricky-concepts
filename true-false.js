/*
Truthy:
1. true.
2. Any number except 0 (+ve,-ve).
3. Any string, including space except empty string.
4. '0','false'.
5. Empty Object, full object.
6. Empty array, full array.

Falsy:
1. false.
2. 0.
3. ''(empty string).
4. Undefined.
5. null.
*/

// Checking falsy: !trueCondition
// Checking truthy: !!falseCondition


const x = false;
if(x){
    console.log('Value of x is truthy');
}
else{
    console.log('Value of x is falsy');
}