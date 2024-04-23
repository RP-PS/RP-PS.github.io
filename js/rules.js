$(document).ready(function() {
    $(".content strong").each( function() {
        if( $(this).text() == "Наказание" ) {
            $(this).css( "color","#ff0000" );
            $(this).html("<br>Наказание")
        }
    })
})