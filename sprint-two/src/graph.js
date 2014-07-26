var Graph = function(){
};

Graph.prototype.addNode = function(newNode, toNode){
  this[newNode] = [toNode]
  console.log(this)
};

Graph.prototype.contains = function(node){
  // result = false;
  // for (var key in this) {
  //   if (key === node) {result = true}
  // }
  // return result; 
  
  return this[node] !== undefined;
};

Graph.prototype.removeNode = function(node) {
  // for (var key in this) {
    // if (key === node) {
      delete this[node];
    // }
  // }  
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
