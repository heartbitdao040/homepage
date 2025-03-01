let frame = 0;
let interval;
let txtIdx = 0;
const word = ["WELCOME", "TO", "THE", "MOON~~~", "SOO~~~"];
const description = "He is..... right, right and only right.\nWe pay tribute to him";


$(document).ready(function(){
	interval = setInterval(function(){
		animation();
	}, 1000);

	const ctx = document.getElementById('allocate');

	new Chart(ctx, {
		type: 'pie',
		data: data,
	  },
	);
});

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

function clipboardCopy(){
	const copy = $("#Solana_Contract_Address").val(); 

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
		}, 4000)
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
		 setTimeout(typing, 100)
	  }
}
	