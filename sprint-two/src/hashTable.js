var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._newStore;
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // have to see if key already is in bucket!
  var bucket = this._storage.get(i);
  if(bucket === undefined){
  	bucket = [];
    this._storage.set(i, bucket);
  }

  var found = false;

  for(var j = 0; j<bucket.length; j++){

  	var tuple = bucket[j];
  	if(tuple[0]===k){
  		tuple[1]===v
  		found = true;
  		break;
  	}
  }

  if(!found){
    bucket.push([k,v]);
    this._counter++;
    if(this._counter > .75 * this._limit){
	    this.resize(this._limit *= 2);
	  }
  }




};


HashTable.prototype.resize = function(newSize){

    newStore = this._storage;

    this._storage = makeLimitedArray(newSize);
    this._limit = newSize;
    this._counter = 0;

    var holder = this;
    newStore.each(function(bucket, key, collection){
    	if(bucket === undefined){
    		return;
    	}
    	for(var j = 0; j < bucket.length; j++){
    		var tuple = bucket[j];
			holder.insert(tuple[0], tuple[1])
    	}
	})
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var found = false;

  if(bucket === undefined){
  	return null;
  }

  for(var j = 0; j < bucket.length; j++){
  	var tuple = bucket[j];
    if(tuple[0] === k){
    	found = true;
		return tuple[1];
    }
  }

  if(!found){
  	return null
  }
};

HashTable.prototype.remove = function(k){
	// this._storage.each(function(value, key, collection){
	// 	console.log(value, 'value', key, 'key')
	// })
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var toDelete;

  for(var j = 0; j < bucket.length; j++){
  	var tuple = bucket[j];
    if( tuple[0] === k){
    	bucket.splice(j);
    	this._counter--;
    	if (this._counter < this._limit*.25) {
			this.resize(this._limit /= 2)
		}
    	return tuple[1]
    }
  }

  return null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
