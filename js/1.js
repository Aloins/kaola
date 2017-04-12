
$(function(){
	
 // topNav下拉面板的显示和隐藏		
	var topNav = function(){
    $(".clearfix  .J-menu, .clearfix .J-menu-topTabBox").hover(
	function() {
      $(this).find(".down-panel").show();//鼠标移入时获取下拉面板并且显示  
    }, 	
	function() {
      $(this).find(".down-panel").hide();//鼠标移出时获取下拉面板并且隐藏
    });	
  }
 topNav();   
 
 //导航的底部红色小滑条
$("#funcTab li").hover(
	function() {
      	if ($(this).hasClass('slider')) {
			return;
		}
		// 找到点击的序号
		var whatTab = $(this).index();
		// 滑条滑动的距离
		var howFar = 110 * whatTab;
		$(".slider").css({
			left: howFar + "px"
		});  
    }, 	
	function() {
     $("#funcTab li.slider").css({"left":"0px"});//鼠标移出时恢复到第一个下面
    });	


  // 伪rightBar左边面板的显示和隐藏
 var rightBar = function(){
    $("#rightBarNew .checkin, #rightBarNew .m-app2,  #rightBarNew .shopcart").hover(
	function() {
      $(this).find(".J").show();//鼠标移入时获取左侧面板并且显示  
    }, 	
	function() {
      $(this).find(".J").hide();//鼠标移出时获取左侧面板并且隐藏
    });	
  }
  rightBar(); 
  
//回到顶部
$("#scrollTop").click(function() {
  $("body").scrollTop(0);
}); 
  
// banner(幻灯片)
  var banner = function(){
//1-1.需要用到的元素
    var page = 0;//当前的播放位置
    var $slide = $(".banner .slide");
    var $slide_img = $(".banner .slide-img");//图片列表容器
    var $slide_img_pic = $slide_img.find("li");//图片列表
    var $slide_pic_len = $slide_img_pic.length;//滑动图片的数量
    var $slide_btn = $(".banner .slide-btn i");//幻灯片控制按钮
    var $tab_nav = $(".banner .tab-nav li");//幻灯片导航
    var timer;//此空变量用来存放鼠标移入时执行的延时函数,鼠标移除时可以清除该函数
    var $slide_toggle = function(i){//i:当前播放的位置 w:单个图片长度,调用时传入上面定义的$img_width
        $slide_img_pic.stop(true, true).fadeOut(200)//渐隐所有的图片
                      .eq(i).fadeIn(600);//渐显需要显示的图片
        $tab_nav.removeClass("current").eq(i).addClass("current");//清除所有幻灯片导航的current类,并给当前播放图片对应的导航添加current
    };
    $slide_toggle(0);
//1-2.幻灯片导航切换效果
    $tab_nav.click(function() {
    var i = $(this).index();//获取点击元素的位置
      if(page != i){//当前已经是图片对应导航时点击无效,如当前播放的是第一张,当点击导航第一个小按钮时候让他不产生效果
        page = $(this).index();
        $slide_toggle(page);
      };
    }).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//当前已经是图片对应导航时悬停无效
      page = $(this).index();
      timer = setTimeout(function(){
        $slide_toggle(page);
      },100);}  
    }).mouseleave(function() {
      clearTimeout(timer);//鼠标移除时取消定时器切换
    });
//1-3.幻灯片控制按钮
    $play_next = function(){//下一张的执行条件
      if(!$slide_img_pic.is(":animated")){
        page = page < ($slide_pic_len - 1) ? ++page : 0;//当前页是最后一张时跳转到第一张,否则就显示后面一张
        $slide_toggle(page);
      }
    }
    $slide_btn.eq(0).click(function() {//上一页按钮点击时
      if(!$slide_img_pic.is(":animated")){
        page = page <= 0 ? ($slide_pic_len - 1) : --page;//当前页是第一张时跳转到最后一张,否则就显示前面一张
        $slide_toggle(page);
      }
    }).end().eq(1).click($play_next);

//1-4.幻灯片自动播放,鼠标悬停时停止播放
    var auto_play = function(){timer=setInterval($play_next,2500)};//自定一个自动播放函数,让他循环播放,并且当页面是最后一张时,跳转到第一张
    auto_play();//调用自动播放
    $slide.mouseenter(function(){
      $slide_btn.show();
      clearTimeout(timer);
      }).mouseleave(function(){
      $slide_btn.hide();
        auto_play();
      });//鼠标悬停时,暂停自动播放,移出时取消定时器自动播放
  }
  banner();
 
  

//左右滚动悬停
	$(document).ready(function(e) {			
	t = $('#indexleft').offset().top;//目标块距离页面顶部的px
	topTab = $('#topTabBox').offset().top;//topTabBox距离页面顶部的px
	rightNav = $('#rightNav').offset().top;//topTabBox距离页面顶部的px
	$(window).scroll(function(e){
		s = $(document).scrollTop();	//滚动条上端距离顶部的px
		if(s > t){
			$('#indexleft').css({'position':'fixed','top':'40px'});					
		}
		else{
		$('#indexleft').css({'position':'absolute','top':'0px'});
		};
		
		if(s>topTab ){
			$('#topTabtop').css({'position':'fixed','top':'0px', "margin": "0 auto"});					
		}else{
		$('#topTabtop').css({'position':'absolute','top':'0px',"margin": "0 auto"});
		};
		
		if(s>rightNav ){
			$('#rightNav').css({'position':'fixed','top':'40px'});					
		}else{
		$('#rightNav').css({'position':'absolute','top':'0px'});
		};				
	})
	
});	
	
//右侧悬浮和楼层导航
var $rightNavLi = $("#rightNav li");//右侧悬浮导航
var $floorNavArticle = $("#j-profloorlist article"); //楼层导航

$rightNavLi.click(function() {
 i = $(this).index();//获取右侧悬浮点击元素的数组序号
  floor = $floorNavArticle.eq(i-1).offset().top;//目标floor距离页面顶部的px
  floor=floor-200;
	  $('body').scrollTop(floor);
});


$(document).ready(function(e) {			
	floorOne = $('#j-profloorlist .floorOne').offset().top-200;
	floorEight = $('#j-profloorlist .floorEight').offset().top-200;
	$(window).scroll(function(e){
	s = $(document).scrollTop();	//滚动条上端距离顶部的px
		if(s >floorOne){
			$('#rightNav .rightSlider').show();					
		}
		else{
		$('#rightNav .rightSlider').hide();	
		};	

		var gap=s-floorOne;
var whatTab=Math.floor(gap/487);
if(whatTab<8){var howFar = 49* whatTab;
$("#rightNav .rightSlider").css({
			top: howFar + "px"
		});  
	};		
	})	;
});	
// 一层slide
  var hotItemsOne = function(){ 
      var page = 0;//当前的播放位置   
   
    var $hot_nav = $(".floorOne .tab-nav li");//幻灯片导航
  var $hot_img_pic = $(".floorOne .img-wrap li");//商品列表
   var $hot_pic_len = $hot_img_pic.length;//滑动图片的数量
   var $hot_toggle = function(i){//i:当前播放的位置 
        $hot_img_pic.hide(0)//渐隐所有的图片
                      .eq(i).fadeIn(200);//渐显需要显示的图片
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.幻灯片导航切换效果
 $hot_nav.click(function() {
 
    var i = $(this).index();//获取点击元素的位置
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//当前已经是图片对应导航时悬停无效
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//鼠标移除时取消定时器切换
    });

$play_next = function(){//下一张的执行条件
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//当前页是最后一张时跳转到第一张,否则就显示后面一张
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//自定一个自动播放函数,让他循环播放,并且当页面是最后一张时,跳转到第一张
    auto_play();//调用自动播放	
}
hotItemsOne();	

//二层slide
  var hotItemsTwo = function(){
   var page = 0;//当前的播放位置   
   var $hot_nav = $(".floorTwo .tab-nav li");//幻灯片导航
   var $hot_img_pic = $(".floorTwo .img-wrap li");//商品列表
   var $hot_pic_len = $hot_img_pic.length;//滑动图片的数量
   var $hot_toggle = function(i){//i:当前播放的位置 
        $hot_img_pic.hide(0)//渐隐所有的图片
                      .eq(i).fadeIn(200);//渐显需要显示的图片
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.幻灯片导航切换效果
 $hot_nav.click(function() {
 
    var i = $(this).index();//获取点击元素的位置
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//当前已经是图片对应导航时悬停无效
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//鼠标移除时取消定时器切换
    });

$play_next = function(){//下一张的执行条件
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//当前页是最后一张时跳转到第一张,否则就显示后面一张
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//自定一个自动播放函数,让他循环播放,并且当页面是最后一张时,跳转到第一张
    auto_play();//调用自动播放	
}
hotItemsTwo();	

// 三层slide
  var hotItemsThree = function(){
var page = 0;//当前的播放位置   
   var $hot_nav = $(".floorThree .tab-nav li");//幻灯片导航
   var $hot_img_pic = $(".floorThree .img-wrap li");//商品列表
   var $hot_pic_len = $hot_img_pic.length;//滑动图片的数量
   var $hot_toggle = function(i){//i:当前播放的位置 
        $hot_img_pic.hide(0)//渐隐所有的图片
                      .eq(i).fadeIn(200);//渐显需要显示的图片
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.幻灯片导航切换效果
 $hot_nav.click(function() {
 
    var i = $(this).index();//获取点击元素的位置
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//当前已经是图片对应导航时悬停无效
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//鼠标移除时取消定时器切换
    });

$play_next = function(){//下一张的执行条件
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//当前页是最后一张时跳转到第一张,否则就显示后面一张
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//自定一个自动播放函数,让他循环播放,并且当页面是最后一张时,跳转到第一张
    auto_play();//调用自动播放	
}
hotItemsThree();	

// 四层slide
  var hotItemsFour = function(){
var page = 0;//当前的播放位置   
   var $hot_nav = $(".floorFour .tab-nav li");//幻灯片导航
   var $hot_img_pic = $(".floorFour .img-wrap li");//商品列表
   var $hot_pic_len = $hot_img_pic.length;//滑动图片的数量
   var $hot_toggle = function(i){//i:当前播放的位置 
        $hot_img_pic.hide(0)//渐隐所有的图片
                      .eq(i).fadeIn(200);//渐显需要显示的图片
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.幻灯片导航切换效果
 $hot_nav.click(function() {
 
    var i = $(this).index();//获取点击元素的位置
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//当前已经是图片对应导航时悬停无效
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//鼠标移除时取消定时器切换
    });

$play_next = function(){//下一张的执行条件
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//当前页是最后一张时跳转到第一张,否则就显示后面一张
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//自定一个自动播放函数,让他循环播放,并且当页面是最后一张时,跳转到第一张
    auto_play();//调用自动播放	
}
hotItemsFour();	

// 五层slide
  var hotItemsFive = function(){
var page = 0;//当前的播放位置   
   var $hot_nav = $(".floorFive .tab-nav li");//幻灯片导航
   var $hot_img_pic = $(".floorFive .img-wrap li");//商品列表
   var $hot_pic_len = $hot_img_pic.length;//滑动图片的数量
   var $hot_toggle = function(i){//i:当前播放的位置 
        $hot_img_pic.hide(0)//渐隐所有的图片
                      .eq(i).fadeIn(200);//渐显需要显示的图片
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.幻灯片导航切换效果
 $hot_nav.click(function() {
 
    var i = $(this).index();//获取点击元素的位置
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//当前已经是图片对应导航时悬停无效
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//鼠标移除时取消定时器切换
    });

$play_next = function(){//下一张的执行条件
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//当前页是最后一张时跳转到第一张,否则就显示后面一张
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//自定一个自动播放函数,让他循环播放,并且当页面是最后一张时,跳转到第一张
    auto_play();//调用自动播放	
}
hotItemsFive();	

// 六层slide
  var hotItemsSix = function(){
var page = 0;//当前的播放位置   
   var $hot_nav = $(".floorSix .tab-nav li");//幻灯片导航
   var $hot_img_pic = $(".floorSix .img-wrap li");//商品列表
   var $hot_pic_len = $hot_img_pic.length;//滑动图片的数量
   var $hot_toggle = function(i){//i:当前播放的位置 
        $hot_img_pic.hide(0)//渐隐所有的图片
                      .eq(i).fadeIn(200);//渐显需要显示的图片
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.幻灯片导航切换效果
 $hot_nav.click(function() {
 
    var i = $(this).index();//获取点击元素的位置
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//当前已经是图片对应导航时悬停无效
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//鼠标移除时取消定时器切换
    });

$play_next = function(){//下一张的执行条件
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//当前页是最后一张时跳转到第一张,否则就显示后面一张
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//自定一个自动播放函数,让他循环播放,并且当页面是最后一张时,跳转到第一张
    auto_play();//调用自动播放	
}
hotItemsSix();	

// 七层slide
  var hotItemsSeven = function(){
var page = 0;//当前的播放位置   
   var $hot_nav = $(".floorSeven .tab-nav li");//幻灯片导航
   var $hot_img_pic = $(".floorSeven .img-wrap li");//商品列表
   var $hot_pic_len = $hot_img_pic.length;//滑动图片的数量
   var $hot_toggle = function(i){//i:当前播放的位置 
        $hot_img_pic.hide(0)//渐隐所有的图片
                      .eq(i).fadeIn(200);//渐显需要显示的图片
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.幻灯片导航切换效果
 $hot_nav.click(function() {
 
    var i = $(this).index();//获取点击元素的位置
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//当前已经是图片对应导航时悬停无效
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//鼠标移除时取消定时器切换
    });

$play_next = function(){//下一张的执行条件
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//当前页是最后一张时跳转到第一张,否则就显示后面一张
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//自定一个自动播放函数,让他循环播放,并且当页面是最后一张时,跳转到第一张
    auto_play();//调用自动播放	
}
hotItemsSeven();	

// 八层slide
  var hotItemsEight = function(){
var page = 0;//当前的播放位置   
   var $hot_nav = $(".floorEight .tab-nav li");//幻灯片导航
   var $hot_img_pic = $(".floorEight .img-wrap li");//商品列表
   var $hot_pic_len = $hot_img_pic.length;//滑动图片的数量
   var $hot_toggle = function(i){//i:当前播放的位置 
        $hot_img_pic.hide(0)//渐隐所有的图片
                      .eq(i).fadeIn(200);//渐显需要显示的图片
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.幻灯片导航切换效果
 $hot_nav.click(function() {
 
    var i = $(this).index();//获取点击元素的位置
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//当前已经是图片对应导航时悬停无效
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//鼠标移除时取消定时器切换
    });

$play_next = function(){//下一张的执行条件
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//当前页是最后一张时跳转到第一张,否则就显示后面一张
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//自定一个自动播放函数,让他循环播放,并且当页面是最后一张时,跳转到第一张
    auto_play();//调用自动播放	
}
hotItemsEight();	

//点击关闭底部的悬浮面板
$("#j-appbanner2 .close").click(function(){
		$("#j-appbanner2").hide();        
    });

});