jQuery(function(){
    console.log("xin chafo ");
    $(".container").append("<h1>welcome</h1>");

    var div1 = $("<h2></h2>").text("div1");
    div1.css("background-color" , "yellow");
    
    var div4 = $("<h2></h2>").text("div4");
    div4.css("background-color" , "yellow");
    
    var isHide= false;
    var button = $("<button>click</button>");

    button.on("click", ()=>{
        if(isHide){
            div1.show();
            div4.hide();
            isHide = false;
        }
        else{
            div4.show();
            div1.hide();
            isHide=true;
        }
    })

    $(".container").append(div1,div4);
    $(".container").append(button);

    var div2 = $("<h2></h2>").text("My name");
    div2.on("click", function(){
        $(this).text("Nguyen Huy Duong")
    })

    $(".container").append(div2);

    var input1 = $("<input>");
    var input2 = $("<input>");
    
    var div3 = $("<h2></h2>").text("Ket qua");
    div3.on("click", function(){
        $(this).text(Number(input1.val()) + Number(input2.val()));
    })

    $(".container").append(input1,input2,div3);
    
    
})