$(document).ready(function() {
    $("li:first").addClass("active");

    var listItems = $("li");
    $("li").addClass("uppercase");
    

    var middle = Math.floor(listItems.length/2);
    $("ul").children().eq(middle).addClass("bgcolor");
});