var Graph = function(){
  this._storage = {};
  this._counter = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  var counter = 0;
  var existingNode;
  for (var key in this._storage) {
    counter++;
    existingNode = key;
    console.log(existingNode)
  }
  if (counter === 1) {
    this._storage[newNode] = [existingNode];
    this._storage[existingNode] = [newNode]
  }
  this._storage[newNode] = [toNode]
  if(toNode){
    this._storage[toNode].push(newNode)
  }
  console.log(this._storage[newNode])
};

Graph.prototype.contains = function(node){

  return this._storage[node] !== undefined;
};

Graph.prototype.removeNode = function(node) {
  delete this._storage[node];

};

Graph.prototype.getEdge = function(fromNode, toNode){
  if(this._storage[fromNode].indexOf(toNode) > -1 ){
    return true
  }else{
    return false
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){

};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
