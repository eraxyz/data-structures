var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {
    size: 0
  };

  return obj;
};

var stackMethods = {
  size: function() {
    return this.storage.size;
  },
  pop: function() {
    if (this.storage.size > 0) {
      this.storage.size--;
    }
    var result = this.storage[this.storage.size];
    delete this.storage[this.storage.size];
    return result;
  },
  push: function(value) {
    this.storage[this.storage.size++] = value;
  }
};
