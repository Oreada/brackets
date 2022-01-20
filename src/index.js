module.exports = function check(str, bracketsConfig) {

  let len = str.length / 2;

  let brackets = bracketsConfig.map((itemArray) => itemArray.join(''));

  for (let i = 0; i < len; i++) {

    for (let b = 0; b < brackets.length; b++) {

      str = str.replace(brackets[b], '');
    };
  };

  return !str;
  // if (str) return false; else return true;
};
