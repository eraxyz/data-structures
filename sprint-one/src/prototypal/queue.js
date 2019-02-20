var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);

  obj.storage = {
    size: 0
  };

  return obj;

};

var queueMethods = {
  size: function() {
    return this.storage.size;
  },
  enqueue: function(value) {
    this.storage[this.storage.size++] = value;
  },
  dequeue: function() {
    if (this.storage.size === 0) {
      return;
    }
    var i = 0;
    var result = this.storage[0];
    delete this.storage[0];
    for (var prop in this.storage) {
      if (prop !== 'size') {
        this.storage[i] = this.storage[prop];
        i++;
      }
    }
    this.storage.size--;
    return result;
  }
};
