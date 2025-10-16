const add  = require('./math');

test('add 1 +2 debe ser igual a 3' , () =>{
    expect(add(1,2)).toBe(3);
});