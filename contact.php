<?php
$email= $_GET["email"];
$contemail= $_GET["contenutoemail"];
echo $email + "-" + $contemail; 

/*mail($mail,"Email aiuto", $contemail);

if($mail){
    echo "email inviata";
}else{
    echo "email non inviata";
}
*/
?>