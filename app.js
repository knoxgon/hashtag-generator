/*
  Codewars link:
  https://www.codewars.com/kata/52449b062fb80683ec000024

  Trim and finally capitalize first letter of every word
*/
const generateHashtag = (str) => str.trim().replace(/\s+/g, ' ').length + 1 > 140 || str.trim().replace(/\s+/g, ' ').length < 1 ? false : "# ".concat(str).replace(/\s+/g, ' ').split(' ').map((a) => {return a.replace(/^\w/, (b) => {return b.toUpperCase()})}).join('');