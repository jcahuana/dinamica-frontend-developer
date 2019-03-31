const validateIp = (function () {

  const methods = {
    validateByCriteria: function (_ip) {
      const regex = '^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$';
      const validate = new RegExp(regex);

      return validate.test(_ip);
    }
  };

  return {
    validate: (_ip) => {
      return methods.validateByCriteria(_ip);
    }
  }

})();

const ip = '1.2.3.4';
const isValidIp = validateIp.validate(ip);
console.log('RESULT:', isValidIp)