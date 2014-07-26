var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._newStore;
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // console.log(i, "i" + "    " + this._limit)
  if(this._storage.get(i) === undefined){
    this._storage.set(i, [k,v]);
    this._counter++;
  }else{
    this._storage.get(i).push(k,v);
    this._counter++;
  }

  if(this._counter >= this._limit*.75){

    this.increaseSize();
  }

};


HashTable.prototype.increaseSize = function(){

    this._limit *= 2;

    this._newStore = this._storage;
    this._storage = makeLimitedArray(this.limit)

    for(var key in this._newStore){
      this.insert(key, this._newStore[key])
    }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(k)
  console.log(this._storage.get(i))

  var currentItem = this._storage.get(i);
  for(var j = 0; j < currentItem.length; j++){
    if(currentItem[j] === k){
      return currentItem[j+1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentItem = this._storage.get(i);
  var toDelete;
  for(var j = 0; j < currentItem.length; j++){
    if(currentItem[j] === k){
      toDelete = currentItem[j+1];
      console.log(currentItem[j+1])
      currentItem[j+1] = null;
      console.log(currentItem[j+1])
      this._counter--
    }
  }

  if (this._counter <= this._limit*.75) {
    this.decreaseSize()
  }
  return toDelete;
};


HashTable.prototype.decreaseSize = _.once(function(){
    this._limit /= 2;

    this._newStore = this._storage;
    this._storage = makeLimitedArray(this.limit)

    for(var key in this._newStore){
      this.insert(key, this._newStore[key])
    }
})


/*
 * Complexity: What is the time complexity of the above functions?
 */
