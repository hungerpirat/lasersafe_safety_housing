color_safety_window = [.9,0.33,0.1,0.75];
color_metal = "lightgrey";

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
	


housing = function(params){
	var w = params.inner_w + 2*params.side_size + 2*params.material_thickness;
	var d = params.inner_d;
	var h = params.inner_h;
	var t = params.material_thickness;
	var r = params.bending_r;

	var hi = h - t;
	var ho = h + 2*t;
	var di = d - 2*t;

	var overlap = 20;
	
	var side_size = params.side_size;
	
	var separator = profile_c(overlap, hi, side_size, di, r, t);
	var cover = profile_c(overlap, ho, overlap, d, r, t);
	
	var exp_covers = params.explode ? overlap*2 : 0;
	var exp_base = params.explode ? -h*1.2 : 0;
	
	return color(color_metal,
		// base
		translate([w/2,-d/2,exp_base],rotate([0,0,90], profile_c(h,d,h,w,r,t))),
		
		// side separators
		translate([-w/2+side_size,-d/2+t,t], rotate([0,-90,0], separator)),
		rotate([0,0,180], translate([-w/2+side_size,-d/2+t,t], rotate([0,-90,0], separator))),
		
		// side covers
		translate([w/2+t+exp_covers,-d/2,-t], rotate([0,-90,0], cover)),
		rotate([0,0,180], translate([w/2+t+exp_covers,-d/2,-t], rotate([0,-90,0], cover)))
	);
};


lid = function(params){
	var w = params.inner_w + 2*params.side_size + 2*params.material_thickness;
	var d = params.inner_d;
	var h = params.inner_h;
	var t = params.material_thickness;
	var r = params.bending_r;
	var lid_overlap = Math.min(h,20);
	var inner_rail = profile_l(lid_overlap, lid_overlap, d-2*t, r, t);
	var outer_rail = profile_l(lid_overlap, lid_overlap, w+2*t, r, t);
	var side_size = params.side_size;
	
	var exp_window = params.explode ? lid_overlap : 0;
	var exp_outer_rails = params.explode ? lid_overlap*2 : 0;
	
	return translate([0,0,h+t+exp_window*2],
		color(color_safety_window, translate([-w/2-t,-d/2,exp_window], cube([w+2*t,d,3]))),
		color(color_metal, 
			rotate([0,0,0], translate([0,-d/2+t,0], translate([w/2-side_size-t,0,0], rotate([0,90,0], inner_rail)))),
			rotate([0,0,180], translate([0,-d/2+t,0], translate([w/2-side_size-t,0,0], rotate([0,90,0], inner_rail)))),
			rotate([0,0,0], translate([-w/2-t,exp_outer_rails,3+t+exp_window], translate([0,d/2+t,0], rotate([0,90,-90], outer_rail)))),
			rotate([0,0,180], translate([-w/2-t,exp_outer_rails,3+t+exp_window], translate([0,d/2+t,0], rotate([0,90,-90], outer_rail))))
		)
	);
};

//function k_correction(r, t) = t*k;

function main(params) {
	// custom error checking:
	if(params.inner_w < 100) throw new Error("Minimum supported inner width: 100mm");
	if(params.inner_d < 100) throw new Error("Minimum supported inner depth: 100mm");
	if(params.inner_h < 20) throw new Error("Minimum supported inner height: 20mm");
	if(params.side_size < 20) throw new Error("Minimum size for side chambers: 20mm");
//	var max_chambers = params.inner_w/2;
//	if(params.side_size >= max_chambers) throw new Error("Maximum size for side chambers: " + max_chambers);
	
	if(params.k < 0) throw new Error("K-Factor has to be between 0 and 1");
	if(params.k > 1) throw new Error("K-Factor has to be between 0 and 1");
	if(params.material_thickness <= 0) throw new Error("Material thickness has to be greater than zero");
	var max_rad = 2*params.material_thickness;
	var min_rad = params.material_thickness;
	if(params.bending_r > max_rad) throw new Error("This construction works only if bending radius is smaller than " + max_rad);
	if(params.bending_r < min_rad) throw new Error("This construction works only if bending radius is greater than " + min_rad);

	
	
	var rise = params.raise_lid ? Math.max(params.inner_h, 80) : 0;
	
	var safety_lid = lid(params);
	var safety_housing = housing(params);

	var zoom = .1;
	return 	[
				scale([zoom, zoom, zoom], safety_housing),
				scale([zoom, zoom, zoom], translate([0,0,rise], safety_lid))
				
	];
};

function getParameterDefinitions() {
  return [
    { name: 'inner_w', caption: 'Inner width:', type: 'float', default: 300 },
    { name: 'inner_d', caption: 'Inner depth:', type: 'float', default: 200 },
    { name: 'inner_h', caption: 'Inner height:', type: 'float', default: 100 },
    { name: 'side_size', caption: 'Compartment size:', type: 'float', default: 50 },
    { name: 'material_thickness', caption: 'Material thickness:', type: 'float', default: 2 },
    { name: 'bending_r', caption: 'Bending radius:', type: 'float', default: 2 },
    { name: 'k', caption: 'K-Factor of the material:', type: 'float', default: 0 },
		
    { name: 'raise_lid', caption: 'Raise the lid:', type: 'checkbox', checked: false },
    { name: 'explode', caption: 'Exploded view:', type: 'checkbox', checked: false }

  ];
}

