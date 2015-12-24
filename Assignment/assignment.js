//Instantiating some template placeholders
var albumview_template, animalview_template;
//Remembering some information about the viewed category
var current_type = animals_data.category[0];
var current_animal = current_type.animals[0];


$(document).ready(function(){
//Setting up and compiling the templates for
//the category view with 4 photos and then
//the single animal view
var src = $("#albumview_template").html();
albumview_template = Handlebars.compile(src);
src = $("#animalview_template").html();
animalview_template = Handlebars.compile(src);



//load up the category-picture view
$(".animal-photo").click(function(){
//Getted clicked photo id
var index = $(this).attr("id");
index = parseInt(index);
console.log(index);
//continue with templating
loadcategory(index);
});




//helper for categoryview
//runs the template and switches the current animal
//places the new html
function loadcategory(index){
current_type = animals_data.category[index];
var html = albumview_template(current_type);
$(".content").html(html);

//go even deeper in the information
//set up the new animal viewing template
//load up single view
$(".categoryview_thumbnail").click(function(){
console.log(current_type);
var index = $(this).data("id");
current_animal = current_type.animals[index];
var html = animalview_template(current_animal);
$(".content").html(html);
});
}




//Tab work, making sure the activeness displays correctly
$("#0").click(function(){
		$("#ultabs .active").removeClass("active");
		// then make albums tab active
		$("#reptiles-navtab").addClass("active");
});
$("#1").click(function(){
		$("#ultabs .active").removeClass("active");
		// then make albums tab active
		$("#mammals-navtab").addClass("active");
});
$("#2").click(function(){
		$("#ultabs .active").removeClass("active");
		// then make albums tab active
		$("#birds-navtab").addClass("active");
});

});
