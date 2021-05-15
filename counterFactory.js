function counterFactory() {
    let counter = 0;
    return {
      increment : function increment () {
        return counter += 1;
      }, 
      decrement : function decrement () {
        return counter -= 1;
      }
    }
  }
  
  module.exports = counterFactory;