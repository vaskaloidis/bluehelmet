function submitForm(){var e=$("#name").val(),t=$("#email").val(),o=$("#msg_subject").val(),a=$("#message").val();$.ajax({type:"POST",url:"php/contact.php",data:"name="+e+"&email="+t+"&msg_subject="+o+"&message="+a,success:function(e){"success"==e?formSuccess():(formError(),submitMSG(!1,e))}})}function formSuccess(){$("#contactForm")[0].reset(),submitMSG(!0,"Message Submitted!")}function formError(){$("#contactForm").removeClass().addClass("shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass()})}function submitMSG(e,t){if(e)var o="h4 text-success";else var o="h4 text-danger";$("#msgSubmit").removeClass().addClass(o).text(t)}function scrollToID(e,t){var o=69,a=$(e).offset().top-o;$("html,body").animate({scrollTop:a},t)}function triggerReveals(){sr.reveal(".bottomReveal",{origin:"bottom"}).reveal(".leftReveal",{origin:"left"}).reveal(".rightReveal",{origin:"right"}).reveal(".topReveal",{origin:"top"}),sr.reveal(".rotateBottomReveal",{origin:"bottom",rotate:{x:90}}).reveal(".rotateLeftReveal",{origin:"left",rotate:{x:90}}).reveal(".rotateRightReveal",{origin:"right",rotate:{x:90}}).reveal(".rotateTopReveal",{origin:"top",rotate:{x:90}}),sr.reveal(".scaleReveal",{origin:"top",scale:.6})}$("#thework").mixItUp({animation:{duration:1e3}}),$(".process-box").hover(function(){$(this).find(".process-intro").hide(),$(this).find(".process-content").fadeIn()},function(){$(this).find(".process-content").hide(),$(this).find(".process-intro").fadeIn()}),$("#contactForm").validator().on("submit",function(e){e.isDefaultPrevented()?(formError(),submitMSG(!1,"Did you fill in the form properly?")):(e.preventDefault(),submitForm())}),$("#work").magnificPopup({delegate:"a.zoom",type:"image",fixedContentPos:!1,removalDelay:300,mainClass:"mfp-fade",gallery:{enabled:!0,preload:[0,2]}}),$(".popup-img").magnificPopup({type:"image",removalDelay:300,mainClass:"mfp-fade"}),$(document).ready(function(){$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})}),$(document).ready(function(){$(".scroll-link").on("click",function(e){e.preventDefault(),scrollToID("#"+$(this).attr("data-id"),750)}),$(".scroll-top").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},1200)})}),"undefined"==typeof sr&&(window.sr=ScrollReveal({duration:1500,delay:50})),Royal_Preloader.config({onComplete:function(){triggerReveals()}}),$(document).on("click",".navbar-collapse.in",function(e){$(e.target).is("a")&&"dropdown-toggle"!=$(e.target).attr("class")&&$(this).collapse("hide")});var current=1,height=jQuery(".ticker").height(),numberDivs=jQuery(".ticker").children().length,first=jQuery(".ticker h1:nth-child(1)");setInterval(function(){var e=current*-height;first.css("margin-top",e+"px"),current===numberDivs?(first.css("margin-top","0px"),current=1):current++},2500);