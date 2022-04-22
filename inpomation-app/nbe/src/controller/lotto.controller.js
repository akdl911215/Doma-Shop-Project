exports.getLotto = async function (req, res) {
  let count = req.params.number;
  if (count === undefined) count = 5;

  if (count < 1) {
    res.json({
      code: "1000",
      message: "it must be reater than 1.",
    });
    return;
  }

  const numbers = [];
  for (let index = 0; index < count; index++) {
    numbers.push(randomNumber());
  }
  res.json({
    code: "0000",
    message: "success",
    numbers: numbers,
  });
};

function randomNumber() {
  const map = new Map();

  while (map.size < 6) {
    const random = Math.random();
    const number = Math.floor(random * 45 + 1);
    map.set(number, number);
  }

  var numbers = [];

  map.forEach(function (value) {
    numbers.push(value);
  });

  numbers.sort(function (before, after) {
    return before - after;
  });

  return numbers.join(",");
}
