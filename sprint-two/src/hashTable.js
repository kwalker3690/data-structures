var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._newStore;
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
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
// i think we are not mapping these correctly?
    this._limit *= 2;

    this._newStore = this._storage;

    this._storage = makeLimitedArray(this.limit)

    var holder = this;
    // use the each function to do this instead!
    this._newStore.each(function(value, key, collection){
		console.log(value, 'value', key, 'key')
		console.log(holder)
		holder.insert(key, value)
	})

    this._storage.each(function(value, key, collection){
		console.log(value, 'value', key, 'key')
	})
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentItem = this._storage.get(i);
  for(var j = 0; j < currentItem.length; j++){
    if(currentItem[j] === k){
      return currentItem[j+1];
    }
  }
};

HashTable.prototype.remove = function(k){
	// this._storage.each(function(value, key, collection){
	// 	console.log(value, 'value', key, 'key')
	// })
  var i = getIndexBelowMaxForKey(k, this._limit);
  // console.log(k, 'k remove')
  // console.log(i, 'i remove')
  // console.log(this._storage.get(i), 'this._storage.get(i) remove')
  var currentItem = this._storage.get(i);
  var toDelete;
  // console.log(this._counter, 'this._counter before')
  for(var j = 0; j < currentItem.length; j++){
    if(currentItem[j] === k){
      toDelete = currentItem[j+1];
      currentItem[j+1] = null;
    }
  }

  for(var k = 0; k < this._limit; k++){
  	this._counter = 1*k
  }
  // this should only run if number of items in storage is less than half the limit
  // if only one added, counter only goes up one and this will run!
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
