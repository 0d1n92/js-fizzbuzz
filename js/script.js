// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Scrivi un programma che stampi i numeri da 1 a 100,

 document.getElementById('btn').addEventListener("click", function(){
 for (var j = 1; j <= 100; j++) {
   var messaggio= " "+ j + ", ";
   // if (j % 5 ==0 && j % 3 == 0) messaggio= " <strong>FizzBuzz</strong>"+", ";
   if (j % 15== 0) messaggio= " <strong>FizzBuzz</strong>"+", ";
   else if(j % 5 == 0) messaggio= " <strong> Buzz</strong>"+ ", ";
   else if (j % 3 == 0) messaggio= " <strong>Fizz</strong>"+ ", ";
   document.getElementById('numeri').innerHTML+=messaggio;
   document.getElementById('numeri').classList.add('show');
 }
});
