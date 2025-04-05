export const errorClosure = function (response) {
  return (error) => {
    response.write(JSON.stringify({ message: error.message }).concat("\n"));
    response.end();
  };
};
