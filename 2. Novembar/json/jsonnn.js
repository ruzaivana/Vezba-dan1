$('#button').on("click", function () {

    var output=$("#log");
   

    var request = $.ajax({
        url: "http://freegeoip.net/json/4.2.2.2",
        method: "GET",
        // dataType: "json"
    });
    
    // request.done(function(xmlStructure) {
    //     var text = $(xmlStructure).find('CountryName').text();
    //     console.log(text);
    // });



    request.done(function(msg){
        console.log(msg);
        
        output.text("Country is " + msg.longitude);
    });


})
