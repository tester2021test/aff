window.Affiliate=function(g){function a(m){if(e[m])return e[m].exports;var f=e[m]={i:m,l:!1,exports:{}};g[m].call(f.exports,f,f.exports,a);f.l=!0;return f.exports}var e={};a.m=g;a.c=e;a.d=function(m,f,e){a.o(m,f)||Object.defineProperty(m,f,{configurable:!1,enumerable:!0,get:e})};a.n=function(m){var f=m&&m.__esModule?function(){return m["default"]}:function(){return m};a.d(f,"a",f);return f};a.o=function(a,f){return Object.prototype.hasOwnProperty.call(a,f)};a.p="";return a(a.s=0)}([function(g,a,e){var m=
e(1),f=e(5),h=[],p=function(){var a={},l;for(l in arguments)for(var d in arguments[l])a[d]=arguments[l][d];return a},q=console.log.bind(window,"Affiliate: "),r=console.error.bind(window,"Affiliate: "),n=function(a){a=p({log:!1,tags:[]},a);var l=[];for(b in a.tags)a.tags[b]=p({hosts:[],query:{},replace:[]},a.tags[b]),l=l.concat(a.tags[b].hosts);var d=!0,c=!1;var b=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;"undefined"===typeof b&&(d=!1);var e=function(b){a.log&&
q("Traversing DOM...");var c=[].slice.call(b.getElementsByTagName("a"));"a"===b.nodeName.toLowerCase()&&(c=[b]);a.log&&q(c);for(var d in c){b=void 0;var e=c[d];if(e&&e.getAttribute("href")){var u=m(e.getAttribute("href")||"",!0);if(-1!==l.indexOf(u.host))for(b in a.tags)if(0<=a.tags[b].hosts.indexOf(u.host)){var h=void 0,k=u,t=e,g=a.tags[b],n=f.get(t)||{};if(!n.to||n.to!==k.href){n=k.href;a.log&&q("Discovered URL: "+k.href);k.set("query",p(k.query,g.query));if("function"===typeof g.modifyPath)try{k.set("pathname",
g.modifyPath(k.pathname))}catch(v){r(v)}if("function"===typeof g.modifyHost)try{k.set("host",g.modifyHost(k.host))}catch(v){r(v)}k=k.href;for(h in g.replace)k=k.replace(g.replace[h].from,g.replace[h].to);t.setAttribute("href",k);f.set(t,{href:n,to:k})}}}}};d&&(this.observer=new b(function(b){a.log&&q("DOM Mutation",b);for(var c in b){if("attributes"===b[c].type){if("href"!==b[c].attributeName)continue;var l=b[c].target.getAttribute("href"),d=f.get(b[c].target)||{};if(d.to&&d.to===l)continue}e(b[c].target)}}));
this.attach=function(){if(!c){if("complete"===document.readyState||"interactive"===document.readyState)c=!0,e(document.body);else return window.addEventListener("DOMContentLoaded",this.attach);d?this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,characterData:!0}):a.log&&q("Browser does not support MutationObserver.")}}.bind(this);this.detach=function(){d&&(c=!1,this.observer.disconnect(),a.log&&q("Observer disconnected."))}.bind(this)};a=function(a){a=new n(a);h.push(a);return a};
a.instances=function(){return[].concat(h)};a.detachAll=function(){for(var a in h)h[a].detach()};a.revert=function(){this.detachAll();var a=[].slice.call(document.body.getElementsByTagName("a")),l;for(l in a){var d=f.get(a[l]);d&&d.href&&(a[l].setAttribute("href",d.href),f.set(a[l],{}))}}.bind(a);g.exports=a},function(g,a,e){(function(a){function f(c){c=c||a.location||{};var b={},l=typeof c,f;if("blob:"===c.protocol)b=new p(unescape(c.pathname),{});else if("string"===l)for(f in b=new p(c,{}),d)delete b[f];
else if("object"===l){for(f in c)f in d||(b[f]=c[f]);void 0===b.slashes&&(b.slashes=t.test(c.href))}return b}function m(c){c=n.exec(c);return{protocol:c[1]?c[1].toLowerCase():"",slashes:!!c[2],rest:c[3]}}function p(c,b,a){if(!(this instanceof p))return new p(c,b,a);var d=l.slice();var e=typeof b;var g=0;"object"!==e&&"string"!==e&&(a=b,b=null);a&&"function"!==typeof a&&(a=r.parse);b=f(b);var h=m(c||"");e=!h.protocol&&!h.slashes;this.slashes=h.slashes||e&&b.slashes;this.protocol=h.protocol||b.protocol||
"";c=h.rest;for(h.slashes||(d[2]=[/(.*)/,"pathname"]);g<d.length;g++){h=d[g];var k=h[0];var n=h[1];if(k!==k)this[n]=c;else if("string"===typeof k)~(k=c.indexOf(k))&&("number"===typeof h[2]?(this[n]=c.slice(0,k),c=c.slice(k+h[2])):(this[n]=c.slice(k),c=c.slice(0,k)));else if(k=k.exec(c))this[n]=k[1],c=c.slice(0,k.index);this[n]=this[n]||(e&&h[3]?b[n]||"":"");h[4]&&(this[n]=this[n].toLowerCase())}a&&(this.query=a(this.query));if(e&&b.slashes&&"/"!==this.pathname.charAt(0)&&(""!==this.pathname||""!==
b.pathname)){c=this.pathname;b=(b.pathname||"/").split("/").slice(0,-1).concat(c.split("/"));c=b.length;a=b[c-1];d=!1;for(g=0;c--;)"."===b[c]?b.splice(c,1):".."===b[c]?(b.splice(c,1),g++):g&&(0===c&&(d=!0),b.splice(c,1),g--);d&&b.unshift("");"."!==a&&".."!==a||b.push("");this.pathname=b.join("/")}q(this.port,this.protocol)||(this.host=this.hostname,this.port="");this.username=this.password="";this.auth&&(h=this.auth.split(":"),this.username=h[0]||"",this.password=h[1]||"");this.origin=this.protocol&&
this.host&&"file:"!==this.protocol?this.protocol+"//"+this.host:"null";this.href=this.toString()}var q=e(3),r=e(4),n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,t=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,l=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],d={hash:1,query:1};p.prototype={set:function(c,b,a){switch(c){case "query":"string"===typeof b&&b.length&&(b=(a||r.parse)(b));this[c]=b;break;case "port":this[c]=b;q(b,
this.protocol)?b&&(this.host=this.hostname+":"+b):(this.host=this.hostname,this[c]="");break;case "hostname":this[c]=b;this.port&&(b+=":"+this.port);this.host=b;break;case "host":this[c]=b;/:\d+$/.test(b)?(b=b.split(":"),this.port=b.pop(),this.hostname=b.join(":")):(this.hostname=b,this.port="");break;case "protocol":this.protocol=b.toLowerCase();this.slashes=!a;break;case "pathname":case "hash":b?(a="pathname"===c?"/":"#",this[c]=b.charAt(0)!==a?a+b:b):this[c]=b;break;default:this[c]=b}for(c=0;c<
l.length;c++)b=l[c],b[4]&&(this[b[1]]=this[b[1]].toLowerCase());this.origin=this.protocol&&this.host&&"file:"!==this.protocol?this.protocol+"//"+this.host:"null";this.href=this.toString();return this},toString:function(a){a&&"function"===typeof a||(a=r.stringify);var b=this.protocol;b&&":"!==b.charAt(b.length-1)&&(b+=":");b+=this.slashes?"//":"";this.username&&(b+=this.username,this.password&&(b+=":"+this.password),b+="@");b+=this.host+this.pathname;(a="object"===typeof this.query?a(this.query):this.query)&&
(b+="?"!==a.charAt(0)?"?"+a:a);this.hash&&(b+=this.hash);return b}};p.extractProtocol=m;p.location=f;p.qs=r;g.exports=p}).call(a,e(2))},function(g,a){a=function(){return this}();try{a=a||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(a=window)}g.exports=a},function(g,a,e){g.exports=function(a,f){f=f.split(":")[0];a=+a;if(!a)return!1;switch(f){case "http":case "ws":return 80!==a;case "https":case "wss":return 443!==a;case "ftp":return 21!==a;case "gopher":return 70!==
a;case "file":return!1}return 0!==a}},function(g,a,e){var m=Object.prototype.hasOwnProperty;a.stringify=function(a,e){e=e||"";var f=[];"string"!==typeof e&&(e="?");for(var g in a)m.call(a,g)&&f.push(encodeURIComponent(g)+"="+encodeURIComponent(a[g]));return f.length?e+f.join("&"):""};a.parse=function(a){for(var e=/([^=?&]+)=?([^&]*)/g,f={},g;g=e.exec(a);f[decodeURIComponent(g[1].replace(/\+/g," "))]=decodeURIComponent(g[2].replace(/\+/g," ")));return f}},function(g,a,e){g.exports=e(6)},function(g,
a){var e=console.error.bind(this,"Docile: "),m=0<=["loaded","interactive","complete"].indexOf(document.readyState),f=function(a){var l=a.dataset.docileId;l||(l=Math.random().toString(36).substr(2),a.dataset.docileId=l);return l},h=function(a){if(!m)return e("DOM not loaded. Learn more: https://goo.gl/EsYspK"),null;if("object"===typeof a||"string"===typeof a&&(a=document.getElementById(a)))return a;e("Unable to resolve node.")},p=function(a,d){try{document.head.dataset.docileStore=JSON.stringify({store:a,
linkStore:d})}catch(c){e("Data could not be saved.")}},q=function(a,d,c){a.linkStore[this.id]=a.linkStore[this.id]||{};if("string"===typeof d){c=h(c);if(!c)return;a.linkStore[this.id][d]=f(c)}else if("object"===typeof d)for(var b in d)this.set(b,d[b]);p(a.store,a.linkStore);return this},r=function(a,d){a.linkStore[this.id]=a.linkStore[this.id]||{};if(d)return"string"!==typeof d?e("Link name must be a string."):document.querySelector('[data-docile-id="'+a.linkStore[this.id][d]+'"]');a=Object.assign({},
a.linkStore[this.id]);for(var c in a)a[c]=document.querySelector('[data-docile-id="'+a[c]+'"]');return a},n=function(a,d){if(d)return a.get(this.get(d));d=this.get();for(var c in d)d[c]=a.get(d[c]);return d};a={};a.get=function(a){if(a=h(a))return a=f(a),this.store[a]}.bind(a);a.set=function(a,d){if(a=h(a))return a=f(a),this.store[a]=d,p(this.store,this.linkStore),this}.bind(a);a.link=function(a){if(a=h(a)){a=f(a);var d={};d.id=a;d.set=q.bind(d,this);d.get=r.bind(d,this);d.getData=n.bind(d,this);
return d}}.bind(a);var t=function(){var a={store:{},linkStore:{}};document.head.dataset.docileStore||(document.head.dataset.docileStore='{"store":{},"linkStore":{}}');try{a=JSON.parse(document.head.dataset.docileStore)}catch(d){e("Data could not be resumed.")}return a}();a.store=t.store||{};a.linkStore=t.linkStore||{};window.addEventListener("DOMContentLoaded",function(){m=!0});g.exports=a}]);