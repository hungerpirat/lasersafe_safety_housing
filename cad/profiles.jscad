Profiles = function() {
   var ring = function (ro, ri, h) {  // internal 
		var outer = cylinder({r1: ro, r2: ro, h: h, fn: 20});
		var inner = cylinder({r1: ri, r2: ri, h: h + .2, fn: 20}).translate([0, 0, -.1]);
		return outer.difference(inner);
	};

	var bend90 = function(r,t,l){
		var c = ring(r,r-t,l);
		var bounds = cube([r+.1,r+.1,l+.2]).mirror([0,1,0]).translate([0,0,-.1]);
		return c.intersection(bounds).translate([-r,0,r]).rotate([90,0,0]);
	};
	



   Profiles.c = function (a = 10, b = 20, l = 100, t = 1, r = 1) {      // public 
		return [
			cube([t, l, a - r]).translate([0, 0, r]),
			bend90(r, t, l).rotate([0, 0, 180]),
			cube([b - 2 * r, l, t]).translate([r, 0, 0]),
			bend90(r, t, l).rotate([0, 90, 180]).translate([b, 0, 0]),
			cube([t,l,c-r]).translate([b-t,0,r])
		];
	};
	
   Profiles.l = function (a = 10, b = 20, l = 100, t = 1, r = 1) {      // public 
		return [
			cube([t,l,a-r]).translate([0,0,r]),
			bend90(r,t,l).rotate([0,0,180]),
			cube([b-r,l,t]).translate([r,0,0])
		];
	};
	
};