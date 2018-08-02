import { Sudoku } from '../src/sudoku';

describe('Sudoku', function() {
  it('will check for row sudoku', function() {
    let grid = [
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
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(true);
  });
  it('will check for column sudoku', function() {
    let grid = [
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
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(true);
  });
  it('will check for cell sudoku', function() {
    let grid = [
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
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(true);
  });
  it('should test if board repeats everywhere', function(){
    let grid = [
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
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(false);
  });
  it('should test if board repeats horizontally', function(){
    let grid = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2, 2, 2, 2, 2],
      [3, 3, 3, 3, 3, 3, 3, 3, 3],
      [4, 4, 4, 4, 4, 4, 4, 4, 4],
      [5, 5, 5, 5, 5, 5, 5, 5, 5],
      [6, 6, 6, 6, 6, 6, 6, 6, 6],
      [7, 7, 7, 7, 7, 7, 7, 7, 7],
      [8, 8, 8, 8, 8, 8, 8, 8, 8],
      [9, 9, 9, 9, 9, 9, 9, 9, 9]
    ];
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(false);
  });
  it('should test if board does not repeat horizontally', function(){
    let grid = [
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
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(false);
  });
  it('should test if board repeats vertically', function(){
    let grid = [
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
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(false);
  });
  it('should test if board does not repeat vertically', function(){
    let grid = [
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
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(false);
  });
  it('should test a sudoku from wikipedia', function(){
    let grid = [
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
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(true);
  });
  it('should test a sudoku from previously', function(){
    let grid = [
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
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.checkWin()).toEqual(true);
  });
  it('will check for same number in row and column', function(){
    let grid = [
      [8,2,"",9,5,3,6,7,1],
      [6,3,5,8,1,7,9,2,4],
      [7,1,9,6,2,4,8,5,3],
      [5,8,7,2,9,1,3,4,6],
      [1,4,2,7,3,6,5,8,9],
      [3,9,6,4,8,5,2,1,7],
      [2,6,1,5,4,9,7,3,8],
      [4,7,8,3,6,2,1,9,5],
      [9,5,3,1,7,8,4,6,2]
    ];
    let testNo = 4;
    let x = 0;
    let y = 2;
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.testRowAndColumn(testNo,x,y)).toEqual(true);
  });
  it('will check for same number in subgrid', function(){
    let grid = [
      [8,2,"",9,5,3,6,7,1],
      [6,3,5,8,1,7,9,2,4],
      [7,1,9,6,2,4,8,5,3],
      [5,8,7,2,9,1,3,4,6],
      [1,4,2,7,3,6,5,8,9],
      [3,9,6,4,8,5,2,1,7],
      [2,6,1,5,4,9,7,3,8],
      [4,7,8,3,6,2,1,9,5],
      [9,5,3,1,7,8,4,6,2]
    ];
    let testNo = 4;
    let x = 0;
    let y = 2;
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.testSubGrid(testNo,x,y)).toEqual(true);
  });
  it('will display the possible solutions of a cell', function(){
    let grid = [
      [8,2,"",9,5,3,6,7,1],
      [6,3,5,8,1,7,9,2,4],
      [7,1,9,6,2,4,8,5,3],
      [5,8,7,2,9,1,3,4,6],
      [1,4,2,7,3,6,5,8,9],
      [3,9,6,4,8,5,2,1,7],
      [2,6,1,5,4,9,7,3,8],
      [4,7,8,3,6,2,1,9,5],
      [9,5,3,1,7,8,4,6,2]
    ];
    let x = 0;
    let y = 2;
    let expectedResult = [4];
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.possibleSolutions(x,y)).toEqual(expectedResult);
  });
  it('will create a monster', function(){
    let grid = [
      [5,3,"","",7,"","","",""],
      [6,"","",1,9,5,"","",""],
      ["",9,8,"","","","",6,""],
      [8,"","","",6,"","","",3],
      [4,"","",8,"",3,"","",1],
      [7,"","","",2,"","","",6],
      ["",6,"","","","",2,8,""],
      ["","","",4,1,9,"","",5],
      ["","","","",8,"","",7,9]
    ];
    let expectedGrid = [
      [[], [], [ 1, 2, 4 ], [ 2, 6 ], [], [ 2, 4, 6, 8 ], [ 1, 4, 8, 9 ], [ 1, 2, 4, 9 ], [ 2, 4, 8 ]],
      [[], [ 2, 4, 7 ], [ 2, 4, 7 ], [], [], [], [ 3, 4, 7, 8 ], [ 2, 3, 4 ], [ 2, 4, 7, 8 ]],
      [[ 1, 2 ], [], [], [ 2, 3 ], [ 3, 4 ], [ 2, 4 ], [ 1, 3, 4, 5, 7 ], [], [ 2, 4, 7 ]],
      [[], [ 1, 2, 5 ], [ 1, 2, 5, 9 ], [ 5, 7, 9 ], [], [ 1, 4, 7 ], [ 4, 5, 7, 9 ], [ 2, 4, 5, 9 ], [] ],
      [[], [ 2, 5 ], [ 2, 5, 6, 9 ], [], [ 5 ], [], [ 5, 7, 9 ], [ 2, 5, 9 ], []],
      [ [], [ 1, 5 ], [ 1, 3, 5, 9 ], [ 5, 9 ], [], [ 1, 4 ], [ 4, 5, 8, 9 ], [ 4, 5, 9 ], [] ],
      [[ 1, 3, 9 ], [], [ 1, 3, 4, 5, 7, 9 ], [ 3, 5, 7 ], [ 3, 5 ], [ 7 ], [], [], [ 4 ]],
      [[ 2, 3 ], [ 2, 7, 8 ], [ 2, 3, 7 ], [], [], [], [ 3, 6 ], [ 3 ], []],
      [[ 1, 2, 3 ], [ 1, 2, 4, 5 ], [ 1, 2, 3, 4, 5 ], [ 2, 3, 5, 6 ], [], [ 2, 6 ], [ 1, 3, 4, 6 ], [], []]
    ]
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.create3DMonster()).toEqual(expectedGrid);
  });
  it('will update the grid', function(){
    let grid = [
      [5,3,"","",7,"","","",""],
      [6,"","",1,9,5,"","",""],
      ["",9,8,"","","","",6,""],
      [8,"","","",6,"","","",3],
      [4,"","",8,"",3,"","",1],
      [7,"","","",2,"","","",6],
      ["",6,"","","","",2,8,""],
      ["","","",4,1,9,"","",5],
      ["","","","",8,"","",7,9]
    ];
    let expectedGrid = [
      [5,3,"","",7,"","","",""],
      [6,"","",1,9,5,"","",""],
      ["",9,8,"","","","",6,""],
      [8,"","","",6,"","","",3],
      [4,"","",8,5,3,"","",1],
      [7,"","","",2,"","","",6],
      ["",6,"","","",7,2,8,4],
      ["","","",4,1,9,"",3,5],
      ["","","","",8,"","",7,9]
    ]
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.spliceSolutions()).toEqual(expectedGrid);
  });
  it('will solve the puzzle', function(){
    let grid = [
      [5,3,"","",7,"","","",""],
      [6,"","",1,9,5,"","",""],
      ["",9,8,"","","","",6,""],
      [8,"","","",6,"","","",3],
      [4,"","",8,"",3,"","",1],
      [7,"","","",2,"","","",6],
      ["",6,"","","","",2,8,""],
      ["","","",4,1,9,"","",5],
      ["","","","",8,"","",7,9]
    ];
    let expectedGrid = [
      [5,3,4,6,7,8,9,1,2],
      [6,7,2,1,9,5,3,4,8],
      [1,9,8,3,4,2,5,6,7],
      [8,5,9,7,6,1,4,2,3],
      [4,2,6,8,5,3,7,9,1],
      [7,1,3,9,2,4,8,5,6],
      [9,6,1,5,5,7,2,8,4],
      [2,8,7,4,1,9,6,3,5],
      [3,4,5,2,8,6,1,7,9]
    ]
    let newSudoku = new Sudoku(grid);
    expect(newSudoku.createBoard()).toEqual(expectedGrid);
  });
    it('will check for row sudoku', function() {
      let grid = [
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
      let newSudoku = new Sudoku(grid);
      expect(newSudoku.checkWin()).toEqual(true);
    });
});
