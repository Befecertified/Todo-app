//Select Li's and mark as done
$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});

//Delete Li when X is clicked
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

//Grab text from form and add to list
$("input[type='text']").on("keypress", function(e){
    if(e.which === 13){
        var textInput = $(this).val();
        $("ul").prepend("<li><span class='trash'><i class='fa fa-trash'></i></span> " + textInput + "</li>");
        textInput = $(this).val("");
    }
});

//Toggle form
$(".button").click(function(){
   $("input[type='text']").slideToggle(200, function(){
    $("i.change").toggleClass("fa fa-minus");
    $("i.change").toggleClass("fa fa-plus");  
   });
});