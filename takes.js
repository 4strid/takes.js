/*takes
rip apart arrays or hashes into new, exciting forms*/

(function () {

	// polyfills, boilerplate
	if(!Array.isArray) {
	  Array.isArray = function(arg) {
	    return Object.prototype.toString.call(arg) === '[object Array]';
	  };
	}
	var root = this;

	takes = function (desired _array_of) { // probably change _array_of to a .as() call
		var array_of = _array_of || 'only';
		// make an array of propertied objects
		if (array_of === 'in objects' || Array.isArray(desired)) {
		  var des = util.makeArray(desired);
		  this.from = function (target) {
		    var res = [];
		    target.forEach(function (obj) {
		      var obj_ = {};
		      des.forEach(function (prop) {
		        obj_[prop] = obj[prop];
		      });
		      res.push(obj_);
		    });
		    return res;
		  }
		} else { // OR make an array of just the properties
		  this.from = function (target) {
		    var res = [];
		    target.forEach(function(obj) {
		      res.push(obj[desired]);
		    });
		    return res;
		  }
		}
		return this;
	}

	// (for equivalent use server-side or browser-side)
	if (typeof exports !== 'undefined') {
    	if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = takes;
		}
	} else {
		root['takes'] = takes;
	}
}).call(this);