
$(function(){
	
 // topNav����������ʾ������		
	var topNav = function(){
    $(".clearfix  .J-menu, .clearfix .J-menu-topTabBox").hover(
	function() {
      $(this).find(".down-panel").show();//�������ʱ��ȡ������岢����ʾ  
    }, 	
	function() {
      $(this).find(".down-panel").hide();//����Ƴ�ʱ��ȡ������岢������
    });	
  }
 topNav();   
 
 //�����ĵײ���ɫС����
$("#funcTab li").hover(
	function() {
      	if ($(this).hasClass('slider')) {
			return;
		}
		// �ҵ���������
		var whatTab = $(this).index();
		// ���������ľ���
		var howFar = 110 * whatTab;
		$(".slider").css({
			left: howFar + "px"
		});  
    }, 	
	function() {
     $("#funcTab li.slider").css({"left":"0px"});//����Ƴ�ʱ�ָ�����һ������
    });	


  // αrightBar���������ʾ������
 var rightBar = function(){
    $("#rightBarNew .checkin, #rightBarNew .m-app2,  #rightBarNew .shopcart").hover(
	function() {
      $(this).find(".J").show();//�������ʱ��ȡ�����岢����ʾ  
    }, 	
	function() {
      $(this).find(".J").hide();//����Ƴ�ʱ��ȡ�����岢������
    });	
  }
  rightBar(); 
  
//�ص�����
$("#scrollTop").click(function() {
  $("body").scrollTop(0);
}); 
  
// banner(�õ�Ƭ)
  var banner = function(){
//1-1.��Ҫ�õ���Ԫ��
    var page = 0;//��ǰ�Ĳ���λ��
    var $slide = $(".banner .slide");
    var $slide_img = $(".banner .slide-img");//ͼƬ�б�����
    var $slide_img_pic = $slide_img.find("li");//ͼƬ�б�
    var $slide_pic_len = $slide_img_pic.length;//����ͼƬ������
    var $slide_btn = $(".banner .slide-btn i");//�õ�Ƭ���ư�ť
    var $tab_nav = $(".banner .tab-nav li");//�õ�Ƭ����
    var timer;//�˿ձ�����������������ʱִ�е���ʱ����,����Ƴ�ʱ��������ú���
    var $slide_toggle = function(i){//i:��ǰ���ŵ�λ�� w:����ͼƬ����,����ʱ�������涨���$img_width
        $slide_img_pic.stop(true, true).fadeOut(200)//�������е�ͼƬ
                      .eq(i).fadeIn(600);//������Ҫ��ʾ��ͼƬ
        $tab_nav.removeClass("current").eq(i).addClass("current");//������лõ�Ƭ������current��,������ǰ����ͼƬ��Ӧ�ĵ������current
    };
    $slide_toggle(0);
//1-2.�õ�Ƭ�����л�Ч��
    $tab_nav.click(function() {
    var i = $(this).index();//��ȡ���Ԫ�ص�λ��
      if(page != i){//��ǰ�Ѿ���ͼƬ��Ӧ����ʱ�����Ч,�統ǰ���ŵ��ǵ�һ��,�����������һ��С��ťʱ������������Ч��
        page = $(this).index();
        $slide_toggle(page);
      };
    }).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//��ǰ�Ѿ���ͼƬ��Ӧ����ʱ��ͣ��Ч
      page = $(this).index();
      timer = setTimeout(function(){
        $slide_toggle(page);
      },100);}  
    }).mouseleave(function() {
      clearTimeout(timer);//����Ƴ�ʱȡ����ʱ���л�
    });
//1-3.�õ�Ƭ���ư�ť
    $play_next = function(){//��һ�ŵ�ִ������
      if(!$slide_img_pic.is(":animated")){
        page = page < ($slide_pic_len - 1) ? ++page : 0;//��ǰҳ�����һ��ʱ��ת����һ��,�������ʾ����һ��
        $slide_toggle(page);
      }
    }
    $slide_btn.eq(0).click(function() {//��һҳ��ť���ʱ
      if(!$slide_img_pic.is(":animated")){
        page = page <= 0 ? ($slide_pic_len - 1) : --page;//��ǰҳ�ǵ�һ��ʱ��ת�����һ��,�������ʾǰ��һ��
        $slide_toggle(page);
      }
    }).end().eq(1).click($play_next);

//1-4.�õ�Ƭ�Զ�����,�����ͣʱֹͣ����
    var auto_play = function(){timer=setInterval($play_next,2500)};//�Զ�һ���Զ����ź���,����ѭ������,���ҵ�ҳ�������һ��ʱ,��ת����һ��
    auto_play();//�����Զ�����
    $slide.mouseenter(function(){
      $slide_btn.show();
      clearTimeout(timer);
      }).mouseleave(function(){
      $slide_btn.hide();
        auto_play();
      });//�����ͣʱ,��ͣ�Զ�����,�Ƴ�ʱȡ����ʱ���Զ�����
  }
  banner();
 
  

//���ҹ�����ͣ
	$(document).ready(function(e) {			
	t = $('#indexleft').offset().top;//Ŀ������ҳ�涥����px
	topTab = $('#topTabBox').offset().top;//topTabBox����ҳ�涥����px
	rightNav = $('#rightNav').offset().top;//topTabBox����ҳ�涥����px
	$(window).scroll(function(e){
		s = $(document).scrollTop();	//�������϶˾��붥����px
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
	
//�Ҳ�������¥�㵼��
var $rightNavLi = $("#rightNav li");//�Ҳ���������
var $floorNavArticle = $("#j-profloorlist article"); //¥�㵼��

$rightNavLi.click(function() {
 i = $(this).index();//��ȡ�Ҳ��������Ԫ�ص��������
  floor = $floorNavArticle.eq(i-1).offset().top;//Ŀ��floor����ҳ�涥����px
  floor=floor-200;
	  $('body').scrollTop(floor);
});


$(document).ready(function(e) {			
	floorOne = $('#j-profloorlist .floorOne').offset().top-200;
	floorEight = $('#j-profloorlist .floorEight').offset().top-200;
	$(window).scroll(function(e){
	s = $(document).scrollTop();	//�������϶˾��붥����px
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
// һ��slide
  var hotItemsOne = function(){ 
      var page = 0;//��ǰ�Ĳ���λ��   
   
    var $hot_nav = $(".floorOne .tab-nav li");//�õ�Ƭ����
  var $hot_img_pic = $(".floorOne .img-wrap li");//��Ʒ�б�
   var $hot_pic_len = $hot_img_pic.length;//����ͼƬ������
   var $hot_toggle = function(i){//i:��ǰ���ŵ�λ�� 
        $hot_img_pic.hide(0)//�������е�ͼƬ
                      .eq(i).fadeIn(200);//������Ҫ��ʾ��ͼƬ
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.�õ�Ƭ�����л�Ч��
 $hot_nav.click(function() {
 
    var i = $(this).index();//��ȡ���Ԫ�ص�λ��
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//��ǰ�Ѿ���ͼƬ��Ӧ����ʱ��ͣ��Ч
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//����Ƴ�ʱȡ����ʱ���л�
    });

$play_next = function(){//��һ�ŵ�ִ������
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//��ǰҳ�����һ��ʱ��ת����һ��,�������ʾ����һ��
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//�Զ�һ���Զ����ź���,����ѭ������,���ҵ�ҳ�������һ��ʱ,��ת����һ��
    auto_play();//�����Զ�����	
}
hotItemsOne();	

//����slide
  var hotItemsTwo = function(){
   var page = 0;//��ǰ�Ĳ���λ��   
   var $hot_nav = $(".floorTwo .tab-nav li");//�õ�Ƭ����
   var $hot_img_pic = $(".floorTwo .img-wrap li");//��Ʒ�б�
   var $hot_pic_len = $hot_img_pic.length;//����ͼƬ������
   var $hot_toggle = function(i){//i:��ǰ���ŵ�λ�� 
        $hot_img_pic.hide(0)//�������е�ͼƬ
                      .eq(i).fadeIn(200);//������Ҫ��ʾ��ͼƬ
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.�õ�Ƭ�����л�Ч��
 $hot_nav.click(function() {
 
    var i = $(this).index();//��ȡ���Ԫ�ص�λ��
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//��ǰ�Ѿ���ͼƬ��Ӧ����ʱ��ͣ��Ч
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//����Ƴ�ʱȡ����ʱ���л�
    });

$play_next = function(){//��һ�ŵ�ִ������
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//��ǰҳ�����һ��ʱ��ת����һ��,�������ʾ����һ��
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//�Զ�һ���Զ����ź���,����ѭ������,���ҵ�ҳ�������һ��ʱ,��ת����һ��
    auto_play();//�����Զ�����	
}
hotItemsTwo();	

// ����slide
  var hotItemsThree = function(){
var page = 0;//��ǰ�Ĳ���λ��   
   var $hot_nav = $(".floorThree .tab-nav li");//�õ�Ƭ����
   var $hot_img_pic = $(".floorThree .img-wrap li");//��Ʒ�б�
   var $hot_pic_len = $hot_img_pic.length;//����ͼƬ������
   var $hot_toggle = function(i){//i:��ǰ���ŵ�λ�� 
        $hot_img_pic.hide(0)//�������е�ͼƬ
                      .eq(i).fadeIn(200);//������Ҫ��ʾ��ͼƬ
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.�õ�Ƭ�����л�Ч��
 $hot_nav.click(function() {
 
    var i = $(this).index();//��ȡ���Ԫ�ص�λ��
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//��ǰ�Ѿ���ͼƬ��Ӧ����ʱ��ͣ��Ч
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//����Ƴ�ʱȡ����ʱ���л�
    });

$play_next = function(){//��һ�ŵ�ִ������
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//��ǰҳ�����һ��ʱ��ת����һ��,�������ʾ����һ��
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//�Զ�һ���Զ����ź���,����ѭ������,���ҵ�ҳ�������һ��ʱ,��ת����һ��
    auto_play();//�����Զ�����	
}
hotItemsThree();	

// �Ĳ�slide
  var hotItemsFour = function(){
var page = 0;//��ǰ�Ĳ���λ��   
   var $hot_nav = $(".floorFour .tab-nav li");//�õ�Ƭ����
   var $hot_img_pic = $(".floorFour .img-wrap li");//��Ʒ�б�
   var $hot_pic_len = $hot_img_pic.length;//����ͼƬ������
   var $hot_toggle = function(i){//i:��ǰ���ŵ�λ�� 
        $hot_img_pic.hide(0)//�������е�ͼƬ
                      .eq(i).fadeIn(200);//������Ҫ��ʾ��ͼƬ
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.�õ�Ƭ�����л�Ч��
 $hot_nav.click(function() {
 
    var i = $(this).index();//��ȡ���Ԫ�ص�λ��
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//��ǰ�Ѿ���ͼƬ��Ӧ����ʱ��ͣ��Ч
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//����Ƴ�ʱȡ����ʱ���л�
    });

$play_next = function(){//��һ�ŵ�ִ������
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//��ǰҳ�����һ��ʱ��ת����һ��,�������ʾ����һ��
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//�Զ�һ���Զ����ź���,����ѭ������,���ҵ�ҳ�������һ��ʱ,��ת����һ��
    auto_play();//�����Զ�����	
}
hotItemsFour();	

// ���slide
  var hotItemsFive = function(){
var page = 0;//��ǰ�Ĳ���λ��   
   var $hot_nav = $(".floorFive .tab-nav li");//�õ�Ƭ����
   var $hot_img_pic = $(".floorFive .img-wrap li");//��Ʒ�б�
   var $hot_pic_len = $hot_img_pic.length;//����ͼƬ������
   var $hot_toggle = function(i){//i:��ǰ���ŵ�λ�� 
        $hot_img_pic.hide(0)//�������е�ͼƬ
                      .eq(i).fadeIn(200);//������Ҫ��ʾ��ͼƬ
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.�õ�Ƭ�����л�Ч��
 $hot_nav.click(function() {
 
    var i = $(this).index();//��ȡ���Ԫ�ص�λ��
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//��ǰ�Ѿ���ͼƬ��Ӧ����ʱ��ͣ��Ч
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//����Ƴ�ʱȡ����ʱ���л�
    });

$play_next = function(){//��һ�ŵ�ִ������
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//��ǰҳ�����һ��ʱ��ת����һ��,�������ʾ����һ��
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//�Զ�һ���Զ����ź���,����ѭ������,���ҵ�ҳ�������һ��ʱ,��ת����һ��
    auto_play();//�����Զ�����	
}
hotItemsFive();	

// ����slide
  var hotItemsSix = function(){
var page = 0;//��ǰ�Ĳ���λ��   
   var $hot_nav = $(".floorSix .tab-nav li");//�õ�Ƭ����
   var $hot_img_pic = $(".floorSix .img-wrap li");//��Ʒ�б�
   var $hot_pic_len = $hot_img_pic.length;//����ͼƬ������
   var $hot_toggle = function(i){//i:��ǰ���ŵ�λ�� 
        $hot_img_pic.hide(0)//�������е�ͼƬ
                      .eq(i).fadeIn(200);//������Ҫ��ʾ��ͼƬ
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.�õ�Ƭ�����л�Ч��
 $hot_nav.click(function() {
 
    var i = $(this).index();//��ȡ���Ԫ�ص�λ��
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//��ǰ�Ѿ���ͼƬ��Ӧ����ʱ��ͣ��Ч
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//����Ƴ�ʱȡ����ʱ���л�
    });

$play_next = function(){//��һ�ŵ�ִ������
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//��ǰҳ�����һ��ʱ��ת����һ��,�������ʾ����һ��
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//�Զ�һ���Զ����ź���,����ѭ������,���ҵ�ҳ�������һ��ʱ,��ת����һ��
    auto_play();//�����Զ�����	
}
hotItemsSix();	

// �߲�slide
  var hotItemsSeven = function(){
var page = 0;//��ǰ�Ĳ���λ��   
   var $hot_nav = $(".floorSeven .tab-nav li");//�õ�Ƭ����
   var $hot_img_pic = $(".floorSeven .img-wrap li");//��Ʒ�б�
   var $hot_pic_len = $hot_img_pic.length;//����ͼƬ������
   var $hot_toggle = function(i){//i:��ǰ���ŵ�λ�� 
        $hot_img_pic.hide(0)//�������е�ͼƬ
                      .eq(i).fadeIn(200);//������Ҫ��ʾ��ͼƬ
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.�õ�Ƭ�����л�Ч��
 $hot_nav.click(function() {
 
    var i = $(this).index();//��ȡ���Ԫ�ص�λ��
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//��ǰ�Ѿ���ͼƬ��Ӧ����ʱ��ͣ��Ч
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//����Ƴ�ʱȡ����ʱ���л�
    });

$play_next = function(){//��һ�ŵ�ִ������
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//��ǰҳ�����һ��ʱ��ת����һ��,�������ʾ����һ��
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//�Զ�һ���Զ����ź���,����ѭ������,���ҵ�ҳ�������һ��ʱ,��ת����һ��
    auto_play();//�����Զ�����	
}
hotItemsSeven();	

// �˲�slide
  var hotItemsEight = function(){
var page = 0;//��ǰ�Ĳ���λ��   
   var $hot_nav = $(".floorEight .tab-nav li");//�õ�Ƭ����
   var $hot_img_pic = $(".floorEight .img-wrap li");//��Ʒ�б�
   var $hot_pic_len = $hot_img_pic.length;//����ͼƬ������
   var $hot_toggle = function(i){//i:��ǰ���ŵ�λ�� 
        $hot_img_pic.hide(0)//�������е�ͼƬ
                      .eq(i).fadeIn(200);//������Ҫ��ʾ��ͼƬ
					   $hot_nav.removeClass("current").eq(i).addClass("current");           
    };
    $hot_toggle(0);
//1-2.�õ�Ƭ�����л�Ч��
 $hot_nav.click(function() {
 
    var i = $(this).index();//��ȡ���Ԫ�ص�λ��
      if(page != i){
        page = i;
        $hot_toggle(page);
      };
}).mouseenter(function() {
      var i = $(this).index();
      if(page != i){//��ǰ�Ѿ���ͼƬ��Ӧ����ʱ��ͣ��Ч
      page = $(this).index();
      timer = setTimeout(function(){
        $hot_toggle(page);
      },200);}  
    }).mouseleave(function() {
      clearTimeout(timer);//����Ƴ�ʱȡ����ʱ���л�
    });

$play_next = function(){//��һ�ŵ�ִ������
      if(!$hot_img_pic.is(":animated")){
        page = page < ($hot_pic_len - 1) ? ++page :0;//��ǰҳ�����һ��ʱ��ת����һ��,�������ʾ����һ��
        $hot_toggle(page);
      }
	  };
	  
 var auto_play = function(){timer=setInterval($play_next, 3000)};//�Զ�һ���Զ����ź���,����ѭ������,���ҵ�ҳ�������һ��ʱ,��ת����һ��
    auto_play();//�����Զ�����	
}
hotItemsEight();	

//����رյײ����������
$("#j-appbanner2 .close").click(function(){
		$("#j-appbanner2").hide();        
    });

});