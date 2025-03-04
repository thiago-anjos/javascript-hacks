const myPromisse = function(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random > 0.5) {
                resolve("Success!");
            } else {
                reject("Failure!");
            }
        }, time);
    });
}

const promiseOne = myPromisse.bind(this, 1000);
const promiseTwo = myPromisse.bind(this, 2000);
const promiseThree = myPromisse.bind(this, 3000);

// promiseOne()
//     .then((result) => {
//         console.log("Promise One:", result);
//     })
//     .catch((error) => {
//         console.error("Promise One Error:", error);
// });

// promiseTwo()
//     .then((result) => {
//         console.log("Promise Two:", result);
//     })
//     .catch((error) => {
//         console.error("Promise Two Error:", error);
// });

// promiseThree()
//     .then((result) => {
//         console.log("Promise Three:", result);
//     })
//     .catch((error) => {
//         console.error("Promise Three Error:", error);
// });

// Promise.allSettled([promiseOne(), promiseTwo(), promiseThree()])
//     .then((results) => {
//         console.log("All promises resolved:", results);
//     })
//     .catch((error) => {
//         console.error("One or more promises failed:", error);
//     });


// sintaxe mais legivel e mais moderna async await

const myAsyncFunction = async function(){
    try {
        const resultOne = await promiseOne();
        console.log("Promise One:", resultOne);
    } catch (error) {
        console.error("Promise One Error:", error);
    }

    try {
        const resultTwo = await promiseTwo();
        console.log("Promise Two:", resultTwo);
    } catch (error) {
        console.error("Promise Two Error:", error);
    }

    try {
        const resultThree = await promiseThree();
        console.log("Promise Three:", resultThree);
    } catch (error) {
        console.error("Promise Three Error:", error);
    }
}

myAsyncFunction();

