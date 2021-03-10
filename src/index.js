exports.min = function min(array) {
    if (array !== undefined && array.length > 0) {
        let min = 999999999;
        for (let i = 0; i <= array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    } else {
        return 0;
    }
}

exports.max = function max(array) {
    if (array !== undefined && array.length > 0) {
        let max = 0;
        for (let i = 0; i <= array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    } else {
        return 0;
    }
}

exports.avg = function avg(array) {
    if (array !== undefined && array.length > 0) {
        let sum = 0;
        let avg = 0;
        for (let i = 0; i <= array.length - 1; i++) {
            sum += array[i];
        }
        avg = sum / array.length;

        return avg;
    } else {
        return 0;
    }
}
