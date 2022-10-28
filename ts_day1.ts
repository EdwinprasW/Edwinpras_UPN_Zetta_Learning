function statement1(Statement: string, nine: number, nineteen: number) {
    let theReturn : string;
    theReturn = "Typescript";
    console.log(Statement, nine, nineteen);

    console.log("return : ")

    return theReturn;
}

console.log(statement1("Learning Typescript is different than Javascript", 9, 19));