///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]



const summedPrice = cart.reduce((accu, curr) => accu + curr.price, 0);

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) =>{
   return (cartTotal * tax) + cartTotal - couponValue
}
console.log(calcFinalPrice(summedPrice, 5, .06))
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    The 1st property will be 'name', and this will be a string of the customers name so that the resturant knows who the customer is.
    I chose this data type because the resturant needs to know the name of the customer and we will need words to do so.

    The 2nd property will be 'telephone', and this will be a number data type because we will only need numbers for the customers phone number.
    The resturant will need the customers phone number to contact them if needed.

    The 3rd property will be 'creditCard' because the resturannt will need a payment method for the customer to pay for their food. This will be a number
    data type becasue only a number are needed for a credit card number

    The 4th property will be 'address' because the resturant will beed to know where to deliver the customers food to. This has to be a string because we will 
    need both letters and numbers for the address and a string will allow this.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: "John Doe",
    telephone: 8031234567,
    creditCard: 63757374704360536,
    address: '123 location Ave, Miami Florida 28390'

}