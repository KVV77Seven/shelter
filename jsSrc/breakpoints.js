export const breakpoints = {
    sm: 320,
    md: 768,
    lg: 1280
}
export const currentBreakpoint = {
    current: breakpoints.sm
}
export const breakpointsArray = Object.values(breakpoints).sort((a,b) => a - b);

const breakpointEventEmitter = {
    onBreakpointChange: function (breakpoint) {
        const event = new CustomEvent("breakpointChange", {detail: breakpoint});
        window.dispatchEvent(event);
    }
}

function checkBreakpoint() {
    const screenWidth = window.innerWidth;
    let breakpoint = breakpointsArray.reduce((current, bp) => screenWidth >= bp ? bp : current) || breakpoints.sm;
    breakpoint !== currentBreakpoint.current ? breakpointEventEmitter.onBreakpointChange(breakpoint) : null;
}

export function init() {
    window.addEventListener('resize', checkBreakpoint);
    window.addEventListener('breakpointChange', (e) => {currentBreakpoint.current = e.detail});
    checkBreakpoint();
}

