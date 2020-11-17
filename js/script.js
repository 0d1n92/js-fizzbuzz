// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Scrivi un programma che stampi i numeri da 1 a 100,
var array=[];
var array2=[];
for (var i = 0; i < 100 ; i++){
    array[i]= i+1 ;
}
 var resultPrint=document.getElementById('numeri');
 document.getElementById('btn').addEventListener("click", function(){
 for (var j = 0; j < array.length; j++) {
   if (array[j] % 5 ==0 && array[j] %3 == 0) resultPrint.innerHTML+= "<strong>FizzBuzz</strong>"+", ";
   else if(array[j] % 5 == 0) resultPrint.innerHTML+= "<strong> Buzz</strong>"+ ", ";
   else if (array[j] %3 == 0) resultPrint.innerHTML+= " <strong>Fizz</strong>"+ ", ";
   else resultPrint.innerHTML+= " "+ array[j] + ", ";
   document.getElementById('numeri').classList.add('show');

 }
});
