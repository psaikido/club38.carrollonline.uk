function L1() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg);

    s.launch(s.mid);
    s.spin(-1)
    s.fly(s.lf2, s.mid, 0, .5, 1.5)
    s.spin(2)
    s.fly(s.rt2, s.mid, 0, .5, 2)
    s.spin(-2)
    s.fly(s.centre, s.mid, 0, .5, 1.5)
    s.spin(1)
    s.land(2);

    s.doTimeline();
}

function L2() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg);

    s.launch(s.mid)
    s.spin(-1)
    s.fly(s.lf2, s.mid, 0, 0, 1.5)
    s.spin(2)
    s.fly(s.rt2, s.mid, 0, 0, 2)
    s.spin(-2)
    s.fly(s.centre, s.mid, 0, 0, 1.5)
    s.spin(4, 0, 1)
    s.fly(s.lf2, s.mid, 0, 0, 1.5)
    s.spin(2)
    s.fly(s.centre, s.mid, 0, 0, 1.5)
    s.spin(-4, 0, 1)
    s.fly(s.rt2, s.mid, 0, 0, 1.5)
    s.spin(-2)
    s.fly(s.centre, s.mid, 0, 0, 1.5)
    s.spin(1)
    s.fly(s.centre, s.hi, 0, 0, 1)
    s.spin(+2)
    s.diveStop(s.low)
    s.spin(-2, .5)
    s.land(1)

    s.doTimeline();
}

function L3() {
    reset();

    let s = new Stepper()
    s.setStart(k, kImg, 2)
    s.launch(s.low)
    s.spin(-2)
    s.fly(centre, s.mid)
    s.fly(s.lf1, s.mid, 0, .5, 1.5)
    s.spin(-8, .5, 1.5)
    s.fly(s.rt1, s.mid, 0, .5, 2.5)
    s.spin(8, .5, 1.5)
    s.fly(centre, s.mid, 0, .5, 1.5)
    s.spin(1, .5)
    s.fly(centre, s.lowIsh, 0, .5, 1.5)
    s.spin(-2)
    s.land(2)

    s.doTimeline();
}

function L4() {
    reset();

    let s = new Stepper()
    s.setStart(k, kImg, -2)

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
    s.path(mp1, 4)
    s.innerSpin(1, 1.6, .7, '<')
    s.fly(s.lf1, s.mid, 0, .5, 2)
    s.innerSpin(4, .5, .8)
    s.innerSpin(-4, .5, .8)
    s.innerSpin(-2, .5, .4)
    s.fly(s.rt1, s.mid)
    s.innerSpin(4, .5, .8)
    s.innerSpin(-4, .5, .8)
    s.fly(centre, s.mid)
    s.fly(centre, s.ground - 10, 0, .5, 2)
    s.fly(centre, s.mid, 0, .5, 2)
    s.fly(centre - 30, s.mid, -2, 0)
    s.fly(centre - 30, s.ground - 10, 0, 0, 2)
    s.fly(centre - 30, s.mid, 0, .5, 2)
    s.fly(s.lf2, s.mid, 0, .5, 1.5)
    s.path(mp2, 8)
    s.innerSpin(-1, 0, 1, '<+1')
    s.innerSpin(-3, 0, 3, '<+2.6')
    s.spin(-1)
    s.diveStop(s.low)
    s.innerSpin(2, .5)
    s.land()

    s.doTimeline();
}

function L5() {
    reset();

    let figure8 = {
        path: [
            {x: s.rt1, y: s.lowIsh},
            {x: s.lf1, y: s.hi},
            {x: s.lf3, y: s.mid},
            {x: s.lf1, y: s.low},
            {x: s.rt1, y: s.hi},
            {x: s.rt3, y: s.mid},
            {x: s.rt1, y: s.low},
            {x: s.lf1, y: s.hi},
            {x: s.lf3, y: s.mid},
            {x: s.lf1, y: s.low},
            {x: s.rt1, y: s.hiIsh},
        ],
        start: 0,
        end: 1,
        curviness: .9,
        autoRotate: 90,
    }

    let spiralIn = {
        path: '#spiralIn',
        align: '#spiralIn',
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
        start: 0.995,
        end: 0,
        offsetX: 10,
    }

    let s = new Stepper()
    s.setStart(k, kImg, -2)
    s.launch(s.low)
    s.spin(1, .3, .3)
    s.fly(s.lf3 + 40, s.low, 0, .5, 2)
    s.spin(-2, .3, 1.5)
    s.fly(s.rt3, s.low, 0, .5, 3)
    s.spin('+=155_cw', .3, 1.5)
    s.path(figure8, 11)
    s.fly(s.rt1, s.hiIsh, '90_shortest', .5, .5)
    s.fly(s.rt1, s.lowIsh, 0, .5, 2)
    s.fly(s.lf1, s.lowIsh, 0, .5, 2)
    s.fly(s.lf1, s.hiIsh, 0, .5, 2)
    s.fly(s.rt1, s.hiIsh, 0, .5, 2)
    s.spin('+=60_cw', .5, 1)
    s.path(spiralIn, 6)
    s.spin('-92_ccw', .5, 1)
    s.path(spiralOut, 6)
    s.spin('-=90_ccw')
    s.diveStop(s.low)
    s.spin(2, .5)
    s.land()

    s.doTimeline();
}

function L6() {
    reset();

    let ironCrossNW = {
        path: '#ironCrossNW',
        align: '#ironCrossNW',
        autoRotate: -90,
        alignOrigin: [0.5, 0.35],
        start: 0,
        end: 1,
        offsetX: -2,
        offsetY: 2,
    }

    let ironCrossNE = {
        path: '#ironCrossNE',
        align: '#ironCrossNE',
        autoRotate: 90,
        alignOrigin: [0.5, 0.35],
        start: 1,
        end: 0,
        offsetX: -2,
        offsetY: -6,
    }

    let ironCrossSE = {
        path: '#ironCrossSE',
        align: '#ironCrossSE',
        autoRotate: -90,
        alignOrigin: [0.5, 0.35],
        start: 0,
        end: 1,
        offsetX: -2,
        offsetY: -6,
    }

    let ironCrossSW = {
        path: '#ironCrossSW',
        align: '#ironCrossSW',
        autoRotate: 90,
        alignOrigin: [0.5, 0.35],
        start: 1,
        end: 0,
        offsetX: -2,
        offsetY: -6,
    }

    let preDive = {
        path: '#preDive',
        align: '#preDive',
        autoRotate: 90,
        alignOrigin: [0.5, 0.35],
        start: .27,
        end: 1,
        offsetX: -2,
        offsetY: 2,
    }

    let s = new Stepper()
    s.setStart(k, kImg)
    s.setStart(k, kImg, -2)
    s.launch(s.lowIsh)
    s.spin(3, .5, .7)
    s.spin(1, .5, .3)
    s.spin(1, .5, .3)
    s.spin(-6, .5, 1)
    s.fly(s.rt3, s.lowIsh, 0, .5, 1.5)
    s.spin(2, 0, 2)
    s.fly(s.lf3, s.lowIsh, 0, 0, 3)
    s.spin(-2, 0, 2)
    s.fly(centre, s.lowIsh, 0, 0, 1.5)
    s.fly(centre, s.low, 1, 0, .7)
    s.fly(centre, s.mid, 0, .5, 1.5)
    s.spin(-5, .5, 1)
    s.fly(s.rt1, s.mid)
    s.spin('+=45_cw', .5, .3)
    s.spin('+=45_cw', .5, .3)
    s.spin('+=45_cw', .5, .3)
    s.spin('+=45_cw', .5, .3)
    s.fly(s.lf1, s.mid)
    s.path(ironCrossNW, 2)
    s.path(ironCrossNE, 2)
    s.path(ironCrossSE, 2)
    s.path(ironCrossSW, 2)
    s.spin(1, .5)
    s.path(preDive, 3)
    s.diveStop(s.low, .7)
    s.spin(4, .5, .5)
    s.land()

    s.doTimeline();
}

function L7() {
    reset();

    let mp1 = {
        path: [
            {x: -135, y: -200},
            {x: s.lf1, y: s.mid + 60},
            {x: s.lf1 + 40, y: s.low - 40},
            {x: 0, y: s.low},
        ],
        start: 0,
        end: 1,
        curviness: .4,
        autoRotation: -90,
    }

    let s = new Stepper()
    s.setStart(k, kImg)
    s.launch(s.hi, 2)
    s.spin(2, .5)
    s.diveStop(s.low, 3)
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
    s.path(mp1, 3)
    s.innerSpin('-135_ccw', 0, 2.5, '<+=1.1')
    s.innerSpin(3, .5, 2.5)
    s.fly(s.rt1, s.low)
    s.innerSpin('-=360_ccw', .5, 2.5)
    s.fly(centre, s.low, 0, .5, 1.5)
    s.innerSpin('-=450_ccw', .5, .8)
    s.land()

    s.doTimeline();
}

function L8() {
    reset();

    const aBit = 60;

    let invSlide1 = {
        path: [
            {x: s.rt1 - 40 , y: s.lowIsh},
            {x: 0, y: s.low},
            {x: s.lf1 + 40 , y: s.lowIsh},
            {x: s.lf1, y: s.mid},
        ],
        start: 0,
        end: 1,
        curviness: .4,
        align: 'self',
    }

    let invSlide2 = {
        path: [
            {x: s.lf1, y: s.mid},
            {x: s.lf1 + 40 , y: s.lowIsh},
            {x: 0, y: s.low},
            {x: s.rt1 - 40 , y: s.lowIsh},
            {x: s.rt1, y: s.lowIsh},
        ],
        start: 0,
        end: 1,
        curviness: .4,
        align: 'self',
    }

    let s = new Stepper()
    s.setStart(k, kImg)
    s.launch(s.hiIsh, 2)
    // North
    s.fly(-aBit, s.hiIsh)
    s.fly(centre, s.hiIsh)
    s.fly(centre, s.hi)
    s.fly(centre, s.hiIsh)
    s.spin('-=45_ccw', .5, .3)
    s.spin('+=90_cw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    s.spin(2, .5)
    // South
    s.diveStop(s.low)
    s.fly(-aBit, s.low)
    s.fly(centre, s.low)
    s.fly(centre, s.lowIsh)
    s.fly(centre, s.low)
    s.spin('-=45_ccw', .5, .3)
    s.spin('+=90_cw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    // East
    s.fly(s.rt1, s.mid, 3, .5, 1.8)
    s.fly(s.rt1, s.hiIsh)
    s.fly(s.rt1, s.mid)
    s.fly(s.rt1 + aBit, s.mid)
    s.fly(s.rt1, s.mid)
    s.spin('-=45_ccw', .5, .3)
    s.spin('+=90_cw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    // West
    s.path(invSlide1, 3)
    s.innerSpin(2, 0, 3, '<')
    s.fly(s.lf1, s.hiIsh)
    s.fly(s.lf1, s.mid)
    s.fly(s.lf1 - aBit, s.mid)
    s.fly(s.lf1, s.mid)
    s.spin('-=45_ccw', .5, .3)
    s.spin('+=90_cw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    // North East
    s.fly(s.rt1, s.hiIsh, '+=135', .5, 1.5)
    s.fly(s.rt1 - aBit, s.hi)
    s.fly(s.rt1, s.hiIsh)
    s.fly(s.rt1 + aBit, s.hiIsh - aBit)
    s.fly(s.rt1, s.hiIsh)
    s.spin('-=45_ccw', .5, .3)
    s.spin('+=90_cw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    // South West
    s.fly(s.lf1, s.lowIsh, -2, .5, 1.5)
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
    s.path(invSlide2, 3)
    s.innerSpin(-2, 0, 3, '<')
    s.fly(s.rt1 + aBit, s.lowIsh - aBit)
    s.fly(s.rt1, s.lowIsh)
    s.fly(s.rt1 + aBit, s.lowIsh + aBit)
    s.fly(s.rt1, s.lowIsh)
    s.spin('-=45_ccw', .5, .3)
    s.spin('+=90_cw', .5, .3)
    s.spin('-=45_ccw', .5, .3)
    // Finish
    s.fly(centre, s.hi, '+=225_cw', .5, 2)
    s.spin(-2, .5)
    s.diveStop(s.mid, 1)
    s.spin(4, .5)
    s.diveStop(s.low)
    s.spin(-2, .5)
    s.land()

    s.doTimeline();
}
