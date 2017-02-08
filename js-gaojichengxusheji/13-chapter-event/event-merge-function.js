var EventUtil = {
    addHandler: function (ele, type, handler) {
        if (ele.addEventListener){
            ele.addEventListener(type, handler, false);
        }else if (ele.attachEvent){
            ele.attachEvent("on"+type, handler);
        }else {
            ele["on" + type] = handler;
        }
    },
    getEvent: function (event) {
        return  event ? event : window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {
        if (event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function () {
        if (event.stopPropagation){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    removeHander: function (ele, type, handler) {
        if (ele.removeEventListener){
            ele.removeEventListener(type, handler, false);
        }else if (ele.detachEvent){
            ele.detachEvent("on"+type, handler);
        }else {
            ele["on" + type] = null;
        }
    },
    getRelatedTarget: function (event) {
        if (event.relatedTarget){
            return event.relatedTarget;
        }else if (event.toElement){
            return event.toElement;
        }else if (event.fromElement){
            return event.fromElement;
        }else {
            return null;
        }
    },
    getChartCode: function (event) {
        if (typeof event.chartCode === "number"){   //chartCode只在keypress有该属性
            return event.chartCode;
        }else {
            return event.keyCode;
        }
    }
};