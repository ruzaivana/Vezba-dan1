$('button').on("click", function () {
    var output=$("#log");
    var ip=$("#ip").val();

    var request = $.ajax({
        url: "http://freegeoip.net/xml/4.2.2.2",
        method: "GET",
        dataType: "xml"
    });
    
    // request.done(function(xmlStructure) {
    //     var text = $(xmlStructure).find('CountryName').text();
    //     console.log(text);
    // });



    request.done(function(msg){

        $CountryCode=$(msg).find("CountryCode").text();
        output.text("Country is" + $CountryCode);
    });


});
