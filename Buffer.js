function makeBuffer() { 
var text = '';
  return function ourBuffer(value){    
      
    if (value == undefined){
        return text;
    }

    else{
        return text += value;   
    }
  }
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer(' Hello');
buffer(' World');
buffer('!');
alert( buffer() ); // Hello World!

var buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);
alert( buffer() ); // '010'
