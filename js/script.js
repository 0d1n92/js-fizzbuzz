// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Scrivi un programma che stampi i numeri da 1 a 100,

 var resultPrint=document.getElementById('numeri');
 document.getElementById('btn').addEventListener("click", function(){
 for (var j = 1; j <=100; j++) {
   if (j % 5 ==0 && j %3 == 0) resultPrint.innerHTML+= " <strong>FizzBuzz</strong>"+", ";
   else if(j % 5 == 0) resultPrint.innerHTML+= " <strong> Buzz</strong>"+ ", ";
   else if (j %3 == 0) resultPrint.innerHTML+= " <strong>Fizz</strong>"+ ", ";
   else resultPrint.innerHTML+= " "+ j + ", ";
   document.getElementById('numeri').classList.add('show');

 }
});
