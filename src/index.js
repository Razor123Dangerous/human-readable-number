module.exports = function toReadable (number) {
    if(number === undefined){
        return false;
    }
    else{
        let single_array = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
        let decimal_array = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        if(number < 13){
            return single_array[number];
        }
        else if(number > 12 && number < 20){
            if(number === 13) return 'thirteen';
            else if(number === 15) return 'fifteen';
            else if(number === 18) return 'eighteen';
            return single_array[number - 10] + 'teen';
        }
        else if(number >= 20 && number < 100){
            if(number % 10 === 0){
                return decimal_array[+number.toString()[0] - 2];
            }
            return decimal_array[+number.toString()[0] - 2] + ' ' + single_array[+number.toString()[1]];
        }
        else if(number > 99 && number < 1000){
            if(number % 100 === 0){
                return single_array[+number.toString()[0]] + ' hundred';
            }
            else if(number % 100 > 0 && number % 100 < 9){
                return single_array[+number.toString()[0]] + ' hundred ' + single_array[+number.toString()[2]];
            }
            else if(number % 100 > 8 && number % 100 < 13)
            {
                return single_array[+number.toString()[0]] + ' hundred ' + single_array[+number.toString().slice(1,3)];
            }
            else if(number % 100 > 12 && number % 100 < 20){
                if(number % 100 === 13) {
                    return single_array[+number.toString()[0]] + ' hundred ' + 'thirteen';
                }
                else if(number % 100 === 15) {
                    return single_array[+number.toString()[0]] + ' hundred ' + 'fifteen';
                }
                else if(number % 100 === 18) {
                    return single_array[+number.toString()[0]] + ' hundred ' + 'eighteen';
                }
                else{
                    return single_array[+number.toString()[0]] + ' hundred ' + single_array[+number.toString()[2]] +'teen';
                } 
            }   
            else if(number % 10 === 0){
                return single_array[+number.toString()[0]] + ' hundred ' + decimal_array[+number.toString()[1] - 2];
            }
            return single_array[+number.toString()[0]] + ' hundred ' + decimal_array[+number.toString()[1] - 2] + ' ' + single_array[+number.toString()[2]];
        }
    }
}
