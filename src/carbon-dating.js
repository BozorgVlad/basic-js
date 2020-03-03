const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let num = parseFloat(sampleActivity);
  if (typeof sampleActivity != 'string' || num > MODERN_ACTIVITY || isNaN(num) || 0 >= num) {
    return false;
  }; 
  return Math.ceil( Math.log( MODERN_ACTIVITY / num ) / (0.693 / HALF_LIFE_PERIOD ));
};
