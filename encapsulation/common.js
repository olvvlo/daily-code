///////////////////////
///  Common JS 1.1  ///
///////////////////////

////////////////
/// Util     ///
/// String   ///
/// Array    ///
/// Event    ///
/// Cookie   ///
/// Ajax     ///
/// Animate  ///
////////////////

/////////////////////////////
// Update Log              //
//                         //
// * @version 1.1.1        //
// * @date    2017-12-09   //
// * @author wiolem        //
//                         //
// * Add Array && String   //
// * Format the call mode  //
/////////////////////////////

//////////////
// Util 1.0 //
//////////////

/**
 * $$
 * This is a cool && pretty function
 * @author wiolem
 * @date    2017-11-23
 * @param   {string}   select
 * @param   {boolean}   all
 * @return  {element}
 */
function $$(select, all) {
    if (all == undefined) {
        return document.querySelector(select);
    } else {
        return document.querySelectorAll(select);
    }
}

/**
 * getStyle
 * @param   {element}   DOM
 * @param   {attribute}   attr
 * @return  {value} attr.value
 */

/**
 * getRandomColor
 * @param  {Boolean} isRGB 
 * @return {String}  [rgb(0,0,0)] or [#ffffff]
 */

/**
 * getRandomNum
 * Random number of any interval
 * @param   {number}   min
 * @param   {number}   max
 * @return  {number} eg: a number of 100 ~ 200
 */
var Util = {
    getRandomColor : function(isRGB){
        var sColor = "";
        if (!isRGB) {
            sColor = "#";
            var sChars = "0123456789abcdef"
            for (var i = 0; i < 6; i++) {
                sColor += sChars[Math.floor(Math.random() * 16)];
            }
        } else {
            var r = parseInt(Math.random() * 255);
            var g = parseInt(Math.random() * 255);
            var b = parseInt(Math.random() * 255);
            sColor = "rgb(" + r + "," + g + "," + b + ")";
        }
        return sColor;
    },
    getStyle : function(DOM, attr){
        if (getComputedStyle) {
            return getComputedStyle(DOM, false)[attr]; //W3C
        } else {
            return DOM.currentStyle[attr]; //IE
        }
    },
    getRandomNum : function(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

/////////////
// String  //
/////////////

/**
 * interceptString
 * This is a cool && pretty function
 * @date    2017-12-08
 * @param   {number}   len eg:3
 * @return  {string}  eg : i am string => i am ...
 */
String.prototype.interceptString = function(len) {
    if (this.length > len) {
        return this.substring(0, len) + "...";
    } else {
        return this;
    }
}
/**
 * toArray
 * This is a cool && pretty function
 * @author wiolem
 * @version [version]
 * @date    2017-12-08
 * @param   {string}   tag
 * @return  {Array}
 */
String.prototype.toArray = function(tag) {
    if (this.indexOf(tag) != -1) {
        return this.split(tag);
    }else {
        if (this != '') {
            return [this.toString()];
        }else {
            return [];
        }
    }
}
/**
 * toNumber
 * This is a cool && pretty function
 * @date    2017-12-08
 * @return  {string}
 */
String.prototype.toNumber= function() { 
    return this.replace(/\D/g, ""); 
}
/**
 * toCN
 * This is a cool && pretty function
 * @date    2017-12-08
 * @return  {string}
 */
String.prototype.toCN= function() {  
    var regEx = /[^\u4e00-\u9fa5\uf900-\ufa2d]/g;  
    return this.replace(regEx, '');  
}
/**
 * toInt
 * This is a cool && pretty function
 * @date    2017-12-08
 * @return  {NaN or number}
 */
String.prototype.toInt= function() {  
    var temp = this.replace(/\D/g, "");
    return isNaN(parseInt(temp)) ? this.toString() : parseInt(temp);  
}
/**
 * startsWith
 * This is a cool && pretty function
 * @author wiolem
 * @version [version]
 * @date    2017-12-08
 * @param   {string}   tag
 * @return  {boolean}
 */
String.prototype.startsWith= function(tag){
    return this.substring(0, tag.length) == tag;
}
/**
 * endWith
 * This is a cool && pretty function
 * @date    2017-12-08
 * @param   {string}   tag
 * @return  {boolean}
 */
String.prototype.endWith= function(tag){
    return this.substring(this.length - tag.length) == tag;
}

/**
 * StringBuffer
 * This is a cool && pretty function
 * @date    2017-12-08
 */
var StringBuffer = function() {
    this._strs = new Array; 
};
StringBuffer.prototype.append = function (str) { 
    this._strs.push(str); 
}; 
StringBuffer.prototype.toString = function() { 
    return this._strs.join(""); 
};
/**
 * replaceAll
 * This is a cool && pretty function
 * @param   {string}   s1
 * @param   {string}   s2
 * @return  {string}
 */
String.prototype.replaceAll = function(s1,s2){
    return this.replace(new RegExp(s1,"gm"),s2);
}

///////////
// Array //
///////////

/**
 * remove
 * This is a cool && pretty function
 * @date    2017-12-08
 * @param   {object}   obj
 * @return  {Array}
 */
Array.prototype.remove= function (obj) {
    for (var i = 0; i < this.length; i++) {
        if (obj == this[i]) {
            this.splice(i, 1);
            break;
        }
    }
    return this;
}
/**
 * uniq
 * This is a cool && pretty function
 * @date    2017-12-08
 * @return  {Array} array
 */
Array.prototype.uniq = function(){
    return Array.from(new Set(this));
}

///////////
// Event //
///////////
/**
 * preventDefaultEvent
 * @param  {event} event
 * @return {undefined} undefined
 */

/**
 * preventEventBubble
 * @param  {event} event    
 * @return {undefined} undefined
 */

/**
 * addEventListener
 * @param {Element}   dom    
 * @param {String}   event  
 * @param {Function} callback
 * @return {undefined} undefined
 */

/**
 * removeEventListener
 * @param  {Element}   dom  
 * @param  {String}   event   
 * @param  {Function} callback  
 * @return {undefined} undefined        
 */

/**
 * EventDelegation
 * @param  {Element}    parent   父级元素
 * @param  {Element}    select    子集元素
 * @param  {String}     event    事件名
 * @param  {Function} callback   事件处理函数
 * @return {undefined} undefined
 */
var Event = {
    prevDefault : function(event){
        var evt = event || window.event;
        if (evt.preventDefault) {
            evt.preventDefault(); //W3C
        } else {
            window.event.returnValue = false; //IE
        }
        return false;
    },
    prevBubble : function(event){
        var evt = event || window.event;
        if (evt.stopPropagation) {
            evt.stopPropagation(); //W3C
        } else {
            window.event.cancelBubble = true; //IE
        }
    },
    addListener : function(dom, event, callback){
        if (dom.addEventListener) {
            dom.addEventListener(event, callback);
        } else {
            dom.attachEvent("on" + event, callback);
        }
    },
    removeListener : function(){
        if (dom.removeEventListener) {
            dom.removeEventListener(event, callback);
        } else {
            dom.deatchEvent(event, callback);
        }
    },
    delegate : function(parent, select, evt, callback){
        parent[evt] = function(event) {
            var evt = event || window.event;
            var child = parent.querySelectorAll(select);
            child = [].slice.call(child);
            var hasChild = child.indexOf(evt.target);
            if (hasChild != -1) {
                callback.call(child[hasChild], evt, hasChild);
            }
        }
    }
}

////////////
// Cookie //
////////////
/**
 * set
 * @param {string} name    name
 * @param {string} value   value
 * @param {string} path    path
 * @param {date}   expires Session
 * @return {undefined} undefined
 */
/**
 * get
 * @param  {string} name
 * @return {object} array 
 */
/**
 * remove
 * @param  {string} name
 * @param  {string} path  
 * @return {undefined} undefined
 */
var Cookie = {
    set : function(name, value, expires, path){
        var d = new Date();
        d.setDate(d.getDate() + expires);
        document.cookie = name + "=" + value + ";expires=" + d + ";path=" + path;
    },
    get : function(name){
        if(document.cookie){        
            var cookieInfo = document.cookie;
            var arr = cookieInfo.replace(/;\s/g,';').split(";");    
            for(var i=0;i<arr.length;i++){
                item = arr[i].split("=");
                if(item[0] == name){
                    brr = item[1];
                    return JSON.parse(brr);
                }
            }
            return [];
        }
        return [];
    },
    remove : function(name,path){
        this.set(name, null, -1, path);
    }
}

//////////
// Ajax //
//////////
/**
 * Get
 * @param   {string}   url
 * @param   {Function} callback
 * @param   {string}   data
 * @return  {undefined}
 */
/**
 * Post
 * @param   {string}   url
 * @param   {Function} callback
 * @param   {string}   data
 * @return  {undefined}
 */
/**
 * GetByPromise
 * @param   {string}   url
 * @param   {string}   data
 * @return  {Promise}
 */
var Ajax = {
    get : function(url, callback, data){
        var ajax = null;
        if (window.XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (data) { // data has value
            url = url + "?" + data;
        }
        ajax.open("GET", url, true);
        ajax.send();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                callback(ajax.responseText);
            }
        }
    },
    post : function(url, callback, data){
        var ajax = new XMLHttpRequest();
        ajax.open("POST", url, true);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send(data);
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                callback(ajax.responseText);
            }
        }
    },
    getByPromise : function(url, data){
        var promise = new Promise(function(success, failed) {
            var ajax = null;
            if (window.XMLHttpRequest) {
                ajax = new XMLHttpRequest();
            } else {
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            }
            if (data) { // data has value
                url = url + "?" + data;
            }
            ajax.open("GET", url, true);
            ajax.send();
            ajax.onreadystatechange = function() {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    success(ajax.responseText);
                }
            }
            setTimeout(function() {
                failed("服务器响应无效");
            }, 5000);
        });
    return promise;
    }
}

////////////
// JSONP  //
////////////

/**
 * jsonp
 * @param   {[type]}   src
 * @param   {Function} cb
 * @param   {Function} callback
 * @param   {string}   data
 * @return  {undefined}
 */
var jsonp = function(src, cb, callback, data) {
    // 创建script标签;
    var script = document.createElement("script");
    // 创建随机函数名;
    var randomCallback = "callback" + parseInt(Math.random() * 1000);
    // 随机名称的全局函数;
    window[randomCallback] = function(res) {
        callback(res);
    }
    //http://www.baidu.com?callback=随机全局函数;
    src = data ? src + "?" + cb + "=" + randomCallback + "&" + data : src + "?" + cb + "=" + randomCallback;
    script.src = src;
    document.body.appendChild(script);
    script.onload = function() { //当script加载成功后;
        setTimeout(function() {
            //删除无用script标签;
            script.remove();
            //删除无用全局函数;
            delete window[randomCallback];
        }, 100);
    }
}

////////////////////////////
// Move Animate Frame 1.0 //
////////////////////////////
/**
 *  move
 * 
 * Implementation: A attribute move.
 * 
 * @author wiolem
 * @version 1.0.0
 * @date    2017-11-21
 * 
 * @param   {Element}   dom
 * @param   {attribute}   attr eg:width height top left opacity...
 * @param   {target}   target
 * @return  {undefined}
 */

/////////////////////////////
// Move Animate Frame 2.0  //
/////////////////////////////

/**
 * moveMultiAttr
 * 
 * Implementation: Any attribute && Multiattribute move.
 * Bugs: The timer cannot close properly.
 *
 * @param   {Element}   dom     Native element object.
 * @param   {Object}   json     eg:{width:1130,height:350,opacity:30,...}.
 * @param   {Function} callback     Call after the animation is over.
 * @return  {undfined}
 */

/**
 * moveMultiAttr2
 * 
 * Implementation: Any attribute && Multiattribute move.
 * Bugs: The animation cannot be completed.
 * 
 * @param   {Element}   dom     Native element object.
 * @param   {Object}   json     eg:{width:1130,height:350,opacity:30,...}.
 * @param   {Function} callback     Call after the animation is over.
 * @return  {undfined}
 */

/**
 * impact
 * @param   {Object}   obj  eg: A moving Object
 * @param   {Object}   target  eg: Target Object
 * @return  {boolean}   true:impact || false:noImpact
 */
var Animate = {
    move : function(dom, attr, target){
        clearInterval(dom.timer);
        dom.timer = setInterval(function() {
            if (attr == "opacity") {
                var cursor = Util.getStyle(dom, attr) * 100;
            } else {
                var cursor = parseInt(Util.getStyle(dom, attr));
            }
            var speed = (target - cursor) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (target == cursor) {
                clearInterval(dom.timer);
            } else {
                if (attr == "opacity") {
                    dom.style.filter = 'alpha(opacity:' + (cursor + speed) + ')';
                    dom.style[attr] = (cursor + speed) / 100;
                } else {
                    dom.style[attr] = cursor + speed + "px";
                }
            }
        }, 30);
    },
    moveMultiAttr : function(dom, json, callback){
        dom.timer = {};
        for (let attr in json) { //json{width:1130,height:350}
            dom.timer[attr] = setInterval(function() {
                if (attr == "opacity") {
                    var cursor = Util.getStyle(dom, attr) * 100;
                } else {
                    var cursor = parseInt(Util.getStyle(dom, attr));
                } //cursor => start position
                var speed = (json[attr] - cursor) / 10; //json[attr] => target
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (cursor == json[attr]) {
                    clearInterval(dom.timer[attr]);
                    var count = 0;
                    delete dom.timer[attr]; //clear timers
                    for (var i in dom.timer) {
                        count++;
                    }
                    if (count == 0) { //clear all timers
                        if (typeof callback === "function") { //To prevent an error
                            console.log("callback", dom.timer[attr])
                            callback();
                        }
                    }
                } else {
                    if (attr == "opacity") {
                        dom.style.opacity = (cursor + speed) / 100;
                    } else {
                        dom.style[attr] = cursor + speed + "px";
                    }
                }
            }, 30);
        }
    },
    moveMultiAttr2 : function(obj, json, callback){
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var flag = true;
            for (var attr in json) {
                var current = 0;
                if (attr == "opacity") {
                    current = parseFloat(Util.getStyle(obj, attr)) * 100;
                } else if (attr == "zIndex") {
                    current = parseInt(Util.getStyle(obj, attr));
                } else {
                    current = parseInt(Util.getStyle(obj, attr));
                }
                var speed = (json[attr] - current) / 10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (current != json[attr]) {
                    flag = false;
                }
                if (attr == "opacity") {
                    obj.style.opacity = (current + speed) / 100;
                } else if (attr == "zIndex") {
                    obj.style.zIndex = json[attr];
                } else {
                    obj.style[attr] = current + speed + "px";
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (callback) {
                    callback();
                }
            }
        }, 30);
     },
     impact : function(){
        var L1 = obj.offsetLeft + obj.offsetWidth;
        var R1 = obj.offsetLeft;
        var T1 = obj.offsetTop + obj.offsetHeight;
        var B1 = obj.offsetTop;

        var L2 = target.offsetLeft;
        var R2 = target.offsetLeft + target.offsetWidth;
        var T2 = target.offsetTop;
        var B2 = target.offsetTop + target.offsetHeight;
        if (L1 < L2 || R1 > R2 || T1 < T2 || B1 > B2) { // noImpact
            return false;
        } else {
            return true;
        }
     }
}