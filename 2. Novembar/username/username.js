$('#button').on("click", function () {
    
        var output=$("#log");
       
    
        var request = $.ajax({
            url: "https://api.github.com/search/users?q=tom",
            method: "GET",
            // dataType: "json"
        });
        
        // request.done(function(xmlStructure) {
        //     var text = $(xmlStructure).find('CountryName').text();
        //     console.log(text);
        // });
    
    
    
        request.done(function(msg){
            console.log(msg);
            
            output.text("Username is " + msg.items.avatar_url);
        });
    
    
    })
    