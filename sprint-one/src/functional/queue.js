var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    size: 0
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storage.size++] = value;
  };

  someInstance.dequeue = function() {
    if (storage.size === 0){
      return;
    }
    var result = storage[0];
    delete storage[0];
    var i = 0;
    for (var prop in storage) {
      if (prop !== 'size') {
        storage[i] = storage[prop];
        i++;
      }
    }
    storage.size--;
    return result;
  };

  someInstance.size = function() {
    return storage.size;
  };

  return someInstance;
};
