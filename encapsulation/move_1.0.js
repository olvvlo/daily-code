////////////////////////////
// Move Animate Frame 1.0 //
////////////////////////////
/**
 * Implementation: A attribute move.
 * 
 * @author wiolem
 * @version 1.0.0
 * @date    2017-11-21
 */

/**
 * move
 * 
 * This is a cool && pretty function
 * @author wiolem
 * @date    2017-11-21
 * @param   {Element}   dom
 * @param   {attribute}   attr eg:width height top left opacity...
 * @param   {target}   target
 * @return  {undefined}
 */
function move(dom,attr,target){
	clearInterval(dom.timer);
	dom.timer = setInterval(function(){
		if (attr == "opacity") {
			var cursor = getStyle(dom,attr) * 100;
		}else{
			var cursor = parseInt(getStyle(dom,attr));
		}
		var speed = (target - cursor) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if (target == cursor) {
			clearInterval(dom.timer);
		}else{
			if (attr == "opacity") {
				dom.style.filter='alpha(opacity:'+(cursor + speed)+')';
				dom.style[attr] = (cursor + speed) / 100;
			}else{
				dom.style[attr] = cursor + speed + "px";
			}
		}
	},30);
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