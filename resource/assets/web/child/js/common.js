var mySlider = {
  init:function(){
    $(".my_slider").slick({
      infinite: true,
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchMove : true,
      draggable : true,
      focusOnSelect: false
    });
  }
};

var gnbMenu = {
  init:function(){
    $(".header .menu").find("a").on("click",function(){
       $(".gnb_box").css("display","block");
       $(".gnb_box .gnb_bg").stop().animate({ left:0 },300);
    });
    $(".gnb_box .gnb_close").find("a").on("click",function(){
       $(".gnb_box .gnb_bg").stop().animate({ left:"-300px" },300,function(){
           $(".gnb_box").css("display","none");
       });
    });
  }
}

var selEvent = {
    init:function(){
        var selectType0 = $(".select_row>select, .select_tel>select");

        selectChange(selectType0);

        function selectChange(type){
            type.change(function(){
                var select_name = $(this).children("option:selected").text();
                $(this).siblings("label").text(select_name);
            });
        };
        
    }
};

var agreeChk = {
  init:function(){
    $('.chkAgreeAll').click(function(){
      if($(".chkAgreeAll").is(":checked")){
        $('.chkAgree').prop('checked', true);
      }else{
        $('.chkAgree').prop('checked', false);
      }
    });
    $('.chkAgree').click(function(){
      if($("input[name='chkag[]']:checked").length == 3){
        $('.chkAgreeAll').prop('checked', true);
      }else{
        $('.chkAgreeAll').prop('checked', false);
      }
    });
  }
};

var tabEvent = {
    init:function(){
        $(".sub_tab ul li>a").on("click",function(){
          var tabType = $(this).parent().index();
          $(".sub_tab ul li").removeClass("active");
          $(this).parent().addClass("active");
          $(".tab_cont").addClass("blind");
          $(".tab_cont0"+tabType).removeClass("blind");
        });
    }
};

var tabEvent02 = {
    init:function(){
        $(".sub_tab02 ul li>a").on("click",function(){
          var tabType = $(this).parent().index();
          $(".sub_tab02 ul li").removeClass("active");
          $(this).parent().addClass("active");
          $(".tab_cont").addClass("blind");
          $(".tab_cont0"+tabType).removeClass("blind");
        });
    }
};

var fileEvent = {
  init:function(){
	  
  var fileTarget = $('.upload_hidden');
    fileTarget.on('change', function(){
       if(window.FileReader){
         var filename = $(this)[0].files[0].name;
       }
       else {
         var filename = $(this).val().split('/').pop().split('\\').pop();
       }
       $('.upload_field').css("display","block");
       $('.upload_name').val(filename);
    });
	    
	    
    var fileTarget = $('.upload_hidden1');
    fileTarget.on('change', function(){
       if(window.FileReader){
         var filename = $(this)[0].files[0].name;
       }
       else {
         var filename = $(this).val().split('/').pop().split('\\').pop();
       }
       
       var ext = $(this).val().split(".").pop().toLowerCase();

       if($.inArray(ext, ["gif","jpg","png","jpeg"]) == -1){
           alert("5MB ????????? ???????????????(JPG, PNG, GIF) 1?????? ???????????? ??? ????????????.");
           return;
       }
       
       // ?????? ??????
       var fileSize = this.files[0].size;
       var maxSize =  5 * 1024 * 1024;

       if(fileSize > maxSize){
     	  alert("5MB ????????? ???????????????(JPG, PNG, GIF) 1?????? ???????????? ??? ????????????.");
           return;
       }
       
       
       $('.upload_field1').css("display","block");
       $('.upload_name1').val(filename);
    });
    
    var fileTarget = $('.upload_hidden2');
    fileTarget.on('change', function(){
       if(window.FileReader){
         var filename = $(this)[0].files[0].name;
       }
       else {
         var filename = $(this).val().split('/').pop().split('\\').pop();
       }
       
       var ext = $(this).val().split(".").pop().toLowerCase();
       if($.inArray(ext, ["gif","jpg","png","jpeg"]) == -1){
           alert("5MB ????????? ???????????????(JPG, PNG, GIF) 1?????? ???????????? ??? ????????????.");
           return;
       }
       
       // ?????? ??????
       var fileSize = this.files[0].size;
       var maxSize =  5 * 1024 * 1024;

       if(fileSize > maxSize){
     	  alert("5MB ????????? ???????????????(JPG, PNG, GIF) 1?????? ???????????? ??? ????????????.");
           return;
       }
       
       
       $('.upload_field2').css("display","block");
       $('.upload_name2').val(filename);
    });
    
    var fileTarget = $('.upload_hidden3');
    fileTarget.on('change', function(){
       if(window.FileReader){
         var filename = $(this)[0].files[0].name;
       }
       else {
         var filename = $(this).val().split('/').pop().split('\\').pop();
       }
       
       var ext = $(this).val().split(".").pop().toLowerCase();
       if($.inArray(ext, ["gif","jpg","png","jpeg"]) == -1){
           alert("5MB ????????? ???????????????(JPG, PNG, GIF) 1?????? ???????????? ??? ????????????.");
           return;
       }
       
       // ?????? ??????
       var fileSize = this.files[0].size;
       var maxSize =  5 * 1024 * 1024;

       if(fileSize > maxSize){
     	  alert("5MB ????????? ???????????????(JPG, PNG, GIF) 1?????? ???????????? ??? ????????????.");
           return;
       }
       
       
       $('.upload_field3').css("display","block");
       $('.upload_name3').val(filename);
    });
  }
};

var accordEvent = {
    init:function(){
      $(".faq_list>ul>li>.faq_box").slideUp(0);
      $(".faq_list>ul>li>a").on("click",function(){
          if(!$(this).parent().hasClass("active")){
              $(this).parent().siblings().removeClass("active");
              $(this).parent().siblings().find(".faq_box").slideUp(200);
              $(this).parent().addClass("active");
              $(this).parent().find(".faq_box").slideDown(200);
          }else{
              $(this).parent().removeClass("active");
              $(this).parent().find(".faq_box").slideUp(200);
          }
      });
    }
};

var tabClick = {
    init:function(){
      $(".chartTop>ul>li>a").on("click",function(){
        if(!$(this).parent().hasClass("active")){
            $(this).parent().siblings().removeClass("active");
            $(this).parent().addClass("active");
        }
      });
    }
};

var noteOpen = {
	init:function(){
	      $(".btn_note").on("click",function(){
	          if(!$(this).parents().next(".note_box").hasClass("blind")){
	              $(this).parents("tr").next(".note_box").addClass("blind");
	              $(this).removeClass("on");
	          }else{
	              $(this).parents("tr").next(".note_box").removeClass("blind");
	              $(this).addClass("on");
	          }
	      });
	 }
};

var deleteList = {
	init:function(){
		  $('.btn_delete').on("click",function(){
		      var deleteConfirm = confirm('??????????????? ????????? ?????????????????????????');
		      if(deleteConfirm ==true){
		        $(this).parents('tr').hide();
		      }      
		  })
	 }
};

var dateList = {
	init:function(){
		  $("input[id='toggle']").click(function(){
		      if($(this).is(":checked")) {
		        $('.date_list').show();
		      }else {
		        $('.date_list').hide();
		      }
		  });
	 }
};

/* ??????/?????? ????????? 2023.02.08 ?????? */
var calendar = {
  init:function(){
    /*
    ??????: https://codepen.io/ylem76/pen/xxrMOEJ
    ?????? ????????? ??? ??? ????????? ?????? ?????? 

    ?????? ???(????????? : ?????? ??????)
    ?????? ???????????? ????????? ??????
    ?????? ???????????? ????????? ??????
    */

    // ?????? ?????? ????????????
    var date = new Date(), // ?????? ??????(?????? ??????) ????????????
        utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000), // uct ????????? ??????
        kstGap = 9 * 60 * 60 * 1000, // ?????? kst ???????????? ?????????
        today = new Date(utc + kstGap); // ?????? ???????????? date ?????? ?????????(??????)
  
    var thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // ???????????? ???????????? ?????? ??????
      
    var currentYear = thisMonth.getFullYear(), // ???????????? ???????????? ???
        currentMonth = thisMonth.getMonth() + 1, // ???????????? ???????????? ???
        currentDate = thisMonth.getDate(); // ???????????? ???????????? ???

    // kst ?????? ????????????
    // console.log(thisMonth);

    // ------------------------------------------------------------+| ????????? ????????? |+------------------------------------------------------------ //

    function renderCalender(thisMonth) {

      // ???????????? ?????? ????????? ??????
      currentYear = thisMonth.getFullYear();
      currentMonth = thisMonth.getMonth();
      currentDate = thisMonth.getDate();

      // ?????? ?????? ????????? ??? ????????? ?????? ?????????
      var startDay = new Date(currentYear, currentMonth, 0),
          prevDate = startDay.getDate(),
          prevDay = startDay.getDay();

      // ?????? ?????? ???????????? ????????? ?????? ?????????
      var endDay = new Date(currentYear, currentMonth + 1, 0),
          nextDate = endDay.getDate(),
          nextDay = endDay.getDay();

      // console.log(prevDate, prevDay, nextDate, nextDay);

      // ?????? ??? ??????
      $('.year-month').html('<span>' + currentYear + '</span>??? <span>' + (currentMonth + 1) + '</span>???');

      // ????????? html ?????? ??????
      var calendar = document.querySelector('.dates');
      calendar.innerHTML = '';
      calendar.dataset.cal = currentYear + '??? ' + (currentMonth + 1) + '???';
        
      // ?????????
      for (var i = prevDate - prevDay; i <= (prevDay == 6 ? 0 : prevDate); i++) {
          calendar.innerHTML = calendar.innerHTML + '<div class="day prev disable">' + i + '</div>';     
      }
      // ?????????
      for (var i = 1; i <= nextDate; i++) {
          calendar.innerHTML = calendar.innerHTML + '<div class="day current"><a href="javascript:;" title="dates">' + i + '<div class="circle"></div></a></div>'
      }
      // ?????????
      for (var i = 1; i <= (6 - nextDay == 7 ? 0 : 6 - nextDay); i++) {
          calendar.innerHTML = calendar.innerHTML + '<div class="day next disable">' + i + '</div>'
      }

      // ?????? ?????? ??????
      if (today.getMonth() == currentMonth) {
          var todayDate = today.getDate(),
              currentMonthDate = document.querySelectorAll('.dates .current');

          currentMonthDate[todayDate - 1].classList.add('today');
      }
    
      if(!$('.calendar .cal_wrap').hasClass('register')){  //??????/???????????? ?????????
        // ???????????? ?????? ???????????? ??????
        var getData = ['2023', '2'];
  
        if (calendar.dataset.cal === getData[0] + '??? ' + getData[1] + '???') { // ?????? ???????????? ?????? ??? ?????? ????????????
          
          // ?????? ?????? ??????
          var cb = $('.dates .day.current a .circle');
  
          cb.eq(20).addClass('cir01');
          cb.eq(21).addClass('cir02');
          cb.eq(22).addClass('cir03');
          cb.eq(23).addClass('cir04');
        }
        
      }
      
    }

    
    // ------------------------------------------------------------+| ??????????????? ????????? |+------------------------------------------------------------ //

    function renderTimeTable(thisMonth) {

      // ???????????? ?????? ????????? ??????
      currentYear = thisMonth.getFullYear();
      currentMonth = thisMonth.getMonth();
      currentDate = thisMonth.getDate();

      // ?????? ??? ??????
      $('.year-month').html('<span>' + currentYear + '</span>??? <span>' + (currentMonth + 1) + '</span>???');
      
      // *??????????????? ????????? ??? ???????????? ?????? ??? ??????
      $('.time_wrap').on('load resize scroll', function() {
        $("thead").css("top", 0 + $(this).scrollTop());
        $(".moveL").css("left", 0 + $(this).scrollLeft());
        $(this).children('span').css({"top": 1 + $(this).scrollTop(), "left": 0 + $(this).scrollLeft()});
      });

    }

    // ------------------------------------------------------------+| ?????? ????????? |+------------------------------------------------------------ //
    
    // ???????????? ????????? ????????????
    if ($('.cal_wrap').length) {
      renderCalender(thisMonth);
    } else if ($('.time_wrap').length) {
      renderTimeTable(thisMonth);
    }

    // ???????????? ??????
    $('.go-prev').on('click', function() {
      if ($('.cal_wrap').length) {
        thisMonth = new Date(currentYear, currentMonth - 1, 1);
        renderCalender(thisMonth);
        
      } else if ($('.time_wrap').length) {
        thisMonth = new Date(currentYear, currentMonth - 1, 1);
        renderTimeTable(thisMonth);
      }
    });

    // ???????????? ??????
    $('.go-next').on('click', function() {
      if ($('.cal_wrap').length) {
        thisMonth = new Date(currentYear, currentMonth + 1, 1);
        renderCalender(thisMonth);
      } else if ($('.time_wrap').length) {
        thisMonth = new Date(currentYear, currentMonth + 1, 1);
        renderTimeTable(thisMonth);
      }
    });


    // ?????????(????????????) ???????????? ?????? ?????? ?????????
    let startPoint = 0,
        endPoint = 0;
    let vStartPoint = 0,
        vEndPoint = 0;
    var calBoard = undefined,
        detectCal = 0;

    if ($('.cal_wrap, .scheduel_wrap').length) {
      detectCal = 80; // ???????????? ?????? ?????? (???????????? ???????????? ?????? ?????? ???)
      calBoard = document.querySelector('.dates');
    } else if ($('.time_wrap').length) {
      calBoard = document.querySelector('.time_wrap');
    }
    
    if($('.calendar').length){
      // ????????? ?????? ????????? (????????????)
      calBoard.addEventListener("touchstart", (e) => {
        startPoint = e.touches[0].pageX; // ????????? ???????????? ?????? ??????
        vStartPoint = e.touches[0].pageY;
      });
      calBoard.addEventListener("touchend", (e) => {
        endPoint = e.changedTouches[0].pageX; // ????????? ????????? ?????? ??????
        vEndPoint = e.changedTouches[0].pageY;

        // ??????????????? ???????????? ??? ?????? (prev move)
        if (startPoint < endPoint - detectCal && vStartPoint < vEndPoint + 40 && vStartPoint + 40 > vEndPoint ) {
          // ??????????????????
          if ($('.cal_wrap').length) {
            thisMonth = new Date(currentYear, currentMonth - 1, 1);
            renderCalender(thisMonth);

          
          }

        // ???????????? ???????????? ??? ?????? (next move)
        } else if (startPoint > endPoint + detectCal && vStartPoint > vEndPoint - 40 && vStartPoint - 40 < vEndPoint) {
          if ($('.cal_wrap').length) {
            thisMonth = new Date(currentYear, currentMonth + 1, 1);
            renderCalender(thisMonth);

          }
        }
        
      });
    }

  },
};


var eduApply = {
  init: () => {

    //?????? ??????
    var today = $('.time_wrap thead tr .today');
    var idx = $('.time_wrap thead tr td').index(today);

    $('.time_wrap tbody tr').each(function(i){
      $('.time_wrap tbody tr').eq(i).children('td').eq(idx).css({'background':'#fff7f8'});
    });

    $('.time_wrap button[data-type="1"]').on('click', function(){
      $(this).toggleClass('on');
    });

    $('.time_wrap tbody tr .scheduled').on('click', function(){
      $(this).toggleClass('on');
    });

    //??????/?????? ???????????? "??????"??? ?????? ????????? ??????
    var selectType = $(".pop_apply .select_row>select");
    selectChange(selectType);
    function selectChange(type) {
      type.change(function () {
        var select_name = $(this).children("option:selected").text();
        $(this).siblings("label").text(select_name);

        if (select_name === "??????") {
          $(".pop_apply .area_box").show();
        } else {
          $(".pop_apply .area_box").hide();
        }
      });
    }
  },
};



function loginEvent() {
	  var wW = $(window).width();
	  var wH = $(window).height()
	  var boxH = $(".intro_bot").height()+25;
	  var topH = $(window).height()-boxH;
	  $(".intro_box").css("height",topH);

	  if($(".intro_box").height()<=210){
	    $(".intro_bg .logo").addClass("blind");
	    $(".intro_bg .logo02").removeClass("blind");
	  } else {
	    $(".intro_bg .logo02").addClass("blind");
	    $(".intro_bg .logo").removeClass("blind");
	  }
	}

/* POPUP */
function popupOpen(popConts) {
  var popthis = $(".pop_wrap."+popConts);
  popthis.fadeIn(300);
  $(".wrap_sub, .wrap_main").addClass("not_scroll");
  popthis.find(".pop_close").click(function(){
      popthis.fadeOut(300);
      $(".wrap_sub, .wrap_main").removeClass("not_scroll");
  });
}

function popupInfo(popInfo) {
  //??????????????? ?????????
  if(popInfo == "pop_msg"){document.getElementById("message").value='';}
  var popthis = $(".pop_info."+popInfo);
  var mask = $(".pop_mask");
  popthis.css({
    "top":  (($(window).height()-popthis.outerHeight())/2) + $(window).scrollTop()+"px",
    "left": (($(window).width()-popthis.outerWidth())/2+$(window).scrollLeft())+"px",
  });
  popthis.fadeIn(300);
  mask.css("display","block");
  popthis.find(".pop_close").click(function(){
      popthis.fadeOut(300);
      mask.css("display","none");
  });
}


function popupInfoSmart(popInfo) {
	  var popthis = $(".pop_info."+popInfo);
	  var mask = $(".pop_mask_smart");
	  popthis.css({
	    "top":  (($(window).height()-popthis.outerHeight())/2) + $(window).scrollTop()+"px",
	    "left": (($(window).width()-popthis.outerWidth())/2+$(window).scrollLeft())+"px",
	  });
	  popthis.fadeIn(300);
	  mask.css("display","block");
	  popthis.find(".pop_close").click(function(){
	      popthis.fadeOut(300);
	      mask.css("display","none");
	  });
	}


/*
function popupInfo2(popInfo) {
	  var popthis = $(".pop_info."+popInfo);
	  var mask = $(".pop_mask2");
	  alert("222");
	  popthis.css({
	    "top":  (($(window).height()-popthis.outerHeight())/2) + $(window).scrollTop()+"px",
	    "left": (($(window).width()-popthis.outerWidth())/2+$(window).scrollLeft())+"px",
	  });
	  popthis.fadeIn(300);
	  mask.css("display","block");
	  popthis.find(".pop_close").click(function(){
	      popthis.fadeOut(300);
	      mask.css("display","none");
	  });
	}
*/

function popupLevel() {
  var popthis = $(".pop_level");
  var mask = $(".pop_mask");
  popthis.css({
	  "top":  (($(window).height()-popthis.outerHeight())/2) + $(window).scrollTop()+"px",
	  "left": (($(window).width()-popthis.outerWidth())/2+$(window).scrollLeft())+"px",
  });
  popthis.fadeIn(300);
  $(".wrap_sub").addClass("not_scroll");
  mask.css("display","block");
  popthis.find(".pop_close").click(function(){
      popthis.fadeOut(300);
      mask.css("display","none");
      $(".wrap_sub").removeClass("not_scroll");
  });
}

function popupBadge(popBadge) {
	  var popthis = $(".pop_badge."+popBadge);
	  var mask = $(".pop_mask");
	  popthis.css({
	      "top":  (($(window).height()-popthis.outerHeight())/2)+"px",
	      "left": (($(window).width()-popthis.outerWidth())/2+$(window).scrollLeft())+"px",
	  });
	  popthis.fadeIn(300);
	  popthis.addClass("on");
	  mask.css("display","block");
	  popthis.find(".pop_close").click(function(){
	      popthis.fadeOut(300);
	      popthis.removeClass("on");
	      mask.css("display","none");
	      if($(".pop_badge").hasClass("on")) {
	        $(".pop_mask").css("display","block");
	      }
	  });
	}

function popupSearch() {
	  var popthis = $(".search_box");
	  var mask = $(".pop_mask");
/*	  popthis.css({
    "top":  (winH/2-popthis.outerHeight()/2)+"px",
	  });*/
	  popthis.fadeIn(300);
	  mask.css("display","block");
	  popthis.find(".pop_close").click(function(){
	      popthis.fadeOut(300);
	      mask.css("display","none");
	  });
	}

function popupHeight() {
  console.log($('.height_measurement').offset().top);
	  var popthis = $(".popup_height");
	  var mask = $(".pop_mask");
	  popthis.css({
    "top":  ($('.height_measurement').offset().top-175)+"px",
	  });
	  popthis.fadeIn(300);
	  mask.css("display","block");
	  popthis.find(".pop_close").click(function(){
	      popthis.fadeOut(300);
	      mask.css("display","none");
	  });
	}

//function addrpop() {
//	  var popbox = $(".addrBox>div");
//	  popbox.css({
//	    "top":  (($(window).height()-popbox.outerHeight())/2) + $(window).scrollTop()+"px",
//	    "left": (($(window).width()-popbox.outerWidth())/2+$(window).scrollLeft())+"px",
//	  });
//	}

//?????? ????????????(2022-02-09 4m ?????????)
 function fnDeleteChildData(){
	 	var delname = $("#delname").val();
		var result = confirm("?????? ????????? ?????? ???????????? ?????????. ?????????????????????????");
	    if(result){
	    	var result2 = confirm(delname+" ????????? ????????? ?????? ???????????? ?????????. ?????????????????????????");
	    	 if(result2){
    			document.frmJoin.action = "/child/deleteEachChildInfo.do";
	 			document.frmJoin.submit();
	 	    }

	    }


}

 
 function popupInfo2(popInfo) {
	  var popthis = $(".pop_info."+popInfo);
	  var mask = $(".pop_mask2");
	  /* 2022.12.01 (1)?????? ?????? ????????? css ????????? ?????? */
	  adjustPopupCont();
	  
	  /* 2022.12.01 (2)?????? ?????? ????????? ???????????? ?????? */
	  $(window).on('load resize', ()=> {
		  adjustPopupCont()
	  })
	  
	  popthis.fadeIn(300);
	  mask.css("display","block");
	  popthis.find(".pop_close").click(function(){
	      popthis.fadeOut(300);
	      mask.css("display","none");
	  });
	  
	  /* 2022.12.01 (1)?????? ?????? ????????? css ????????? */
	  function adjustPopupCont() {
		  popthis.css({
		    "top":  (($(window).height()-popthis.outerHeight())/2.1) + $(window).scrollTop()+"px",
		    "left": (($(window).width()-popthis.outerWidth())/2+$(window).scrollLeft())+"px",
		  });
	  }
	}

 
 
 function fnCheerInsert(){
	 let message = $("#message").val();
		 if(message.trim() == ""){
			 alert("???????????? ????????????");
			 $("#message").focus();
			 return;
		 }
		 var cheerData = { "message": message };
		 
		 $.ajax({
				type : "POST",
				url: "/cheer/insertProc.do",
				 data : cheerData,
				datatype : "json",
				success : function(json) {
					if (json.result == 2){
						alert("????????? ??? ?????? ????????? ?????????????????????.");
						$("#message").val("");
						$("#message").focus();
						return;
					} else 	if (json.result == 1){
						alert("??????????????? ?????????????????????.");
						location.href = "/child/main.do";
					} 
					
					else {
						alert("?????? ???????????????. ?????? ??? ?????? ??????????????????.");
					}
				},
				error : function(xhr, status, error) {
					alert('ajax error' + error);
				}
		   	});
	 }


 
 function fnCheerClose(){
 	var popthis = $(".pop_msg");
 	$(".pop_mask").css("display","none");
     popthis.css("display","none");
     popthis.removeClass("on");
 }


 function cheerRefresh() {
	     var cheerIdx = { "idx": $("#cheerIdx").val()};
	     var cheerArrays  =  Number($("#cheerArrays").val());
	     if(cheerArrays < 1){
	    	 $.ajax({
					type : "POST",
				    data : cheerIdx,
					url: "/cheer/newCheerMessage.do",
					datatype : "json",
					success : function(json) {
						if (json.result > 0) {
							//console.log("????????? ?????? ??????");
							cheerList = json.cheerInfo;
							$("#cheerArrays").val("10");
							cheerArrays = 10;
							  document.getElementById("cheer_mesage").innerHTML = "";
								if(Number(fnCheckByte(cheerList[cheerArrays-1].message)) > 30){
									document.getElementById("cheer_mesage").innerHTML = "<span>@"+cheerList[cheerArrays-1].name+"&nbsp;&nbsp;</span>"+"<marquee scrollamount='10' id='cm'>"+cheerList[cheerArrays-1].message+"</marquee>";
								} else {
									document.getElementById("cheer_mesage").innerHTML = "<span>@"+cheerList[cheerArrays-1].name+"&nbsp;&nbsp;</span>"+cheerList[cheerArrays-1].message;
								}
						
								
								
								let cCharacterId =  cheerList[cheerArrays-1].cCharacterId;
								let cCharacterLevel =   cheerList[cheerArrays-1].cCharacterLevel;
								var imgurl;
								imgur = "/resource/assets/web/child/images/profile/img_profile_"+cCharacterId+"eudi_"+cCharacterLevel+".png";
								document.getElementById("cheer_img").src = imgur;
								$("#cheerIdx").val(cheerList[cheerArrays-1].idx);
								
								 cheerArrays = cheerArrays - 1;
					    	     $("#cheerArrays").val(cheerArrays);
						}
					},
					error : function(xhr, status, error) {
						//alert('ajax error' + error);
					}
			   	});
	     } else {//?????? ????????? ????????? ??? 
	    		//console.log("?????? ????????? ????????? ??? ");
	    	   document.getElementById("cheer_mesage").innerHTML = "";
				if(Number(fnCheckByte(cheerList[cheerArrays-1].message)) > 30){
					document.getElementById("cheer_mesage").innerHTML = "<span>@"+cheerList[cheerArrays-1].name+"&nbsp;&nbsp;</span>"+"<marquee scrollamount='10' id='cm'>"+cheerList[cheerArrays-1].message+"</marquee>";
				} else {
					document.getElementById("cheer_mesage").innerHTML = "<span>@"+cheerList[cheerArrays-1].name+"&nbsp;&nbsp;</span>"+cheerList[cheerArrays-1].message;
				}
		
				
				
				let cCharacterId =  cheerList[cheerArrays-1].cCharacterId;
				let cCharacterLevel =   cheerList[cheerArrays-1].cCharacterLevel;
				var imgurl;
				imgur = "/resource/assets/web/child/images/profile/img_profile_"+cCharacterId+"eudi_"+cCharacterLevel+".png";
				document.getElementById("cheer_img").src = imgur;
				$("#cheerIdx").val(cheerList[cheerArrays-1].idx);
				
				 cheerArrays = cheerArrays - 1;
	    	     $("#cheerArrays").val(cheerArrays);
	     }
	
		 
		 
	}

 function fnCheckByte(msg){

	 var str = msg
	 var str_len = str.length;
	 
	 var rbyte = 0;
	 var rlen = 0;
	 var one_char = "";
	 
	 for(var i=0; i<str_len; i++){
	 	one_char = str.charAt(i);
	 	if(escape(one_char).length > 4){
	 	    rbyte += 3;                                         //??????3Byte
	 	}else{
	 	    rbyte++;                                            //?????? ??? ????????? 1Byte
	 	}
	 }
	
	 return rbyte;

 }

