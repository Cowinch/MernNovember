// console.log(hello);                                   
var hello = 'world';
//undefined

var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    // console.log(needle);
}
//scope is important

var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    // console.log(brendan);
}
// console.log(brendan);
//outside of the scope

var food = 'chicken';
// console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    // console.log(food);
    var food = 'gone';
}
//hositing is pretty DUMB

// mean();
// console.log(food);
// function mean() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     // var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);




