var Graph = function(){

};

Graph.prototype.addNode = function(newNode, toNode){
  this.NewNode = newNode;
  this.edge = toNode;
  console.log(this)
};

Graph.prototype.contains = function(node){
  result = false;
  for (key in this) {
    if (this[key] === node) {result = true}
  }
return result;
};

Graph.prototype.removeNode = function(node){
  for (key in this) {
    if (this[key] === node) {
      this[key] = null;
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){

};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
