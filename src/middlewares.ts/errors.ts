interface CustomError extends Error {
  message: string;
  code: number;
  publicMessage?: string;
}

const createCustomError = (message: string, code: number) => {
  const error = new Error(message) as CustomError;
  error.code = code;
  error.publicMessage = message;

  return error;
};

export default createCustomError;
