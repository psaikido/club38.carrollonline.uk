/* Stepper class. Hugh Carroll - hughie@carrollonline.co.uk.
 * Used on https://carrollonline.uk/patterns.html.
 *
 * Green Sock Animation Platform, 'GSAP', is an object that 
 * handles the animation of dom objects.
 * Rather than code it directly, this Stepper class creates 
 * an array of values out of methods like 'fly' and 'spin'
 * to then feed into the creation of a 'timeline' that is then
 * 'tweened' by gsap to make a kite fly around the Kilkenny field.
 * It's done like this so that there is a more human readable set
 * of flight patterns that can have elements that are reusable.
 *
 * Gsap movements are measured from an object's starting position.
 * For left/right values we decrease/increase from the 'centre' of 380px.
 */

class Stepper {
    constructor(rotation) {
        this.obj;
        this.objInner;
        this.objCurrent;
        this.x;
        this.y;
        this.rotation;
        this.delay;
        this.duration;
        this.motionPath;
        this.ease;
        this.label;
        this.transformOrigin = '47% 35%';
        this.rotationCount = 0;
        this.ptn = [];

        this._setStart(rotation);
    }

    launch(y, duration = 1, rot = 0) {
        this.x = this.centre;
        this.y = y;
        this.duration = duration;
        this.rotation = rot;
        this.delay = 1;

        this._addStep();
        return this;
    }

    spin(rot, delay = 0, duration = .5, label) {
        this.rotation = rot;
        this.delay = delay;
        this.duration = duration;
        this.label = label;

        this._addStep();
        return this;
    }

    innerSpin(rot, delay = 0, duration = .5, label) {
        this.objCurrent = this.objInner;
        this.rotation = rot;
        this.delay = delay;
        this.duration = duration;
        this.label = label;

        this._addStep();
        return this;
    }

    fly(x, y, rot = 0, delay = .5, duration = 1) {
        this.objCurrent = this.obj;
        this.x = x;
        this.y = y;
        this.rotation = rot;
        this.delay = delay;
        this.duration = duration;

        this._addStep();
        return this;
    }

    land(duration = 1, delay = .5) {
        this.fly(this.x, this.ground, 0, delay, duration);
        return this;
    }

    diveStop(y, duration = 1) {
        this.y = y;
        this.duration = duration;
        this.ease = 'power1.in';

        this._addStep();
        return this;
    }

    path(mp, dur, rotationCount = 0, ease = 'sine.inOut') {
        this.x = undefined;
        this.y = undefined;
        this.motionPath = mp;
        this.duration = dur;
        this.ease = ease;
        this._convertRotCode(rotationCount);

        this._addStep();
        return this;
    }

    doTimeline() {
        let obj, lbl, i;

        for (i = 0; i < this.ptn.length; i++) {
            obj = this.ptn[i][0];
            if (this.ptn[i][9] !== undefined) {
                lbl = this.ptn[i][9];
                timeline.to(obj, this._makeTweenObj(this.ptn[i]), lbl)
            } else {
                timeline.to(obj, this._makeTweenObj(this.ptn[i]))
            }
        }
    }

    _setStart(rotation = 0) {
        this.obj = this.objCurrent = k;
        this.objInner = kImg;
        this.rotation = rotation;
        this.delay = 0;
        this.duration = .1;

        this._setDimensions();
        this._addStep();
        return this;
    }

    _setDimensions() {
        // Establish width & height of the wind-window.
        this.ww = document.getElementById('wind-window');

        if (!this.ww) {
            this.ww = document.getElementById('wind-window-with-menu');
        }

        // Gsap movements are measured from an object's starting position.
        // For left/right values we decrease/increase from the 'centre'.
        // This 'centre' has to first be calculated as the middle of the 
        // wind-window div first though.
        this.codeCentre = this.ww.offsetWidth / 2;

        // the minus 10 is to give a little margin at the edges
        this.colWidth = (this.ww.offsetWidth / 6) - 10; 

        this.lf3 = -(this.colWidth * 3);
        this.lf2 = -(this.colWidth * 2);
        this.lf1 = -this.colWidth;
        this.centre = 0;
        this.rt1 = this.colWidth;
        this.rt2 = this.colWidth * 2;
        this.rt3 = this.colWidth * 3;

        /* y values are 0 at the top and 400 at the bottom.
         * The displacement values are negative because the kite's 
         * starting position is 365px.
         */
        this.codeHeight = this.ww.offsetHeight;
        this.rowHeight = this.codeHeight / 6;

        this.ground = 0;
        this.low = -this.rowHeight;
        this.lowIsh = -(this.rowHeight * 2);
        this.mid = -(this.rowHeight * 3);
        this.hiIsh = -(this.rowHeight * 4); 
        this.hi = -(this.rowHeight * 5);
    }

    _makeTweenObj(step) {
        //a 'step' - obj, x, y, rotation, duration, delay, motionPath, ease, transformOrigin, label 
        let twnObj = {};

        if (step[1] !== undefined) {
            twnObj['x'] = step[1];
        }

        if (step[2] !== undefined) {
            twnObj['y'] = step[2];
        }

        if (step[3] !== undefined) {
            twnObj['rotation'] = this._convertRotCode(step[3]);
        }

        if (step[4] !== undefined) {
            twnObj['delay'] = step[4];
        }

        if (step[5] !== undefined) {
            twnObj['duration'] = step[5];
        } else {
            twnObj['duration'] = 1;
        }

        if (step[6] !== undefined) {
            twnObj['motionPath'] = step[6];
        }

        if (step[7] !== undefined) {
            twnObj['ease'] = step[7];
        }

        if (step[8] !== undefined) {
            twnObj['transformOrigin'] = step[8];
        }

        // index 9 is used separately for the tween's label

        return twnObj;
    }

    _addStep() {
        let step = [
            this.objCurrent,
            this.x,
            this.y,
            this.rotation,
            this.delay,
            this.duration,
            this.motionPath,
            this.ease,
            this.transformOrigin,
            this.label,
        ];

        this.ptn.push(step);
        this._resetVars();
    }

    _resetVars() {
        this.objCurrent = this.obj;
        this.lastX = this.x;
        this.x = undefined;
        this.lastY = this.y;
        this.y = undefined;
        this.rotation = undefined;
        this.delay = undefined;
        this.duration = undefined;
        this.motionPath = undefined;
        this.ease = undefined;
        this.transformOrigin = '47% 32%';
        this.label = undefined;
    }

    _convertRotCode(code) {
        let retStr = '';

        // We might have a gsap type of string for fine tuning
        // but usually it will be a whole number.
        if (Number.isInteger(code)) {
            let absVal = Math.abs(code) * 90;

            if (code >= 0) {
                // clockwise
                retStr =  '+=' + absVal + '_cw';
            } else {
                // anti-clockwise
                retStr = '-=' + absVal + '_ccw';
            }
        } else {
            retStr = code;
        }

        this._updateRotationCount(retStr);
        return retStr;
    }

    _updateRotationCount(code) {
        if (Number.isInteger(code)) {
            if (code >= 0) {
                this.rotationCount += code;
            } else {
                this.rotationCount -= code;
            }
        } else {
            let num = parseInt(code.replace(/[^0-9]/g, ''));
            num = num / 90; // convert back to quarter turn = 1 style
            let sign = code.charAt(0);

            if (sign === '+') {
                this.rotationCount = this.rotationCount + num;
            } else if (sign === '-') {
                this.rotationCount = this.rotationCount - num;
            }
        }

        /*
        if (code != '+=0_cw') {
            console.log(code, this.rotationCount);
        }
        */
    }
}
