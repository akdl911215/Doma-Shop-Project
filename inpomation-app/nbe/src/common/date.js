exports.date = function () {
  const newDate = new Date();

  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const month2 = ("0" + month).slice(-2);

  const date = ("0" + newDate.getDate()).slice(-2);
  const hours = ("0" + newDate.getHours()).slice(-2);
  const minutes = ("0" + newDate.getMinutes()).slice(-2);
  const seconds = ("0" + newDate.getSeconds()).slice(-2);

  // const returnDate = currentDate.replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3");

  return `${year}-${month2}-${date} ${hours}:${minutes}:${seconds}`;
};

exports.today = function () {
  var today = new Date();
  today.setHours(today.getHours() + 9);

  return today.toISOString().replace("T", " ").substring(0, 19);
};
