/**
 * Created by Administrator on 2016/12/22.
 */

var evt = {
    addListener: function (obj, type, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(type, fn);
        } else {
            obj.attachEvent("on" + type, fn);
        }
        //if the browser supports addEventListener(), it uses the method to
        // register an event listener. Otherwise, it calls attachEvent().
    },
    removeListener: function (obj, type, fn) {
        if (obj.removeListener()) {
            obj.removeListener(type, fn);
        } else {
            obj.detachEvent("on" + type, fn);
        }
    },
    getTarget: function (e) {
        if (e.target) {
            return e.target;
        }
        return e.srcElement;
    },
    preventDefault: function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }
};