module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (date.hasOwnProperty('getMonth')) throw new Error('Error');
  if(date.getMonth() == 0 || date.getMonth() == 11 || date.getMonth() == 1) {
    return 'winter';
  } else if(date.getMonth() == 2 || date.getMonth() == 3 || date.getMonth() == 4) {
    return 'spring';
  } else if(date.getMonth() == 5 || date.getMonth() == 6 || date.getMonth() == 7) {
    return 'summer'
  }else if(date.getMonth() == 8 || date.getMonth() == 9 || date.getMonth() == 10) {
    return 'autumn'
  }
};
