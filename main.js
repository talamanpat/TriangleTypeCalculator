$(document).ready(function() {   

    function getTriangleType(a,b,c) {
        var r;
        if(Math.sign(a)!==1||Math.sign(b)!==1||Math.sign(c)!==1)
            r="";
        else if(a===b&& b===c)
            r="Equilateral";
        else if(a===b||b===c||c===a)
            r="Isosceles";
        else
            r="Scalene";
        return r;
    }
    $(":input").bind("keyup change", function(e) {
//    $( "input" ).keyup(function() {
        $("#result").html(getTriangleType($("#A").val(),$("#B").val(),$("#C").val()));        
    });

});
