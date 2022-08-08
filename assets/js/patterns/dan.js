function M9() {
    reset();
    let s = new Stepper()

    let invSlide = {
        path: [
            {x: s.centre, y: s.low},
            {x: s.rt1, y: s.lowIsh},
        ],
        align: k,
        autoRotate: -180,
        start: 0,
        end: 1,
        delay: 0,
        curviness: .5,
    }

    s.launch(s.hi, 1.5)
    s.spin(2, 0, .5)
    s.diveStop(s.lowIsh)
    s.spin(-5, .2, .8)
    s.fly(s.lf1, s.lowIsh, 0, .5, 1)
    s.spin('-=225_ccw', .5, .7)
    s.path(invSlide, 4, 0, 2.5)
    s.innerSpin('-=45_ccw', 1.8, .7, '<')
    s.spin(6, .5, 1)
    s.fly(s.centre, s.lowIsh)
    s.spin(3, 0)
    s.diveStop(s.low, .5)
    s.spin(-5, .5, .8)
    s.land()

    s.doTimeline()
}

function M10() {
    reset();
    let s = new Stepper()

    let svg = document.getElementById('club38-svg');
    let c3Text = '<circle id="circle3" cx="320" cy="210" r="80" fill="none" />';
    let c3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c3.setAttribute('id', 'circle3');
    c3.setAttribute('cx', '320');
    c3.setAttribute('cy', '210');
    c3.setAttribute('r', '80');
    c3.setAttribute('fill', 'none');
    svg.appendChild(c3);

    MotionPathPlugin.convertToPath('#circle3');

    let slideCircle = {
        path: '#circle3',
        align: k,
        autoRotate: true,
        alignOrigin: [.5, .5],
        start: 0,
        end: 1,
    }

    s.launch(s.low, .5)
    s.spin(-3, .5)
    s.fly(s.rt1, s.low)
    s.spin(4, .5, .7)
    s.fly(s.rt1, s.ground)
    s.fly(s.rt1, s.low)
    s.spin(-6, .5, 1)
    s.fly(s.lf1, s.low)
    s.spin(4, .5, .7)
    s.fly(s.lf1, s.mid, 0, .5, 1.5)
    s.fly(s.centre, s.mid)
    s.spin('-=45_ccw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    s.fly(s.centre, s.hi)
    s.spin(2, 0)
    s.diveStop(s.mid, .5, .8)
    s.spin(4, .5, .5)
    s.diveStop(s.low, .5)
    s.spin(-5, .5, .7)
    s.fly(s.centre, s.ground)
    s.fly(s.centre, s.low)
    s.fly(s.centre - 30, s.low, 2, 0, 1)
    s.fly(s.centre - 30, s.ground)
    s.fly(s.centre - 30, s.low)
    s.fly(s.centre, s.low, -2, 0, 1)
    s.fly(s.centre, s.ground - 10)
    s.fly(s.centre, s.lowIsh, 0, .5, 1)
    s.path(slideCircle, 5)
    s.fly(s.centre, s.low, 0, 0, 1)
    s.spin(-5, .5, .7)
    s.land()

    s.doTimeline()
}

function M11() {
    reset()
    let s = new Stepper()

    let svg = document.getElementById('club38-svg');
    let c3Text = '<circle id="circle3" cx="320" cy="210" r="80" fill="none" />';
    let c3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c3.setAttribute('id', 'circle3');
    c3.setAttribute('cx', '400');
    c3.setAttribute('cy', '210');
    c3.setAttribute('r', '100');
    c3.setAttribute('fill', 'none');
    svg.appendChild(c3);

    MotionPathPlugin.convertToPath('#circle3');

    let slideCircle = {
        path: '#circle3',
        align: '#circle3',
        autoRotate: true,
        alignOrigin: [.5, .5],
        start: .25,
        end: 1.25,
        offsetX: -3,
        offsetY: 1,
    }

    let slideHalfCircle = {
        path: '#circle3',
        align: '#circle3',
        autoRotate: -180,
        alignOrigin: [.5, .5],
        start: 1.25,
        end: .75,
        offsetX: -3,
        offsetY: 1,
    }

    s.launch(s.lowIsh)
    s.spin(6, .5, 1)
    s.fly(s.centre, s.hiIsh)
    s.spin(-5, .5, .7)
    s.fly(s.centre, s.lowIsh)
    s.spin(-4, .5, .7)
    s.fly(s.rt1, s.lowIsh)
    s.spin(4, .5, .7)
    s.fly(s.centre, s.lowIsh, 0, .3, 1)
    s.spin(-2, .5, .8)
    s.fly(s.rt1, s.lowIsh, -1, 0)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.fly(s.lf1, s.lowIsh)
    s.spin(-3, .5, .5)
    s.fly(s.lf1, s.hi)
    s.fly(s.centre, s.hi, 2, 0)
    s.diveStop(s.low)
    s.spin(-1, .5, .2)
    s.spin(-1, .5, .2)
    s.spin(-1, .5, .2)
    s.spin(-1, .5, .2)
    s.spin(4, .5, .7)
    s.path(slideCircle, 0, .5, 4)
    s.path(slideHalfCircle, 0, .5, 2)
    s.fly(s.centre, s.hi)
    s.spin(-2, 0)
    s.diveStop(s.mid, .7)
    s.spin(-4, .5, .5)
    s.diveStop(s.low, .7)
    s.spin(7, .5, .9)
    s.land()

    s.doTimeline();
}

function M12() {
    reset()
    let s = new Stepper(2)

    let svg = document.getElementById('club38-svg');
    let c3Text = '<circle id="circle3" cx="320" cy="210" r="80" fill="none" />';
    let c3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c3.setAttribute('id', 'circle3');
    c3.setAttribute('cx', '400');
    c3.setAttribute('cy', '210');
    c3.setAttribute('r', '120');
    c3.setAttribute('fill', 'none');
    svg.appendChild(c3);

    MotionPathPlugin.convertToPath('#circle3');

    let slideCircle = {
        path: '#circle3',
        align: '#circle3',
        autoRotate: true,
        alignOrigin: [.5, .5],
        start: .25,
        end: 1,
        offsetX: -2,
        offsetY: -20,
    }

    s.launch(s.low)
    s.spin(-5, .5, .7)
    s.fly(s.rt1, s.low)
    s.spin(6, .5, .8)
    s.fly(s.lf1, s.low)
    s.spin(-3, .5, .5)
    s.fly(s.lf1, s.hiIsh)
    s.innerSpin(1, .9, .1, '<')
    s.fly(s.rt1, s.hiIsh)
    s.innerSpin(1, .9, .1, '<')
    s.fly(s.rt1, s.low)
    s.innerSpin(1, .9, .1, '<')
    s.fly(s.lf1, s.low)
    s.innerSpin(-3, .5, 1.5)
    s.fly(s.lf1, s.hi)
    s.fly(s.centre, s.hi, 2, 0)
    s.diveStop(s.mid, .7)
    s.spin(-4)
    s.diveStop(s.low, .7)
    s.spin(7, .3, 1)
    s.fly(s.lf1, s.low, 0, .5, 1)
    s.spin(-7, .3, 1)
    s.fly(s.rt1, s.low, 0, 0, 2)
    s.innerSpin(-4, .8, .7, '<')
    s.innerSpin(4, 0, .7)
    s.fly(s.lf1, s.low, 0, 0, 2)
    s.innerSpin(4, .7, .9, '<')
    s.fly(s.lf1, s.hiIsh, 0, .5, 1.5)
    s.fly(s.rt1, s.hiIsh, 0, .5, 1.5)
    s.fly(s.rt1, s.low, 0, .5, 1.5)
    s.fly(s.centre, s.low, 0)
    s.path(slideCircle, 0, 0, 3)
    s.fly(s.rt1, s.low, 0, 0, 1.1)
    s.spin('-180_ccw', .5, .4) 
    s.spin(-6, .5, .8)
    s.fly(s.rt1, s.hiIsh)
    s.fly(s.centre, s.hi, -2, 0)
    s.diveStop(s.mid, .7)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(-4, .5, .7)
    s.diveStop(s.low, .7)
    s.spin(2, .5, .3)
    s.fly(s.centre, s.ground)

    s.doTimeline();
}

function M13() {
    reset()
    let s = new Stepper(2)

    let svg = document.getElementById('club38-svg');
    let c3Text = '<circle id="circle3" cx="320" cy="210" r="80" fill="none" />';
    let c3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c3.setAttribute('id', 'circle3');
    c3.setAttribute('cx', '400');
    c3.setAttribute('cy', '210');
    c3.setAttribute('r', '120');
    c3.setAttribute('fill', 'none');
    svg.appendChild(c3);

    MotionPathPlugin.convertToPath('#circle3');

    let slideCircle = {
        path: '#circle3',
        align: '#circle3',
        autoRotate: true,
        alignOrigin: [.5, .5],
        start: .25,
        end: 1.25,
        offsetX: -2,
        offsetY: -20,
    }

    s.launch(s.low)
    s.spin(3, .5, .5)
    s.fly(s.lf1, s.low)
    s.spin(-5, .5, .7)
    s.fly(s.lf1, s.hi)
    s.fly(s.centre, s.hi, 2, 0)
    s.diveStop(s.low)
    s.path(slideCircle, 0, .5, 4)
    s.spin(-5, 0, .7)
    s.fly(s.rt1, s.low)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(-5, .5, .5)
    s.fly(s.rt3, s.lowIsh)
    s.fly(s.lf3, s.lowIsh, 0, .5, 6)
    s.innerSpin(4, 0, 6, '<')
    s.fly(s.lf1, s.lowIsh, 0, .5, .7)
    s.spin(-3, 0, .7)
    s.fly(s.lf1, s.hiIsh)
    s.spin(3, .5, .5)
    s.fly(s.rt1, s.hiIsh)
    s.spin(-4, .5, .7)
    s.fly(s.rt1, s.lowIsh)
    s.spin(5, .5, .9)
    s.fly(s.lf1, s.lowIsh)
    s.spin(-6, .5)
    s.fly(s.lf1, s.hi)
    s.fly(s.centre, s.hi, 2, 0, .8)
    s.diveStop(s.low, .7)
    s.spin(-2, .5, .3)
    s.land()

    s.doTimeline();
}

function M14() {
    reset()
    let s = new Stepper()

    let svg = document.getElementById('club38-svg');
    let c3Text = '<circle id="circle3" cx="320" cy="210" r="80" fill="none" />';
    let c3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c3.setAttribute('id', 'circle3');
    c3.setAttribute('cx', '400');
    c3.setAttribute('cy', '210');
    c3.setAttribute('r', '120');
    c3.setAttribute('fill', 'none');
    svg.appendChild(c3);

    MotionPathPlugin.convertToPath('#circle3');

    let slideCircle = {
        path: '#circle3',
        align: '#circle3',
        autoRotate: -90,
        alignOrigin: [.5, .5],
        start: .25,
        end: 1.25,
        offsetX: -2,
        offsetY: -20,
    }
    // #3 walk-it-off
    s.spin('+=30_cw', .3, .5);
    s.spin('-=60_ccw', .3, .5);
    s.spin('+=60_cw', .3, .5);
    s.spin('-=60_ccw', .3, .5);
    s.spin('+=60_cw', .3, .5);
    s.spin('-=30_ccw', .3, .5);
    let walk = s.ptn;
    s.ptn = [];

    // #4 launch-snaps
    s.launch(s.low, .5);
    s.spin(3, .5, .5);
    s.fly(s.lf1, s.low, 0, .5, 1);
    s.spin(-7, .5, 1);
    let launchSnaps = s.ptn;
    s.ptn = [];

    // #8 don-fox-snap-box 
    s.fly(s.lf1, s.hiIsh);
    s.innerSpin(1, .9, .1, '<');
    s.fly(s.rt1, s.hiIsh);
    s.innerSpin(1, .9, .1, '<');
    s.fly(s.rt1, s.low);
    s.innerSpin(1, .9, .1, '<');
    s.fly(s.lf1, s.low);
    s.innerSpin(1, .9, .1, '<');
    let snapBox = s.ptn;
    s.ptn = [];

    // zig zag up
    s.spin('-=315_ccw', .5, 2);
    s.fly(s.centre, s.mid, 0, .5, .9);
    s.spin(3, .5, .7);
    s.fly(s.lf1, s.hiIsh, 0, .5, .9);
    s.innerSpin(-3, .5, .7);
    s.fly(s.centre, s.hi, 0, .5, .9);
    s.spin('-=225_ccw', .5, .7);
    let zigZagUp = s.ptn;
    s.ptn = [];

    // #10 shock-circle-snap 
    s.diveStop(s.low);
    s.path(slideCircle, 0, .5, 6);
    s.spin(-5, .1, .7);
    let shockCircleSnap = s.ptn;
    s.ptn = [];

    // tip turns
    s.fly(s.centre, s.low - 45);
    s.spin(-2, 0, 1, '<');
    s.fly(s.centre, s.low - 100);
    s.spin(2, 0, 1, '<');
    s.fly(s.centre, s.mid);
    s.spin(-2, 0, 1, '<');
    let tipTurns = s.ptn;
    s.ptn = [];

    // #9 snap-clock-snap
    s.fly(s.lf1, s.mid);
    s.spin(6, .5, 1);
    s.fly(s.centre, s.mid);
    s.innerSpin(-4, .5, .7);
    s.spin(1, .5, .3);
    s.spin(1, .5, .3);
    s.spin(1, .5, .3);
    s.spin(1, .5, .3);
    s.spin(-4, .5, .7);
    let snapClockSnap = s.ptn;
    s.ptn = [];

    // #6 go-snap-back-vslide
    s.fly(s.rt1, s.mid);
    s.spin(4, 0, .7);
    s.fly(s.centre, s.mid, 0, .5, 1.2);
    s.spin(-3, 0, .5);
    s.fly(s.rt1, s.mid, 0, 0, 1.5);
    let goSnapBackV = s.ptn;
    s.ptn = [];

    // #7 v-slide-v
    s.fly(s.rt1, s.low);
    s.spin(4, 0, .7);
    s.fly(s.lf1, s.low, 0, 0, 3);
    s.spin(4, 1.2, .7, '<');
    let vSlideV = s.ptn;
    s.ptn = [];

    // tumbleweed up
    s.fly(s.centre, s.hi, -4, .5, 6);
    let tumbleweedUp = s.ptn;
    s.ptn = [];

    // #1/#2 shock-snap-tip
    s.diveStop(s.low, 1);
    s.spin(5, .2, .8);
    s.land();
    s.fly(s.centre, s.low, 0, .7);
    s.fly(s.centre + 60, s.low, -6, .5, 1.5)
    s.land();
    s.fly(s.centre + 60, s.low, 0, 1, 1);
    s.fly(s.centre, s.low, 3, .5, .8);
    let shockSnap = s.ptn;
    s.ptn = [];

    // #5 shock-clock-snap
    s.fly(s.centre, s.hi, 0, .5, 2);
    s.spin(-2, .5, .5);
    s.diveStop(s.low, .8);
    s.spin('-=45_ccw', .5, .3);
    s.spin('-=45_ccw', .5, .3);
    s.spin('-=45_ccw', .5, .3);
    s.spin('-=45_ccw', .5, .3);
    s.spin('-=45_ccw', .5, .3);
    s.spin('-=45_ccw', .5, .3);
    s.spin('-=45_ccw', .5, .3);
    s.spin('-=45_ccw', .5, .3);
    s.spin(6, .5, 1);
    s.land();
    let shockClockSnap = s.ptn;
    s.ptn = [];

    let flight = [
        ...walk,
        ...launchSnaps,
        ...snapBox,
        ...zigZagUp,
        ...shockCircleSnap,
        ...tipTurns,
        ...snapClockSnap,
        ...goSnapBackV,
        ...vSlideV,
        ...tumbleweedUp,
        ...shockSnap,
        ...shockClockSnap,
    ];
    s.ptn = flight;

    s.doTimeline();
}

function M94() {
    reset()
    let s = new Stepper()

    s.launch(s.low, .5)
    s.spin(5, .5, 2)
    s.fly(s.lf1, s.low)
    s.spin(-9, .5, .8)
    s.fly(s.lf1, s.hi, 0, .3)
    s.spin(10, .5, .5)
    s.fly(s.rt3, s.hi, 0, .3, 1)
    s.fly(s.lf3 + 40, s.low, -22, 1.3)
    s.fly(s.rt1, s.mid, 0, .1, 2)
    s.spin(40)
    s.fly(-500, s.mid, 0, .1, 2)
    s.fly(s.centre, s.hi - 90, '+=130_cw', .1, .2)
    s.fly(s.lf1, s.hi - 60, '+=130_cw', .1, .2)
    s.fly(s.centre, s.ground - 60, '+=130_cw', .1, .2)
    s.fly(s.rt3 + 150, s.lowIsh, '+=130_cw', .1, .2)
    s.fly(s.centre, s.mid, '-=130_cw', .1, .2)
    s.land()

    s.doTimeline();
}
