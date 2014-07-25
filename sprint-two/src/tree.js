var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  var result = false;
  var childrenFunc = function(children){

    for(var i = 0; i<children.length; i++){
      if(children[i].value === target){
        result = true
      }
      childrenFunc(children[i].children)
    }
    return result
  }

  return childrenFunc(this.children)

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
