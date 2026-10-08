function lowerCaseWords(mixedArray){
    return new Promise((resolve, reject) => {
        if(!Array.isArray(mixedArray)){
            return reject(new Error("Input needs to be array"));
        }
        try{
            const result = mixedArray
                .filter(item => typeof item === 'string')
                .map(word => word.toLowerCase());
            resolve(result);
        } catch(error) {
            reject(error);
        }
    });
}

//Test 
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));