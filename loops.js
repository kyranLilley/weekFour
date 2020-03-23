// for (let i = 0;; i++) {
//     console.log("loop, i = " + i);
//     if (i > 1)
//         break;
// };

// let counter = 0;
// for (let i = 0; i < 10; i++)
//     counter++;counter; // 10;

// console.log(counter);


// for (let y = 0; y < 2; y++)
//     for (let x = 0; x < 2; x++)
//         for (let a = 0; a < 2; a++)

//         console.log(x, y , a);

//for (let i = 0; i < 3; i++) console.log("loop.");

//for (let i = 0; i < 3; i++) { let loop = "loop."; console.log(loop) };

//for (let i = 0; i < 3; i++) { if (i == 1) continue; console.log( i ); }
//The continue keyword tells code flow to go to the next step without executing any statements.

//for (let i = 0;; i++) { console.log("loop"); break};
// let c = 0;
// mark: for (let i = 0; i < 5; i++)
//     inner: for (let j = 0; j < 5; j++){
//         c++; if (i == 2); break mark;
//     }

// console.log(c); // 11


let c = 0;
let i = 0;
let j = 0;
mark: for (let i = 0; i < 5; i++){
    console.log(`i= ${i}`)
    inner: for (let j = 0; j < 5; j++){
        console.log(`j= ${j}`)

       console.log(`c=${c++}`); //if (i == 2) break mark;
    }
}
console.log(c); // 11
// let c = 0;
// mark: for (let i = 0; i < 5; i++)
//     inner: for (let j = 0; j < 5; j++)
//         c++; if (i == 2) break inner;
// console.log(c); // 21


// block: {
//     console.log("before");
//     break block;
//     console.log("after");
// }

// Generator function:
function* generator() {
    yield 1;
    yield 2;
    yield 3;
  }for (let value of generator())
    console.log( value );


let rory = "Seagull";
for(let value of rory)
    console.log(value)

//     let object = { a: 1, b: 2, c: 3 };for (let value of object) // Error: object is not iterable
//    console.log( value );



    const object1 = {
        a: 'somestring',
        b: 42,
        c: false
      };
      
      console.log(Object.keys(object1));
      // expected output: Array ["a", "b", "c"]
      