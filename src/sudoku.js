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
    for(var j = 0; j < this.grid.length; j++){
      columns.push(this.grid[j][i]);
    }
  }
  for(var k = 0; k < this.grid.length; k++){
    var row = this.grid[k].slice().sort();
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
      if(flag == false) {return false}
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
}
Sudoku.prototype.checkWin = function(){
  console.log(this);
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
}
