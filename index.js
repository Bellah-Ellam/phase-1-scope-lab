// Write your solution in this file!
var customerName = 'bob'




function upperCaseCustomerName() {
    return customerName.toUpperCase();
  }

// console.log(upperCaseCustomerName())

function setBestCustomer() {
    bestCustomer = 'not bob';
  }

  function overwriteBestCustomer(newCustomer) {
    bestCustomer = newCustomer;
  }

  const leastFavoriteCustomer = 'ogada'
  
  function changeLeastFavoriteCustomer(newCustomer) {
    leastFavoriteCustomer = newCustomer; // This will result in an error!
  }