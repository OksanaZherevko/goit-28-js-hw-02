function findLongestWord(string) {
  // Пиши код ниже этой строки
 string = string.split(' ');   
    let longestWord = string[0];    
    for (let i = 0; i < string.length; i += 1){
        if (string[i].length > longestWord.length) {
            longestWord = string[i]           
        };      
    };   
    return longestWord;

  // Пиши код выше этой строки
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
console.log(findLongestWord(' '));



// Задание
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string).
// Вызов функции findLongestWord('The quick brown fox jumped over the lazy dog') возвращает jumped.
// Вызов функции findLongestWord('Google do a roll') возвращает Google.
// Вызов функции findLongestWord('May the force be with you') возвращает force.
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.