// TODO
$(document).ready(function(){
    $('#connect-form').submit(function(e){
        let isFormInvalid = false;

        $('.error').text("");
        $('.form-group').removeClass('invalid');

        var firstName = $('#first-name').val();
        if(firstName.length<3){
            $('#first-name').nextAll('.error:first').text('First name cannot be less than 3 characters');
            $('#first-name').parent('.form-group').addClass('invalid');
            isFormInvalid = true;
        }
        var lastName = $('#last-name').val();
        if(lastName.length<3){
            $('#last-name').nextAll('.error:first').text('Last name cannot be less than 3 characters');
            $('#last-name').parent('.form-group').addClass('invalid');
            isFormInvalid = true;
        }
        var email = $('#email').val();
        var regex = /\w+@\w+\.\w+/;
        var validEmail = regex.test(email);
        if(!validEmail){
            $('#email').nextAll('.error:first').text('Invalid email address');
            $('#email').parent('.form-group').addClass('invalid');
            isFormInvalid = true;
        }
        
        if(isFormInvalid === true){
            console.log('Bad Input');
            e.preventDefault();
        }
    });
});