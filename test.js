var testModule = {};
$(document).ready(function() {   
    var autotest=true;
    var testState=true;
    
    var doTests = function(){
        formTest1();
        formTest2();
        formTest3();
        formTest4();
        formTest5();
        formTest6();
        cleanForm();
        $("#testsState").html(!testState?"Automated Tests rejected, check the console for more information.":"Automated tests passed, check the console for more information.");
    }
    testModule.doTests = doTests;
    if(autotest===true){
        doTests();
    }

    function formTest1(){
        $("#A").val(21212);
        $("#B").val(367575);
        $("#C").val(21212);
        $("#C").keyup();
        if( $("#result").html()!=="Isosceles"){
            testState=false;
            console.log("formTest1: Isosceles was expected");
        }else{
            console.log("formTest1: Passed");
        }
    }

    function formTest2(){
        $("#A").val(32222222);
        $("#B").val(32222222);
        $("#C").val(32222222);
        $("#C").keyup();
        if( $("#result").html()!=="Equilateral"){
            testState=false;
            console.log("formTest2: Equilateral was expected");
        }else{
            console.log("formTest2: Passed");
        }
    }

    function formTest3(){
        $("#A").val(33343);
        $("#B").val(35655);
        $("#C").val(36545);
        $("#C").keyup();
        if( $("#result").html()!=="Scalene"){
            testState=false;
            console.log("formTest3: Scalene was expected");
        }else{
            console.log("formTest3: Passed");
        }
    }

    function formTest4(){
        $("#A").val(0);
        $("#B").val(3);
        $("#C").val(3);
        $("#C").keyup();
        if( $("#result").html()!==""){
            testState=false;
            console.log("formTest4: Nothing was expected");
        }else{
            console.log("formTest4: Passed");
        }
    }

    function formTest5(){
        $("#A").val(33343);
        $("#B").val("texttest");
        $("#C").val(36545);
        $("#C").keyup();
        if( $("#result").html()!==""){
            testState=false;
            console.log("formTest5: Nothing was expected");
        }else{
            console.log("formTest5: Passed");
        }
    }
    function formTest6(){
        $("#A").val(2);
        $("#B").val(333);
        $("#C").val(null);
        $("#C").keyup();
        if( $("#result").html()!==""){
            testState=false;
            console.log("formTest6: Nothing was expected");
        }else{
            console.log("formTest6: Passed");
        }
    }
    function cleanForm(){
        $("#A").val("");
        $("#B").val("");
        $("#C").val("");
        $("#C").keyup();  
    }
});