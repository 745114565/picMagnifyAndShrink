'use strict'
window.onload = function(){
	console.log('-------------- index.html加载完成，开始加载 index.js文件----');
	//获取放大按钮
	var mangnify = gById('mangnify');
	var shrink = gById('shrink');
	var img = gById('img');
	var maxWidth = img.width * 3;
	var minWidth = img.width * 0.5
	
	//放大按钮
	mangnify.onclick = function(){
		console.log('放大按钮被点击');
		//放大图片 每次放大30%
		mangnifyFun(img,maxWidth);		
	
		};
	
	//缩小按钮
	shrink.onclick = function(){
		console.log('缩小按钮被点击！');
		shrinkFun(img,minWidth);
		console.log('缩小结束！');
		
	}
	console.log('-------------- index.js加载成功！----');

	
}


function shrinkFun(img,minWidth){
	var endWidth = img.width*0.2;
	var minTimer = setInterval(function(){
		if(img.width > endWidth){
			if(img.width>minWidth){
				img.width = img.width*0.95;
				img.height = img.height*0.95;		
			}else{
				alert('图片已经缩小到最小');
				clearInterval(minTimer);
			}
		}else{
			clearInterval(minTimer);
		}
		
	},20);
}
/**
 * 放大图片
 * @param {Object} img
 */
function mangnifyFun(img,maxWidth){
	
	var endWidth = img.width*1.3;
	var maxTimer = setInterval(function(){
		if(img.width < endWidth){
			if(img.width < maxWidth){
				img.width = img.width*1.05;
				img.height = img.height*1.05;
			}else{
				alert('图片已放到最大');
				clearInterval(maxTimer);
			}
		}else{
			clearInterval(maxTimer);
		}
		
	},20);
	
}
/**
 * 根据id获取元素
 * @param {Object} id
 */
function gById(id){
	return document.getElementById(id);
}