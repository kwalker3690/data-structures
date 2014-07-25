var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  _.extend(set._storage, setPrototype);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (!this.contains(item)) {
    this._storage[this._storage.length] = item;
  }
};

setPrototype.contains = function(item){
  var checker = false;
  for (i = 0; i<this._storage.length; i++) {
    if (this._storage[i] === item) {
      checker = true;
    }
  }
  return checker;
};

setPrototype.remove = function(item){
  for (i = 0; i<this._storage.length; i++) {
    if (this._storage[i] === item) {
      var removed = this._storage.splice(i, 1);
    }
  }
  return removed.join();
};

setPrototype.count = function(){
  return this._storage.length;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
