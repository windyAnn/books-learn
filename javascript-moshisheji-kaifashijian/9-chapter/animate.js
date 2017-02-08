var tween = {
    linear: function (t, b, c, d) {
        return c*t/d +b;
    },
    easeIn: function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    strongEaseIn: function (t, b, c, d) {
        return c*(t /=d)*t*t*t*t + b;
    }


};
var Animate = function (dom) {
    this.dom = dom;
    this.startT = 0;
    this.startPos = 0;
    this.endPos = 0;
    this.propName = null;
    this.easing = null;
    this.duration = null;
    this.f = true;
    this.timeId = null;

};
Animate.prototype.start = function (propName, endPos, duration, easing) {
    this.startT = +new Date;
    this.startPos = this.dom.getBoundingClientRect()[propName];
    this.propName = propName;
    this.endPos = endPos;
    this.duration = duration;
    this.easing = tween[easing];
    var self = this;

    this.timeId = setInterval(function () {
        self.pos = self.step();
        if (self.pos  == false) {
            clearInterval(self.timeId);
        }else {
            return self.pos;
        }

    }, 30);


};
Animate.prototype.step = function () {
    var t = +new Date();

    if (t >= this.startT + this.duration) {
        this.update(this.endPos);
        return false;
    }
   this.pos = this.easing(t - this.startT, this.startPos, this.endPos - this.startPos, this.duration);
   if (this.pos < this.endPos){
       this.update(this.pos);
       return this.pos;
    }


};
Animate.prototype.update = function (pos) {
    this.dom.style[this.propName] = pos + 'px';
};
