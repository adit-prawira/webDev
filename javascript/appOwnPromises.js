const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7){
                resolve();
            }
            reject('BITCH FAILED!!!!');
        }, 1000);
    })
}

fakeRequest('/dogs/1')
.then((data) => {
    console.log("Done with request!!!");
    console.log('data is:', data);
})
.catch((err) => {
    console.log("OH NO BITCH!!!", err)
})

const delayColorChange = (color, delay) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
        
    })
}

//Simpler Promises
delayColorChange('red', 1000)
    .then(() => delayColorChange('orange', 1000))
    .then(() => delayColorChange('yellow', 1000))
    .then(() => delayColorChange('green', 1000))
    .then(() => delayColorChange('blue', 1000))
    .then(() => delayColorChange('indigo', 1000))
    .then(() => delayColorChange('violet', 1000))

//Promises with ASYNC and AWAIT key word
async function rainbow(){
    await delayColorChange('red', 1000)
    await delayColorChange('orange', 1000)
    await delayColorChange('yellow', 1000)
    await delayColorChange('green', 1000)
    await delayColorChange('blue', 1000)
    await delayColorChange('indigo', 1000)
    await delayColorChange('violet', 1000)
    return "ALL DONE!!!";
}

rainbow().then(() => console.log("END OF CYCLE!!!"));