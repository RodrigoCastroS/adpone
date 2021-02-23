// Escribe una función que dado un input "aaaabbbbbcca"
// devuelva un output: [["a", 4], ["b", 5], ["c", 2], ["a", 1]]

function countLetters(letters) {
  let result = [];
  let counter = 1;

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i + 1]) {
      counter++;
    } else {
      //control last position counter
      if (letters[i + 1] === undefined) {
        counter++;
      }
      result.push([letters[i], counter]);
      counter = 0;
    }
  }
  return result;
}

countLetters("aaaabbbbbcca");
