

var x = 0;


var divs = document.querySelectorAll(".pl");
var tab = ["music/polarbear.mp3", "music/bear-roar.mp3", "music/dog3.mp3", "music/catfight.mp3", "music/elephan6.mp3",
 "music/lioncub2.mp3", "music/remont.mp3", "music/bird.mp3",  "music/street.mp3", "music/violin.mp3", "music/trumpet.mp3", "music/flet.wav",
  "music/czerwony.mp3", "music/niebieski.mp3", "music/zielony.mp3", "music/pluca.mp3", "music/zoladek.mp3", "music/watroba.mp3", "music/jelito_cienkie.mp3", 
  "music/grube.mp3"];

for(let i=0; i<divs.length; i++)
{


divs[i].addEventListener("click", function()
	{

		if (x == 0){
		var snd = new Audio(tab[i]);
        snd.loop = false;
   				 }

        	if((divs[i].dataset.play !== "true" ) && (x==0)){
        	   		snd.play();
        	   		divs[i].dataset.play = "true";
					x=1;
    		
     		snd.onended = function()
     		{
     				divs[i].dataset.play = "false";
     				x=0;

     		};

  }



	});
}



    console.log(document.querySelector("body"));


document.querySelector("body").addEventListener("keydown", event =>
  {
     var x = event.key;

    console.log("You pressed the " +  x + " key!");
    });







var animal = document.querySelectorAll(".an");


for(let i=0; i<animal.length; i++){
animal[i].addEventListener("mousemove", function()
{

if (document.querySelector(".p1") == null){
var el = document.createElement("p");
el.textContent = "Kliknij, aby odtworzyć dźwięk!";
el.setAttribute("class", "p1")
animal[i].appendChild(el);
}

})


animal[i].addEventListener("mouseout", function()
{

if (document.querySelector(".p1") !== null){

	document.querySelector(".p1").remove();

}

})
}




var divorgan = document.querySelector("#kontener5");
var ps = divorgan.querySelectorAll("p");


for(let i=0; i<ps.length; i++){
ps[i].addEventListener("mousemove", function()
{


ps[i].setAttribute("style", "background-color:yellow");

})


ps[i].addEventListener("mouseout", function()
{

ps[i].setAttribute("style", "background-color:none");


})
}


