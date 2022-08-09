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

    let svg = document.getElementById('club38-svg')

    let pathIn = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    pathIn.setAttribute('id', 'pathIn')
    pathIn.setAttribute('d', 'M540.569 100.462c24.992 43.718 28.996 98.84 10.582 145.711-18.413 46.87-58.866 84.529-106.933 99.545-25.39 7.932-52.778 9.745-78.832 4.38-40.188-8.278-76.625-34.356-96.317-70.354-19.693-35.997-21.863-81.36-4.555-118.562 8.654-18.602 21.916-35.06 38.354-47.337 16.437-12.276 36.027-20.33 56.37-22.997 20.341-2.667 41.389.078 60.301 8.029 18.913 7.951 35.631 21.105 47.672 37.716a111.534 111.534 0 0118.613 41.606c6.042 27.773.77 58.134-15.59 81.376-8.18 11.621-18.998 21.402-31.484 28.19-12.485 6.788-26.627 10.555-40.839 10.668-14.21.113-28.461-3.45-40.847-10.418-12.385-6.969-22.861-17.347-29.765-29.769-6.905-12.422-10.191-26.859-9.138-41.031 1.052-14.172 6.47-28.02 15.473-39.016 10.698-13.066 26.555-21.942 43.361-23.589 16.807-1.647 34.33 4.136 46.42 15.925 5.99 5.84 10.651 13.091 13.147 21.076 2.496 7.984 2.783 16.695.485 24.739-2.298 8.043-7.223 15.368-14.007 20.262-6.785 4.893-15.417 7.262-23.712 6.186-4.22-.548-8.341-1.97-11.919-4.273-3.577-2.303-6.6-5.497-8.567-9.27-1.967-3.773-2.857-8.124-2.378-12.352.48-4.228 2.349-8.31 5.345-11.332 1.997-2.013 4.526-3.565 7.314-4.083a10.547 10.547 0 014.223.056c1.383.31 2.701.932 3.792 1.838.398.33.764.697 1.095 1.094')
    svg.appendChild(pathIn)
    MotionPathPlugin.convertToPath('#pathIn')
    let spiralIn = {
        path: '#pathIn',
        align: k,
        autoRotate: 90,
        alignOrigin: [0.5, 0.35],
        start: 0,
        end: 0.995,
    }

    let spiralOut = {
        path: '#pathIn',
        align: k,
        autoRotate: 90,
        alignOrigin: [0.5, 0.35],
        start: .995,
        end: 0,
        offsetX: 149,
        offsetY: -100,
    }

    s.launch(s.low)
    s.spin(1, .3, .3)
    s.fly(s.lf3, s.low, 0, .5, 2)
    s.spin(-2, .3, 1.5)
    s.fly(s.rt3, s.low, 0, .5, 3)
    s.spin('+=155_cw', .3, 1.5)
    s.path(figure8, 0, .5, 10, 'power0.in')
    s.fly(s.rt1, s.hiIsh, '90_shortest', .5, .5)
    s.fly(s.rt1, s.lowIsh, 0, .5, 1.5)
    s.fly(s.centre, s.lowIsh, 0, .5, 1.5)
    s.fly(s.centre, s.hiIsh, 0, .5, 1.5)
    s.fly(s.rt1, s.hiIsh, 0, .5, 1.5)
    s.spin('+=60_cw', .5, 1)
    s.path(spiralIn, 0, 0, 6, 'sine.in')
    s.spin('-90_ccw', 1, .5)
    s.path(spiralOut, 0, 0, 6, 'sine.inOut')
    s.fly(s.centre, s.hi, 0, 0, .8)
    s.spin('-=135_ccw', 0)
    s.spin('-180_short', 0, 0)
    s.diveStop(s.low, 1.3, .8)
    s.spin(2, .5)
    s.land()

    s.doTimeline();
}

function L6() {
    reset()
    let s = new Stepper(2)

    let svg = document.getElementById('club38-svg');
    let c6 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c6.setAttribute('id', 'circle6');
    c6.setAttribute('cx', '320');
    c6.setAttribute('cy', '210');
    c6.setAttribute('r', '100');
    c6.setAttribute('fill', 'none');
    svg.appendChild(c6);

    MotionPathPlugin.convertToPath('#circle6');

    let ironCrossNW = {
        path: '#circle6',
        align: k,
        autoRotate: -90,
        alignOrigin: [.5, .5],
        start: .25,
        end: 0,
        offsetX: 100,
        offsetY: -100,
    }

    let ironCrossNE = {
        path: '#circle6',
        align: k,
        autoRotate: 90,
        alignOrigin: [.5, .5],
        start: .5,
        end: .25,
        offsetX: 200,
        offsetY: 0,
    }

    let ironCrossSE = {
        path: '#circle6',
        align: k,
        autoRotate: -90,
        alignOrigin: [.5, .5],
        start: .75,
        end: .5,
        offsetX: 100,
        offsetY: 100,
    }

    let ironCrossSW = {
        path: '#circle6',
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

    let invSlide1 = {
        path: [
            {x: s.rt1, y: s.mid},
            {x: s.centre, y: s.low},
            {x: s.lf1, y: s.mid},
        ],
        align: k,
        start: 0,
        end: 1,
        curviness: .6,
    }

    let invSlide2 = {
        path: [
            {x: s.lf1, y: s.hiIsh},
            {x: s.lf1, y: s.lowIsh},
            {x: s.centre, y: s.low},
            {x: s.rt1, y: s.lowIsh},
        ],
        align: k,
        start: 0,
        end: 1,
        curviness: .6,
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
