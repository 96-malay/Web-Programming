var googletag;if(typeof DMAds=="undefined"){var SendDmAdUid=!1,SendSearchTermsToServer=!0,CodeProjectPublisherId="lqm.codeproject.site",EnableMutableAds=!0,EnableViewOnScroll=!0,adServer=adServer||window.location.protocol+"//ads.DeveloperMedia.com/",SearchTermUrl="https://apps.developermedia.com/Ads/PageTerms/GetTerms",AdClickUrl="https://apps.developermedia.com/Ads/PageTerms/LogClick",DownvoteUrl="https://apps.developermedia.com/Ads/AdVote/DownvoteByFingerprint",UndoDownvoteUrl="https://apps.developermedia.com/Ads/AdVote/UndoDownvote",ReportAdUrl="https://apps.developermedia.com/Ads/AdVote/ReportAd",GlobalIdUrl="https://apps.developermedia.com/Ads/GlobalUserIdentification/",CloseAdImageUrl="https://cdn1.developermedia.com/Content/images/undo.png",UndoCloseAdImageUrl="https://cdn1.developermedia.com/Content/images/redo.png",DmLogoImageUrl="https://cdn1.developermedia.com/Content/images/dm-logo-150x23.png",PIIViolatingUrls=["http://www.aspsnippets.com/handlers/comments.ashx","codeproject.com/script/membership/sendpassword.aspx","http://www.dailyfreecode.com/userlogin.aspx","codeproject.com/script/membership/modify.aspx","dotnetspider.com/account/login.aspx","codeproject.com/script/membership/logon.aspx"];String.prototype.includes||(String.prototype.includes=function(n,t){"use strict";return(typeof t!="number"&&(t=0),t+n.length>this.length)?!1:this.indexOf(n,t)!==-1});var DMAdXHelper=function(){var n=[],t={},s=!1,r=!1,v=0,f=null,y=function(n){try{var i=p(n),t=w(n),r=b(n);t.insertBefore(r,t.children[0]);n.closeAdButton=i;n.reportAdDiv=t;n.adContainer.appendChild(i);n.adContainer.parentNode.appendChild(t);n.reportButton=t.getElementsByClassName("reportButton")[0];n.reportButton.disabled=!0;n.reportButton.onclick=function(){return l(n),!1}}catch(u){console.log(u)}},p=function(n){var i=document.createElement("input");return i.type="image",i.src=t.CloseAdImageUrl,i.title="Report Ad",i.align="left",i.style.cssText="z-index:1000; position:relative; left:0px; top:-"+n.height+"px; margin-top: 0px; margin-left: 0px; display:block; font-size:0px; border: 0px; padding: 0px; height:14px; width:14px",i.onclick=n.width===125&&n.height===125?function(){return c(n),l(n),!1}:function(){return c(n),!1},i},w=function(n){var t=n.width,i=n.height,r=document.createElement("div"),u="<select class='reportReason' style='max-width:150px !important; padding: 0px !important'><option>Offensive<\/option><option>Abusive<\/option><option>Off topic<\/option><option>Don't like the Ad<\/option > <option>Wrong language<\/option><\/select > ",f="<input type='button' disabled class='reportButton' style='padding: 0px !important' value='Report'><\/input>";return t===728&&i===90?k(r,u,f):t===300&&i===250?d(r,u,f):t===160&&i===600?g(r,u,f):t===125&&i===125&&nt(r),(t===728&&i===90||t===300&&i===250||t===160&&i===600)&&tt(n,r),r},b=function(n){var i=document.createElement("input");return i.type="image",i.src=t.UndoCloseAdImageUrl,i.title="Show Ad",i.style.cssText="z-index:1000; position:relative; left:0px; top:0px; width:14px; height:14px;margin-top: 0px; margin-left: 0px; font-size:0px; display:block; padding: 0px; border: 0px",i.onclick=function(){return h(n),!1},i},k=function(n,i,r){n.innerHTML="<div class='sendReportContainer' style='padding-left: 2px; display:block; line-height:initial !important'><div style='display:inline-block; font:14px/18px \"Segoe UI\", Arial'><b>Don't like this Ad?<\/b><\/div><div class='dropzone' contenteditable='true' style='margin-left:10px; height:60px; width: 250px; background-color:lightgray; border-style:dotted; border-color:black; border-radius: 5px; border-width: 2px; text-align: center; display:inline-block; white-space:normal'>1. Hit the refresh icon to show the ad again and take a screenshot. 2. Drag and Drop or paste the screenshot here<\/div><div style='margin-left:10px; display:inline-block; font:14px/18px \"Segoe UI\", Arial;'> "+i+"&nbsp;"+r+"<\/div><\/div><div class='reportSentContainer' style='display:none; padding: 15px 20px; font:14px/18px \"Segoe UI\", Arial;'><span style='color:#999'>Thank you for the report!<\/span><\/div><a href='http://www.developermedia.com/' target='_blank'><img src='"+t.DmLogoImageUrl+"' style='max-width:100%;position:absolute; right:10px; top:10px;'><\/a>";n.style.cssText="display:none; width:728px; height:90px; z-index:100; text-align:left;border-style:solid; border-width:1px; position:relative; background-color:white;box-sizing:border-box; top:0px; left:0px"},d=function(n,i,r){n.innerHTML="<div class='sendReportContainer' style='padding: 5px 5px; display:block; line-height:initial !important'><div style='padding-bottom:5px; font:14px/18px \"Segoe UI\", Arial;'><b>Don't like this Ad?<\/b><\/div><div class='dropzone' contenteditable='true' style='height:100px; width: 290px; margin-top:20px; margin-bottom: 20px; background-color:lightgray; border-style:dotted; border-color:black; border-radius: 5px; border-width: 2px; text-align: center; box-sizing:border-box; white-space:normal'>1. Hit the refresh icon to show the ad again so you can take a screenshot <br/>2. Drag and Drop or paste the screenshot here<\/div><div style='margin-top:5px; font:14px/18px \"Segoe UI\", Arial; '> "+i+"<\/div><div style='margin-top:5px; display:block; font:14px/18px \"Segoe UI\", Arial;'>"+r+"<\/div><\/div><div class='reportSentContainer' style='display:none; padding: 15px 20px; font:14px/18px \"Segoe UI\", Arial; '><span style='color:#999;'>Thank you for the report!<\/span><\/div><a href='http://www.developermedia.com/' target='_blank'><img src='"+t.DmLogoImageUrl+"' style='max-width:100%;position:absolute; right:20px; bottom:10px;'><\/a>";n.style.cssText="display:none; width:300px; height:250px; z-index:100; text-align:left;border-style:solid; border-width:1px; position:relative; background-color:white;box-sizing:border-box; top:0px; left:0px"},g=function(n,i,r){n.innerHTML="<div class='sendReportContainer' style='padding: 20px 15px; display:block; line-height:initial !important'><div style='padding-bottom:20px; display:block; font:14px/18px \"Segoe UI\", Arial;'><b>Don't like this Ad?<\/b><\/div><div class='dropzone' contenteditable='true' style='height:180px; width: 130px; margin-top:20px; margin-bottom: 20px; background-color:lightgray; border-style:dotted; border-color:black; border-radius: 5px; border-width: 2px; text-align: center; box-sizing:border-box; white-space:normal'>1. Hit the refresh icon to show the ad again so you can take a screenshot <br/><br/>2. Drag and Drop or paste the screenshot here<\/div><div style='padding-bottom:10px; padding-top: 10px display:block; font:14px/18px \"Segoe UI\", Arial;'> "+i+"<\/div><div style='font:14px/18px \"Segoe UI\", Arial;'>"+r+"<\/div><\/div><div class='reportSentContainer' style='display:none; padding: 15px 20px; font:14px/18px \"Segoe UI\", Arial;'><span style='color:#999;'>Thank you for the report!<\/span><\/div><a href='http://www.developermedia.com/' target='_blank'><img src='"+t.DmLogoImageUrl+"' style='max-width:120px;position:absolute; right:20px; bottom:20px;'><\/a>";n.style.cssText="display:none; width:160px; height:600px; z-index:100; text-align:left;border-style:solid; border-width:1px; position:relative; background-color:white;box-sizing:border-box; top:0px; left:0px"},nt=function(n){n.innerHTML="<div class='reportSentContainer' style='padding: 5px 5px;font:14px/18px \"Segoe UI\", Arial; width: 100px; height: 100px'><span style='color:#999;'>Thank you for the report!<\/span><\/div>";n.style.cssText="display:none; width:125px; height:125px; z-index:100; text-align:left;border-style:solid; border-width:1px; position:relative; background-color:white;box-sizing:border-box; top:0px; left:0px"},tt=function(n,t){if(n&&n.adContainer){var i=t.getElementsByClassName("dropzone")[0];i.dropzoneFor=n.adContainer.id;n.dropzone=i;s&&(i.ondragenter=function(n){n.currentTarget.style.backgroundColor="yellow";n.currentTarget.innerHTML="<br/><br/>Drag and Drop the ad here"},i.ondragleave=function(n){n.currentTarget.style.backgroundColor="lightgray";u(n.currentTarget.dropzoneFor)},i.ondragover=function(n){n.stopPropagation();n.preventDefault();n.currentTarget.style.backgroundColor="yellow"},i.ondrop=function(n){n.currentTarget.style.backgroundColor="lightgreen";rt(n)});r?f?f.observe(i,{childList:!0}):i.addEventListener("DOMSubtreeModified",function(){a(i)}):i.addEventListener("paste",it,!1)}},h=function(n){n.reportAdDiv.style.display==="none"?(n.reportAdDiv.style.display="table",n.closeAdButton.style.display="none",n.adContainer.style.display="none",n.dropzone.focus()):(n.reportAdDiv.style.display="none",n.closeAdButton.style.display="block",n.adContainer.style.display="block")},e=function(n){var t=i(n),r=t.dropzone;r.style.backgroundColor="lightgreen";r.innerHTML=t.width===160&&t.height===600?"<br/> Your screenshot has been received – thanks! <br/><br/> Next step: What’s wrong with the ad":t.width===300&&t.height===250?"<br/> Your screenshot has been received – thanks! <br/><br/> Next step: What’s wrong with the ad":t.width===728&&t.height===90?"Your screenshot has been received – thanks! Next step: What’s wrong with the ad":"Ad info received. Press Report to submit"},o=function(n){var t=i(n);t&&(t.reportButton.disabled=!1)},u=function(n){var t=i(n);t&&(t.reportButton.disabled=!0)},c=function(n){h(n)},l=function(n){var r=n.reportAdDiv.getElementsByClassName("reportReason")[0],s=r&&r.options[r.selectedIndex].value||"Unspecified",u=n.reportAdDiv.getElementsByClassName("sendReportContainer")[0],f=n.reportAdDiv.getElementsByClassName("reportSentContainer")[0];u&&(u.style.display="none");f&&(f.style.display="block");try{var e=new XMLHttpRequest,i=new FormData,h=DMUserIdentityHelper&&DMUserIdentityHelper.getGlobalUserId()||0,o=null;n.fileList&&n.fileList.length>0&&(o=n.fileList[0]);e.open("POST",t.DownvoteUrl,!0);i.append("adScreenshot",o);i.append("reason",s);i.append("DmGlobalUserId",h);e.send(i)}catch(c){console.log(c)}},it=function(n){var t,h,l,s,c,a,f,v;if(!r){if(n.preventDefault(),t=[],h=!1,window.clipboardData)t=window.clipboardData.files,h=!0;else if((n.clipboardData||n.originalEvent.clipboardData)&&(l=n.clipboardData||n.originalEvent.clipboardData,s=l&&l.items||[],t=[],s&&s.length>0))for(h=!0,c=0;c<s.length;c++)a=s[c],a.kind==="file"&&(t[t.length]=a.getAsFile());f=n.currentTarget.dropzoneFor;t&&t.length>0?(v=i(f),v&&(v.fileList=t),o(f),e(f)):h?(n.currentTarget.innerHTML="<br/><br/> No files found on clipboard <br/>",u(f)):(n.currentTarget.innerHTML="<br/><br/> Paste not supported on your browser <br/>",u(f))}},rt=function(n){var f,r,t;if(n.stopPropagation(),n.preventDefault(),f=i(n.currentTarget.dropzoneFor),r=[],n.dataTransfer.files&&n.dataTransfer.files.length>0)for(t=0;t<n.dataTransfer.files.length;t++)n.dataTransfer.files[t].type&&n.dataTransfer.files[t].type.indexOf("image")>=0&&(r[r.length]=n.dataTransfer.files[t]);r.length>0?(f&&(f.fileList=r),e(n.currentTarget.dropzoneFor),o(n.currentTarget.dropzoneFor)):(n.currentTarget.style.backgroundColor="yellow",n.currentTarget.innerHTML="<br/><br/>The dropped item was not an image",u(n.currentTarget.dropzoneFor))},a=function(n){for(var t,i=0;i<n.children.length;i++)t=n.children[i],t.nodeName.toLowerCase()==="img"&&t.style.display!=="none"&&t.src&&(t.style.display="none",ut(t.src,n))},ut=function(n,t){if(n){var f=n.indexOf(","),r=n.substring(0,f),h=r.indexOf(":"),c=r.indexOf(";"),l=r.substring(h+1,c),a=n.substring(f+1),v=ot(a,l,512),u=t.dropzoneFor,s=i(u);s&&(s.fileList=[v]);e(u);o(u)}},ft=function(){var n=document.createElement("div");return"draggable"in n||"ondragstart"in n&&"ondrop"in n},et=function(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1},i=function(t){for(var i=0,r=n.length;i<r;i++)if(n[i]&&n[i].adContainer&&n[i].adContainer.id===t)return n[i];return null},ot=function(n,t,i){var e,o,r,f,s,u,h;for(t=t||"",i=i||512,e=atob(n),o=[],r=0;r<e.length;r+=i){for(f=e.slice(r,r+i),s=new Array(f.length),u=0;u<f.length;u++)s[u]=f.charCodeAt(u);h=new Uint8Array(s);o.push(h)}return new Blob(o,{type:t})};return{appendAd:function(t){n.push(t)},init:function(i,u){n=i;t=u;s=ft();r=et();r&&window.MutationObserver&&(f=new MutationObserver(function(n){n.forEach(function(n){a(n.target)})}))},showAdReportingInterface:function(n){var t=i(n);t&&y(t)},setGlobalUserId:function(n){v=n}}}(),DMUserIdentityHelper=function(){var r,t,u="dmaduid",f="dmaduid_confirm",e,o,i=[],n=0,l=function(){return SendDmAdUid?navigator.cookieEnabled!==void 0?navigator.cookieEnabled:(document.cookie="testcookie=test; max-age=10000",document.cookie.indexOf("testcookie=test")>=0):!1},a=function(){var t=document.location.hostname,n=/([^.]+\.[^.]{3,})$/i.exec(t);return n?n[1]:(n=/([^.]+\.[^.]+\.[^.]{2})$/i.exec(t),n!==null?n[1]:t)},s=function(n,t,i,r,u,f){var e="",o;e=n+"="+t;i>0&&(o=new Date,o.setTime(o.getTime()+i*864e5))&&(e+="; expires="+o.toGMTString());r&&(e+="; path="+r);u&&u.indexOf(".")!==-1&&(e+="; domain="+u);f&&(e+="; secure");document.cookie=e},h=function(n){var r=document.cookie,u=null,t,i;if(r!=="")for(t=r.split(";"),index=0;index<t.length;index++)if(i=t[index].replace(/^\s+/,""),i.substring(0,n.length+1)===n+"="){u=i.substring(n.length+1);break}return u},v=function(n){var t=document.createElement("IFRAME");return t.width=1,t.height=1,t.src=e,t.id="DMGlobalUserIdetifierIFRAME",t.name="DMGlobalUserIdetifierIFRAME",t.style.display="none",document.body.appendChild(t),t.onload=n,t},y=function(){var i,l,n,a,e;if(r)if(i=h(u),l=h(f),!l&&JSON){if(n={},n.sender=location.href,n.Id=Math.random(),a=function(){o.contentWindow.postMessage(JSON.stringify(n),GlobalIdUrl)},e=function(i){var r=null,e;try{r=JSON.parse(i.data)}catch(o){}r&&r.Id&&r.Id===n.Id&&(e=r.DmGlobalUserId,s(u,e,365,"/",t,!1),s(f,r.DmGlobalUserConfirmResponse,365,"/",t,!1),c(e))},window.addEventListener)window.addEventListener("message",e,!1);else try{window.attachEvent("message",e)}catch(y){}o=v(a)}else i&&c(i)},c=function(t){for(n=t;i.length>0;){var r=i.pop();typeof r=="function"&&r()}};return{init:function(n){e=n;r=l();t=a();y()},getGlobalUserId:function(t){return n!==0?n:t?(i.push(t),n):void 0}}}(),DMAds={SetQueryTerms:function(){function u(n){for(var i,u="",t=0;t<r.length;t++)if(i=r[t],n.indexOf(i.d)>=0){u=i.q;break}return u}function f(n,t){var r=t.toLowerCase().indexOf(n),u,i;return r<0||r+n.length>=t.length?"":(u=t.indexOf("&",r),u<0&&(u=t.length),i=t.substring(r+n.length,u),i=i.replace(/\+/gi," "),i=decodeURIComponent(i),i.replace(/\"/gi,""))}function e(n){if(n===undefined)return"";var t=n.replace(/^\s+|\s+$/gi,"");return t?(t=t.replace(/\bAND\b|\bNOT\b|^NOT\b|\bOR\b|[^A-Z0-9\+\-\#\._\s]+|\b[A-Z0-9]+:/gi," "),t.replace(/\s+/g," ")):""}var r=[{d:"www.google.",q:"q="},{d:"www.bing.com",q:"q="},{d:"search.live.com",q:"q="},{d:"search.yahoo.com",q:"p="},{d:"codeproject.com",q:"q="},{d:"msdn.microsoft.com",q:"query="},{d:"www.ask.com",q:"q="},{d:"yandex.com",q:"text="},{d:"yandex.ru",q:"text="},{d:"www.baidu.com",q:"wd="},{d:"localhost",q:"q="},{d:"mkyong.com",q:"q="},{d:"codeplex.com",q:"query="},{d:"aspsnippets.com",q:"q="},{d:"trirand.com",q:"s="}],i="",n=document.URL,t=u(n);if(t!==""&&(i=e(f(t,n))),i===""){if(n=document.referrer.toLocaleLowerCase(),!n)return"";t=u(n);t!==""&&(i=e(f(t,n)))}DMAds.PageQueryTerms=i},SetPageTagsAndPixels:function(n){var t,i,r,u;if(JSON){if(DMAds.GetTermsCalled){n&&n();return}}else return;DMAds.GetTermsCalled=!0;t=document.URL;t.indexOf("?")>0&&(t=t.substring(0,t.indexOf("?")));try{i=top.document.title}catch(f){i="FAILED TO GET DOCUMENT TITLE"}r={terms:DMAds.PageQueryTerms,title:i,url:t,publisher:DMAds.PublisherCode,DmGlobalUserId:DMUserIdentityHelper&&DMUserIdentityHelper.getGlobalUserId()||0,numberOfAdsOnPage:DMAds.Ads.length};u=function(t){if(t){var i;try{i=JSON.parse(t)}catch(r){}i&&(i.SearchTerms&&(DMAds.PageTags=i.SearchTerms),i.PublisherPageViewGuid&&(DMAds.PublisherPageViewGuid=i.PublisherPageViewGuid),i.aid&&i.aid.length&&i.aid.length>0&&DMAds.InsertAudiencePixels(i.aid))}DMAds.PublisherPageViewGuid||(DMAds.PublisherPageViewGuid=1);n&&n()};DMAds.POSTJson(SearchTermUrl,r,u,!0,500)},InsertAudiencePixels:function(n){var t,i;try{for(t=0,i=n.length;t<i;t++){var r=Math.random()+"",u=r*1e13,f=new Image;f.src="https://pubads.g.doubleclick.net/activity;dc_iu=/6839/DFPAudiencePixel;ord="+u+";dc_seg="+n[t]+"?"}}catch(e){}},GetRandom:function(n,t){for(var u,i="",r=0;r<n;r++)u=Math.floor(Math.random()*t).toString(t).toUpperCase(),i=i+u;return i},POSTJson:function(n,t,i,r,u){var f;if(JSON&&(f=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP"),f)){var s=!1,o=function(n){s||(s=!0,i&&i(n))},e=null;r&&(e=setTimeout(function(){try{f.abort()}catch(n){}o(null)},u));f.onreadystatechange=function(){try{f.readyState===4&&(e&&clearTimeout(e),f.status===200?o(f.responseText):o(null))}catch(n){e&&clearTimeout(e);o(null)}};try{f.open("POST",n,!0);f.setRequestHeader("Content-Type","application/json");f.send(JSON.stringify(t))}catch(h){e&&clearTimeout(e);o(null)}}},SignalSuccess:function(n){window.top&&window.top.postMessage&&setTimeout(function(){window.top.postMessage(n?"DM-enabled":"DM-disabled","*")},1e3)},PageQueryTerms:null,PageTags:null,Tile:1,CurrentDocument:null,PublisherCode:null,PublisherPageViewID:0,PublisherPageViewGuid:null,CreateAdsCalled:!1,GetTermsCalled:!1,Ads:[],GPTRenderingMode:-1,ShowAd:function(n){var t=DMAds.Ads,i;if(n&&(DMAds.GPTRenderingMode!==1||!DMAds.PublisherPageViewGuid))t.push(n),DMAds.GetTermsCalled||(DMAds.PublisherCode=n.sitename,DMAds.SetPageTagsAndPixels(DMAds.ShowAd));else if(DMAds.GPTRenderingMode===1&&DMAds.PublisherPageViewGuid){while(t&&t.length>0)i=t.pop(),DMAds.RequestQueuedAd(i);n&&DMAds.RequestQueuedAd(n)}},InitGPTLibrary:function(){var n=function(){if(typeof googletag.pubadsReady=="undefined"){if(googletag.pubads().enableSingleRequest(),googletag.pubads().disableInitialLoad(),DMAds&&DMAds.Ads&&DMAds.Ads[0]&&DMAds.Ads[0]&&DMAds.Ads[0].cookieConsent!==undefined){var n=DMAds.Ads[0].cookieConsent?1:0;googletag.pubads().setRequestNonPersonalizedAds(n?0:1)}googletag.pubads().enableAsyncRendering();googletag.enableServices();DMAds.GPTRenderingMode=1;googletag.pubads().addEventListener("slotRenderEnded",function(n){DMAds.OnSlotRendered(n)})}else DMAds.GPTRenderingMode=2};googletag.apiReady?n():googletag.cmd.push(function(){n()})},BuildIFrameTag:function(n){var t=document.createElement("IFRAME"),i;return t.allowtransparency=!1,t.id="dm-gpt-iframe-"+n.tile,t.width=n.width,t.height=n.height,t.marginWidth=0,t.marginHeight=0,t.frameBorder=0,t.scrolling="no",i=encodeURIComponent(location.href),i.length<2048&&(t.dc_ref=i),t},BuildInlineGPTTagScript:function(n){var t="div-gpt-ad-"+n.publisher+"-"+n.zone+"-"+n.tile,i="/6839/"+n.publisher+"/"+n.zone,r="["+n.width+", "+n.height+"]",u=(n.tags||"")+","+(DMAds.PageSearchTerms||"")+","+(DMAds.PageQueryTerms||""),f=n.cookieConsent!==undefined,e=n.cookieConsent?1:0,o="<div id='"+t+"'>     <script type='text/javascript'>         if ( "+f+") {            googletag.pubads().setRequestNonPersonalizedAds("+e+" ? 0 : 1);        }        googletag.cmd.push(function() {             googletag.defineSlot('"+i+"', "+r+",'"+t+"')                 .addService(googletag.pubads())                 .setTargeting('kw', '"+u+"');             googletag.enableServices();             googletag.display('"+t+"');         });     <\/script> <\/div>";return"<script type='text/javascript'> var googletag = googletag || {}; googletag.cmd = googletag.cmd || []; (function() {     var gads = document.createElement('script');     gads.async = true;     gads.type = 'text/javascript';     var useSSL = 'https:' == document.location.protocol;     gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';     var node =document.getElementsByTagName('script')[0];     node.parentNode.insertBefore(gads, node); })(); <\/script>"+o},BuildGPTTag:function(n){var t=document.createElement("DIV"),i;t.style.height=n.height+"px";t.style.width=n.width+"px";t.style.boxSizing="border-box";t.style.border="0px";t.style.fontSize="0px";i="div-gpt-ad-"+n.publisher+"/"+n.zone+"-"+n.tile;t.id=i;t.adIndex=n.index;n.theAdDiv.appendChild(t);n.adContainer=t;googletag.cmd.push(function(){var u="/6839/"+n.publisher+"/"+n.zone,r=(n.tags||"")+","+(DMAds.PageSearchTerms||"")+","+(DMAds.PageQueryTerms||""),t;r=DMAds.EscapeSpecialCharacters({tags:r});t=googletag.defineSlot(u,[n.width,n.height],i).setTargeting("kw",r);n.articleid&&n.articleid>0&&t.setTargeting("articleid",n.articleid);t.addService(googletag.pubads());n.collapse_empty&&t.setCollapseEmptyDiv(!0,!0);googletag.display(i);googletag.pubads().refresh([t],{changeCorrelator:!1})})},RequestQueuedAd:function(n){googletag.cmd.push(function(){var r="/6839/"+n.sitename+"/"+n.zonename,i=(n.tags||"")+","+(DMAds.PageSearchTerms||""),t;i=DMAds.EscapeSpecialCharacters({tags:i});t=googletag.defineSlot(r,[n.width,n.height],n.targetDivId).setTargeting("kw",i);n.articleid&&n.articleid>0&&t.setTargeting("articleid",n.articleid);t.addService(googletag.pubads());n.collapse_empty&&t.setCollapseEmptyDiv(!0,!0);googletag.display(n.targetDivId);googletag.pubads().refresh([t],{changeCorrelator:!1})})},BuildInlineGPTTag:function(n){var t=DMAds.BuildIFrameTag(n),i;n.theAdDiv.appendChild(t);i=t.contentDocument||t.contentWindow.document||t.contentWindow.window.document;i.write(DMAds.BuildInlineGPTTagScript(n))},EscapeSpecialCharacters:function(n){var t=n.tags,i;t=t.replace(/\+/gi,"{plus}");t=t.replace(/\#/gi,"{sharp}");t=t.replace(/\./gi,"{dot}");t=t.replace(/[\#\*\.\(\)\+\<\>\[\]]/gi,"");for(var r=t.split(","),u=[];r.length>0;)i=r.shift(),/[^\u0020-\u007f]/.test(i)||u.push(i);return u.join(",")},GetArticleId:function(n){var t=0,i,r;if(n&&n===CodeProjectPublisherId)try{i="Articles";r=window.location.href.indexOf(i);r>=0&&(t=window.location.href.substring(r+i.length+1),t=t.substring(0,t.indexOf("/")),t=parseInt(t),isNaN(t)&&(t=0))}catch(u){t=0}return t},IsPagePIICompliant:function(){var t=!0,i,n,r;try{for(i=window.location.href.toLowerCase(),n=0,r=PIIViolatingUrls.length;n<r&&t;n++)t=!(i.indexOf(PIIViolatingUrls[n])>=0)}catch(u){}return t},OnSlotRendered:function(n){if(window.location.href&&window.location.href.includes("show_creative_id=1")&&n&&n.creativeId&&console.log(n.creativeId),EnableMutableAds&&n&&!n.isEmpty&&(!n.lineItemId||n.lineItemId&&n.lineItemId===0))DMAdXHelper.showAdReportingInterface(n.slot.getSlotElementId());else if(n&&n.isEmpty){var t=document.getElementById(n.slot.getSlotElementId());t.style.width="0px";t.style.height="0px";t.style.display="none"}DMAds.SignalSuccess(!0)},DetermineTagSize:function(n){if(n.format){var t=n.format.split("x");t.length===2&&(n.width=parseInt(t[0]),n.height=parseInt(t[1]))}},AdjustForCodePlex:function(n){n.site&&(n.publisher="lqm.codeplex.site",n.zone=n.charity?"donated2charity":n.site.toLowerCase())},GetElementsByAttr:function(n,t,i,r){var o=[],u,e;i||(i=document);r||(r="*");var f=i.getElementsByTagName(r),s=f.length,h=new RegExp("(^|\\s)"+t+"(\\s|$)");for(u=0,e=0;u<s;u++)h.test(f[u].getAttribute(n))&&(o[e]=f[u],e++);return o},GetElementsByClass:function(n,t,i){var e=[],r,f;t||(t=document);i||(i="*");var u=t.getElementsByTagName(i),o=u.length,s=new RegExp("(^|\\s)"+n+"(\\s|$)");for(r=0,f=0;r<o;r++)s.test(u[r].className)&&(e[f]=u[r],f++);return e},SetAdRequestData:function(){var n=DMAds.GetElementsByAttr("data-type","ad",document,"div"),t;for((n===null||n.length<=0)&&(n=DMAds.GetElementsByClass("lqm_ad",document,"div")),t=0;t<n.length;t++)DMAds.Ads[DMAds.Ads.length]=DMAds.GetDivRequestData(n[t],t)},GetDivRequestData:function(n,t){for(var r,f,u,o=n.attributes,s=o.length,i={},e=0;e<s;e++)r=o.item(e),r.nodeName.indexOf("lqm_")===0&&(f=r.nodeName.slice(4),i[f]=r.value||r.nodeValue),r.nodeName.indexOf("data-")===0&&(f=r.nodeName.slice(5),i[f]=r.value||r.nodeValue);return u={height:0,width:0,publisher:i.publisher,zone:i.zone||"ros",site:i.site,tags:i.tags,sitename:undefined,zonename:undefined,target:"_blank",format:i.format,index:t,tile:t+1,type:i.type,noadx:i.noadx,collapse_empty:i.collapse_empty,displayOverride:i.display||i.loadOnView,sticky:i.sticky,charity:i.charity,cookieConsent:i.cookieconsent,theAdDiv:n},u.tags&&(u.tags=decodeURIComponent(u.tags)),DMAds.DetermineTagSize(u),DMAds.AdjustForCodePlex(u),u.articleid=DMAds.GetArticleId(u.publisher),u}};if(typeof DMAds.CreateAds!="function"&&(DMAds.CreateAds=function(n){var y=this;this.PageRandomNumber=this.GetRandom(32,16);var e=function(n){var t=DMAds.Ads[n];t.rendered=!0;DMAds.GPTRenderingMode===1?DMAds.BuildGPTTag(t):DMAds.BuildInlineGPTTag(t)},l=function(n){var e=DMAds.Ads[n],h=e.theAdDiv,u=!1,i=0,r=0,t,f,o,s;try{t=h.getBoundingClientRect();typeof innerWidth=="number"?(i=window.innerWidth,r=window.innerHeight):document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?(i=document.documentElement.clientWidth,r=document.documentElement.clientHeight):document.body&&(document.body.clientWidth||document.body.clientHeight)&&(i=document.body.clientWidth,r=document.body.clientHeight);f=-200;t.top===t.bottom&&(f+=e.height*-1);o=t.top>=0&&t.top-200<=r||t.top<=0&&t.top>=f;s=i>t.left&&t.right>=0;u=o&&s}catch(c){u=!0}return u},t=function(){for(var t,i=0,n=0;n<DMAds.Ads.length;n++)t=DMAds.Ads[n],!t.rendered&&l(n)&&u(n)&&e(n),t.rendered&&(i++,t.sticky&&!t.stickySettings&&(t.stickySettings=s(t)),c(n));i===DMAds.Ads.length&&clearInterval(f)},o=function(){var n=function(){for(var c,i,r,o,s=EnableViewOnScroll,n=0;n<DMAds.Ads.length;n++)c=DMAds.Ads[n],c.rendered=!1,i=c.displayOverride,i==="onscroll"||i==="true"?s=!0:(i==="always"||i==="false")&&(s=!1),!s&&u(n)&&e(n);if(t(),window.addEventListener)window.addEventListener("resize",function(){t();h()},!1),window.addEventListener("scroll",t,!1);else try{window.attachEvent("onresize",function(){t();h()});window.attachEvent("onscroll",t)}catch(l){}for(a(),r=!1,o=0;o<DMAds.Ads.length&&!r;o++)r=!u(o);r&&(f=setInterval(t,100))};DMAds.GPTRenderingMode===-1?googletag.cmd.push(function(){n()}):n()},a=function(){var n=null;typeof document.hidden!="undefined"?n="visibilitychange":typeof document.mozHidden!="undefined"?n="mozvisibilitychange":typeof document.msHidden!="undefined"?n="msvisibilitychange":typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange");n&&document.addEventListener(n,t,!1)},s=function(n){var u=null,i,t;return n.adContainer&&(i=r(n.adContainer),t={},t.isStickyRequired=n.sticky&&n.sticky==="top",t.absoluteTop=i.y,t.absoluteLeft=i.x,t.absoluteTop!==-1&&(t.originalPosition=n.theAdDiv.style.position,u=t)),u},h=function(){for(i=0;i<DMAds.Ads.length;i++){var n=DMAds.Ads[i];n.stickySettings&&n.adContainer&&(n.adContainer.style.position=n.stickySettings.originalPosition,n.stickySettings=s(n),c(i))}},c=function(n){var t=DMAds.Ads[n].adContainer,i=DMAds.Ads[n].stickySettings,e=DMAds.Ads[n].theAdDiv,u,h,s,c,f,o;i&&i.isStickyRequired&&t.getBoundingClientRect&&document.getElementsByClassName&&(u=document.getElementsByClassName("sticky-stop")[0],u&&(h=r(u),s=u.getBoundingClientRect()),c=r(t),f=t.getBoundingClientRect(),u&&c.y+f.height+Math.abs(f.top)>h.y&&s.top<f.height?o=s.top-f.height+"px":window.pageYOffset+10>=i.absoluteTop&&(o="10px"),o?(t.style.position="fixed",t.style.top=o,t.style.left=i.absoluteLeft-window.pageXOffset+"px",e.clientHeight===0&&(e.style.height=t.clientHeight+"px"),e.clientWidth===0&&(e.style.width=t.clientWidth+"px")):t.style.position=i.originalPosition)},r=function(n){var t={};if(t.x=-1,t.y=-1,n.getBoundingClientRect){var r=n.getBoundingClientRect(),i=document.documentElement,u=window.pageYOffset||i.scrollTop||document.body.scrollTop||0,f=window.pageXOffset||i.scrollLeft||document.body.scrollLeft||0,e=i.clientTop||document.body.clientTop||0,o=i.clientLeft||document.body.clientLeft||0;t.y=r.top+u-e;t.x=r.left+f-o}return t},u=function(n){var t=DMAds.Ads[n].theAdDiv,i=!1,r;return t&&t.style.position!=="fixed"&&t.offsetParent?i=!0:t&&t.style.position==="fixed"&&(r=window.getComputedStyle(t),i=r&&r.display!=="none"),i&&v()},v=function(){var t=!0,n="";return typeof document.hidden!="undefined"?n="hidden":typeof document.mozHidden!="undefined"?n="mozHidden":typeof document.msHidden!="undefined"?n="msHidden":typeof document.webkitHidden!="undefined"&&(n="webkitHidden"),n!==null&&document[n]&&(t=!1),t},f=f||null;n||DMAds.CreateAdsCalled?n&&(DMAds.Ads[DMAds.Ads.length]=DMAds.GetDivRequestData(n,DMAds.Ads.length-1),DMAds.PublisherCode=DMAds.Ads[0].publisher,DMAds.SetPageTagsAndPixels(o)):(DMAds.CreateAdsCalled=!0,DMAds.SetAdRequestData(),DMAds.Ads.length>0&&(DMAds.PublisherCode=DMAds.Ads[0].publisher,DMAds.SetPageTagsAndPixels(o)))}),!window.googletag&&DMAds.IsPagePIICompliant()&&(googletag=googletag||{},googletag.cmd=googletag.cmd||[],function(){var t="https:"===document.location.protocol,n=document.createElement("script");n.async=!0;n.type="text/javascript";n.src=(t?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";document.body.appendChild(n)}()),DMAds.IsPagePIICompliant())if(DMAds.InitGPTLibrary(),DMAds.SetQueryTerms(),DMAdXHelper.init(DMAds.Ads,{DownvoteUrl:DownvoteUrl,UndoDownvoteUrl:UndoDownvoteUrl,ReportAdUrl:ReportAdUrl,CloseAdImageUrl:CloseAdImageUrl,UndoCloseAdImageUrl:UndoCloseAdImageUrl,DmLogoImageUrl:DmLogoImageUrl}),DMUserIdentityHelper.init(GlobalIdUrl),document.readyState==="complete")DMAds.CreateAds();else if(window.addEventListener)window.addEventListener("DOMContentLoaded",function(){DMAds.CreateAds()},!1),window.addEventListener("load",function(){DMAds.CreateAds()},!1);else try{document.attachEvent("onreadystatechange",function(){DMAds.CreateAds()});window.attachEvent("onload",function(){DMAds.CreateAds()})}catch(e){DMAds.CreateAds()}}