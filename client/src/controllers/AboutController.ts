export function getAuthor(){
    return "hello world from Timo";
}

/**
 * 
 * @returns Function return key -value pairs from
 * localStrorage
 */
export function getKeyValues(){
    return localStorage.getItem("array");
}


export function saveKeyValues(){
    let array=[];
    const item={name:"Timo"};
    const item2={client:"React"};
    array.push(item);
    array.push(item2);
    return localStorage.setItem("array", JSON.stringify(array));
}
