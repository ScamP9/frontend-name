$(document).ready(function() {
    $('#Head').hover(
        function() { $(".white_field").css('display', 'block');},
        function() { $('.white_field').css('display', 'none'); }
    );
});
function SEO_text() {
    let text = document.getElementById("Hidden");
    let button = document.getElementById('buttonSEO')
    if(text.style.display === "block") {
        text.style.display = "none";
        button.style.transform = "rotate(0deg)"
    }
    else {
        text.style.display = "block";
        button.style.transform = "rotate(180deg)"
    }
}

