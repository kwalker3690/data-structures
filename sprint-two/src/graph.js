var Graph = function(){

};

Graph.prototype.addNode = function(newNode, toNode){
  var existingNode;
  if (Object.keys(this).length === 1) {
    existingNode = Object.keys(this)[0];
    this[existingNode] = [newNode];
    this[newNode] = [existingNode];
  } else {
    this[newNode] = [toNode]
    if(toNode){
      this[toNode].push(newNode)
    }
  }
};

Graph.prototype.contains = function(node){

  return this[node] !== undefined;
};

Graph.prototype.removeNode = function(node) {

  delete this[node];

};

Graph.prototype.getEdge = function(fromNode, toNode){
  if(this[fromNode].indexOf(toNode) > -1 ){
    return true
  }else{
    return false
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].push(toNode)
  this[toNode].push(fromNode)

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromIndex = this[fromNode].indexOf(toNode);
  this[fromNode].splice(fromIndex, 1);
  if(this[fromNode].length === 0){
    this.removeNode(fromNode)
  }

  var toIndex = this[toNode].indexOf(fromNode);
  this[toNode].splice(toIndex, 1)
  if(this[toNode].length === 0){
    this.removeNode(toNode)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
