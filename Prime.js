window.onload = function () {
    var btnClick = document.getElementById("btnClick");
 

    btnClick.addEventListener("click", function () {
        ButtonClick();
    });

   
}

function ButtonClick() {
    var txtFrom = document.getElementById("txtFrom");
    var txtTo = document.getElementById("txtTo");



    var divResult = document.getElementById("divResult");
   

    divResult.innerHTML = "Prime numbers";


    var arr = [];

    for (i = parseInt(txtFrom.value) ; i <= parseInt(txtTo.value); i++) {
      
        
        arr.push(parseInt(i));
      
    }




    for (var j = 0; j < arr.length; j++) {

        GetPrime(arr[j]);

    }


}


    //}


    


    function GetPrime(n) {

       
        if (n < 2) {
            return false
        }
        /**
         * An integer is prime if it is not divisible by any prime less than or equal to its square root
         **/
        
        var q = Math.floor(Math.sqrt(n));

        for (var i = 2; i <= q; i++) {
            if (n % i == 0) {
                return false;
               
            }
        }
     
        divResult.innerHTML += "<div class='border'>" + n + "</div>";
    }

