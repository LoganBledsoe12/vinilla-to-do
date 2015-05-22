var clickMeButton=document.getElementById('click-me');
var myBox=document.getElementById('messageList');
var message=document.getElementById('txtMessage');
clickMeButton.addEventListener('click',clickBox);



function clickBox(){
	var userText=message.value;
	console.log (userText);
	words.push (userText);
	console.log(words);
	render();
}

var words=[];

function render(){
	myBox.innerHTML='';
	var allWords='';
	for(i=0; i<words.length; i++){
		allWords=allWords+words[i]+'<br>';
	}
	
myBox.innerHTML=allWords;
}

