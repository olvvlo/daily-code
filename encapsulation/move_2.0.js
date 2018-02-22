/////////////////////////////
// Move Animate Frame 2.0  //
/////////////////////////////

/**
 * Implementation: Any attribute && Multiattribute move.
 * Bugs: The timer cannot close properly.
 * 
 * @author wiolem
 * @version 2.0.0
 * @date    2017-11-21
 */

/**
 * move
 *
 * This is a cool && pretty function
 * @author wiolem
 * @date    2017-11-21
 * @param   {Element}   dom		Native element object.
 * @param   {Object}   json		eg:{width:1130,height:350,opacity:30,...}.
 * @param   {Function} callback		Call after the animation is over.
 * @return  {undfined}
 */
function move(dom,json,callback){
	dom.timer = {};
	for (let attr in json) {//json{width:1130,height:350}
		dom.timer[attr] = setInterval(function(){
			if (attr == "opacity") {
				var cursor = getStyle(dom,attr) * 100;
			}else{
				var cursor = parseInt(getStyle(dom,attr));
			}//cursor => start position
			var speed = (json[attr] - cursor) / 10;//json[attr] => target
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if (cursor == json[attr]) {
				clearInterval(dom.timer[attr]);
				var count = 0;
				delete dom.timer[attr];//clear timers
				for(var i in dom.timer){
					count++;
				}
				if (count == 0) {//clear all timers
					if (typeof callback === "function") {//To prevent an error
						console.log("callback",dom.timer[attr])
						callback();
					}
				}
			}else{
				if (attr == "opacity") {
					dom.style.opacity = (cursor + speed) / 100; 
				}else{
					dom.style[attr] = cursor + speed + "px";
				}
			}
		},30);
	}
}

/**
 * getStyle
 * 
 * This is a cool && pretty function
 * @author wiolem
 * @date    2017-11-21
 * @param   {Element}   dom
 * @param   {attribute}   attr
 * @return  {value}	  attr.value
 */
function getStyle(dom,attr){
	if (getComputedStyle) {
		return getComputedStyle(dom,false)[attr];
	}else{
		return dom.currentStyle[attr];
	}
}