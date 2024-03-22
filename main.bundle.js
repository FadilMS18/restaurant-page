(()=>{"use strict";var n={683:(n,r,e)=>{e.d(r,{A:()=>i});var o=e(354),t=e.n(o),A=e(314),a=e.n(A)()(t());a.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const i=a},64:(n,r,e)=>{e.d(r,{A:()=>l});var o=e(354),t=e.n(o),A=e(314),a=e.n(A),i=e(417),c=e.n(i),s=new URL(e(440),e.b),d=a()(t()),p=c()(s);d.push([n.id,`:root{\n    font-family: 'nunito' ;\n    --primary : #B6D94C;\n    --secondary : #FFE873;\n    --support : #87CEEB;\n    --primarySoft:#E1FFB8; \n    --primaryHard : #65B741;\n    --secondaryHard :gold;\n    --black : #000000;\n    --white : #FFFFFF;\n    --cardColor : #F3F3F3;\n    \n}\n\n*{\n    box-sizing: content-box;\n}\n\n*:not(dialog, dialog[open]){\n    padding:0;\n    margin:0;\n}\n\na{\n    color: inherit;\n    text-decoration: none;\n}\na:visited{\n    color: inherit;\n    text-decoration: none;\n}\n\nbody{\n    /* height: 1000vh; */\n    background-color:#FFF8E1;\n}\n\nheader#header{\n    height:90vh;\n    background-image: url(${p});\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    position: relative;\n    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 1);\n}\n\nheader > nav#nav{\n    display: flex;\n    height: 60px;\n    align-items: center;\n    justify-content: center;\n    padding: 10px 0 0 100px;\n    position: sticky;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 9999;\n    user-select: none;\n}\n\nnav *{\n    font-size: 1.15rem;\n}\n\nnav#nav > h3{\n    color: var(--black);\n    align-self: center;\n    margin : 0 auto 0 0; \n    transition: .3s;\n    cursor:pointer;\n    border: solid 2px var(--black);\n    padding:15px;\n    background-color: var(--primary);\n    border-radius: 15px 30px 15px 30px ;\n    user-select: none;\n    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, .25);\n}\n\n#nav > h3:hover{\n    background-color: var(--primaryHard);\n    color: var(--white);\n    border: solid 2px var(--white);\n}\n\n#nav > h3:active{\n    color:var(--black);\n    background-color: var(--primary);\n    border: 2px solid var(--black);\n}\n\n#nav > h3:hover{\n    scale:1.1;\n}\n#nav > h3:active{\n    scale:1\n}\n\n#nav > section{\n    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, .1);\n}\n\nnav > section:first-of-type{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    border-radius:25px 0 0 15px ;\n    background-color: var(--secondary);\n}\n\nnav > section:first-of-type button{\n    height: 100%;\n    padding:20px;\n    border:none;\n    cursor: pointer;\n    transition:.25s;\n    background-color: var(--secondary);\n}\n\nnav > section:last-child{\n    height: 100%;\n    display: flex;\n    align-items: center;\n    gap:20px;\n    margin-right:70px;\n    border-radius: 0px 15px 25px 0;\n    background-color: var(--secondary);\n\n}\n\n\nnav  > section:last-child > button{\n    padding:0 20px;\n    height: 100%;\n    background-color: rgb(246, 255, 227,0);\n\n    border:none;\n\n    \n    cursor:pointer;\n    font-weight: bold;\n    transition:.25s;\n    font-family: 'nunito';\n}\n\nnav > section:first-of-type > button:hover{\n    background-color: var(--primary);\n    transform: scale(1.3);\n}\n\nnav > section:last-child > button:hover{\n    background-color: var(--primary);\n    transform: scale(1.08);\n}\n\n\nnav#nav > section > button:active{\n    transform: scale(0.95);\n}\n\nnav > section{\n    background-color: white;\n    overflow: hidden;\n}\n\n#cover{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top:0;\n    left:0;\n    right:0;\n\n    background-color: rgba(0, 0, 0, .45);\n}\n\n#cover-container{\n    height: 90%;\n    width: 650px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin: 0 0 0 50px;\n    gap:10px;\n    color: var(--primary);\n}\n\n#cover-container > h5 {\n    font-size: 1.25rem;\n}\n\n#cover-container > h1{\n    font-size: 3rem;\n    color: var(--secondaryHard);\n}\n\n#cover-container > p{\n    font-size:1.1rem;\n    line-height: 1.7rem;\n    color:var(--secondary);\n}\n\n#cover-container > a{\n    margin:20px 0 0 30px;\n    font-family: 'nunito';\n    width:fit-content;\n    padding:15px 30px;\n    border:none;\n    border-radius:5px;\n    cursor:pointer;\n    color: var(--black);\n    background-color: var(--secondary);\n    box-shadow: 0px 0px 5px 1px rgba(255, 255, 255, .45);\n    font-size: 1.05rem;\n    transition: .2s;\n}\n\n#cover-container > a::after{\n    content :'👉'\n}\n\n#cover-container > a:hover{\n    background-color: black;\n    color:gold;\n    transform: scale(1.03);\n    box-shadow:0px 35px 35px -18px rgba(255, 255, 255), 0px 0px 5px 1px rgba(255, 255, 255, .35);\n}\n\n\n#footer{\n    background-color: var(--cardColor);\n    height:30px;\n    position: fixed;\n    bottom:0;\n    left:0;\n    right:0;\n    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, .2);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#footer > h5{\n    font-size: 1rem;\n    user-select: none;\n    transition: .2s; cursor: pointer;\n}\n\n#footer> h5:hover{\n    color: var(--primaryHard);\n\n}\n\n#section2 > .active{\n    background-color: var(--primaryHard);\n}`,"",{version:3,sources:["webpack://./src/css/header.css"],names:[],mappings:"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",sourcesContent:[":root{\r\n    font-family: 'nunito' ;\r\n    --primary : #B6D94C;\r\n    --secondary : #FFE873;\r\n    --support : #87CEEB;\r\n    --primarySoft:#E1FFB8; \r\n    --primaryHard : #65B741;\r\n    --secondaryHard :gold;\r\n    --black : #000000;\r\n    --white : #FFFFFF;\r\n    --cardColor : #F3F3F3;\r\n    \r\n}\r\n\r\n*{\r\n    box-sizing: content-box;\r\n}\r\n\r\n*:not(dialog, dialog[open]){\r\n    padding:0;\r\n    margin:0;\r\n}\r\n\r\na{\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\na:visited{\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\nbody{\r\n    /* height: 1000vh; */\r\n    background-color:#FFF8E1;\r\n}\r\n\r\nheader#header{\r\n    height:90vh;\r\n    background-image: url(./../images/collin-wulrT9QNAoA-unsplash.jpg);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    position: relative;\r\n    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 1);\r\n}\r\n\r\nheader > nav#nav{\r\n    display: flex;\r\n    height: 60px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 10px 0 0 100px;\r\n    position: sticky;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 9999;\r\n    user-select: none;\r\n}\r\n\r\nnav *{\r\n    font-size: 1.15rem;\r\n}\r\n\r\nnav#nav > h3{\r\n    color: var(--black);\r\n    align-self: center;\r\n    margin : 0 auto 0 0; \r\n    transition: .3s;\r\n    cursor:pointer;\r\n    border: solid 2px var(--black);\r\n    padding:15px;\r\n    background-color: var(--primary);\r\n    border-radius: 15px 30px 15px 30px ;\r\n    user-select: none;\r\n    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, .25);\r\n}\r\n\r\n#nav > h3:hover{\r\n    background-color: var(--primaryHard);\r\n    color: var(--white);\r\n    border: solid 2px var(--white);\r\n}\r\n\r\n#nav > h3:active{\r\n    color:var(--black);\r\n    background-color: var(--primary);\r\n    border: 2px solid var(--black);\r\n}\r\n\r\n#nav > h3:hover{\r\n    scale:1.1;\r\n}\r\n#nav > h3:active{\r\n    scale:1\r\n}\r\n\r\n#nav > section{\r\n    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, .1);\r\n}\r\n\r\nnav > section:first-of-type{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    border-radius:25px 0 0 15px ;\r\n    background-color: var(--secondary);\r\n}\r\n\r\nnav > section:first-of-type button{\r\n    height: 100%;\r\n    padding:20px;\r\n    border:none;\r\n    cursor: pointer;\r\n    transition:.25s;\r\n    background-color: var(--secondary);\r\n}\r\n\r\nnav > section:last-child{\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap:20px;\r\n    margin-right:70px;\r\n    border-radius: 0px 15px 25px 0;\r\n    background-color: var(--secondary);\r\n\r\n}\r\n\r\n\r\nnav  > section:last-child > button{\r\n    padding:0 20px;\r\n    height: 100%;\r\n    background-color: rgb(246, 255, 227,0);\r\n\r\n    border:none;\r\n\r\n    \r\n    cursor:pointer;\r\n    font-weight: bold;\r\n    transition:.25s;\r\n    font-family: 'nunito';\r\n}\r\n\r\nnav > section:first-of-type > button:hover{\r\n    background-color: var(--primary);\r\n    transform: scale(1.3);\r\n}\r\n\r\nnav > section:last-child > button:hover{\r\n    background-color: var(--primary);\r\n    transform: scale(1.08);\r\n}\r\n\r\n\r\nnav#nav > section > button:active{\r\n    transform: scale(0.95);\r\n}\r\n\r\nnav > section{\r\n    background-color: white;\r\n    overflow: hidden;\r\n}\r\n\r\n#cover{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top:0;\r\n    left:0;\r\n    right:0;\r\n\r\n    background-color: rgba(0, 0, 0, .45);\r\n}\r\n\r\n#cover-container{\r\n    height: 90%;\r\n    width: 650px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin: 0 0 0 50px;\r\n    gap:10px;\r\n    color: var(--primary);\r\n}\r\n\r\n#cover-container > h5 {\r\n    font-size: 1.25rem;\r\n}\r\n\r\n#cover-container > h1{\r\n    font-size: 3rem;\r\n    color: var(--secondaryHard);\r\n}\r\n\r\n#cover-container > p{\r\n    font-size:1.1rem;\r\n    line-height: 1.7rem;\r\n    color:var(--secondary);\r\n}\r\n\r\n#cover-container > a{\r\n    margin:20px 0 0 30px;\r\n    font-family: 'nunito';\r\n    width:fit-content;\r\n    padding:15px 30px;\r\n    border:none;\r\n    border-radius:5px;\r\n    cursor:pointer;\r\n    color: var(--black);\r\n    background-color: var(--secondary);\r\n    box-shadow: 0px 0px 5px 1px rgba(255, 255, 255, .45);\r\n    font-size: 1.05rem;\r\n    transition: .2s;\r\n}\r\n\r\n#cover-container > a::after{\r\n    content :'👉'\r\n}\r\n\r\n#cover-container > a:hover{\r\n    background-color: black;\r\n    color:gold;\r\n    transform: scale(1.03);\r\n    box-shadow:0px 35px 35px -18px rgba(255, 255, 255), 0px 0px 5px 1px rgba(255, 255, 255, .35);\r\n}\r\n\r\n\r\n#footer{\r\n    background-color: var(--cardColor);\r\n    height:30px;\r\n    position: fixed;\r\n    bottom:0;\r\n    left:0;\r\n    right:0;\r\n    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, .2);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#footer > h5{\r\n    font-size: 1rem;\r\n    user-select: none;\r\n    transition: .2s; cursor: pointer;\r\n}\r\n\r\n#footer> h5:hover{\r\n    color: var(--primaryHard);\r\n\r\n}\r\n\r\n#section2 > .active{\r\n    background-color: var(--primaryHard);\r\n}"],sourceRoot:""}]);const l=d},310:(n,r,e)=>{e.d(r,{A:()=>i});var o=e(354),t=e.n(o),A=e(314),a=e.n(A)()(t());a.push([n.id,"#home{\n    height: 600px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top:25px;\n    padding:0 15% 10%;\n    gap:30px;\n    transition: .3s;\n}\n\n#title{\n    width: 100%;\n    text-align: center;\n}\n\n#description{\n    text-align: center;\n    font-size: 1rem;\n}\n\n#content-container{\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    align-content: center;\n    gap:50px;\n}\n\ndiv.home-content{\n    display: flex;\n    flex-direction: column ;\n    align-items: center;\n    text-align: center;\n    border: 2px solid black;\n    border-radius: 10px;\n    overflow: hidden;\n    width: 250px;\n    gap:10px;\n    padding:40px 30px 50px 30px;\n    background-color: var(--cardColor);\n    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, .2);\n    cursor: pointer;\n    user-select: none;\n    transition: .3s;\n}\n\n\n\n.hover{\n    position: relative;\n    z-index: 999999;\n}\n\n.home-content:hover{\n    background-color: var(--primarySoft);\n    transform: scale(1.2);\n}\n.home-content:active{\n    transform: scale(1.1);\n    background-color: var(--primary);\n}\n\n#layer{\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 99999;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, .5);\n    transition: .3s;\n}\n.gone{\n    opacity: 0;\n    pointer-events: none;\n}\n\n\n.home-content > img{\n    width: 100%;\n    height:200px;\n    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .4); \n    border: none;\n    border-radius: 5%;\n}\n\n#home-content-h1::after{\n    content : 'Joe'\n}\n#home-content-h2::after{\n    content : 'Joe Mama'\n}\n#home-content-h3::after{\n    content : 'Horses'\n}\n\nmain#home.zero{\n    opacity:0;\n    pointer-events: none;\n}\nmain#home.one{\n    opacity:1;\n}\n\n","",{version:3,sources:["webpack://./src/css/home.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,qBAAqB;IACrB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;IACZ,QAAQ;IACR,2BAA2B;IAC3B,kCAAkC;IAClC,6CAA6C;IAC7C,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;;;AAIA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,qBAAqB;AACzB;AACA;IACI,qBAAqB;IACrB,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,cAAc;IACd,aAAa;IACb,mCAAmC;IACnC,eAAe;AACnB;AACA;IACI,UAAU;IACV,oBAAoB;AACxB;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,8CAA8C;IAC9C,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI;AACJ;AACA;IACI;AACJ;AACA;IACI;AACJ;;AAEA;IACI,SAAS;IACT,oBAAoB;AACxB;AACA;IACI,SAAS;AACb",sourcesContent:["#home{\r\n    height: 600px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top:25px;\r\n    padding:0 15% 10%;\r\n    gap:30px;\r\n    transition: .3s;\r\n}\r\n\r\n#title{\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n#description{\r\n    text-align: center;\r\n    font-size: 1rem;\r\n}\r\n\r\n#content-container{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-content: center;\r\n    gap:50px;\r\n}\r\n\r\ndiv.home-content{\r\n    display: flex;\r\n    flex-direction: column ;\r\n    align-items: center;\r\n    text-align: center;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    width: 250px;\r\n    gap:10px;\r\n    padding:40px 30px 50px 30px;\r\n    background-color: var(--cardColor);\r\n    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, .2);\r\n    cursor: pointer;\r\n    user-select: none;\r\n    transition: .3s;\r\n}\r\n\r\n\r\n\r\n.hover{\r\n    position: relative;\r\n    z-index: 999999;\r\n}\r\n\r\n.home-content:hover{\r\n    background-color: var(--primarySoft);\r\n    transform: scale(1.2);\r\n}\r\n.home-content:active{\r\n    transform: scale(1.1);\r\n    background-color: var(--primary);\r\n}\r\n\r\n#layer{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 99999;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    transition: .3s;\r\n}\r\n.gone{\r\n    opacity: 0;\r\n    pointer-events: none;\r\n}\r\n\r\n\r\n.home-content > img{\r\n    width: 100%;\r\n    height:200px;\r\n    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .4); \r\n    border: none;\r\n    border-radius: 5%;\r\n}\r\n\r\n#home-content-h1::after{\r\n    content : 'Joe'\r\n}\r\n#home-content-h2::after{\r\n    content : 'Joe Mama'\r\n}\r\n#home-content-h3::after{\r\n    content : 'Horses'\r\n}\r\n\r\nmain#home.zero{\r\n    opacity:0;\r\n    pointer-events: none;\r\n}\r\nmain#home.one{\r\n    opacity:1;\r\n}\r\n\r\n"],sourceRoot:""}]);const i=a},944:(n,r,e)=>{e.d(r,{A:()=>i});var o=e(354),t=e.n(o),A=e(314),a=e.n(A)()(t());a.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const i=a},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",o=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),o&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),o&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,o,t,A){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&a[d[0]]||(void 0!==A&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=A),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),t&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=t):d[4]="".concat(t)),r.push(d))}},r}},417:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),A="/*# ".concat(t," */");return[r].concat([A]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,o=0;o<r.length;o++)if(r[o].identifier===n){e=o;break}return e}function o(n,o){for(var A={},a=[],i=0;i<n.length;i++){var c=n[i],s=o.base?c[0]+o.base:c[0],d=A[s]||0,p="".concat(s," ").concat(d);A[s]=d+1;var l=e(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)r[l].references++,r[l].updater(u);else{var C=t(u,o);o.byIndex=i,r.splice(i,0,{identifier:p,updater:C,references:1})}a.push(p)}return a}function t(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,t){var A=o(n=n||[],t=t||{});return function(n){n=n||[];for(var a=0;a<A.length;a++){var i=e(A[a]);r[i].references--}for(var c=o(n,t),s=0;s<A.length;s++){var d=e(A[s]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}A=c}}},659:n=>{var r={};n.exports=function(n,e){var o=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var A=e.sourceMap;A&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),r.styleTagTransform(o,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},440:(n,r,e)=>{n.exports=e.p+"images/736cb9c92e81b15f5967.jpg"}},r={};function e(o){var t=r[o];if(void 0!==t)return t.exports;var A=r[o]={id:o,exports:{}};return n[o](A,A.exports,e),A.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var o in r)e.o(r,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var o=r.getElementsByTagName("script");if(o.length)for(var t=o.length-1;t>-1&&(!n||!/^http(s?):/.test(n));)n=o[t--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(72),r=e.n(n),o=e(825),t=e.n(o),A=e(659),a=e.n(A),i=e(56),c=e.n(i),s=e(540),d=e.n(s),p=e(113),l=e.n(p),u=e(64),C={};C.styleTagTransform=l(),C.setAttributes=c(),C.insert=a().bind(null,"head"),C.domAPI=t(),C.insertStyleElement=d(),r()(u.A,C),u.A&&u.A.locals&&u.A.locals;var h=e(310),m={};m.styleTagTransform=l(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=t(),m.insertStyleElement=d(),r()(h.A,m),h.A&&h.A.locals&&h.A.locals;var B=e(944),I={};I.styleTagTransform=l(),I.setAttributes=c(),I.insert=a().bind(null,"head"),I.domAPI=t(),I.insertStyleElement=d(),r()(B.A,I),B.A&&B.A.locals&&B.A.locals;var g=e(683),v={};v.styleTagTransform=l(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=t(),v.insertStyleElement=d(),r()(g.A,v),g.A&&g.A.locals&&g.A.locals;const f=e.p+"images/aa712dc1afa949116f81.jpg",x=e.p+"images/ad3e07367b8c381b941f.png",b=e.p+"images/7d37f0e335c385b94e1f.jpg",y=Array.from(document.querySelectorAll(".home-content")),k=document.querySelector("#home");k.classList.add("zero");const E=document.querySelector("#anchor");function w(){const n=document.createElement("p");return n.innerHTML="This is it The Man, The Myth The Legend Himself, Uncle 'papa' Joe the third, with uncle Joe everything that you need to know is solved easy.",n}y.forEach((n=>{n.addEventListener("mouseenter",(()=>{n.classList.add("hover"),document.querySelector("#layer").classList.remove("gone"),n.addEventListener("mouseleave",(()=>{n.classList.remove("hover"),document.querySelector("#layer").classList.add("gone")}))}))})),E.addEventListener("click",(function(){window.scrollTo({top:document.querySelector("#home").offsetTop,behavior:"smooth"})})),E.addEventListener("click",(()=>{!function(){const n=document.createElement("h1");n.innerHTML="HOME",n.setAttribute("id","title");const r=document.createElement("p");r.innerHTML="Welcome to Uncle Joe's Farm, before diving and start your journey with uncle joe, you first need to know about the team here, lets go i will tell you everything that you need to know. But there are some rules you need to aware of, the more you know the less you speak, A wise man knows that he knows nothing, the more you learn, the more you realize how much you don't know.",r.setAttribute("id","description"),k.appendChild(n),k.appendChild(r),k.appendChild(function(){const n=document.createElement("div");return n.setAttribute("id","content-container"),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("home-content"),n.appendChild(function(){const n=document.createElement("img");return n.setAttribute("alt","farmer-picture"),n.setAttribute("title","src:Jake Heinemann on pexels.com"),n.src=f,n}()),n.appendChild(function(){const n=document.createElement("h3");return n.setAttribute("id","home-content-h1"),n}()),n.appendChild(w()),n}()),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("home-content"),n.appendChild(function(){const n=document.createElement("img");return n.setAttribute("alt","Joe mama Picture"),n.setAttribute("title","src:@stick_man_says on twitter/X"),n.src=x,n}()),n.appendChild(function(){const n=document.createElement("h3");return n.setAttribute("id","home-content-h2"),n}()),n.appendChild(w()),n}()),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("home-content"),n.appendChild(function(){const n=document.createElement("img");return n.setAttribute("alt","farmer-picture"),n.setAttribute("title","src:Pixabay on pexels.com"),n.src=b,n}()),n.appendChild(function(){const n=document.createElement("h3");return n.setAttribute("id","home-content-h3"),n}()),n.appendChild(w()),n}()),n}())}(),setTimeout((()=>{document.querySelector("#home").classList.remove("zero")}),1)}))})()})();
//# sourceMappingURL=main.bundle.js.map