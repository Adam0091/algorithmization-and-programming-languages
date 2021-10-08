window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

window.onload = function () {
    const WINDOW = {
        LEFT: -5,
        BOTTOM: -5,
        WIDTH: 10,
        HEIGHT: 10,
        P1: new Point (-5, 5, -30),// левый верхний угол
        P2: new Point(-5, -5, -30),// левый нижний угол
        P3: new Point (5, -5, -30),//правый нижний угол
        CENTER: new Point(0, 0, 0),
        CAMERA: new Point(0, 0, -200)
    }

    let canPrint = {
        points: false,
        edges: false,
        polygons: true
    };

    const ZOOM_OUT = 1.1;
    const ZOOM_IN = 0.9;
}