var app = app || {};

app.interaction = (function($, _) {

	var desc = [
		{title:"waste_transfer_stations", field:"cotents1"},
		{title:"polluted_points", field:"cotents2"},
		{title:"flood_risk", field:"cotents3"},
		{title:"polluted_polygons", field:"cotents3"},
		{title:"acs_pop", field:"cotents3"},
		{title:"acs_income", field:"cotents3"},
		{title:"asthma", field:"cotents3"}
	];
	$('.layers').tooltip({
		content:function(){
			return "wts tooltip!";
			}
		});
	/*
	$('#'+desc[1].title).tooltip({
		content:function(){
			return desc[1].field;
			}
		});
	*/
    /*  
    function layer_desc() {

		var desc = [
		{title:"waste transfer station", field:"cotents1"},
		{title:"title2", field:"cotents2"},
		{title:"title3", field:"cotents3"},
		{title:"title3", field:"cotents3"},
		{title:"title3", field:"cotents3"},
		{title:"title3", field:"cotents3"},
		{title:"title3", field:"cotents3"}
		];
		//about map layers

		$('.layers').tooltip({
		  items: "[title]",
		  content: function() {
		    var element = $( this );
		    if ( element.is( "[title]" ) ) {
		     var line = "<strong>"+desc[0].title +"</strong>"+"<br>"+desc[0].field;
		      return line;    
		    }
		  }
		});//tooptips on map 
		
    };//eof layer_desc

*/
    var init = function() {
		//layer_desc();   	
   	};
    return {
        init: init
    };
})(jQuery, _);