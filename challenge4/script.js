"use strict";

// CODEWARS #4

const toCamelCase = function (str) {
  const f2 = function (d) {
    const strFirst = str[0] + str.slice(1, str.indexOf(`${d}`)).toLowerCase();
    const str1 = str.toLowerCase().split(`${d}`).slice(1);
    const arr1 = [];
    arr1.push(strFirst);
    str1.forEach((w) => arr1.push(w.slice(0, 1).toUpperCase() + w.slice(1)));
    return arr1.join("");
  };
  if (str.includes("-")) {
    return f2("-");
  } else if (str.includes("_")) {
    return f2("_");
  } else return "";
};

toCamelCase("tDaSDAe-steasDSalth-waRRior");
toCamelCase("Twer_Sfff_asfASF");
toCamelCase("BWerkay_BYwRWE_WEidSD");

// TECHNIC 1
const sss = "AAAA-BBBB_CCCC";
console.log(sss.split(/[-_]/));
