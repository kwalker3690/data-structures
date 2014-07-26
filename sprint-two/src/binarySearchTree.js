var makeBinarySearchTree = function(value){
  var bST = {};
  bST.value = value;
  bST.left = null;
  bST.right = null;
  _.extend(bST, binaryMethods)

  return bST
};

var binaryMethods = {};

binaryMethods.insert = function(newValue){
  //check if newValue is less than bST.value
  if(newValue < this.value){
    //check if no bST.left
    if(this.left === null){
      this.left = makeBinarySearchTree(newValue);
    //if there is bST.left
    }else{
      this.left.insert(newValue)
    }
  }else{
    //check if no bST.right
    if(this.right === null){
      this.right = makeBinarySearchTree(newValue);
  //if there is bST.right
    }else{
      this.right.insert(newValue)
    }
  }

}

binaryMethods.contains = function(match) {
  var result = false;
  var searchTree = function(tree) {
    //TODO: this can be refactored with while
    if (match === tree.value) {
      result = true
    } else if (match > tree.value && (tree.right !==null)) {
      searchTree(tree.right);
    } else if (match < tree.value && (tree.left !==null)) {
      searchTree(tree.left);
    }
    return result;
  };
  return searchTree(this);
}

binaryMethods.depthFirstLog = function(callback){
  // if no left and no right
  callback(this.value)
  //make sure that left or right exists
  if(this.left){
    this.left.depthFirstLog(callback);
  }else if(this.right){
    this.right.depthFirstLog(callback)
  }

  if(this.left === null && this.right === null){
    return;
    //run callback on node
  }





}

/*
 * Complexity: What is the time complexity of the above functions?
 */
