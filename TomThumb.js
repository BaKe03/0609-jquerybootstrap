$('document').ready(function() {
    $('button').on('click', function() {
        var imgWidth = parseInt($('#width').val());
        var imgHeight = parseInt($('#height').val());
        var imgColors = parseInt($('#colors').val());

        var imgColorsLog = 0;
        while (imgColors > 1) {
            imgColors /= 2;
            imgColorsLog += 1;
        }
        //alert(imgColorsLog);
        var imgSize = parseFloat(imgWidth * imgHeight * imgColorsLog) / 8.0;
        console.log(imgWidth);
        console.log(imgHeight);
        console.log(imgColorsLog);
        

        var textToAdd = 'File is ' + imgSize + 'B which is ok.';
        $('#places-container').html(textToAdd);
        
        return false;
    });
});