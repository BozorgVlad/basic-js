module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;
        if (Array.isArray(arr)) {
            let count = 0;
            
            for (let i = 0; i < arr.length; i++) {
             count = Math.max(this.calculateDepth(arr[i]), count);
            }
            depth = count + 1;
        }
      return depth;
    }
};