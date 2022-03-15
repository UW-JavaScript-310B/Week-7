// TODO
$(document).ready(function(){
    $('#connect-form').submit(function(e){
        
    });

    $('#contact-kind').change(function(){
        var dropDownValue = $('#contact-kind').val();
        if(dropDownValue === 'Job Opportunity'){
            console.log('Job Opportunity');
        }
        else if(dropDownValue === 'Talk Code'){
            console.log('Talk Code');
        }
    });
});