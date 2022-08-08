function combos(combo) {
    let c;

    switch (combo) {
        case 1:
            c = combo1();
            break;

        case 2:
            c = combo2();
            break;

        case 3:
            c = combo3();
            break;

        case 4:
            c = combo4();
            break;

        case 5:
            c = combo5();
            break;

        case 6:
            c = combo6();
            break;

        case 7:
            c = combo7();
            break;

        case 8:
            c = combo8();
            break;

        case 9:
            c = combo9();
            break;

        case 10:
            c = combo10();
            break;

        default:
    }

    c.doTimeline();
}

// shock-snap
function combo1() {
    reset()
    let s = new Stepper()

    s.launch(s.hi)
    s.spin(2, .5, .5)
    s.diveStop(s.low)
    s.spin(3, .2, .5)

    return s;
}

// shock-snap-tip
function combo2() {
    reset()
    let s = new Stepper()

    s.launch(s.hi)
    s.spin(2, .5, .5)
    s.diveStop(s.low)
    s.spin(3, .2, .5)
    s.land()

    return s;
}

// walk-it-off
function combo3() {
    reset()
    let s = new Stepper()

    s.spin('+=30_cw', .3, .5)
    s.spin('-=60_ccw', .3, .5)
    s.spin('+=60_cw', .3, .5)
    s.spin('-=60_ccw', .3, .5)
    s.spin('+=60_cw', .3, .5)
    s.spin('-=30_ccw', .3, .5)

    return s;
}

// launch-snaps
function combo4() {
    reset()
    let s = new Stepper()

    s.launch(s.low, .5)
    s.spin(3, .5, .5)
    s.fly(s.lf, s.low)
    s.spin(-2, .5, .5)
    s.fly(s.centre, s.low)
    s.spin(-4, .5, .5)
    s.land()
    s.spin(1, 1, .2)
    s.launch(s.low, .5)
    s.spin(-5, .5, .5)
    s.fly(s.rt1, s.low)
    s.spin(2, .5, .3)
    s.fly(s.centre, s.low)
    s.spin(5, .5, .8)
    s.land()

    return s;
}

// shock-clock-snap
function combo5() {
    reset()
    let s = new Stepper()

    s.launch(s.hi)
    s.spin(2, .5, .5)
    s.diveStop(s.low)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(-4, .5, .5)

    return s;
}

// go-snap-back-vslide
function combo6() {
    reset()
    let s = new Stepper()

    s.launch(s.low)
    s.spin(1, .5, .3)
    s.fly(s.rt1, s.low)
    s.spin(4, 0, .5)
    s.fly(s.centre, s.low)
    s.spin(-3, 0, .5)
    s.fly(s.rt1, s.low)

    return s;
}

// v-slide-v
function combo7() {
    reset()
    let s = new Stepper()

    s.launch(s.low)
    s.spin(-1, .5, .3)
    s.fly(s.lf1, s.low)
    s.spin(-1, .5, .3)
    s.fly(s.rt1, s.low, 0, .5, 3)
    s.spin(-4, 1.2, .7, '<')
    s.fly(s.lf1, s.low, 0, .5, 3)
    s.spin(4, 1.2, .7, '<')

    return s;
}

// don-fox-snap-box
function combo8() {
    reset()
    let s = new Stepper()

    s.launch(s.low)
    s.spin(-1, .5, .3)
    s.fly(s.lf1, s.low)
    s.spin(1, .5, .3)
    s.fly(s.lf1, s.hiIsh)
    s.innerSpin(1, .9, .1, '<')
    s.fly(s.rt1, s.hiIsh)
    s.innerSpin(1, .9, .1, '<')
    s.fly(s.rt1, s.low)
    s.innerSpin(1, .9, .1, '<')
    s.fly(s.lf1, s.low)
    s.innerSpin(1, .9, .1, '<')

    return s;
}

// snap-clock-snap
function combo9() {
    reset()
    let s = new Stepper()
    
    s.launch(s.low)
    s.spin(-1, .5, .3)
    s.fly(s.lf1, s.low)
    s.spin(2, .5, .3)
    s.fly(s.centre, s.low)
    s.spin(-4, .5, .5)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(-4, .5, .5)
    s.fly(s.rt1, s.low)

    return s;
}

// shock-circle-snap
function combo10() {
    reset()
    let s = new Stepper()

    let svg = document.getElementById('club38-svg');
    let cc3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    cc3.setAttribute('id', 'circlec3');
    cc3.setAttribute('cx', '400');
    cc3.setAttribute('cy', '210');
    cc3.setAttribute('r', '120');
    cc3.setAttribute('fill', 'none');
    svg.appendChild(cc3);

    MotionPathPlugin.convertToPath('#circlec3');

    let slideCircle = {
        path: '#circlec3',
        align: '#circlec3',
        autoRotate: true,
        alignOrigin: [.5, .5],
        start: .25,
        end: 1.25,
        offsetX: -2,
        offsetY: -20,
    }

    s.launch(s.hi, 1.5)
    s.spin(-2, .5, .3)
    s.diveStop(s.low)
    s.path(slideCircle, 0, .5, 6)
    s.spin(-5, 0, .5)
    s.fly(s.rt1, s.low)

    return s;
}
