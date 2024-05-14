//*Fai inserire un numero,che chiameremo N, all'utente. 
Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
Ogni volta che ne crei uno, stampalo.


let usernumber = number.parseInt (prompt('type a number'),10);
if (usernumber > 20 || usernumber < 1 || number.isNaN(usernumber)){
    usernumber=12;
}

for (let index=0; index < usernumber; index++){
    const tempArray= [];

    for(let index=0; index < 10; index++){
        tempArray.push(match.flor(Math.random)]* 100)+1);
    }
}


console.log(tempArray);