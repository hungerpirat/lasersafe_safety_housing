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
	
	return 	[
				//housing(w=w, d=d, h=h, t=material_thickness, r=bending_r);
				
	];
				
			
//
//scale([.1,.1,.1]){
//    housing(w=w, d=d, h=h, t=material_thickness, r=bending_r);
//    translate([0,0,100])lid(w=w, d=d, h=h, t=material_thickness, r=bending_r);
//}
//
//module lid(w=300, d=200, h=50, t=1, r=1){
//	translate([0,0,h+t]){
//		translate([-w/2-t,-d/2,0])color("cyan")cube([w+2*t,d,3]);
//		for(m=[0,180])rotate([0,0,m])translate([0,-d/2+t,0]){
//			translate([w/2-elec_size-t,0,0])rotate([0,90,0])l_profile(a=20,b=20,l=d-2*t,r=r,t=t);
//		}
//		for(m=[0,180])rotate([0,0,m])translate([-w/2-t,0,3+t]){
//			translate([0,d/2+t,0])rotate([0,90,-90])l_profile(a=20,b=20,l=w+2*t,r=r,t=t);
//		}
//	}
//}
//
//
//module housing(w=300, d=200, h=50, t=1, r=1){
//	material_thickness = t;
//	bending_r = r;
//
//	hi = h - material_thickness;
//	ho = h + 2*material_thickness;
//	di = d - 2*material_thickness;
//
//	overlap = 20;
//	
//	// base
//	translate([w/2,-d/2,0])rotate([0,0,90])c_profile(a=h,b=d,c=h,l=w,r=bending_r,t=material_thickness);
//	
//	// electronics separator
//
//	translate([-w/2+elec_size,-d/2+material_thickness,material_thickness])rotate([0,-90,0])c_profile(a=overlap,b=hi,c=elec_size,l=di,r=bending_r,t=material_thickness);
//	rotate([0,0,180])translate([-w/2+elec_size,-d/2+material_thickness,material_thickness])rotate([0,-90,0])c_profile(a=overlap,b=hi,c=elec_size,l=di,r=bending_r,t=material_thickness);
//	
//	// sides
//	translate([w/2+material_thickness,-d/2,-material_thickness])rotate([0,-90,0])c_profile(a=overlap,b=ho,c=overlap,l=d,r=bending_r,t=material_thickness);
//	rotate([0,0,180])translate([w/2+material_thickness,-d/2,-material_thickness])rotate([0,-90,0])c_profile(a=overlap,b=ho,c=overlap,l=d,r=bending_r,t=material_thickness);
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

