$(function(){
    var box=$(".imgbox")[0];
    var imgs=$(".img-box",box);
    //console.log(imgs);
    var libtn=$("li",$(".btn-tu")[0]);
    var bgbox=$(".bgbox")[0];
    var bgli=$("li",bgbox);
    //console.log(bgli);
    var index=0;
    var t=setInterval(move,2000)
    function move(){
        index++;
        if(index>imgs.length-1){
            index=0;
        }
        for (var i = 0; i < imgs.length; i++) {
            animate(imgs[i],{opacity:0});
            animate(bgli[i],{opacity:0});
            libtn[i].style.background="";
        };
        animate(imgs[index],{opacity:1});
        animate(bgli[index],{opacity:1});
        libtn[index].style.background="#FF3C3C";


    }
    //鼠标经过后停止
    var banner=$(".bannerbox")[0];
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(move,2000)
    }
    
    //遍历每一个小按钮
    for (var i = 0; i < libtn.length; i++) {
         libtn[i].index=i;
         libtn[i].onmouseover=function(){
              for (var j = 0; j < libtn.length; j++) {
                  libtn[j].style.background="";
                  animate(imgs[j],{opacity:0});
                  animate(bgli[j],{opacity:0});
              };
              animate(imgs[this.index],{opacity:1});
              animate(bgli[this.index],{opacity:1});
              libtn[this.index].style.background="#FF3C3C";
              index=this.index;
         }
    };

    //左右按钮
    var lbtn=$(".btn-left")[0];
    var rbtn=$(".btn-right")[0];
    rbtn.onclick=function(){
        move();
    }
    lbtn.onclick=function(){
        index--;
        if(index<0){
            index=imgs.length-1;
        }
        for (var i = 0; i < imgs.length; i++) {
            animate(imgs[i],{opacity:0});
            libtn[i].style.background="";
            animate(bgli[i],{opacity:0});
        };
        animate(imgs[index],{opacity:1});
        animate(bgli[index],{opacity:1});
        libtn[index].style.background="#FF3C3C";
    }

    
    //进口海购     
     function tab(tt,time){
        var libox=$(".libox")[tt];
        console.log(libox)
        var lis=$("li",libox);
        console.log(lis);
        var liW=parseInt(getStyle(lis[0],"width"));
        console.log(liW);
        libox.style.width=liW*lis.length+"px";
        var btns=$("li",$(".btn-li")[tt]);
        var whtime=0;
        var wl=setInterval(wheel,time);
        function wheel(){
            whtime++;
            if(whtime==lis.length){
                whtime=0
            }
            for (var i = 0; i < btns.length; i++) {
                btns[i].style.background="";
            };
            btns[whtime].style.background="#FF3C3C";
            animate(libox,{marginLeft:-whtime*liW})
        }

            var contentbox=$(".content-box")[tt];
            contentbox.onmouseover=function(){
                clearInterval(wl);
            }
            contentbox.onmouseout=function(){
                wl=setInterval(wheel,time);
            }
            //遍历每一小按钮
            for (var i = 0; i < btns.length; i++) {
                btns[i].index2=i;
                btns[i].onmouseover=function(){
                    for (var j = 0; j < btns.length; j++) {
                         btns[j].style.background="";
                    };
                       btns[this.index2].style.background="#FF3C3C";
                       animate(libox,{marginLeft:-this.index2*liW});
                       whtime=this.index2;
                }
            };      
      }
      tab(0,3000);
      tab(1,3000);
      tab(2,3000);
      tab(3,3000);
      tab(4,3000);
      tab(5,3000);
      tab(6,3000);
      tab(7,3000);

})

/*window.onload=function(){
	var imgs=document.getElementsByClassName("img-box");
	var btns=document.getElementsByClassName("btn");

	var now=0;//初始下标
	function move(){
        now++;
        if(now>=9){
        	now=0;
        }
        for (var i = 0; i < imgs.length; i++) {
        	imgs[i].style.opacity=0;
        	btns[i].style.background="#ccc"
        };
        imgs[now].style.opacity=1;
        btns[now].style.background="#FF3C3C";
	}

	var t=setInterval(move,3000);
    var banner=document.getElementsByClassName("bannerinfo")[0];
    banner.onmouseover=function(){
    	clearInterval(t);//清除事件函数
    }
    banner.onmouseout=function(){
    	t=setInterval(move,3000);
    }
    var btnright=document.getElementsByClassName("btn-right")[0];
    btnright.onclick=function(){
    	move();
    }
    var btnleft=document.getElementsByClassName("btn-left")[0];
    btnleft.onclick=function(){
    	now--;
    	if(now<0){
    		now=imgs.length-1;
    	}
    	for (var i = 0; i < imgs.length; i++) {
    		imgs[i].style.opacity=0;
    		btns[i].style.background="#ccc"
    	};
    	imgs[now].style.opacity=1;
    	btns[now].style.background="#FF3C3C";
    }
    for (var i = 0; i < btns.length; i++) {
    	(function(i){
    		btns[i].onmouseover=function(){
    			for (var j = 0; j < imgs.length; j++) {
    				imgs[j].style.opacity=0;
    			   btns[j].style.background="#ccc";
    			};
    			
    		    imgs[i].style.opacity=1;
    		    btns[i].style.background="#FF3C3C";
    		}
    		
    	})(i);
    	
    };
}*/