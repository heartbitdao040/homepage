let frame = 0;
let interval;
let txtIdx = 0;
const word = ["THE", "PEOPLE", "WIN"];
const description = "Let's unite as one to achieve victory\nThe people win\n: 국민이 이깁니다";


$(document).ready(function(){
	interval = setInterval(function(){
		animation();
	}, 1000);
	/*
	const ctx = document.getElementById('allocate');

	new Chart(ctx, {
		type: 'pie',
		data: data,
	  },
	);
	*/
});


var isVisible = false;

$(window).on('scroll',function() {
    if (checkVisible($('#allocation'))&&!isVisible) {
		const video = document.querySelector('#allocation-video');
		video.play();
        isVisible=true;
    }

	if(!checkVisible($('#allocation'))){
		const video = document.querySelector('#allocation-video');
		video.pause();
		isVisible=false;
	}
});

function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

/*
const data = {
	labels: [
	  'DAO',
	  'Team',
	  'Marketing',
	  'public'
	],
	datasets: [{
	  data: [70, 10, 10, 10],
	  backgroundColor: [
		'rgb(255, 99, 132)',
		'rgb(54, 162, 235)',
		'rgb(255, 205, 86)',
		'rgb(99, 205, 86)'
	  ],
	  hoverOffset: 4
	}]
};
*/


function goto(link){
	window.open(link);
	return false;
}

function clipboardCopy(){
	const copy = $(".fs-copyclip_text").text(); 
	window.navigator.clipboard.writeText(copy).then(() => { 
		alert("Token address copied to clipboard!");
  	});
}



 

function animation(){


	if(frame > word.length - 1 ){
		$(".text-container").removeClass('effect');
		let bg = "<img class=\"main_bg\" src=\"assets/img/main_bg.svg\" alt=\"main\" >";
		
		$(".text-container").html(bg);
		$(".text-container").addClass('fade-in-image');
		
		setTimeout(function() {   
			let letter = "<div class=\"letter\" ><div class=\"tying\" ></div><div class=\"blink\" >|</div></div>";
			$(".text-container").append(letter);
			typing();
		}, 1000)
		clearInterval(interval);
		return;
	}
	
	$(".text-container").text(word[frame]);
	$(".text-container").removeClass('effect');
	
	setTimeout(function() {   
		$(".text-container").addClass('effect');
	},100);

	frame++;
}


function typing(){
	  var txt = description[txtIdx++];
	  if (txt == undefined) return;
	  var html = $(".tying").html(); 
	  html += ( txt == "\n" ? "<br/>": txt);
	  $(".tying").html(html); 
	  if (txtIdx > description.length) {
		 txtIdx = 0;
	  }else{
		 setTimeout(typing, 50)
	  }
}
	