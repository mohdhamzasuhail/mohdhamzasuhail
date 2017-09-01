$(document).ready(function(){
    $('#input_form').on('submit', function(e){
        e.preventDefault();
        var name=$("input[name=name]").val();

        if(name){
            $.ajax({
                url: "send_name.php",
                type: "POST",
                data: {
                    "name": name
                },
                cache: false,
                success: function() {
                    $('#success_message').css("display","block");
                    $('#error_message').css("display","none");
                    $('#contact').trigger("reset");
                },
                error: function() {
                    $('#error_message').css("display","block");
                    $('#success_message').css("display","none");
                    $('#error_message').html("Sorry, it seems that my mail server is not responding. Please try again later!")
                    $('#contact').trigger("reset");
                },
            });
        }
        else{
            $('#error_message').css("display","block");
            $('#error_message').html("Please fill all the details.")
        }
    });
});
