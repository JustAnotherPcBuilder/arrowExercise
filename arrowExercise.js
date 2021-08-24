//ES 2015
function double(arr) {
    return arr.map(val => val * 2);
  }

//reduced
function squareAndFindEvens(numbers){
  var squares = numbers.map(num => num ** 2);
  var evens = squares.filter(square => (square % 2 === 0));
  return evens;
}