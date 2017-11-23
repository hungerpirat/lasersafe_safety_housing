//!OpenSCAD
// dimensions
inner_w = 301;
inner_d = 200;
inner_h = 100;
elec_size = 50; //min 20

// material
k = 1; // k-factor for material bending
material_thickness = 5;
bending_r = 5; // min material thickness

$fn=8;
w = inner_w + 2*elec_size;
d = inner_d + 2*material_thickness;
h = inner_h + material_thickness;

scale([.1,.1,.1]){
    housing(w=w, d=d, h=h, t=material_thickness, r=bending_r);
    translate([0,0,100])lid(w=w, d=d, h=h, t=material_thickness, r=bending_r);
}

module lid(w=300, d=200, h=50, t=1, r=1){
	translate([0,0,h+t]){
		translate([-w/2-t,-d/2,0])color("cyan")cube([w+2*t,d,3]);
		for(m=[0,180])rotate([0,0,m])translate([0,-d/2+t,0]){
			translate([w/2-elec_size-t,0,0])rotate([0,90,0])l_profile(a=20,b=20,l=d-2*t,r=r,t=t);
		}
		for(m=[0,180])rotate([0,0,m])translate([-w/2-t,0,3+t]){
			translate([0,d/2+t,0])rotate([0,90,-90])l_profile(a=20,b=20,l=w+2*t,r=r,t=t);
		}
	}
}


module housing(w=300, d=200, h=50, t=1, r=1){
	material_thickness = t;
	bending_r = r;

	hi = h - material_thickness;
	ho = h + 2*material_thickness;
	di = d - 2*material_thickness;

	overlap = 20;
	
	// base
	translate([w/2,-d/2,0])rotate([0,0,90])c_profile(a=h,b=d,c=h,l=w,r=bending_r,t=material_thickness);
	
	// electronics separator

	translate([-w/2+elec_size,-d/2+material_thickness,material_thickness])rotate([0,-90,0])c_profile(a=overlap,b=hi,c=elec_size,l=di,r=bending_r,t=material_thickness);
	rotate([0,0,180])translate([-w/2+elec_size,-d/2+material_thickness,material_thickness])rotate([0,-90,0])c_profile(a=overlap,b=hi,c=elec_size,l=di,r=bending_r,t=material_thickness);
	
	// sides
	translate([w/2+material_thickness,-d/2,-material_thickness])rotate([0,-90,0])c_profile(a=overlap,b=ho,c=overlap,l=d,r=bending_r,t=material_thickness);
	rotate([0,0,180])translate([w/2+material_thickness,-d/2,-material_thickness])rotate([0,-90,0])c_profile(a=overlap,b=ho,c=overlap,l=d,r=bending_r,t=material_thickness);
}

module c_profile(a=10, b=20, c=10, l=100, t=1, r=1){
	translate([0,0,r])cube([t,l,a-r]);
	rotate([0,0,180])bend90(r,t,l);

	translate([r,0,0])cube([b-2*r,l,t]);
	translate([b,0,0])rotate([0,90,180])bend90(r,t,l);

	translate([b-t,0,r])cube([t,l,c-r]);
	echo(str("C-profile sheet:", a+b+c,"x",l));
	kc = k_correction(r,t);
	echo(str("C-profile sheet k-corrected:", a+b+c+kc*2,"x",l));
}	

module l_profile(a=10, b=20, l=100, t=1, r=1){
	translate([0,0,r])cube([t,l,a-r]);
	rotate([0,0,180])bend90(r,t,l);

	translate([r,0,0])cube([b-r,l,t]);
	echo(str("L-profile sheet:", a+b,"x",l));
	kc = k_correction(r,t);
	echo(str("L-profile sheet k-corrected:", a+b+kc,"x",l));	
}	

module bend90(r,t,l){
	translate([-r,0,r])rotate([90,0,0])intersection(){
		ring(ri=r-t,ro=r,h=l);
		translate([0,0,-0.1])mirror([0,1,0])cube([r+0.1,r+0.1,l+0.2]);
	}
}

function k_correction(r, t) = t*k;


module ring(ro=8, ri=6, h=4){
	difference(){
		cylinder(r=ro, h=h);
		translate([0,0,-1])cylinder(r=ri, h=h+2);
	}
}
