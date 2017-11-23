function main() {

	inner_w = 301;
	inner_d = 200;
	inner_h = 100;
	elec_size = 50;
	k = 1; // k-factor for material bending
	material_thickness = 5;
	bending_r = 5;

    return CSG.cube({
        center: [2.5, 200.5, 50],
        radius: [2.5, 200.5, 50],
        resolution: 16
    }).translate([0, 0, 5]).union([CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, 401],
        radiusStart: 5,
        radiusEnd: 5,
        resolution: 8
    }).intersect([CSG.cube({
        center: [2.55, 2.55, 200.6],
        radius: [2.55, 2.55, 200.6],
        resolution: 16
    }).mirrored(CSG.Plane.fromNormalAndPoint([0, 1, 0], [0, 0, 0])).translate([0, 0, -0.1])]).rotateX(90).rotateY(0).rotateZ(0).translate([-5, 0, 5]).rotateX(0).rotateY(0).rotateZ(180), CSG.cube({
        center: [100, 200.5, 2.5],
        radius: [100, 200.5, 2.5],
        resolution: 16
    }).translate([5, 0, 0]), CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, 401],
        radiusStart: 5,
        radiusEnd: 5,
        resolution: 8
    }).intersect([CSG.cube({
        center: [2.55, 2.55, 200.6],
        radius: [2.55, 2.55, 200.6],
        resolution: 16
    }).mirrored(CSG.Plane.fromNormalAndPoint([0, 1, 0], [0, 0, 0])).translate([0, 0, -0.1])]).rotateX(90).rotateY(0).rotateZ(0).translate([-5, 0, 5]).rotateX(0).rotateY(90).rotateZ(180).translate([210, 0, 0]), CSG.cube({
        center: [2.5, 200.5, 50],
        radius: [2.5, 200.5, 50],
        resolution: 16
    }).translate([205, 0, 5])]).rotateX(0).rotateY(0).rotateZ(90).translate([200.5, -105, 0]).union([CSG.cube({
        center: [2.5, 100, 7.5],
        radius: [2.5, 100, 7.5],
        resolution: 16
    }).translate([0, 0, 5]).union([CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, 200],
        radiusStart: 5,
        radiusEnd: 5,
        resolution: 8
    }).intersect([CSG.cube({
        center: [2.55, 2.55, 100.1],
        radius: [2.55, 2.55, 100.1],
        resolution: 16
    }).mirrored(CSG.Plane.fromNormalAndPoint([0, 1, 0], [0, 0, 0])).translate([0, 0, -0.1])]).rotateX(90).rotateY(0).rotateZ(0).translate([-5, 0, 5]).rotateX(0).rotateY(0).rotateZ(180), CSG.cube({
        center: [45, 100, 2.5],
        radius: [45, 100, 2.5],
        resolution: 16
    }).translate([5, 0, 0]), CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, 200],
        radiusStart: 5,
        radiusEnd: 5,
        resolution: 8
    }).intersect([CSG.cube({
        center: [2.55, 2.55, 100.1],
        radius: [2.55, 2.55, 100.1],
        resolution: 16
    }).mirrored(CSG.Plane.fromNormalAndPoint([0, 1, 0], [0, 0, 0])).translate([0, 0, -0.1])]).rotateX(90).rotateY(0).rotateZ(0).translate([-5, 0, 5]).rotateX(0).rotateY(90).rotateZ(180).translate([100, 0, 0]), CSG.cube({
        center: [2.5, 100, 22.5],
        radius: [2.5, 100, 22.5],
        resolution: 16
    }).translate([95, 0, 5])]).rotateX(0).rotateY(-90).rotateZ(0).translate([-150.5, -100, 5]), CSG.cube({
        center: [2.5, 100, 7.5],
        radius: [2.5, 100, 7.5],
        resolution: 16
    }).translate([0, 0, 5]).union([CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, 200],
        radiusStart: 5,
        radiusEnd: 5,
        resolution: 8
    }).intersect([CSG.cube({
        center: [2.55, 2.55, 100.1],
        radius: [2.55, 2.55, 100.1],
        resolution: 16
    }).mirrored(CSG.Plane.fromNormalAndPoint([0, 1, 0], [0, 0, 0])).translate([0, 0, -0.1])]).rotateX(90).rotateY(0).rotateZ(0).translate([-5, 0, 5]).rotateX(0).rotateY(0).rotateZ(180), CSG.cube({
        center: [45, 100, 2.5],
        radius: [45, 100, 2.5],
        resolution: 16
    }).translate([5, 0, 0]), CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, 200],
        radiusStart: 5,
        radiusEnd: 5,
        resolution: 8
    }).intersect([CSG.cube({
        center: [2.55, 2.55, 100.1],
        radius: [2.55, 2.55, 100.1],
        resolution: 16
    }).mirrored(CSG.Plane.fromNormalAndPoint([0, 1, 0], [0, 0, 0])).translate([0, 0, -0.1])]).rotateX(90).rotateY(0).rotateZ(0).translate([-5, 0, 5]).rotateX(0).rotateY(90).rotateZ(180).translate([100, 0, 0]), CSG.cube({
        center: [2.5, 100, 22.5],
        radius: [2.5, 100, 22.5],
        resolution: 16
    }).translate([95, 0, 5])]).rotateX(0).rotateY(-90).rotateZ(0).translate([-150.5, -100, 5]).rotateX(0).rotateY(0).rotateZ(180), CSG.cube({
        center: [2.5, 105, 7.5],
        radius: [2.5, 105, 7.5],
        resolution: 16
    }).translate([0, 0, 5]).union([CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, 210],
        radiusStart: 5,
        radiusEnd: 5,
        resolution: 8
    }).intersect([CSG.cube({
        center: [2.55, 2.55, 105.1],
        radius: [2.55, 2.55, 105.1],
        resolution: 16
    }).mirrored(CSG.Plane.fromNormalAndPoint([0, 1, 0], [0, 0, 0])).translate([0, 0, -0.1])]).rotateX(90).rotateY(0).rotateZ(0).translate([-5, 0, 5]).rotateX(0).rotateY(0).rotateZ(180), CSG.cube({
        center: [52.5, 105, 2.5],
        radius: [52.5, 105, 2.5],
        resolution: 16
    }).translate([5, 0, 0]), CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, 210],
        radiusStart: 5,
        radiusEnd: 5,
        resolution: 8
    }).intersect([CSG.cube({
        center: [2.55, 2.55, 105.1],
        radius: [2.55, 2.55, 105.1],
        resolution: 16
    }).mirrored(CSG.Plane.fromNormalAndPoint([0, 1, 0], [0, 0, 0])).translate([0, 0, -0.1])]).rotateX(90).rotateY(0).rotateZ(0).translate([-5, 0, 5]).rotateX(0).rotateY(90).rotateZ(180).translate([115, 0, 0]), CSG.cube({
        center: [2.5, 105, 7.5],
        radius: [2.5, 105, 7.5],
        resolution: 16
    }).translate([110, 0, 5])]).rotateX(0).rotateY(-90).rotateZ(0).translate([205.5, -105, -5]), CSG.cube({
        center: [2.5, 105, 7.5],
        radius: [2.5, 105, 7.5],
        resolution: 16
    }).translate([0, 0, 5]).union([CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, 210],
        radiusStart: 5,
        radiusEnd: 5,
        resolution: 8
    }).intersect([CSG.cube({
        center: [2.55, 2.55, 105.1],
        radius: [2.55, 2.55, 105.1],
        resolution: 16
    }).mirrored(CSG.Plane.fromNormalAndPoint([0, 1, 0], [0, 0, 0])).translate([0, 0, -0.1])]).rotateX(90).rotateY(0).rotateZ(0).translate([-5, 0, 5]).rotateX(0).rotateY(0).rotateZ(180), CSG.cube({
        center: [52.5, 105, 2.5],
        radius: [52.5, 105, 2.5],
        resolution: 16
    }).translate([5, 0, 0]), CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, 210],
        radiusStart: 5,
        radiusEnd: 5,
        resolution: 8
    }).intersect([CSG.cube({
        center: [2.55, 2.55, 105.1],
        radius: [2.55, 2.55, 105.1],
        resolution: 16
    }).mirrored(CSG.Plane.fromNormalAndPoint([0, 1, 0], [0, 0, 0])).translate([0, 0, -0.1])]).rotateX(90).rotateY(0).rotateZ(0).translate([-5, 0, 5]).rotateX(0).rotateY(90).rotateZ(180).translate([115, 0, 0]), CSG.cube({
        center: [2.5, 105, 7.5],
        radius: [2.5, 105, 7.5],
        resolution: 16
    }).translate([110, 0, 5])]).rotateX(0).rotateY(-90).rotateZ(0).translate([205.5, -105, -5]).rotateX(0).rotateY(0).rotateZ(180)]).scale([0.1, 0.1, 0.1]).union([CSG.cube({
        center: [205.5, 105, 1.5],
        radius: [205.5, 105, 1.5],
        resolution: 16
    }).setColor(1, 1, 1).translate([-205.5, -105, 0]).translate([0, 0, 110]).union([CSG.cube({
        center: [2.5, 100, 7.5],
        radius: [2.5, 100, 7.5],
        resolution: 16
    }).translate([0, 0, 5]).union([CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, 200],
        radiusStart: 5,
        radiusEnd: 5,
        resolution: 8
    }).intersect([CSG.cube({
        center: [2.55, 2.55, 100.1],
        radius: [2.55, 2.55, 100.1],
        resolution: 16
    }).mirrored(CSG.Plane.fromNormalAndPoint([0, 1, 0], [0, 0, 0])).translate([0, 0, -0.1])]).rotateX(90).rotateY(0).rotateZ(0).translate([-5, 0, 5]).rotateX(0).rotateY(0).rotateZ(180), CSG.cube({
        center: [7.5, 100, 2.5],
        radius: [7.5, 100, 2.5],
        resolution: 16
    }).translate([5, 0, 0])]).rotateX(0).rotateY(90).rotateZ(0).translate([145.5, 0, 0]).translate([0, -100, 0]).rotateX(0).rotateY(0).rotateZ(0).union([CSG.cube({
        center: [2.5, 100, 7.5],
        radius: [2.5, 100, 7.5],
        resolution: 16
    }).translate([0, 0, 5]).union([CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, 200],
        radiusStart: 5,
        radiusEnd: 5,
        resolution: 8
    }).intersect([CSG.cube({
        center: [2.55, 2.55, 100.1],
        radius: [2.55, 2.55, 100.1],
        resolution: 16
    }).mirrored(CSG.Plane.fromNormalAndPoint([0, 1, 0], [0, 0, 0])).translate([0, 0, -0.1])]).rotateX(90).rotateY(0).rotateZ(0).translate([-5, 0, 5]).rotateX(0).rotateY(0).rotateZ(180), CSG.cube({
        center: [7.5, 100, 2.5],
        radius: [7.5, 100, 2.5],
        resolution: 16
    }).translate([5, 0, 0])]).rotateX(0).rotateY(90).rotateZ(0).translate([145.5, 0, 0]).translate([0, -100, 0]).rotateX(0).rotateY(0).rotateZ(180)]).translate([0, 0, 110]), CSG.cube({
        center: [2.5, 205.5, 7.5],
        radius: [2.5, 205.5, 7.5],
        resolution: 16
    }).translate([0, 0, 5]).union([CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, 411],
        radiusStart: 5,
        radiusEnd: 5,
        resolution: 8
    }).intersect([CSG.cube({
        center: [2.55, 2.55, 205.6],
        radius: [2.55, 2.55, 205.6],
        resolution: 16
    }).mirrored(CSG.Plane.fromNormalAndPoint([0, 1, 0], [0, 0, 0])).translate([0, 0, -0.1])]).rotateX(90).rotateY(0).rotateZ(0).translate([-5, 0, 5]).rotateX(0).rotateY(0).rotateZ(180), CSG.cube({
        center: [7.5, 205.5, 2.5],
        radius: [7.5, 205.5, 2.5],
        resolution: 16
    }).translate([5, 0, 0])]).rotateX(0).rotateY(90).rotateZ(-90).translate([0, 110, 0]).translate([-205.5, 0, 8]).rotateX(0).rotateY(0).rotateZ(0).union([CSG.cube({
        center: [2.5, 205.5, 7.5],
        radius: [2.5, 205.5, 7.5],
        resolution: 16
    }).translate([0, 0, 5]).union([CSG.cylinder({
        start: [0, 0, 0],
        end: [0, 0, 411],
        radiusStart: 5,
        radiusEnd: 5,
        resolution: 8
    }).intersect([CSG.cube({
        center: [2.55, 2.55, 205.6],
        radius: [2.55, 2.55, 205.6],
        resolution: 16
    }).mirrored(CSG.Plane.fromNormalAndPoint([0, 1, 0], [0, 0, 0])).translate([0, 0, -0.1])]).rotateX(90).rotateY(0).rotateZ(0).translate([-5, 0, 5]).rotateX(0).rotateY(0).rotateZ(180), CSG.cube({
        center: [7.5, 205.5, 2.5],
        radius: [7.5, 205.5, 2.5],
        resolution: 16
    }).translate([5, 0, 0])]).rotateX(0).rotateY(90).rotateZ(-90).translate([0, 110, 0]).translate([-205.5, 0, 8]).rotateX(0).rotateY(0).rotateZ(180)]).translate([0, 0, 110])]).translate([0, 0, 100]).scale([0.1, 0.1, 0.1])]);
};

function getParameterDefinitions() {
  return [
    { name: 'inner_w', caption: 'Number of teeth:', type: 'float', default: 300 },
    { name: 'inner_d', caption: 'Circular pitch:', type: 'float', default: 200 },
    { name: 'inner_h', caption: 'Pressure angle:', type: 'float', default: 100 },
    { name: 'elec_size', caption: 'Size of the side compartments:', type: 'float', default: 50 },
    { name: 'material_thickness', caption: 'Material thickness:', type: 'float', default: 2 },
    { name: 'bending_r', caption: 'Bending radius:', type: 'float', default: 2 },
    { name: 'k', caption: 'K-Factor of the material:', type: 'float', default: 0 },

  ];
}