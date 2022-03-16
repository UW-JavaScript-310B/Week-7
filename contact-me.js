// TODO

$(document).ready(function(){
    
    $('#connect-form').submit(function(e){
        let isFormInvalid = false;

        $('.error').text("");
        $('.form-group').removeClass('invalid');

        var firstName = $('#first-name').val();
        if(firstName.length<3||firstName===''){
            $('#first-name').nextAll('.error:first').text('First name cannot be less than 3 characters');
            $('#first-name').parent('.form-group').addClass('invalid');
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

        var message = $('#kind').val();
        if(message.length<10||message===''){
            $('#kind').nextAll('.error:first').text('Message is required and cannot be less than 10 characters.');
            $('#kind').parent('.form-group').addClass('invalid');
            isFormInvalid = true;
        }

        $('#contact-kind').change(function(){
            var dropDownValue = $("#contact-kind").val();
            console.log(dropDownValue);
            $('#Job-Title-FormGroup').remove();
            $('#Company-Website-FormGroup').remove();
            if(dropDownValue === 'business'){
    
                $('#contact-kind').parent().after(`<div id='Job-Title-FormGroup' class="form-group">
                    <label for="Job-Title" id="Job-Title-Label">Job-Title</label>
                    <input id="Job-Title" class="form-control validate-input" type="text" name="Job-Title" />
                </div>`);
    
                $('#Job-Title-FormGroup').after(`<div id='Company-Website-FormGroup' class="form-group">
                    <label for="Company-Website" id="Company-Website-Label">Company Website</label>
                    <input id="Company-Website" class="form-control validate-input" type="text" name="Company-Website"/> </div>`);

                var website = $('#Company-Website').val();
                var regex = /https?\:\/\/.+\..+/;
                var validWebsite = regex.test(website);
                if(!validWebsite){
                    $('#Company-Website').nextAll('.error:first').text('Invalid website address');
                    $('#Company-Website').parent('.form-group').addClass('invalid');
                    isFormInvalid = true;
                }
                //isFormInvalid = true;
            }
            else if(dropDownValue === 'technical'){
                
                $('#contact-kind').parent().after(`<div id="Coding-language-FormGroup" class="form-group">
                    <label for="Coding-language" id="Coding-language-Label">Coding language</label>
                    <select class="Coding-language" name="Coding-language" id="contact-kind">
                      <option value="choose" selected="selected" disabled>Choose one</option>
                      <option value="HTML">HTML</option>
                      <option value="CSS">CSS</option>
                      <option value="JAVASCRIPT">JAVASCRIPT</option>
                    </select>
                </div>`);
                //isFormInvalid = true;
            }
        });
        
        
        if(isFormInvalid === true){
            console.log('Bad Input');
            e.preventDefault();
        }

    });

});