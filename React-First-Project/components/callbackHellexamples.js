const cart = ["shoes","pants","kurta"];

// callback Hell

api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(
            function(){
                api.updateWallet()
            }
        )
    })
})


// promises above example
//consuming promises
//const cart = ["shoes", "pants", "Kurta"];

createOrder(cart, function(orderId){
    proceedToPayment(orderId);
});

const promise = createOrder(cart);

promise.then(function(orderId){
    proceedToPayment(orderId);
})

//promise is an object representing eventual completion of an async operations


//creating own promises
