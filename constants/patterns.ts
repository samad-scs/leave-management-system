export const patterns = {
  numbersAllowed: /^[0-9]+$/i,
  alphaAllowed: /^[A-Z a-z]+$/i,
  alphaNumberAllowed: /^[A-Z 0-9 a-z]+$/i,
  alphaNumberSpecialCharAllowed: /^[ A-Za-z0-9_@./#&+-]*$/i,
  heightPattern: /^[0-9]*\.?[0-9]*$/,
  alphaNumericAllowed: /^[A-Z a-z 0-9]+$/i,
  residentPattern: /^[A-Za-z]+$/,
  emailAdvancedPattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  emailPattern:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  passwordPattern:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/,
  securityPattern:
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/,
  rgbaReplacer: /^rgba?\(|\s+|\)$/g,
  dateFormatPattern: /^([1-9]\/|[2-9])$/g,
  dateTwoDigitFormat: /^(0[1-9]|1[0-2])$/g,
  monthFormat: /^([0-1])([3-9])$/g,
  monthAndDateFormat: /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
  zeroValueFormat: /^([0]+)\/|[0]+$/g,
  allowOnlyDigitsAndSlash: /[^\d\/]|^[\/]*$/g,
  preventMoreThanOneSlash: /\/\//g,
  upiIdPattern: /^[\w.-]+@[\w.-]+$/g,
  alphaDashAllowed: /^[A-Z a-z 0-9 -]+$/i,
  alphaNumericDotAllowed: /^[A-Z a-z 0-9 .]+$/i,
  numericDashAllowed: /^[0-9 -]+$/i,
  aadherCardAllowed: /^[0-9]{4} [0-9]{4} [0-9]{4}$/i,
  panCardAllowed: /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/,
  urlPattern:
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,})/gi,
};
