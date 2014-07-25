var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.tail === null){
      list.tail = makeNode(value);
      list.head = list.tail;
    }else{
      var newNode = makeNode(value);
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
      var returnNode = list.head;
      list.head = list.head.next ;
      return returnNode.value;
  };

  list.contains = function(target){
    var found = false;
    for(var key in list){
      if(list[key].value === target){
        found = true;
      }
    }
    return found;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
