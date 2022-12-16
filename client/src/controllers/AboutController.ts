export function getAuthor(){
    return "hello world from Hoan";
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
    const item={developer:"Tran Hoan (e2000575)"};
    const item1={version:"0.01"};

    const item2={client:"React 18"};
    const item3={server:"Spring Boot 2.4"};
    const item4={serverjava:"Java 11"};
    array.push(item1);
    array.push(item);
    array.push(item2);
    array.push(item3);
    array.push(item4);
    return localStorage.setItem("array", JSON.stringify(array));
}
