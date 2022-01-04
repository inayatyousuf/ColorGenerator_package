








function hexColorGenerator(){
let n = (Math.random() * 9999999 + 0).toString(16);
let result  = '#' + n.slice(0,6);
return result;
}


module.exports = hexColorGenerator;

