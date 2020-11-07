const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random()*4500) + 500;
    setTimeout(() => { 
        (delay > 4000) ? failure('Connection Timeout!') : success(`Here is you fake data from ${url}`);
    }, delay);
};

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) =>{
        const delay = Math.floor(Math.random()*4500) + 500;
        setTimeout(() => { 
            (delay > 4000) ? reject('Connection Timeout!') : resolve(`Here is you fake data from ${url}`);
        }, delay);
    })
};

//Nested Call Backs
fakeRequestCallback('books.com/page1', (response) => {
    console.log("It worked!!!");
    console.log(response);
    fakeRequestCallback('books.com/page2', (response) => {
        console.log("It worked Again! (2nd req)");
        console.log(response);
        fakeRequestCallback('book.com/page3', (response) =>{
            console.log("It worked Again! (3rd req)");
            console.log(response);
        }, (err) => {
            console.log("ERROR!!! (3rd req)", err);
        });
    }, (err) => {
        console.log("ERROR (2nd req)!!!", err);
    });
}, (err) => {
    console.log("ERROR!!!", err);
});

//Promises
fakeRequestPromise("yelp.com/api/coffee/page1")
    .then(() => {
        console.log("It worked Bitch!!!");
        console.log("IT WORKED !!!");
        fakeRequestPromise("yelp.com/api/coffee/page2")
            .then(() => {
                console.log("PROMISE RESOLVED (2) b!");
                console.log("IT WORKED!!!")
            }).catch(() => {
                console.log("ERROR BITCH (2)!!!");
            })
    }).catch(() => {
        console.log("ERROR BITCH!!!");
    })


    //Cleaner Promises
    fakeRequestPromise("yelp.com/api/coffee/page1")
        .then((data) => {
            console.log("It worked!!! (page 1)");
            console.log(data);
            return fakeRequestPromise("yelp.com/api/coffee/page2");
        })
        .then((data) => {
            console.log("It worked!!! (page 2)");
            console.log(data);
            return fakeRequestPromise("yelp.com/api/coffee/page3");
        })
        .then((data) => {
            console.log("It worked!!! (page 3)");
            console.log(data);
        })
        .catch((err) => {
            console.log("A REQUEST FAILED !!!");
            console.log(err);
        })