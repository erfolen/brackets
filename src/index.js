module.exports = function check(str, bracketsConfig) {
  let b = [];
  let c = [];
  let res = [];
  
  bracketsConfig.forEach (function (item) {
      b.push(item[0]);
      c.push(item[1]);
  });  
  for (let i = 0; i < str.length; i++) {
    let d = b.indexOf(res[res.length - 1]);
    (d > -1) ? d : d = false;
    if (c.indexOf(str[i]) === d) {
        res.pop();
      } else if (b.includes(str[i])) {
        res.push(str[i]);
      } else {
        return false;
      }
  }
  return res.length === 0;
}
