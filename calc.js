var count = "";
var text = document.getElementById("num");




function reply_click(id_button) {

    if (id_button != "C" && id_button != "Canc" && id_button != "=") {
        count += id_button
        text.value = count
    } else {
        if (id_button == "C") {
            count = ""; //reset count
            text.value = ""

        }

        if (id_button == "Canc") {
            var text_ = text.value
            text.value = text_.slice(0, -1) //delete last char
            count = count.slice(0, -1) //save the new string

        }

        if (id_button == "=") {
            try {
                var exp = text.value
                if (exp != "") {
                    text.value = eval(exp) //calc the math expression
                    count = text.value;
                }
            } catch (e) {
                alert("error in the math expression")
                count = ""
                text.value = "" //reset

            }


        }
    }

}