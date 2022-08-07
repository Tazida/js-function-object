var shoppingItems = ["book", "sunglass", "shoes", "pen"];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
  Nisa: 12,
  munia: 45,
  chaity: 78,
  prity: 32,
  nuha: 14,
};

var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
};

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
for (var i = 0; i < keys.length; i++) {
  // console.log(keys[i]);
  // console.log(shoppingCart[])
  var propertyName = keys[i];
  var propertyValue = shoppingCart[propertyName];
  console.log(propertyName);
}

// for in loop
for (var propertyName in shoppingCart) {
  const value = shoppingCart[propertyName];
  console.log(propertyName, value);
}
