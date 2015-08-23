// JavaScript Document


$(document).ready(function() {
	
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
	
	//For video tabs
	 $('.tabs-vid .tab-links-vid a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs-vid ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
	
	 //highlights lower division classes
	 $('.toggleLower').on('click', function(e) {
		$('.lower').toggleClass("hidden");
    });
	
	//highlights upper division classes
	 $('.toggleUpper').on('click', function(e) {
		$('.upper').toggleClass("hidden");
		
    });
	
	
	// Player
	
	$('video').mediaelementplayer({
		alwaysShowControls: false,
		videoVolume: 'horizontal',
		features: ['playpause','progress','volume','fullscreen']
	});
	
	//Resources
	function myArray(){
   //Array variable used to collect constructed links
   var arr = [];
   //The variable to store each constructed link 
   var link = undefined;
   //The part of the link that helps to get the text for each link
   var linkPart = undefined;
   //The actual text for each link 
   var linkText = undefined; 
   $('.link1 input[type="checkbox"]:checked').each(function(){
	  //Compute the partial reference to the link by refering to the html adjacent the parent of the input 
	  linkPart = $(this).parent().html();
	  //Use the JavaScript String substring method to find the part of the link that contains the text 
	  linkText = linkPart.substring(linkPart.lastIndexOf('>') + 1, linkPart.length);
	  //Build a new HTML link string
	  link = '<a href=' + $(this).val() + ' target="_blank">' + linkText + '</a>'; 
	  //Push it into the storage array
	  arr.push(link);
   });
   $('.link2 input[type="checkbox"]:checked').each(function(){
	  linkPart = $(this).parent().html();
	  linkText = linkPart.substring(linkPart.lastIndexOf('>') + 1, linkPart.length);
	  link = '<a href=' + $(this).val() + ' target="_blank">' + linkText + '</a>'; 
	  arr.push(link);
   });
   $('.link3 input[type="checkbox"]:checked').each(function(){
	  linkPart = $(this).parent().html(); 
	  linkText = linkPart.substring(linkPart.lastIndexOf('>') + 1, linkPart.length);
	  link = '<a href=' + $(this).val() + ' target="_blank">' + linkText + '</a>'; 
	  arr.push(link);
   });
   $('.link4 input[type="checkbox"]:checked').each(function(){
	  linkPart = $(this).parent().html();
	  linkText = linkPart.substring(linkPart.lastIndexOf('>') + 1, linkPart.length);
	  link = '<a href=' + $(this).val() + ' target="_blank">' + linkText + '</a>'; 
	  arr.push(link);
   });
	$('.link5 input[type="checkbox"]:checked').each(function(){
	  linkPart = $(this).parent().html();
	  linkText = linkPart.substring(linkPart.lastIndexOf('>') + 1, linkPart.length);
	  link = '<a href=' + $(this).val() + ' target="_blank">' + linkText + '</a>'; 
	  arr.push(link);
   });
   $('.link6 input[type="checkbox"]:checked').each(function(){
	  linkPart = $(this).parent().html();
	  linkText = linkPart.substring(linkPart.lastIndexOf('>') + 1, linkPart.length);
	  link = '<a href=' + $(this).val() + ' target="_blank">' + linkText + '</a>'; 
	  arr.push(link);
   });
   $('.link7 input[type="checkbox"]:checked').each(function(){
	  linkPart = $(this).parent().html();
	  linkText = linkPart.substring(linkPart.lastIndexOf('>') + 1, linkPart.length);
	  link = '<a href=' + $(this).val() + ' target="_blank">' + linkText + '</a>'; 
	  arr.push(link);
   });
   $('.link8 input[type="checkbox"]:checked').each(function(){
	  linkPart = $(this).parent().html();
	  linkText = linkPart.substring(linkPart.lastIndexOf('>') + 1, linkPart.length);
	  link = '<a href=' + $(this).val() + ' target="_blank">' + linkText + '</a>'; 
	  arr.push(link);
   });
   $('.link9 input[type="checkbox"]:checked').each(function(){
	  linkPart = $(this).parent().html();
	  linkText = linkPart.substring(linkPart.lastIndexOf('>') + 1, linkPart.length);
	  link = '<a href=' + $(this).val() + ' target="_blank">' + linkText + '</a>'; 
	  arr.push(link);
   });
   $('.link10 input[type="checkbox"]:checked').each(function(){
	  linkPart = $(this).parent().html();
	  linkText = linkPart.substring(linkPart.lastIndexOf('>') + 1, linkPart.length);
	  link = '<a href=' + $(this).val() + ' target="_blank">' + linkText + '</a>'; 
	  arr.push(link);
   });
   $('.link11 input[type="checkbox"]:checked').each(function(){
	  linkPart = $(this).parent().html();
	  linkText = linkPart.substring(linkPart.lastIndexOf('>') + 1, linkPart.length);
	  link = '<a href=' + $(this).val() + ' target="_blank">' + linkText + '</a>'; 
	  arr.push(link);
   });
   $('.link12 input[type="checkbox"]:checked').each(function(){
	  linkPart = $(this).parent().html();
	  linkText = linkPart.substring(linkPart.lastIndexOf('>') + 1, linkPart.length);
	  link = '<a href=' + $(this).val() + ' target="_blank">' + linkText + '</a>'; 
	  arr.push(link);
   });
   $('.link13 input[type="checkbox"]:checked').each(function(){
	  linkPart = $(this).parent().html();
	  linkText = linkPart.substring(linkPart.lastIndexOf('>') + 1, linkPart.length);
	  link = '<a href=' + $(this).val() + ' target="_blank">' + linkText + '</a>'; 
	  arr.push(link);
   });
   $('.link14 input[type="checkbox"]:checked').each(function(){
	  linkPart = $(this).parent().html();
	  linkText = linkPart.substring(linkPart.lastIndexOf('>') + 1, linkPart.length);
	  link = '<a href=' + $(this).val() + ' target="_blank">' + linkText + '</a>'; 
	  arr.push(link);
   });
   
   return arr; 
	
}

$('.my_choices').click(function () {
   //Uses Array.join (http://www.w3schools.com/jsref/jsref_join.asp) to create a new
   //   string expression of <a> links separated by | symbols. 
   
   $('#result').html("You have indicated interests in: " + myArray().join(", "));
});
	
});

