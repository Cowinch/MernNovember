for(j=0;j<5;j++){
    let a=27
    let b="string"
    let rotations=900_000_000
    console.time("classical")
    for(i=0;i<rotations;i++){
        let temp=a
        a=b
        b=temp
        i++
    }
    console.timeEnd("classical")


    console.time("deconstruct")
    for(i=0;i<rotations;i++){
        [a,b]=[b,a]
        i++
    }
    console.timeEnd("deconstruct")
    console.log("\n")
}
// forwardslash, asterisk asterisk, enter
/**
 * This is a function!!!
 * @author Cole
 * @date 2022-11-1
 * @param {String} name 
 * @returns 
 */
function hi(name){
    return "hi " + name
}