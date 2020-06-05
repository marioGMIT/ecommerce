export const regExpConfig = {
    IDcard: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, // ID card
    mobile: /^1([3|4|5|7|8|])\d{9}$/, // cellphone number
    telephone: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/, // landline
    num: /^[0-9]*$/, // digital
    phoneNo: /(^1([3|4|5|7|8|])\d{9}$)|(^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$)/, // Phone or cell phone
    policeNo: /^[0-9A-Za-z]{4,10}$/, // Account number 4-10 digits or letters
    pwd: /^[0-9A-Za-z]{6,16}$/, // Password consists of 6-16 digits or letters
    isNumAlpha: /^[0-9A-Za-z]*$/, // Letters or numbers
    isAlpha: /^[a-zA-Z]*$/, // only letters
    isNumAlphaCn: /^[0-9a-zA-Z\u4E00-\uFA29]*$/, // alphanumeric
    isPostCode: /^[\d-]*$/i, // postcode
    isNumAlphaUline: /^[0-9a-zA-Z_]*$/, // Whether it is a number, letter, or underscore
    isNumAndThanZero: /^([1-9]\d*(\.\d+)?|0)$/, // Is it an integer and greater than 0
    isNormalEncode: /^(\w||[\u4e00-\u9fa5]){0,}$/, // Whether it is a non-special character
    isTableName: /^[a-zA-Z][A-Za-z0-9#$_-]{0,29}$/, // is table name
    isInt: /^-?\d+$/, // is it a number?
    isText_30: /^(\W|\w{1}){0,30}$/, // between 0 and 30 characters

    imgType: /image\/(png|jpg|jpeg|gif)$/, // Upload image type
    float: /^\d+(\.?|(\.\d+)?)$/, // is it float
  }