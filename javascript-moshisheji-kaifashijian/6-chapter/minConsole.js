/**
 * Created by shiyong on 25/11/2016.
 */
minConsole = {
    log: function () {
        console.log(Array.prototype.join.call(arguments));
    }
};