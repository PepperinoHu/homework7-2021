var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	let video = document.getElementById("player1");
	video.play();
	let volume = document.getElementById("volume");
	let slider= document.getElementById("slider");

	volume.innerHTML = slider.value+"%";
});

document.querySelector("#pause").addEventListener("click",function(){
	console.log("Pause Video") 
	let video = document.getElementById("player1");
	video.pause();
})

document.querySelector("#slower").addEventListener("click",function(){
	 
	let video = document.getElementById("player1");
	video.playbackRate *= 0.95; 
	console.log("Slow Down Video to rate:", (video.playbackRate*100).toFixed(0)+"%")
	video.play();
})
document.querySelector("#faster").addEventListener("click",function(){
	 
	let video = document.getElementById("player1");
	video.playbackRate /= 0.95; 
	console.log("Speed up Video to rate:", (video.playbackRate*100).toFixed(0)+"%")
	video.play();
})
document.querySelector("#skip").addEventListener("click",function(){
	 
	let video = document.getElementById("player1");
	if (video.currentTime > video.duration - 15){
		video.currentTime=0;
	}
	else{
		video.currentTime += 15;
	}
	console.log("Advanced Video by 15 seconds, Current Time:", video.currentTime.toFixed(0),'s')
	video.play();
})
document.querySelector("#mute").addEventListener("click",function(){
	 
	let video = document.getElementById("player1");
	let mute_button = document.getElementById("mute"); 
	if (video.muted){
		video.muted = false; 
		mute_button.innerHTML = "Mute";
	}
	else
	{
		video.muted = true; 
		mute_button.innerHTML = "Unmute";
	}
	video.play();
})
document.getElementById("slider").oninput = function(slider){
	 
	let video = document.getElementById("player1");
	let volume = document.getElementById("volume");
	volume.innerHTML = slider.target.value+"%";
	video.volume = slider.target.value/100;
	console.log('Volume Changed to:' + slider.target.value);
}
document.querySelector("#vintage").addEventListener("click",function(){
	 
	let video = document.getElementById("player1");
	video.className = "oldSchool";
});
document.querySelector("#orig").addEventListener("click",function(){
	 
	let video = document.getElementById("player1");
	video.className = "video";
});


