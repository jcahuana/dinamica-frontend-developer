const OrderList = (function () {

  const data = {
    inputList: [],
    orderedList: []
  };

  var methods = {
    // Suma los dígitos de un número
    sumDigists: function (_number) {

      // Si el número tiene una cifra lo retorna inmediatamente
      if (_number.toString().length === 1) {
        return _number;
      }
      // Para los número que tienen más de una cifra
      else {

        // Suma los dígitos
        let number = _number.toString();
        let sum = 0;

        for (let i = 0; i < number.length; i++) {
          sum += parseInt(number.substr(i, 1));
        }

        return sum;

      }

    },
    // Usa el criterio de orden definido
    validateByCriteria: function (_currentNumber) {

      const currentSum = methods.sumDigists(_currentNumber);

      let response = false;
      let savedSum;

      let temporalList = [];

      // Compara con todos los números previamente guardados
      for (let i = 0; i < data.orderedList.length; i++) {
        savedSum = methods.sumDigists(data.orderedList[i]);

        // Si es igual, los compara como cadenas
        if (currentSum === savedSum) {
          temporalList.push(_currentNumber.toString());
          temporalList.push(data.orderedList[i].toString());

          if (temporalList.sort()[0] === _currentNumber.toString()) {
            return {
              position: i
            }
          }
        }

        if (currentSum < savedSum) {

          // Retorna la posición
          return {
            position: i
          };

        }
          
        
      }

      return response;
    },
    // Guarda en la lista ordenada con el nuevo criterio
    orderNumbers: function () {
      let currentSum;
      let savedSum;
      let position;
      let response;

      data.inputList.forEach(function (_currentNumber) {

        // Si la lisa ordenada aún no tiene elementos guardados
        if (!data.orderedList.length) {
          data.orderedList.push(_currentNumber);
          return false;
        };

        response = methods.validateByCriteria(_currentNumber);
        if (response) {
          data.orderedList.splice(response.position, 0, _currentNumber);
        } else {
          data.orderedList.push(_currentNumber);
        }

      });

    },
    // Proceso principal para ordenar números
    init: function (_inputList) {
      data.inputList = _inputList;
      if (_inputList.length) {
        methods.orderNumbers();
      }
      
    }
  };


  return {
    init: (_inputList) => {
      methods.init(_inputList)
    },
    getOrderedList: () => {
      return data.orderedList;
    }
	};

})();

const inputList = [56,65,74,100,99,68,86,180,90];
OrderList.init(inputList);

console.log('RESULT:', OrderList.getOrderedList());