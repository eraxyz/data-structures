var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    size: 0
  };

  // Implement the methods below
  someInstance.push = function(value) {
    storage[storage.size++] = value;
  };

  someInstance.pop = function() {
    if (storage.size > 0){
      storage.size--;
    }
    var result = storage[storage.size];
    delete storage[storage.size];
    return result;
  };

  someInstance.size = function() {
    return storage.size;
  };

  return someInstance;
};
