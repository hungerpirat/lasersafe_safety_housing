color_safety_window = "orange";
color_metal = "grey";

var ring = function (ro, ri, h) {  
	 var outer = cylinder({r1: ro, r2: ro, h: h, fn: 20});
	 var inner = cylinder({r1: ri, r2: ri, h: h + .2, fn: 20}).translate([0, 0, -.1]);
	 return difference(outer, inner);
 };

 var bend90 = function(r,t,l){
	 r= Math.max(r,t+.001);
	 var c = ring(r,r-t,l);
	 var bounds = mirror([0,1,0], cube([r+.1,r+.1,l+.2])).translate([0,0,-.1]);
	 return translate([-r,0,r], rotate([90,0,0], intersection(c, bounds)));
 };




profile_c = function (a = 10, b = 20, c=10, l = 100, t = 1, r = 1) { 
	 return union(
		 translate([0, 0, r], cube([t, l, a - r])),
		 rotate([0, 0, 180], bend90(r, t, l)),
		 translate([r, 0, 0], cube([b - 2 * r, l, t])),
		 translate([b, 0, 0], rotate([0, 90, 180],bend90(r, t, l))),
		 translate([b-t,0,r],cube([t,l,c-r]))
	 );
 };

profile_l = function (a = 10, b = 20, l = 100, t = 1, r = 1) { 
	 return union(
		 translate([0,0,r], cube([t,l,a-r])),
		 rotate([0,0,180], bend90(r,t,l)),
		 translate([r,0,0], cube([b-r,l,t]))
	 );
 };
	


housing = function(w,d,h,t,r){
	var material_thickness = t;
	var bending_r = r;

	var hi = h - material_thickness;
	var ho = h + 2*material_thickness;
	var di = d - 2*material_thickness;

	var overlap = 20;
	
	var elec_size = 50;
	
	var separator = profile_c(overlap, hi, elec_size, di, bending_r, material_thickness);
	var cover = profile_c(overlap, ho, overlap, d, bending_r, material_thickness);
//	var color_metal = "lightgrey";

	return color(color_metal,
		// base
		translate([w/2,-d/2,0],rotate([0,0,90], profile_c(h,d,h,w,bending_r,material_thickness))),
		
		// side separators
		translate([-w/2+elec_size,-d/2+material_thickness,material_thickness], rotate([0,-90,0], separator)),
		rotate([0,0,180], translate([-w/2+elec_size,-d/2+material_thickness,material_thickness], rotate([0,-90,0], separator))),
		
		// side covers
		translate([w/2+material_thickness,-d/2,-material_thickness], rotate([0,-90,0], cover)),
		rotate([0,0,180], translate([w/2+material_thickness,-d/2,-material_thickness], rotate([0,-90,0], cover)))
	);
};


lid = function(w,d,h,t,r){
	var color_safety_window = "orange";
	var inner_rail = profile_l(20, 20, d-2*t, r, t);
	var outer_rail = profile_l(20, 20, w+2*t, r, t);
	var elec_size = 50;
	
	return translate([0,0,h+t],
		color(color_safety_window, translate([-w/2-t,-d/2,0], cube([w+2*t,d,3]))),
		color(color_metal, 
			rotate([0,0,0], translate([0,-d/2+t,0], translate([w/2-elec_size-t,0,0], rotate([0,90,0], inner_rail)))),
			rotate([0,0,180], translate([0,-d/2+t,0], translate([w/2-elec_size-t,0,0], rotate([0,90,0], inner_rail)))),
			rotate([0,0,0], translate([-w/2-t,0,3+t], translate([0,d/2+t,0], rotate([0,90,-90], outer_rail)))),
			rotate([0,0,180], translate([-w/2-t,0,3+t], translate([0,d/2+t,0], rotate([0,90,-90], outer_rail))))
		)
	);
};

function main() {

	var inner_w = 301;
	var inner_d = 200;
	var inner_h = 100;
	var elec_size = 50;
	var k = 1; // k-factor for material bending
	var material_thickness = 5;
	var bending_r = 5;


	var w = inner_w + 2*elec_size;
	var d = inner_d + 2*material_thickness;
	var h = inner_h + material_thickness;
	
	var zoom = .1;
	return 	[
				scale([zoom, zoom, zoom], housing(inner_w, inner_d, inner_h, material_thickness, bending_r)),
				scale([zoom, zoom, zoom], lid(inner_w, inner_d, inner_h, material_thickness, bending_r))
				
	];
				
			
//
//scale([.1,.1,.1]){
//    housing(w=w, d=d, h=h, t=material_thickness, r=bending_r);
//    translate([0,0,100])lid(w=w, d=d, h=h, t=material_thickness, r=bending_r);
//}
//

//
//function k_correction(r, t) = t*k;

};

function getParameterDefinitions() {
  return [
    { name: 'inner_w', caption: 'Number of teeth:', type: 'float', default: 300 },
    { name: 'inner_d', caption: 'Circular pitch:', type: 'float', default: 200 },
    { name: 'inner_h', caption: 'Pressure angle:', type: 'float', default: 100 },
    { name: 'elec_size', caption: 'Size of the side compartments:', type: 'float', default: 50 },
    { name: 'material_thickness', caption: 'Material thickness:', type: 'float', default: 2 },
    { name: 'bending_r', caption: 'Bending radius:', type: 'float', default: 2 },
    { name: 'k', caption: 'K-Factor of the material:', type: 'float', default: 0 }

  ];
}

