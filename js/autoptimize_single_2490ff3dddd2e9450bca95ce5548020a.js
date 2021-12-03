if(typeof jQuery!="undefined"){var $=jQuery.noConflict();}
function ncPopupTips(type,msg){var c=type?"success":"error";var html='<div class="nice-popup nice-popup-sm nice-popup-error '+
c+'">'+'<div class="nice-popup-body">'+'<div class="nice-popup-content">'+
msg+"</div>"+"</div>"+"</div>";var tips=$(html);$("body").append(tips);setTimeout(function(){tips.addClass("nice-popup-open");},300);if(typeof lazyLoadInstance!=="undefined"){lazyLoadInstance.update();}
setTimeout(function(){tips.removeClass("nice-popup-open");setTimeout(function(){setTimeout(function(){tips.remove();},300);},600);},1200);}
function ncPopup(type,html,maskStyle,btnCallBack){var maskStyle=maskStyle?'style="'+maskStyle+'"':"";var size="";if(type=="big"){size="nice-popup-lg";}else if(type=="no-padding"){size="nice-popup-nopd";}else if(type=="cover"){size="nice-popup-cover nice-popup-nopd";}else if(type=="full"){size="nice-popup-xl";}else if(type=="scroll"){size="nice-popup-scroll";}else if(type=="middle"){size="nice-popup-md";}else if(type=="small"){size="nice-popup-sm";}
var template='\
 <div class="nice-popup '+
size+'">\
  <div class="nice-popup-overlay" '+
maskStyle+'></div>\
  <div class="nice-popup-body">\
   <div class="nice-popup-close">\
    <span class="svg-white"></span>\
    <span class="svg-dark"></span>\
   </div>\
   <div class="nice-popup-content">\
    '+
html+"\
   </div>\
  </div>\
 </div>\
 ";var popup=$(template);$("body").append(popup);$("body").addClass("modal-open");setTimeout(function(){popup.addClass("nice-popup-open");},300);if(typeof lazyLoadInstance!=="undefined"){lazyLoadInstance.update();}
var close=function(){$("body").removeClass("modal-open");$(popup).removeClass("nice-popup-open");setTimeout(function(){setTimeout(function(){popup.remove();},300);},600);};$(popup).on("click touchstart",".nice-popup-close, .nice-popup-overlay",function(event){event.preventDefault();close();});if(typeof btnCallBack=="object"){Object.keys(btnCallBack).forEach(function(key){$(popup).on("click touchstart",key,function(event){var ret=btnCallBack[key](event,close);});});}
return popup;}
$(document).ready(function(){$(".post-video .wp-video").attr("style","");$(".post-video video").attr("width","100%");$(".post-video video").attr("height",null);if(typeof globals!=="undefined"&&globals.comment_ip==="1"){$(".author-ip").each(function(){var ip=$(this).data("ip")+"";var that=this;if(ip.split(".").length!==4)return;$.ajax({url:"https://ip-delta.vercel.app/"+ip,}).done(function(location){if(location&&location.length&&location.length>2){$(that).text(location[1]+" "+location[2]);}});});}});