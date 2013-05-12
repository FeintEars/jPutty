/**
* jPutty jQuery plug-in
* Static page-proof with jquery
*
* @author Sergey Zubkov <zubkov@2st.biz>
* @homepage http://jputty.com/
* @version 1.0.2
* @license MIT http://opensource.org/licenses/MIT
* @date 2013-05-11
*/
(function($) {

	//set element position element (xy), set element size (size), or set position and size (xysize)
	var methods = {
		xy : function( x, y ) {
			return this.each(function() {
				$(this).css( {
					position: "absolute",
					top: y,
					left: x
				});
			});
		},
		size : function( width, height ) {
			return this.each(function() {
				$(this).css( {
					width: width,
					height: height
				});
			});
		},
		xysize : function( x, y, width, height ) {
			return this.each(function() {
				$(this).css( {
					position: "absolute",
					top: y,
					left: x,
					width: width,
					height: height
				});
			});
		}
	};

	$.fn.putty = function( method ) {
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Undefined method ' +  method );
		}
	};

	//trigger events: readyresize, curtain_start, curtain_end
	$(window).trigger( 'curtain_start' );
	$(window).ready(function() {
		$(window).trigger( 'readyresize', [$(window).width(), $(window).height()] );
		$(window).trigger( 'curtain_end' );
	});
	var doit;
	$(window).resize(function() {
		$(window).trigger( 'curtain_start' );
		$(window).trigger( 'readyresize', [$(window).width(), $(window).height()] );
		clearTimeout(doit);
		doit = setTimeout(function() {
			//$(window).trigger( 'readyresize', [$(window).width(), $(window).height()] );
			$(window).trigger( 'curtain_end' );
		}, 100);
	});
	
	//wrapper events: readyresize, curtain_start, curtain_end
	$.fn.readyresize = function(fn) {
		var rrfunc = function(e, width, height) {
			fn(width, height);
		}
		$(window).bind( 'readyresize', rrfunc );
	}
	var started = false;
	$.fn.curtain_start = function(fn) {
		if(!started) {
			started = true;
			$(window).bind( 'curtain_start', fn );
		}
	}
	$.fn.curtain_end = function(fn) {
		started = false;
		$(window).bind( 'curtain_end', fn );
	}

}(jQuery));