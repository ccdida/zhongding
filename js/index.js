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

//导航栏点击事件

$(".menu_nav .nav_item1").on('click',function(event){
   // event.preventDefault();
   if($('.nav_one').is(':hidden')){//如果当前隐藏  
        $('.nav_one').show();//那么就显示div  
        }else{//否则  
        $('.nav_one').hide();//就隐藏div  
        }  
})