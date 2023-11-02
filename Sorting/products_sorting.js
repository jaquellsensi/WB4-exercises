let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];

   // I want to sort the products by name and display them with console.log

   products.sort((a, b) => a.product.localeCompare(b.product));
   products.forEach((product) => {
    console.log(product.product);
   
     });