var stringToArray = {
    stringToArray: function(data) {
        var array = data;

        if(typeof data === 'string') {
            array = data.split(' ');
        }

        return array;
    }
};

module.exports = stringToArray;