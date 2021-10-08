Surfaces.prototype.hyperbolicParaboloid = (count = 20) => {
    const points = [];
    const edges = [];
    const polygons = [];
    const size = 3;
    const delta = size / count;

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            const x = i * delta - size / 2;
            const y = j * delta - size / 2;
            const z = x * x - y * y;    // z = x^2 - y^2

            points.push(new Point(x,y,z));
        }
    }

    for (let i = 0; i < points.length; i++) {
        if (i + 1 < points.length && (i + 1) % count !== 0) {
            edges.push(new Edge(i, i + 1));
        }
        if(i + count < points.length) {
            edges.push(new Edge(i, i + count));
        }
    }

    const arrColor = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];
    for (let i = 0; i < points.length; i++) {
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            if(points[i].x <= 0 && points[i].y >= 0) polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], arrColor[0])); // первая четверть
            if(points[i].x >= 0 && points[i].y >= 0) polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], arrColor[1])); // вторая четверть
            if(points[i].x < 0 && points[i].y < 0) polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], arrColor[2])); // третья четверть
            if(points[i].x >= 0 && points[i].y < 0) polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], arrColor[3])); // четвёртная    четверть
        }
           
    }

    return new Subject(points, edges, polygons);
}