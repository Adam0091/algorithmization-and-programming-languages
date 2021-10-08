class UI {
    constructor({ callbacks = {} }) {
        // callbacks
        this.move = (callbacks.move instanceof Function) ? callbacks.move : function () {};
        const printPoints = (callbacks.printPoints instanceof Function) ? callbacks.printPoints : function () {};
        const printEdges = (callbacks.printEdges instanceof Function) ? callbacks.printEdges : function () {};
        const printPolygons = (callbacks.printPolygons instanceof Function) ? callbacks.printPolygons : function () {};
        // events
        document.getElementById('pointsCheckbox').addEventListener('click', function() { printPoints(this.checked); });
        document.getElementById('edgesCheckbox').addEventListener('click', function() { printEdges(this.checked); });
        document.getElementById('polygonsCheckbox').addEventListener('click', function() { printPolygons(this.checked); });
    }
}