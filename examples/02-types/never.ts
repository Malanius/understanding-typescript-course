const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};

generateError("A wild Erros has appeared!", 500);
