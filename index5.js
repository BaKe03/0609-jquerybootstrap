/*$('document').ready(function() {
    $('button').on('click', function() {
        var cityToAdd = $(this).prev().val();
        console.log(cityToAdd);
        var htmlToAdd = '<div class="item">' + '<div class="remove">X</div>' + cityToAdd + '</div>';
        $('#places-container').append(htmlToAdd);
    });

    
    $('remove').on('click', fuction() {
        $(this).parent().remove();
    })
});*/

$('document').ready(function() {
    $('button').on('click', function() {
        var person = $('#person').val();
        var character = $('#character').val();
        var adverb = $('#adverb').val();
        var adjective = $('#adjective').val();

        var textToAdd = 'One day, my friend ' + person + ' was visiting Shymkent and ran into ' + character + '.</br>' + person + ' ran ' + adverb + ' to meet ' + character + '.</br> But ' + character + ' turned out to be very ' + adjective + ' and ' + person + ' did not enjoy the meeting.';
        $('#places-container').html(textToAdd);
        
        return false;
    });
});