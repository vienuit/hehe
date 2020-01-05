 $(function(){
	khoimonan = $('.nhieumon').isotope({
	  // options
	  itemSelector: '.motmon',
	  layoutMode: 'masonry'
	});


	 $('.tieudect a').click(function() {
	 	/* Act on the event */

	 	dulieu = $(this).data('monan');
	 	console.log(dulieu);
	 	khoimonan.isotope({filter:dulieu})
	 	return false;
	 });

})  
 