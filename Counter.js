function makeCounter() {
	
  var ourCount = 1;
    function counter(){
    	return ourCount;
    }
  counter.get = function() {
 return ++ourCount;
  };

  counter.set = function(value){
  	ourCount=value;

  };
  counter.reset = function(){
  	ourCount=0;
  };
  return counter;
 
}

var counter1 = makeCounter();
counter1();
console.log(counter1.get()); // 2
counter1.set(10);
counter1();
console.log(counter1.get()); // 11
console.log(counter1()); // 11
counter1.reset();
console.log(counter1.get()); // 1
