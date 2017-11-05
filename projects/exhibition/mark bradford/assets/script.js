$(document).ready(function(){

 var four1 = $('#four1');
   function runIt() {
       four1.animate({top:'+=10'}, 1000);
       four1.animate({top:'-=10'}, 1000, runIt);
   }

   runIt();


var four2 = $('#four2');
   function runIt2() {
       four2.animate({top:'+=10'}, 3000);
       four2.animate({top:'-=10'}, 3000, runIt2);
   }

   runIt2();


var four3 = $('#four3');
   function runIt3() {
       four3.animate({top:'+=13'}, 2000);
       four3.animate({top:'-=13'}, 2000, runIt3);
   }

   runIt3();


var four4 = $('#four4');
   function runIt4() {
       four4.animate({top:'+=13'}, 1400);
       four4.animate({top:'-=13'}, 1400, runIt4);
   }

   runIt4();




 var zero1 = $('#zero1');
   function runZero() {
       zero1.animate({top:'+=10'}, 2000);
       zero1.animate({top:'-=10'}, 2000, runZero);
   }

   runZero();


var zero2 = $('#zero2');
   function runZero2() {
       zero2.animate({top:'+=8'}, 1100);
       zero2.animate({top:'-=8'}, 1100, runZero2);
   }

   runZero2();


var zero3 = $('#zero3');
   function runZero3() {
       zero3.animate({top:'+=13'}, 3000);
       zero3.animate({top:'-=13'}, 3000, runZero3);
   }

   runZero3();


var zero4 = $('#zero4');
   function runZero4() {
       zero4.animate({top:'+=11'}, 2400);
       zero4.animate({top:'-=11'}, 2400, runZero4);
   }

   runZero4();





var four1b = $('#four1b');
   function runItb() {
       four1b.animate({top:'+=7'}, 1100);
       four1b.animate({top:'-=7'}, 1100, runItb);
   }

   runItb();


var four2b = $('#four2b');
   function runItb2() {
       four2b.animate({top:'+=12'}, 3000);
       four2b.animate({top:'-=12'}, 3000, runItb2);
   }

   runItb2();


var four3b = $('#four3b');
   function runItb3() {
       four3b.animate({top:'+=15'}, 2000);
       four3b.animate({top:'-=15'}, 2000, runItb3);
   }

   runItb3();


var four4b = $('#four4b');
   function runItb4() {
       four4b.animate({top:'+=10'}, 1500);
       four4b.animate({top:'-=10'}, 1500, runItb4);
   }

   runItb4();





}); //end





