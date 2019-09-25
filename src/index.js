module.exports = function multiply(first, second) {
  let resultMultiplyBigInt = BigInt(first) * BigInt(second);

  let strResult = `${resultMultiplyBigInt}`;

  strResult.slice(0, strResult.length - 2);

  return strResult;
};
