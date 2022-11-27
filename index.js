const spy = chai.spy();
function receivesAFunction(spy){
   return spy()
}

function returnsANamedFunction(){
   return function(){returnsANamedFunction.name}
}
function returnsAnAnonymousFunction(){
   return function(){returnsAnAnonymousFunction.name}
}