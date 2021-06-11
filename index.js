function receivesAFunction(cb){
    return cb();
}
receivesAFunction();

function returnsANamedFunction(){
    return function fn(){
        return "NF";
    }
}


function returnsAnAnonymousFunction() {
    return () => "AF"
}
console.log(returnsAnAnonymousFunction());