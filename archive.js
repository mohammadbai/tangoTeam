$(document).ready(function(){$(".archive-page").each(function(){var e=$(this);$.ajax({type:"GET",url:"/feeds/posts/default?alt=json-in-script",dataType:"jsonp",success:function(t){for(var a,r="",s="",n=0;n<t.feed.category.length;n++)a=t.feed.category[n].term,s+='<div class="box-qism" data-qism="'+a+'"></div>';s+="",r+=s,e.html(r),$(".box-qism").each(function(){var e=$(this),t=e.attr("data-qism");$.ajax({type:"GET",url:"/feeds/posts/default/-/"+t+"?alt=json-in-script",dataType:"jsonp",success:function(a){for(var r=a.feed.openSearch$totalResults.$t,s='<div class="archive-qism"><b>'+t+'</b><span class="archive-qism-num">'+r+"<u>"+textscript+"</u></span></div>",n="",c=0;c<a.feed.entry.length;c++){for(var i=0;i<a.feed.entry[c].link.length;i++)if("alternate"==a.feed.entry[c].link[i].rel){var l=a.feed.entry[c].link[i].href;break}var d=a.feed.entry[c].title.$t,f=" ";f=f.replace("/s72-c/","/s600/"),a.feed.entry[c].author[0].name.$t;try{a.feed.entry[c].author[0].uri.$t}catch(r){}for(var h=a.feed.entry[c].published.$t,o=[1,2,3,4,5,6,7,8,9,10,11,12],u=textmonth,p=h.split("-")[2].substring(0,2),y=h.split("-")[1],m=h.split("-")[0],v=0;v<o.length;v++)if(parseInt(y)==o[v]){y=u[v];break}h=p+"  "+y+"  "+m;try{f=a.feed.entry[c].media$thumbnail.url.replace("s72-c","w72-h72-p-k-no-nu").replace("default","hqdefault")}catch(r){f=noimg.replace("s1600","w72-h72-p-k-no-nu").replace("default","hqdefault")}try{a.feed.entry[c].category[0].term}catch(r){}try{a.feed.entry[c].author[0].gd$image.src}catch(r){noauthorThumb}a.feed.entry[c].thr$total.$t;a.feed.entry[c].content.$t.replace(/<.+?>/g,"").substring(0,100)+"...",n+='<div class="item"><img class="archive-thumb" src="'+f+'"><span class="archive-date"><i class="fa fa-calendar-times-o"></i>'+h+'</span><a class="archive-href" href="'+l+'">'+d+"</a></div>"}n+="",s+=n,e.html(s)}})})}})})});
