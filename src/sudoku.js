export function Sudoku(grid){
  this.grid = grid;
}
var compareArray = [1,2,3,4,5,6,7,8,9];

Sudoku.prototype.rowCzech = function(){
  for(var i = 0; i < this.grid.length; i++){
    var row = this.grid[i].slice().sort();
    for(var j = 0; j < row.length; j++){
      if(row[j] != compareArray[j]){
        return false;
      }
    }
  }
  return true;
};
Sudoku.prototype.columnCzech = function(){
  var columns = [];
  for(var i = 0; i < this.grid.length; i++){
    var tempRow = [];
    for(var j = 0; j < this.grid.length; j++){
      tempRow.push(this.grid[j][i]);
    }
    columns.push(tempRow);
  }
  for(var k = 0; k < this.grid.length; k++){
    var row = columns[k].slice().sort();
    for(var f = 0; f < row.length; f++){
      if(row[f] != compareArray[f]){
        return false;
      }
    }
  }
  return true;
};

Sudoku.prototype.cellCzech = function(){
  var flag = false;
  for(var k=0;k<3;k++){
    for(var m=0;m<3;m++){
      flag=this.checkGrid(k*3,m*3);
      if(flag == false) {
        return false;
      }
    }
  }
  return true;
};

Sudoku.prototype.checkGrid = function(i,j){
  var cells = [];
  for(var k=0;k<3;k++){
    for(var m=0;m<3;m++){
      var a = i+k;
      var b = j+m;
      cells.push(this.grid[a][b]);
    }
  }
  var row9 = cells.slice().sort();
  for(var t = 0; t < row9.length; t++){
    if(row9[t] != compareArray[t]){
      return false;
    }

  }
  return true;
};
Sudoku.prototype.checkWin = function(){
  var a = this.rowCzech();
  var b = this.columnCzech();
  var c = this.cellCzech();

  if(!a){
    console.log("Row Failed");
  }
  if(!b){
    console.log("Column Failed");
  }
  if(!c){
    console.log("Cell Failed");
  }
  if(a && b && c){
    return true;
  } else {
    return false;
  }
};
Sudoku.prototype.testRowAndColumn = function(testNo, rowNo, columnNo){
  for(var j = 0; j < this.grid[rowNo].length; j++){
    if(this.grid[rowNo][j] === testNo){
      return false;
    }
  }
  for(var i = 0; i < this.grid.length; i++){
    if(this.grid[i][columnNo] === testNo){
      return false;
    }
  }
  return true;
};
Sudoku.prototype.testSubGrid = function(testNo, rowNo, columnNo){
  var i = rowNo - rowNo%3;
  var j = columnNo - columnNo%3;
  var row = [];
  for(var k = 0 + i; k < 3 + i; k++){
    for(var m = 0 + j; m < 3 + j; m++){
      row.push(this.grid[k][m]);
    }
  }
  for(var s = 0; s < row.length; s++){
    if(row[s] === testNo){
      return false;
    }
  }
  return true;
};
Sudoku.prototype.isEmpty = function(i,j){
  for(var f = 1; f < 10; f++){
    if(this.grid[i][j] === f){
      return false;
    }
  }
  return true;
};
Sudoku.prototype.possibleSolutions = function(i,j){
  var xPosition = i;
  var yPosition = j;
  var solutions = [];
  for(var z = 1; z < 10; z++){
    if(this.testRowAndColumn(z, xPosition, yPosition) && this.testSubGrid(z, xPosition, yPosition)){
      solutions.push(z);
    }
  }
  return solutions;
};
Sudoku.prototype.create3DMonster = function(){
  var monster = [];
  for(var m = 0; m < this.grid.length; m++){
    var tempRow = [];
    for(var n = 0; n < this.grid.length; n++){
      if(this.isEmpty(m,n)){
        tempRow.push(this.possibleSolutions(m,n));
      } else {
        tempRow.push([]);
      }
    }
    monster.push(tempRow);
  }
  return monster;
};
Sudoku.prototype.spliceSolutions = function(){
  var monster = this.create3DMonster();
  for(var s = 0; s < monster.length; s++){
    for(var n = 0; n < monster[s].length; n++){
      if(monster[s][n].length === 1){
        this.grid[s].splice(n,1,monster[s][n][0]);
      }
    }
  }
  return this.grid;
};
Sudoku.prototype.createBoard = function(){
  for(var i = 0; i < this.grid.length; i++){
    for (var j = 0; j < this.grid.length; j++) {
      if (this.isEmpty(i,j)){
        for (var k = 0; k < this.possibleSolutions(i,j).length; k++) {
          if(this.isEmpty(i,j)){
            this.grid[i][j] = this.possibleSolutions(i,j)[k];
            console.log(this.grid);
            console.log(this.grid[i][j]);
            if (this.checkWin()){
              console.log("You Win");
              return this.grid;
            } else {
              i++;
              this.createBoard()
              continue;
            }
          }

        }
      }
    }
  }
};
