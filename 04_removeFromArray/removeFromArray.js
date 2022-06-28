
let removeFromArray = function(arrayTest, element) {
for (let i = arrayTest.length; i=0; i){
    if (arrayTest[i] === element){
        arrayTest.splice(i,1);
    }
    else {
        i++;
    }
}
};
removeFromArray([1, 2, 3, 4], 3);
console.log(arrayTest)