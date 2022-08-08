function L1() {
    reset()
    let s = new Stepper()

    s.launch(s.mid, 2);
    s.spin(-1, 0)
    s.fly(s.lf2, s.mid, 0, 0, 1.5)
    s.spin(2, 0, .8)
    s.fly(s.rt2, s.mid, 0, 0, 2)
    s.spin(-2, 0, .8)
    s.fly(s.centre, s.mid, 0, 0, 1.5)
    s.spin(1, 0)
    s.land(.5, 2);

    s.doTimeline();
}

function L2() {
    reset()
    let s = new Stepper()

    s.launch(s.mid)
    s.spin(-1)
    s.fly(s.lf2, s.mid, 0, 0, 1.5)
    s.spin(2, 0, .8)
    s.fly(s.rt2, s.mid, 0, 0, 2)
    s.spin(-2, 0, .8)
    s.fly(s.centre, s.mid, 0, 0, 1.5)
    s.spin(4, 0, 1)
    s.fly(s.lf2, s.mid, 0, 0, 1.5)
    s.spin(2, 0, .8)
    s.fly(s.centre, s.mid, 0, 0, 1.5)
    s.spin(-4, 0, 1)
    s.fly(s.rt2, s.mid, 0, 0, 1.5)
    s.spin(-2, 0, .8)
    s.fly(s.centre, s.mid, 0, 0, 1.5)
    s.spin(1, 0)
    s.fly(s.centre, s.hi, 0, 0, 1)
    s.spin(2, 0, .8)
    s.diveStop(s.low, 1.5, 0)
    s.spin(-2, .5, .8)
    s.land(.5, 1)

    s.doTimeline();
}

function L3() {
    reset()
    let s = new Stepper(2)
    
    s.launch(s.low)
    s.spin(-2)
    s.fly(s.centre, s.mid, 0, .1)
    s.fly(s.lf1, s.mid, 0, .5, 1.5)
    s.spin(-8, .5, 1.5)
    s.fly(s.rt1, s.mid, 0, .5, 2.5)
    s.spin(8, .5, 1.5)
    s.fly(s.centre, s.mid, 0, .5, 1.5)
    s.spin(1, .5)
    s.fly(s.centre, s.low, 0, .5, 1.5)
    s.spin(-2)
    s.land(.5, 2)

    s.doTimeline();
}

function L4() {
    reset()
    let s = new Stepper(2)

    let mp1 = { 
        path: [
            {x: s.centre, y: s.low},
            {x: s.lf1, y: s.low},
            {x: s.lf2, y: s.lowIsh},
            {x: s.lf2, y: s.mid},
        ],
        autoRotation: false,
        start: 0,
        end: 1,
        curviness: .6
    }

    let mp2 = {
        path: [
            {x: s.lf2, y: s.mid},
            {x: s.lf2, y: s.low},
            {x: s.rt2, y: s.low},
            {x: s.rt2, y: s.mid},
            {x: s.rt1, y: s.hi},
            {x: s.centre, y: s.hi},
        ],
        start: 0,
        end: 1,
        curviness: .7,
    };

    s.launch(s.low)
    s.path(mp1, 0, .5, 4)
    s.innerSpin(1, 1.6, .7, '<')
    s.fly(s.lf1, s.mid, 0, .5, 2)
    s.innerSpin(4, .5, .8)
    s.innerSpin(-4, .5, .8)
    s.innerSpin(-2, .5, .4)
    s.fly(s.rt1, s.mid)
    s.innerSpin(4, .5, .8)
    s.innerSpin(-4, .5, .8)
    s.fly(s.centre, s.mid)
    s.fly(s.centre, s.ground - 10, 0, .5, 2)
    s.fly(s.centre, s.mid, 0, .5, 2)
    s.fly(s.centre - 30, s.mid, -2, 0)
    s.fly(s.centre - 30, s.ground - 10, 0, 0, 2)
    s.fly(s.centre - 30, s.mid, 0, .5, 2)
    s.fly(s.lf2, s.mid, 0, .5, 1.5)
    s.path(mp2, 0, .5, 8)
    s.innerSpin(-1, 0, 1, '<+1')
    s.innerSpin(-3, 0, 3, '<+2.6')
    s.spin(-1)
    s.diveStop(s.low)
    s.innerSpin(2, .5)
    s.land()

    s.doTimeline();
}

function L5() {
    reset()
    let s = new Stepper(2)

    let figure8 = {
        path: [
            {x: s.rt1, y: s.low},
            {x: s.lf1, y: s.hiIsh},
            {x: s.lf2, y: s.mid},
            {x: s.lf1, y: s.lowIsh},
            {x: s.rt1, y: s.hiIsh},
            {x: s.rt2, y: s.mid},
            {x: s.rt1, y: s.lowIsh},
            {x: s.lf1, y: s.hiIsh},
            {x: s.lf2, y: s.mid},
            {x: s.lf1, y: s.lowIsh},
            {x: s.rt1, y: s.hiIsh},
        ],
        align: k,
        autoRotate: 90,
        start: 0,
        end: 1,
        curviness: .9,
    }

    let spiralIn = {
        path: '#spiralIn',
        align: k,
        autoRotate: 90,
        alignOrigin: [0.5, 0.35],
        start: 0,
        end: 0.995,
    }

    let spiralOut = {
        path: '#spiralOut',
        align: '#spiralOut',
        autoRotate: 90,
        alignOrigin: [0.5, 0.35],
        start: .996,
        end: 0,
        offsetX: -13,
        offsetY: 6,
    }

    s.launch(s.low)
    s.spin(1, .3, .3)
    s.fly(s.lf3, s.low, 0, .5, 2)
    s.spin(-2, .3, 1.5)
    s.fly(s.rt3, s.low, 0, .5, 3)
    s.spin('+=155_cw', .3, 1.5)
    s.path(figure8, 0, .5, 10, 'power0.in')
    s.fly(s.rt1, s.hiIsh, '90_shortest', .5, .5)
    s.fly(s.rt1, s.lowIsh, 0, .5, 2)
    s.fly(s.centre, s.lowIsh, 0, .5, 2)
    s.fly(s.centre, s.hiIsh, 0, .5, 2)
    s.fly(s.rt1, s.hiIsh, 0, .5, 2)
    s.spin('+=60_cw', .5, 1)
    s.path(spiralIn, 0, 0, 7, 'sine.in')
    s.spin('-92_ccw', .5, 1)
    s.path(spiralOut, 0, 1, 7, 'sine.inOut')
    s.spin('-=90_ccw', 0)
    s.diveStop(s.low, 1.3, .8)
    s.spin(2, .5)
    s.land()

    s.doTimeline();
}

function L6() {
    reset()
    let s = new Stepper(2)

    let svg = document.getElementById('club38-svg');
    let c3Text = '<circle id="circle3" cx="320" cy="210" r="80" fill="none" />';
    let c3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c3.setAttribute('id', 'circle3');
    c3.setAttribute('cx', '320');
    c3.setAttribute('cy', '210');
    c3.setAttribute('r', '100');
    c3.setAttribute('fill', 'black');
    svg.appendChild(c3);

    MotionPathPlugin.convertToPath('#circle3');

    let ironCrossNW = {
        path: '#circle3',
        align: k,
        autoRotate: -90,
        alignOrigin: [.5, .5],
        start: .25,
        end: 0,
        offsetX: 100,
        offsetY: -100,
    }

    let ironCrossNE = {
        path: '#circle3',
        align: k,
        autoRotate: 90,
        alignOrigin: [.5, .5],
        start: .5,
        end: .25,
        offsetX: 200,
        offsetY: 0,
    }

    let ironCrossSE = {
        path: '#circle3',
        align: k,
        autoRotate: -90,
        alignOrigin: [.5, .5],
        start: .75,
        end: .5,
        offsetX: 100,
        offsetY: 100,
    }

    let ironCrossSW = {
        path: '#circle3',
        align: k,
        autoRotate: 90,
        alignOrigin: [.5, .5],
        start: 1,
        end: .75,
        offsetX: 0,
        offsetY: 0,
    }

    s.launch(s.low)
    s.spin(3, .5, .7)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(-6, .5, 1)
    s.fly(s.rt3, s.low, 0, .5, 1.5)
    s.spin(2, 0, 2)
    s.fly(s.lf3, s.low, 0, 0, 3)
    s.spin(-2, 0, 2)
    s.fly(s.centre, s.low, 0, 0, 1.5)
    s.fly(s.centre, s.low + 30, 1, 0, .7)
    s.fly(s.centre, s.mid, 0, .5, 1.5)
    s.spin(-5, .5, 1)
    s.fly(s.rt1, s.mid)
    s.spin('+=45_cw', .5, .3)
    s.spin('+=45_cw', .5, .3)
    s.spin('+=45_cw', .5, .3)
    s.spin('+=45_cw', .5, .3)
    s.fly(s.lf1, s.mid)
    s.path(ironCrossNW, 0, .5, 2)
    s.path(ironCrossNE, 0, .5, 2)
    s.path(ironCrossSE, 0, .5, 2)
    s.path(ironCrossSW, 0, .5, 2)
    s.spin(1, .5)
    s.fly(s.lf1, s.hi, 0);
    s.fly(s.centre, s.hi, 2, 0);
    s.diveStop(s.low, .7)
    s.spin(4, .5, .5)
    s.land()

    s.doTimeline();
}

function L7() {
    reset()
    let s = new Stepper()

    let mp1 = {
        path: [
            {x: s.lf1, y: s.mid},
            {x: s.lf1 + 40, y: s.low - 40},
            {x: s.centre, y: s.low},
        ],
        start: 0,
        end: 1,
        curviness: .5,
        autoRotation: -90,
    }

    s.launch(s.hi, 1.5)
    s.spin(2, .5)
    s.diveStop(s.low, 1.8, 1.5)
    s.spin(4, .5, 3)
    s.spin('-=45_ccw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    s.fly(s.lf1, s.mid, 0, .5, 2.5)
    s.spin('-=180_ccw', 0, .7)
    s.path(mp1, 0, .5, 3)
    s.innerSpin('-135_ccw', 0, 2.5, '<+=1.1')
    s.innerSpin(3, .5, 2.5)
    s.fly(s.rt1, s.low)
    s.innerSpin('-=360_ccw', .5, 2.5)
    s.fly(s.centre, s.low, 0, .5, 1.5)
    s.innerSpin('-=450_ccw', .5, .8)
    s.land()

    s.doTimeline();
}

function L8() {
    const aBit = 60;

    reset()
    let s = new Stepper()

    let svg = document.getElementById('club38-svg');
    let c3Text = '<circle id="circle3" />';
    let c3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c3.setAttribute('id', 'circle3');
    c3.setAttribute('cx', '400');
    c3.setAttribute('cy', '200');
    c3.setAttribute('r', s.colWidth);
    c3.setAttribute('fill', 'black');
    svg.appendChild(c3);

    MotionPathPlugin.convertToPath('#circle3');
    let invSlide1 = {
        path: '#circle3',
        align: k,
        start: 0,
        end: .5,
        curviness: .4,
    }

    let invSlide2 = {
        path: '#circle3',
        align: k,
        start: .66,
        end: .05,
        curviness: .4,
        offsetX: 189,
        offsetY: 104,
    }

    s.launch(s.hiIsh, 1.2)

    // North
    s.fly(-aBit, s.hiIsh)
    s.fly(s.centre, s.hiIsh)
    s.fly(s.centre, s.hi)
    s.fly(s.centre, s.hiIsh)
    s.spin('-=45_ccw', .5, .3)
    s.spin('+=90_cw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    s.spin(2, .5)

    // South
    s.diveStop(s.low)
    s.fly(-aBit, s.low)
    s.fly(s.centre, s.low)
    s.fly(s.centre, s.lowIsh)
    s.fly(s.centre, s.low)
    s.spin('-=45_ccw', .5, .3)
    s.spin('+=90_cw', .5, .3)
    s.spin('-=45_ccw', .5, .3)

    // East
    s.spin(2, .5)
    s.fly(s.rt1, s.mid, 1, 0, 1.8)
    s.fly(s.rt1, s.hiIsh)
    s.fly(s.rt1, s.mid)
    s.fly(s.rt1 + aBit, s.mid)
    s.fly(s.rt1, s.mid)
    s.spin('-=45_ccw', .5, .3)
    s.spin('+=90_cw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    
    // West
    s.path(invSlide1, 0, .5, 3)
    s.innerSpin(2, 0, 3, '<')
    s.fly(s.lf1, s.hiIsh)
    s.fly(s.lf1, s.mid)
    s.fly(s.lf1 - aBit, s.mid)
    s.fly(s.lf1, s.mid)
    s.spin('-=45_ccw', .5, .3)
    s.spin('+=90_cw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    
    // North East
    s.spin(1, .5)
    s.fly(s.rt1, s.hiIsh, '+=45', 0, 1.5)
    s.fly(s.rt1 - aBit, s.hi)
    s.fly(s.rt1, s.hiIsh)
    s.fly(s.rt1 + aBit, s.hiIsh - aBit)
    s.fly(s.rt1, s.hiIsh)
    s.spin('-=45_ccw', .5, .3)
    s.spin('+=90_cw', .5, .3)
    s.spin('-=45_ccw', .5, .3)

    // South West
    s.spin(-2, .5)
    s.fly(s.lf1, s.lowIsh, 0, 0, 1.5)
    s.fly(s.lf1 - aBit, s.lowIsh - aBit)
    s.fly(s.lf1, s.lowIsh)
    s.fly(s.lf1 - aBit, s.lowIsh + aBit)
    s.fly(s.lf1, s.lowIsh)
    s.spin('-=45_ccw', .5, .3)
    s.spin('+=90_cw', .5, .3)
    s.spin('-=45_ccw', .5, .3)

    // North West
    s.fly(s.lf1 - 30, s.lowIsh - 35, 2)
    s.fly(s.lf1, s.hiIsh, -1)
    s.fly(s.lf1 + aBit, s.hiIsh - aBit)
    s.fly(s.lf1, s.hiIsh)
    s.fly(s.lf1 - aBit, s.hiIsh - aBit)
    s.fly(s.lf1, s.hiIsh)
    s.spin('-=45_ccw', .5, .3)
    s.spin('+=90_cw', .5, .3)
    s.spin('-=45_ccw', .5, .3)

    // South East
    s.path(invSlide2, 0, .5, 3)
    s.innerSpin(-2, 0, 3, '<')
    s.fly(s.rt1 + aBit, s.lowIsh - aBit)
    s.fly(s.rt1, s.lowIsh)
    s.fly(s.rt1 + aBit, s.lowIsh + aBit)
    s.fly(s.rt1, s.lowIsh)
    s.spin('-=45_ccw', .5, .3)
    s.spin('+=90_cw', .5, .3)
    s.spin('-=45_ccw', .5, .3)

    // Finish
    s.spin(2, .5)
    s.fly(s.centre, s.hi, '+=45_cw', 0, 2)
    s.spin(-2, .5)
    s.diveStop(s.mid, 1)
    s.spin(4, .5)
    s.diveStop(s.low)
    s.spin(-2, .5)
    s.land()

    s.doTimeline();
}
