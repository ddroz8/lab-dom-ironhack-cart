// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //my code
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const subtotal = (price * quantity);
  const totalPrice = product.querySelector('.subtotal span');
  totalPrice.innerHTML = subtotal;

  return subtotal; 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let nProducts = document.querySelectorAll('.product');
  let totalProducts = 0; 
  for (let i =0; i<nProducts.length; i++){
    totalProducts += updateSubtotal(nProducts[i])
  }
  // ITERATION 3
  let totalValue = document.querySelector('#total-value span');
  totalValue.innerText = totalProducts;
  return totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
