const myPromisse = function(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            console.log("random: ", random);
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

promiseOne()
    .then((result) => {
        console.log("Promise One:", result);
        return promiseTwo();
    })
    .catch((error) => {
        console.error("Promise One Error:", error);
});

promiseTwo()
    .then((result) => {
        console.log("Promise Two:", result);
        return promiseThree();
    })
    .catch((error) => {
        console.error("Promise Two Error:", error);
});

promiseThree()
    .then((result) => {
        console.log("Promise Three:", result);
    })
    .catch((error) => {
        console.error("Promise Three Error:", error);
});
