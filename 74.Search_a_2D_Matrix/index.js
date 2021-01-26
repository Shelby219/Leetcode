/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//Divide and Conquer
//O(n2)

//Start at the bottom-left corner.
//If the target is less than that value, it must be above us, so move up one.
//Otherwise we know that the target can't be in that column, so move right one.
//Goto 2.
//For an NxM array, this runs in O(N+M). I think it would be difficult to do better. :)


//First is check validator of num being less than first value and greater than last

//start from the top right corner
//if value = target, element is found
//if value < target, move to the next row, element can't be in that row since row is sorted
//if value > target, move to the previous column, element can't be in that column since column is sorted


var searchMatrix = function(matrix, target) {

  var row = 0; //first row
  var col = matrix[0].length - 1; //last column

   //if num less that first value or num greater than last row last value
   //if (target < matrix[0][0] || target > matrix[2][3]) {
   //     return false;
   //}


  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) { //element is found
      return true;
    } else if (matrix[row][col] < target) {
      row++; //move to the next row
    } else {
      col--; //move to the previous column
    }
  }

  return false;

}

