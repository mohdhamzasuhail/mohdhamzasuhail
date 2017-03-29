$(document).ready(function(){
    $('#contact_form').on('submit', function(e){
        e.preventDefault();
        var name=$("input[name=name]").val();
        var email=$("input[name=email]").val();
        var message=$("textarea[name=message]").val();
        if(name&&email&&message){
            $.ajax({
                url: "mail/contact_me.php",
                type: "POST",
                data: {
                    "name": name,
                    "email": email,
                    "message": message
                },
                cache: false,
                success: function() {
                    $('#success_message').css("display","block");
                    $('#error_message').css("display","none");
                    $('#contact_form').trigger("reset");
                },
                error: function() {
                    $('#error_message').css("display","block");
                    $('#success_message').css("display","none");
                    $('#error_message').html("Sorry, it seems that my mail server is not responding. Please try again later!")
                    $('#contact_form').trigger("reset");
                },
            });
        }else{
            $('#error_message').css("display","block");
            $('#error_message').html("Please fill all the details.")
        }
    });
});

