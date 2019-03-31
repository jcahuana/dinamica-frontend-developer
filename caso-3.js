function getValue (_object, _search, _defaultValue) {

  // Busco la cantidad de valores a buscar
  const keyList = _search.toString().split('.');

  let position = 0;
  let result = null;

  keyList.forEach(function(element) {

    if (result === null) {
      result = _defaultValue;

      if (_object[keyList[position]] !== undefined) {
        result = _object[keyList[position]];
        position++;
      }
    } 
    else {

      if (result[keyList[position]] !== undefined) {
        result = result[keyList[position]];
        position++;
      } else {
        result = _defaultValue;
      }
    }
    

  });

  return result;
};

// Define objetos de prueba
const object_1 = {'a': [{'b': {'c': 3 } } ] };
const object_2 = {'a': {'b': {'c': 3 } } };


// Corre las pruebas
let defaultValue = 'ERROR';
console.log('// RESULT 1 =>', getValue(object_1, 'a.b.c', defaultValue));

defaultValue = '-';
console.log('// RESULT 2 =>', getValue(object_2, 'a.b.c', defaultValue));

defaultValue = 'NO ENCONTRADO';
console.log('// RESULT 3 =>', getValue(object_2, 'a.b.x', defaultValue));