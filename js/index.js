window.mySwipe = new Swipe(document.getElementById('slider'), {
  startSlide: 0,
  speed: 400,
  auto: 3000,
  continuous: true,
  disableScroll: false,
  stopPropagation: false,
  callback: function(index, elem) {
  	 slideTab(index);
  },
  transitionEnd: function(index, elem) {
  	slideTab(index);
  }
});

var bullets = document.getElementById('position').getElementsByTagName('li');  
function slideTab(index){
	 var i = bullets.length;  
        while(i--){  
            bullets[i].className = ' ';  
        }  
        bullets[index].className = 'on';  
}
slideTab(0);