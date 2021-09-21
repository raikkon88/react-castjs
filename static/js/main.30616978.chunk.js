(this["webpackJsonpreact-castjs-example"]=this["webpackJsonpreact-castjs-example"]||[]).push([[0],{17:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);i(9);var n=i(0),r=i.n(n),a=i(4),s=i.n(a),o=i(2),c=i(1),l=i.n(c),u=i(3),h=i(5),d=i(6),m=i(7),v=i.n(m);var p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(h.a)(this,e),t.receiver&&""!==t.receiver||(t.receiver="CC1AD845"),this._events={},this._player=null,this._controller=null,this._mediaSession=null,this.version="v4.1.2",this.receiver=t.receiver,this.joinpolicy=t.joinpolicy,this.available=!1,this.connected=!1,this.device="Chromecast",this.src="",this.title="",this.description="",this.poster="",this.subtitles=[],this.volumeLevel=1,this.muted=!1,this.paused=!1,this.time=0,this.timePretty="00:00:00",this.duration=0,this.durationPretty="00:00:00",this.progress=0,this.state="disconnected",this._init()}return Object(d.a)(e,[{key:"_init",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,i,n,r,a,s,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable){e.next=11;break}return e.prev=1,e.next=4,new Promise((function(e,t){if(window.__onGCastApiAvailable=e,window.chrome&&!window.chrome.cast){var i=document.createElement("script");i.src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1",i.onerror=t,document.head.appendChild(i)}}));case 4:e.next=11;break;case 6:throw e.prev=6,e.t0=e.catch(1),this.trigger("error",e.t0),console.error(e.t0),new Error("Error loading Cast API");case 11:t=cast.framework,i=t.CastContext,n=void 0===i?null:i,r=t.RemotePlayer,a=t.RemotePlayerController,s=t.CastState,o=t.CastContextEventType,c=[chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,chrome.cast.AutoJoinPolicy.PAGE_SCOPED],this.joinpolicies&&-1!==c.indexOf(this.joinpolicy)||(this.joinpolicy=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED),n.getInstance().setOptions({receiverApplicationId:this.receiver,autoJoinPolicy:this.joinpolicy,language:"en-US",resumeSavedSession:!1}),this._player=new r,this._controller=new a(this._player),this._controller.addEventListener("isConnectedChanged",this._isConnectedChanged.bind(this)),this._controller.addEventListener("isMediaLoadedChanged",this._isMediaLoadedChanged.bind(this)),this._controller.addEventListener("isMutedChanged",this._isMutedChanged.bind(this)),this._controller.addEventListener("isPausedChanged",this._isPausedChanged.bind(this)),this._controller.addEventListener("currentTimeChanged",this._currentTimeChanged.bind(this)),this._controller.addEventListener("durationChanged",this._durationChanged.bind(this)),this._controller.addEventListener("volumeLevelChanged",this._volumeLevelChanged.bind(this)),this._controller.addEventListener("playerStateChanged",this._playerStateChanged.bind(this)),n.getInstance().addEventListener(o.CAST_STATE_CHANGED,this._isAvailableChanged.bind(this)),this.available=n.getInstance().getCastState()!==s.NO_DEVICES_AVAILABLE,this.trigger("available");case 28:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_isAvailableChanged",value:function(e){var t=cast.framework,i=t.CastContext,n=t.CastState;this.available=i.getInstance().getCastState()!==n.NO_DEVICES_AVAILABLE,this.trigger("available")}},{key:"_isMediaLoadedChanged",value:function(){var e=this;this._player.isMediaLoaded&&setTimeout((function(){if(e._player.mediaInfo){for(var t in e.device=cast.framework.CastContext.getInstance().getCurrentSession().getCastDevice().friendlyName||e.device,e.src=e._player.mediaInfo.contentId,e.title=e._player.title||null,e.description=e._player.mediaInfo.metadata.subtitle||null,e.poster=e._player.imageUrl||null,e.subtitles=[],e.volumeLevel=e.volumeLevel=Number(e._player.volumeLevel.toFixed(1)),e.muted=e._player.isMuted,e.paused=e._player.isPaused,e.time=Math.round(e._player.currentTime,1),e.timePretty=e._controller.getFormattedTime(e.time),e.duration=e._player.duration,e.durationPretty=e._controller.getFormattedTime(e._player.duration),e.progress=e._controller.getSeekPosition(e.time,e._player.duration),e.state=e._player.playerState.toLowerCase(),e._player.mediaInfo.tracks)"TEXT"===e._player.mediaInfo.tracks[t].type&&e.subtitles.push({label:e._player.mediaInfo.tracks[t].name,src:e._player.mediaInfo.tracks[t].trackContentId});var i=cast.framework.CastContext.getInstance().getCurrentSession().getSessionObj().media[0].activeTrackIds;i&&i.length&&e.subtitles[i[0]]&&(e.subtitles[i[0]].active=!0)}}))}},{key:"_isConnectedChanged",value:function(){this.connected=this._player.isConnected,this.connected&&(this.device=cast.framework.CastContext.getInstance().getCurrentSession().getCastDevice().friendlyName||this.device),this.state=this.connected?"connected":"disconnected",this.trigger("statechange"),this.trigger(this.connected?"connect":"disconnect")}},{key:"_currentTimeChanged",value:function(){var e=this.time;this.time=Math.round(this._player.currentTime,1),this.duration=this._player.duration,this.progress=this._controller.getSeekPosition(this.time,this.duration),this.timePretty=this._controller.getFormattedTime(this.time),this.durationPretty=this._controller.getFormattedTime(this.duration),e==this.time||this._player.isPaused||this.trigger("timeupdate")}},{key:"_durationChanged",value:function(){this.duration=this._player.duration}},{key:"_volumeLevelChanged",value:function(){this.volumeLevel=Number(this._player.volumeLevel.toFixed(1)),this._player.isMediaLoaded&&this.trigger("volumechange")}},{key:"_isMutedChanged",value:function(){var e=this.muted;this.muted=this._player.isMuted,e!=this.muted&&this.trigger(this.muted?"mute":"unmute")}},{key:"_isPausedChanged",value:function(){this.paused=this._player.isPaused,this.paused&&this.trigger("pause")}},{key:"_playerStateChanged",value:function(){var e,t,i=this;if(this.connected=this._player.isConnected,this.connected)switch(this.device=cast.framework.CastContext.getInstance().getCurrentSession().getCastDevice().friendlyName||this.device,this.state=this._player.playerState.toLowerCase(),this.state){case"idle":return this.trigger("statechange"),(null!==(e=null===(t=this._mediaSession)||void 0===t?void 0:t.idleReason)&&void 0!==e?e:"")!==chrome.cast.media.IdleReason.INTERRUPTED&&(this.state="ended",this.trigger("end")),this;case"buffering":return this.time=Math.round(this._player.currentTime,1),this.duration=this._player.duration,this.progress=this._controller.getSeekPosition(this.time,this.duration),this.timePretty=this._controller.getFormattedTime(this.time),this.durationPretty=this._controller.getFormattedTime(this.duration),this.trigger("statechange"),this.trigger("buffering"),this;case"playing":return setTimeout((function(){i.trigger("statechange"),i.trigger("playing")})),this}}},{key:"on",value:function(e,t){return this._events[e]||(this._events[e]=[]),this._events[e].push(t),this}},{key:"off",value:function(e){return e?this._events[e]&&(this._events[e]=[]):this._events={},this}},{key:"trigger",value:function(e){var t=Array.prototype.slice.call(arguments,1);for(var i in this._events[e])this._events[e][i].apply(this,t);if("error"===e)return this;for(var i in this._events.event)this._events.event[i].apply(this,[e]);return this}},{key:"cast",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=Object(u.a)(l.a.mark((function e(t){var i,n,r,a,s,o=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=function(){return(s=Object(u.a)(l.a.mark((function e(){var t,i,r,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.getInstance().getCurrentSession()){e.next=2;break}return e.abrupt("return",this.trigger("error","Could not connect with the cast device"));case 2:if((t=new chrome.cast.media.MediaInfo(this.src)).metadata=new chrome.cast.media.GenericMediaMetadata,this.subtitles.length){for(r in t.textTrackStyle=new chrome.cast.media.TextTrackStyle,t.textTrackStyle.backgroundColor="#00000000",t.textTrackStyle.edgeColor="#00000016",t.textTrackStyle.edgeType="DROP_SHADOW",t.textTrackStyle.fontFamily="CASUAL",t.textTrackStyle.fontScale=1,t.textTrackStyle.foregroundColor="#FFFFFF",i=[],this.subtitles)(a=new chrome.cast.media.Track(r,"TEXT")).name=this.subtitles[r].label,a.subtype="CAPTIONS",a.trackContentId=this.subtitles[r].src,a.trackContentType="text/vtt",a.trackId=parseInt(r),i.push(a);t.tracks=i}if(t.metadata.images=[new chrome.cast.Image(this.poster)],t.metadata.title=this.title,t.metadata.subtitle=this.description,(s=new chrome.cast.media.LoadRequest(t)).currentTime=this.time,s.autoplay=!this.paused,!this.subtitles.length){e.next=20;break}e.t0=l.a.keys(this.subtitles);case 13:if((e.t1=e.t0()).done){e.next=20;break}if(r=e.t1.value,!this.subtitles[r].active){e.next=18;break}return s.activeTrackIds=[parseInt(r)],e.abrupt("break",20);case 18:e.next=13;break;case 20:return e.prev=20,e.next=23,n.getInstance().getCurrentSession().loadMedia(s);case 23:this.device=n.getInstance().getCurrentSession().getCastDevice().friendlyName||this.device,this._mediaSession=n.getInstance().getCurrentSession().getMediaSession(),e.next=30;break;case 27:return e.prev=27,e.t2=e.catch(20),e.abrupt("return",this.trigger("error",e.t2));case 30:case"end":return e.stop()}}),e,this,[[20,27]])})))).apply(this,arguments)},a=function(){return s.apply(this,arguments)},i=o.length>1&&void 0!==o[1]?o[1]:{},t){e.next=5;break}return e.abrupt("return",this.trigger("error","No media source specified."));case 5:for(r in n=cast.framework.CastContext,i.src=t,i)i.hasOwnProperty(r)&&(this[r]=i[r]);if(e.prev=8,n.getInstance().getCurrentSession()){e.next=12;break}return e.next=12,n.getInstance().requestSession();case 12:return e.next=14,a.apply(this);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(8),"cancel"!==e.t0&&this.trigger("error",e.t0);case 19:case"end":return e.stop()}}),e,this,[[8,16]])})));return function(t){return e.apply(this,arguments)}}())},{key:"seek",value:function(e,t){return t&&(e=this._controller.getSeekTime(e,this._player.duration)),this._player.currentTime=e,this._controller.seek(),this}},{key:"volume",value:function(e){return this._player.volumeLevel=e,this._controller.setVolumeLevel(),this}},{key:"play",value:function(){return this.paused&&this._controller.playOrPause(),this}},{key:"pause",value:function(){return this.paused||this._controller.playOrPause(),this}},{key:"mute",value:function(){return this.muted||this._controller.muteOrUnmute(),this}},{key:"unmute",value:function(){return this.muted&&this._controller.muteOrUnmute(),this}},{key:"subtitle",value:function(e){var t=this,i=new chrome.cast.media.EditTracksInfoRequest([parseInt(e)]);cast.framework.CastContext.getInstance().getCurrentSession().getSessionObj().media[0].editTracksInfo(i,(function(){for(var i in t.subtitles)delete t.subtitles[i].active,i==e&&(t.subtitles[i].active=!0);return t.trigger("subtitlechange")}),(function(e){return t.trigger("error",e)}))}},{key:"disconnect",value:function(){return cast.framework.CastContext.getInstance().endCurrentSession(!0),this._controller.stop(),this._mediaSession=null,this.connected=!1,this.device="Chromecast",this.src="",this.title="",this.description="",this.poster="",this.subtitles=[],this.volumeLevel=1,this.muted=!1,this.paused=!1,this.time=0,this.timePretty="00:00:00",this.duration=0,this.durationPretty="00:00:00",this.progress=0,this.state="disconnected",this.trigger("disconnect"),this}}]),e}(),g=function(){var e=Object(n.useState)(new p),t=Object(o.a)(e,2),i=t[0];t[1];return{chromecast:i}},f=Object(n.createContext)(g),y=function(){return Object(n.useContext)(f)},_="_styles-module__cast_button__8z_HZ";var b=function(e){var t=e.children,i=g();return r.a.createElement(f.Provider,{value:i},t)},C=y,k=function(e){var t=y().chromecast,i=Object(n.useState)(t.available),a=Object(o.a)(i,2),s=a[0],c=a[1],l=e.size,u=void 0===l?20:l,h=e.styles,d=void 0===h?{}:h,m=e.onClick,p=void 0===m?function(){console.error("No handler available.")}:m;return Object(n.useEffect)((function(){return t.on("available",(function(){c(t.available)})),function(){t.off()}}),[]),r.a.createElement("button",{onClick:p,style:d,className:_,disabled:!s},r.a.createElement("img",{src:v.a,style:{width:u,height:u}}))};i(17);var S=function(){var e=C().chromecast,t=Object(n.useState)(e.available),i=Object(o.a)(t,2),a=i[0],s=i[1],c=Object(n.useState)(e.connected),h=Object(o.a)(c,2),d=h[0],m=h[1],v=Object(n.useState)("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"),p=Object(o.a)(v,2),g=p[0],f=p[1],y=Object(n.useRef)();function _(){return(_=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.available){t.next=10;break}return t.prev=1,t.next=4,e.cast(g,{poster:"https://castjs.io/media/poster.jpg",title:"Sintel",description:"Third Open Movie by Blender Foundation",subtitles:[{active:!0,label:"English",src:"https://castjs.io/media/english.vtt"},{label:"Spanish",src:"https://castjs.io/media/spanish.vtt"}]});case 4:console.log("casting"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){return e.on("available",(function(){console.log("change",e.available),s(e.available)})),e.on("connect",(function(){m(e.connected)})),function(){e.off()}}),[]),r.a.createElement("div",null,"cast available: ",a?"true":"false",r.a.createElement("br",null),"cast connected: ",d?"true":"false",r.a.createElement("br",null),d&&r.a.createElement("div",null,"connected to: ",e.device),r.a.createElement("div",null,r.a.createElement("label",null,"paste source url (video or audio)"),r.a.createElement("input",{ref:function(e){return y.current=e},type:"text",value:g,style:{width:"80%"},onFocus:function(){return y.current.select()},onChange:function(e){return f(e.target.value)}})),r.a.createElement("br",null),r.a.createElement(k,{onClick:function(){return _.apply(this,arguments)}}))},E=function(){return r.a.createElement(b,null,r.a.createElement("h1",null,"react-castjs demo"),r.a.createElement("a",{href:""},"view on github"),r.a.createElement("a",{href:""},"npm"),r.a.createElement("code",null,"npm i react-castjs -S"),r.a.createElement("h2",null,"Getting started"),r.a.createElement("h3",null,"Wrap your React-App"),r.a.createElement("code",null),r.a.createElement("div",null,r.a.createElement(S,null)))};s.a.render(r.a.createElement(E,null),document.getElementById("root"))},7:function(e,t,i){e.exports=i.p+"static/media/chromecast~bhycLeeK.4a5ab6bd.svg"},8:function(e,t,i){e.exports=i(18)},9:function(e,t,i){}},[[8,1,2]]]);
//# sourceMappingURL=main.30616978.chunk.js.map