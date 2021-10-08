class Canvas {
    constructor ({id, width, height, WINDOW, callbacks = {}}) {
        if (id) {
            this.canvas = document.getElementById(id);
        } else {
            this.canvas = document.createElement('canvas');
            document.querySelector('body').appendChild(this.canvas);
        }
        this.context = this.canvas.getContext('2d');
        this.canvas.width = width;
        this.canvas.height = height;

        this.canvasV = document.createElement('canvas');
        this.contextV = this.canvasV.getContext('2d');
        this.canvasV.width = width;
        this.canvasV.height = height;

        this.WINDOW = WINDOW;
        this.PI2 = 2 * Math.PI;
    }
}