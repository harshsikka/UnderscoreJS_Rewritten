(function() {
  'use strict';

  window._ = {};
 
 _.identity = function(val) {
    return val;
 };

  // First:
  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
      if(n === undefined) { return array[0];}
      else { return array.slice(0,n);}
  };
  
  // Last:
  // Like first, but for the last elements. 
  // If n is undefined, return just the last element.
  _.last = function(array,n){
    if(n === undefined) { return array[array.length-1];}
    else { return array.slice(-n);}
  }

  // Each:
  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.

  _.each = function(collection, iterator){
      if(Array.isArray(collection)){
          for(var i = 0; i < collection.length; i+=1){
              iterator(collection[i], i, collection);
          }
      }
      else {
          for(var key in collection){
              iterator(collection[key], key, collection);
          }
      }
  }

  // Index Of:
  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array. 

  _.indexOf = function(array, target){
      for(var i = 0; i < array.length; i+=1){
          if(array[i] === target){return i;}
      }
  }



}());
