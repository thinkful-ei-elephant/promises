


function getBookData(name){
    if(!name){
        return Promise.reject('No name entered');
    }
    
    return Promise.resolve({name})
}


getBookData("Terra").then(resp=>console.log(resp)).catch(err=>console.log(err));