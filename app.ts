let userInput: unknown;
let userName: string;

// eslint-disable-next-line prefer-const
userInput = 5;
userName = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  throw { errorMessage: message, errorCode: code };
}
generateError('An error occurred', 500);
