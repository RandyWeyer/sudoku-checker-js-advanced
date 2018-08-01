import { Sudoku } from '../src/sudoku';

describe('Sudoku', function() {

  it('will check for row sudoku', function() {
    console.log(grid);
    var grid = [
      [8,2,4,9,5,3,6,7,1],
      [6,3,5,8,1,7,9,2,4],
      [7,1,9,6,2,4,8,5,3],
      [5,8,7,2,9,1,3,4,6],
      [1,4,2,7,3,6,5,8,9],
      [3,9,6,4,8,5,2,1,7],
      [2,6,1,5,4,9,7,3,8],
      [4,7,8,3,6,2,1,9,5],
      [9,5,3,1,7,8,4,6,2]
    ];
    var newSudoku = new Sudoku(grid);
    console.log(grid);
    expect(newSudoku.checkWin()).toEqual(true);
  });
  it('will check for column sudoku', function() {
    var grid = [
      [8,2,4,9,5,3,6,7,1],
      [6,3,5,8,1,7,9,2,4],
      [7,1,9,6,2,4,8,5,3],
      [5,8,7,2,9,1,3,4,6],
      [1,4,2,7,3,6,5,8,9],
      [3,9,6,4,8,5,2,1,7],
      [2,6,1,5,4,9,7,3,8],
      [4,7,8,3,6,2,1,9,5],
      [9,5,3,1,7,8,4,6,2]
    ];
    var newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(true);
  });
  it('will check for cell sudoku', function() {
    var grid = [
      [8,2,4,9,5,3,6,7,1],
      [6,3,5,8,1,7,9,2,4],
      [7,1,9,6,2,4,8,5,3],
      [5,8,7,2,9,1,3,4,6],
      [1,4,2,7,3,6,5,8,9],
      [3,9,6,4,8,5,2,1,7],
      [2,6,1,5,4,9,7,3,8],
      [4,7,8,3,6,2,1,9,5],
      [9,5,3,1,7,8,4,6,2]
    ];
    var newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(true);
  });
  it('should test if board repeats horizontally', function(){
    var grid = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    var newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(false);
  });
  it('should test if board does not repeat horizontally', function(){
    // for (var i = 0; i < 4; i++) {
    //   console.log("I have looped " + i);
    // }
    var grid = [
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9]
    ];
    var newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(false);
  });
  it('should test if board repeats vertically', function(){
    var grid = [
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9]
    ];
    var newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(false);
  });
  it('should test if board does not repeat vertically', function(){
    var grid = [
      [1,2,3,4,5,6,7,8,9],
      [2,3,4,5,6,7,8,9,1],
      [3,4,5,6,7,8,9,1,2],
      [4,5,6,7,8,9,1,2,3],
      [5,6,7,8,9,1,2,3,4],
      [6,7,8,9,1,2,3,4,5],
      [7,8,9,1,2,3,4,5,6],
      [8,9,1,2,3,4,5,6,7],
      [9,1,2,3,4,5,6,7,8]
    ];
    var newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(false);
  });
  it('should test a sudoku from wikipedia', function(){
    var grid = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];
    var newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(true);
  });
  it('should test a sudoku from previously', function(){
    var grid = [
      [8,2,4,9,5,3,6,7,1],
      [6,3,5,8,1,7,9,2,4],
      [7,1,9,6,2,4,8,5,3],
      [5,8,7,2,9,1,3,4,6],
      [1,4,2,7,3,6,5,8,9],
      [3,9,6,4,8,5,2,1,7],
      [2,6,1,5,4,9,7,3,8],
      [4,7,8,3,6,2,1,9,5],
      [9,5,3,1,7,8,4,6,2]
    ];
    var newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(true);
  });
});
