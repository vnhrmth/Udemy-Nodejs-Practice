const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('done');
        }, 1000);
    });
    return promise;
}

setTimeout(() => {
    fetchData()
    .then((text)=> {
        console.log(text);
        console.log("1");
        return fetchData();
    })
    .then((text) => {
        console.log(text);
    })
}, 2000);