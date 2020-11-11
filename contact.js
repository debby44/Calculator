$("#button").click(function() {
    var email = $("email").val()
    var contenuto = $("#contenutoemail").val();
    alert("ci sono")
    $.ajax({
        type: "GET",
        url: "contact.php",
        data: "email=" + email + " contenuto=" + contenuto,
        dataType: "html",
        success: function(response) {
            alert("invio riuscito");
        },
        error: function(response) {
            alert("fallito");
        }
    });

})