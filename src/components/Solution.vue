<template>
    <div class="solution">
  		<div class="pc">
	  		<nav class="sider-nav clearfix">
		      	<div @click="menuIsShow" class="menu"></div>
		      	<div id="top"><i class="icon-72"></i></div>
		    </nav> 
		    <transition name='slide'>
			    <div class="sider-nav-cons" v-if="isShow">
			    	<div class="sider-nav-cons-" @click="menuIsShow"></div>
			    	<div class="sider-nav-con">
				    	<div class="cont">
				    		<div class="tips-mask" v-if="isTrue">
				    			<div class="tips-mask-con">
					    			<div class="fail"></div>
					    			<h4 style="color:#f00">很抱歉，</h4>
					    			<p>提交信息失败，请查看网络！</p>
				    			</div>
				    		</div>
				    		<i class="cancel" @click="menuIsShow"></i>
				    		<p>联系我们</p>
				    		<p>请拨打合作咨询热线：</p>
				    		<h3 style="margin-bottom: 8.33vh">400-861-8089</h3>
				    		<div class="input-con" v-if="!isSuccess">
					    		<p style="margin-bottom: 2.13vh">或者填写你的联系方式，我们会主动与你联系：</p>
								<input type="text" placeholder="姓名" v-model="userInfoItem.keyName" v-on:blur="checkData" v-on:focus="checkName">
								<input type="text" placeholder="手机号码" v-model="userInfoItem.keyTel" v-on:blur="checkData" v-on:focus="checkTel">
								<input style="margin-bottom:2.59vh" type="text" placeholder="公司名称（选填）" v-model="userInfoItem.keyComp" v-on:blur="checkData">
								<div class="btn" @click="submitData">提交</div>
								<p class="error" v-if="errormsg">{{msg}}</p>
				    		</div>
				    		<div class="tips-con" v-if="isSuccess">
				    			<div class="success"></div>
				    			<h4>感谢您对猩派客的关注！</h4>
				    			<p>我们已收到您的信息，客服会在48小时内联系您。</p>
				    		</div>
							<img class="codes" src="../assets/Group14.png" alt="">
							<p style="text-align:center">立即扫码体验</p>
				    	</div>
				    </div>
			    </div>	
		    </transition>
			<div class="selection selection-1">
				<app-header></app-header>
			  	<div class="cont">
				  	<div class="cont_">
				  		<h1><strong>“猩派客”</strong>六大综合解决方案<br/>掘金新营销模式，抢占未来经济先机！</h1>
				  		<div class="down-con" @click="slideDown">
					  		<div class="down">
					  		</div>
					  		<div class="slidedown">Scroll Down</div>
				  		</div>
				  	</div>
				</div>
			</div>
			<div class="selection selection-2">
			  	<div class="cont">
				  	<div class="cont_">
				  		<div class="discr-con">
				  			<h2 class="title">解决方案</h2>
				  			<p class="discr">“猩派客”六大综合解决方案</p>
				  		</div>
				  		<div class="list-con">
				  			<div class="list_div">
				  				<div class="list_div_">
				  					<img src="../assets/54.svg" alt="">
				  					<p>用户端小程序</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_">
				  					<img src="../assets/55.svg" alt="">
				  					<p>优先商品</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_">
				  					<img src="../assets/56.svg" alt="">
				  					<p>粉丝管理</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_">
				  					<img src="../assets/57.svg" alt="">
				  					<p>经营统计</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_">
				  					<img src="../assets/58.svg" alt="">
				  					<p>营销推广</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_">
				  					<img src="../assets/59.svg" alt="">
				  					<p>广告投放</p>
				  				</div>
				  			</div>
				  		</div>	
				  	</div>
				</div>
			</div>
			<div class="selection selection-3">
			  	<div class="cont">
				  	<div class="cont_">
				  		<div class="discr-con">
				  			<h2 class="title">服务流程</h2>
				  			<p class="discr">猩派客新零售服务体系</p>
				  		</div>
				  		<div class="list-con">
				  			<div class="list_div">
				  				<div class="list_div_">
					  				<div class="list_div_bg list_01">
					  					<img src="../assets/73.svg" alt="">
					  				</div>
					  				<p>确认合作意向</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_">
					  				<div class="list_div_bg list_02">
					  					<img src="../assets/74.svg" alt="">
					  				</div>
					  				<p>服务协议签约，进件资料收集</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_">
					  				<div class="list_div_bg list_03">
					  					<img src="../assets/75.svg" alt="">
					  				</div>
					  				<p>辅助微信公众号、小程序和直付通道的申请，确保注册成功</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_">
					  				<div class="list_div_bg list_04">
					  					<img src="../assets/76.svg" alt="">
					  				</div>
					  				<p>7个工作日开通小程序</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_">
					  				<div class="list_div_bg list_05">
					  					<img src="../assets/77.svg" alt="">
					  				</div>
					  				<p>免费指导培训运营流程</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_">
					  				<div class="list_div_bg list_06">
					  					<img src="../assets/78.svg" alt="">
					  				</div>
					  				<p>售后服务</p>
				  				</div>
				  			</div>
				  		</div>
				  	</div>
				</div>
				<app-footer></app-footer>
			</div>
		</div>
		<div class="mob">
			<div class="selection selection-1">
				<app-header></app-header>
			  	<div class="cont">
				  	<div class="cont_">
				  		<h1><strong>“猩派客”</strong>六大综合<br/>解决方案<br/>掘金新营销模式，<br/>抢占未来经济先机</h1>
				  		<div class="down-con" @click="slideDown">
					  		<div class="down">
					  		</div>
					  		<div class="slidedown">Scroll Down</div>
				  		</div>
				  	</div>
				</div>
			</div>
			<div class="selection selection-2">
			  	<div class="cont">
				  	<div class="cont_">
				  		<div class="discr-con">
				  			<h2 class="title">解决方案</h2>
				  			<p class="discr">“猩派客”六大综合解决方案</p>
				  		</div>
				  		<div class="list-con">
				  			<div class="list_div">
				  				<div class="list_div_">
				  					<img src="../assets/54.svg" alt="">
				  					<p>用户端小程序</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_">
				  					<img src="../assets/55.svg" alt="">
				  					<p>优先商品</p>
				  				</div>
				  			</div>
				  		</div>
				  		<div class="list-con">
				  			<div class="list_div">
				  				<div class="list_div_">
				  					<img src="../assets/56.svg" alt="">
				  					<p>粉丝管理</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_">
				  					<img src="../assets/57.svg" alt="">
				  					<p>经营统计</p>
				  				</div>
				  			</div>
				  		</div>
				  		<div class="list-con">
				  			<div class="list_div">
				  				<div class="list_div_">
				  					<img src="../assets/58.svg" alt="">
				  					<p>营销推广</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_">
				  					<img src="../assets/59.svg" alt="">
				  					<p>广告投放</p>
				  				</div>
				  			</div>
				  		</div>	
				  	</div>
				</div>
			</div>
			<div class="selection selection-3">
			  	<div class="cont">
				  	<div class="cont_">
				  		<div class="discr-con">
				  			<h2 class="title">服务流程</h2>
				  			<p class="discr">猩派客新零售服务体系</p>
				  		</div>
				  		<div id="swiperCon" class="swiper-container clearfix">
				          	<div class="swiper-wrapper">
				            	<div class="swiper-slide">
						  			<div class="list_div">
						  				<div class="list_div_">
							  				<div class="list_div_bg list_01">
							  					<img src="../assets/73.svg" alt="">
							  				</div>
							  				<p>确认合作意向</p>
						  				</div>
						  			</div>
				            	</div>
				            	<div class="swiper-slide">
						  			<div class="list_div">
						  				<div class="list_div_">
							  				<div class="list_div_bg list_02">
							  					<img src="../assets/74.svg" alt="">
							  				</div>
							  				<p>服务协议签约，进件资料收集</p>
						  				</div>
						  			</div>
				            	</div>
				            	<div class="swiper-slide">
						  			<div class="list_div">
						  				<div class="list_div_">
							  				<div class="list_div_bg list_03">
							  					<img src="../assets/75.svg" alt="">
							  				</div>
							  				<p>辅助微信公众号、小程序和直付通道的申请，确保注册成功</p>
						  				</div>
						  			</div>
				            	</div>
				            	<div class="swiper-slide">
						  			<div class="list_div">
						  				<div class="list_div_">
							  				<div class="list_div_bg list_04">
							  					<img src="../assets/76.svg" alt="">
							  				</div>
							  				<p>7个工作日开通小程序</p>
						  				</div>
						  			</div>
				            	</div>
				            	<div class="swiper-slide">
						  			<div class="list_div">
						  				<div class="list_div_">
							  				<div class="list_div_bg list_05">
							  					<img src="../assets/77.svg" alt="">
							  				</div>
							  				<p>免费指导培训运营流程</p>
						  				</div>
						  			</div>
				            	</div>
				            	<div class="swiper-slide">
						  			<div class="list_div">
						  				<div class="list_div_">
							  				<div class="list_div_bg list_06">
							  					<img src="../assets/78.svg" alt="">
							  				</div>
							  				<p>售后服务</p>
						  				</div>
						  			</div>
				            	</div>
				            </div>
				            <div class="swiper-pagination"></div>
				        </div>
				  	</div>
				</div>
				<app-footer></app-footer>
			</div>
			<nav class="sider-nav clearfix">
		      <div @click="menuIsShow" class="menu"></div>
		      <div id="top"><i class="icon-72"></i></div>
		    </nav> 
		    <transition name='slide'>
		    	<div class="sider-nav-cons" v-if="isShow">
			    	<div class="sider-nav-cons-" @click="menuIsShow"></div>
			    	<div class="sider-nav-con">
				    	<div class="cont">
				    		<div class="tips-mask" v-if="isTrue">
				    			<div class="tips-mask-con">
					    			<div class="fail"></div>
					    			<h4 style="color:#f00">很抱歉，</h4>
					    			<p>提交信息失败，请查看网络！</p>
				    			</div>
				    		</div>
				    		<i class="cancel" @click="menuIsShow"></i>
				    		<p>联系我们</p>
				    		<p>请拨打合作咨询热线：</p>
				    		<h3 style="margin-bottom: 8.33vh">400-861-8089</h3>
				    		<div class="input-con" v-if="!isSuccess">
					    		<p style="margin-bottom: 2.13vh">或者填写你的联系方式，我们会主动与你联系：</p>
								<input type="text" placeholder="姓名" v-model="userInfoItem.keyName" v-on:blur="checkData" v-on:focus="checkName">
								<input type="text" placeholder="手机号码" v-model="userInfoItem.keyTel" v-on:blur="checkData" v-on:focus="checkTel">
								<input style="margin-bottom:2.59vh" type="text" placeholder="公司名称（选填）" v-model="userInfoItem.keyComp" v-on:blur="checkData">
								<div class="btn" @click="submitData">提交</div>
								<p class="error" v-if="errormsg">{{msg}}</p>
				    		</div>
				    		<div class="tips-con" v-if="isSuccess">
				    			<div class="success"></div>
				    			<h4>感谢您对猩派客的关注！</h4>
				    			<p>我们已收到您的信息，客服会在48小时内联系您。</p>
				    		</div>
				    	</div>
				    </div>
			    </div>
		    </transition>
		</div>
  	</div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import qs from 'qs'

//封装过期控制代码
function set(key,value){
    var curTime = new Date().getTime();
    localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
}
function get(key, exp){
    var data = localStorage.getItem(key);
    var dataObj = JSON.parse(data);
    if (data != "" && data != null) {
	    if (new Date().getTime() - dataObj.time>exp) {
	        // console.log('信息已过期');
	    } else {
	        var dataObjDatatoJson = JSON.parse(dataObj.data)
	        return dataObjDatatoJson;
	    }
    }
}

export default {
  name: 'Solution',
  data () {
    return {
    	isMask: false,
    	isShow: false,
    	isTrue: false,
    	isSuccess: false,
    	userInfoItem: {
	        keyName : '',
	        keyTel: '',
	        keyComp: ''
	    },
	    errormsg: false,
	    msg: ''
    }
  },
  created() {
  	var dataObjData = get('information',1000*60*60*24);//过期时间为24小时
  	// var dataObjData = get('information',1000*60); //过期时间为1分钟

    if (dataObjData != "" && dataObjData != null) {
        this.isSuccess = true;
    } else {
        this.isSuccess = false;
    };
  },
  methods: {
  	slideDown() {
      let downHeight = document.documentElement.clientHeight || document.body.clientHeight;
      window.scrollTo(0, downHeight);
      this.slideShow = true;
    },
    isMasks() {
    	this.isMask = !this.isMask;
    },
    menuIsShow() {
    	this.isShow = !this.isShow;
    },
    checkName() {
    	let that = this;
    	if(that.userInfoItem.keyTel == '' || that.userInfoItem.keyTel == undefined) {
        	that.errormsg = true;
        	that.msg = '请填写手机号';
        } else if(!(/^1(3|4|5|7|8)\d{9}$/.test(that.userInfoItem.keyTel))) {
        	that.errormsg = true;
        	that.msg = '请填写正确手机号';
        } else {
        	that.errormsg = false;
        }
    },
    checkTel() {
    	let that = this;
    	if(that.userInfoItem.keyName == '' || that.userInfoItem.keyName == undefined) {
            that.errormsg = true;
            that.msg = '请填写姓名';
        } else {
	    	that.errormsg = false;
        }
    },
    checkData() {
    	let that = this;
    	if(that.userInfoItem.keyName == '' || that.userInfoItem.keyName == undefined) {
            that.errormsg = true;
            that.msg = '请填写姓名';
        } else if(that.userInfoItem.keyTel == '' || that.userInfoItem.keyTel == undefined) {
        	that.errormsg = true;
        	that.msg = '请填写手机号';
        } else if(!(/^1(3|4|5|7|8)\d{9}$/.test(that.userInfoItem.keyTel))) {
        	that.errormsg = true;
        	that.msg = '请填写正确手机号';
        } else {
        	that.errormsg = false;
        }
    },
    submitData() {
    	let that = this;
    	if(that.userInfoItem.keyName == '' || that.userInfoItem.keyName == undefined) {
            that.errormsg = true;
            that.msg = '请填写姓名';
        } else if(that.userInfoItem.keyTel == '' || that.userInfoItem.keyTel == undefined) {
        	that.errormsg = true;
        	that.msg = '请填写手机号';
        } else if(!(/^1(3|4|5|7|8)\d{9}$/.test(that.userInfoItem.keyTel))) {
        	that.errormsg = true;
        	that.msg = '请填写正确手机号';
        } else {
	        this.$http.post('https://abc.smartmapdt.com/mall/rest/businessReservation/reservation', qs.stringify({
	              	name: that.userInfoItem.keyName,
				    phone: that.userInfoItem.keyTel,
				    companyName: that.userInfoItem.keyComp
            	})).then((response) => {

				that.userInfoItem.keyName = '';
				that.userInfoItem.keyTel = '';
				that.userInfoItem.keyComp = '';
				
				if(response.data.status == '1') {
					that.errormsg = false;
					that.isTrue = false;
					that.isSuccess = true;
					var values =  '{"isSuccess": "true"}';
    				set('information', values); 

				} else if(response.data.status == '100001') {
					that.errormsg = true;
	    			that.isTrue = false;
	    			that.msg = response.data.msg;

				} else {
					that.errormsg = false;
	    			that.isTrue = true;
					that.isSuccess = false;

					setTimeout(() => {
				    	that.isTrue = false;
			    	}, 2000);
				};
		    	
			});
        };
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  mounted() {
  	// 返回顶部
    $('#top, #tops').on('click', function() {
    	$('html, body').animate({scrollTop: '0px'}, 800);
    });

  	$(window).scroll(function() {
	　　 var scrollTop = $(this).scrollTop();
	　　 var scrollHeight = $(document).height();
	　　 var windowHeight = $(this).height();

		if(scrollTop < scrollHeight / 9) {
			$('#tops').css({
				'display': 'none'
			});
		} else {
			$('#tops').css({
				'display': 'block'
			});
		}
	});

	let swiper = new Swiper('#swiperCon', {
      loop: true, 
      slidesPerView: 1,
      spaceBetween: 100,
      speed: 500,
      mousewheelControl: true,
      releaseOnEdges: true,
      paginationClickable: true,
      pagination: '.swiper-pagination',
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*selection-1*/
	.selection-1 {
		background: url('../assets/54.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-1 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50%;
		color: #FFFFFF;
		text-align: center;
		line-height: 2.34vw;
		font-size: 1.3vw;
	}
	.selection-1 h1 {
		height: 5.69vw;
		margin-bottom: 6.11vh;
		color: #FFFFFF;
		text-align: center;
		line-height: 3.39vw;
		font-size: 2.86vw;
		font-weight: 600;
		font-family: 'PingFangSC-Regular';
	}
	.selection-1 h1 strong {
		display: inline-block;
		color: #FF973F;
		line-height: 4.53vw;
		font-size: 2.86vw;
		font-family: 'PingFangSC-Regular';
	}
	.selection-1 p {
		color: #FFFFFF;
		text-align: center;
		line-height: 2.34vw; 
		font-size: 1.3vw;
		font-family: 'PingFangSC-Thin';
	}
	.selection-1 p span {
		display: inline-block;
		width: 2vw;
	}

	/*selection-2*/
	.selection-2 {
		background: #fff;
	}
	.selection-2 .title {
		color: #000;
	}
	.selection-2 .discr {
		color: #999;
	}
	.selection-2 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 88%;
	}
	.selection-2 .list-con {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 8.45vh;
	}
	.selection-2 .list_div {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 2.03vw;
		cursor: pointer;
		-webkit-transition: all 0.8s;
      	transition: all 0.8s;
	}

	.selection-2 .list_div img {
		display: block;
		width: 8.7vw;
		height: 8.7vw;
		border-radius: 50%;
		margin: 0 auto 4.44vh;
		-webkit-transition: all 0.8s;
      	transition: all 0.8s;
	}

	.selection-2 .list_div p {
		color: #000000;
		text-align: center;
		font-size: 1.3vw;
		font-family: 'PingFangSC-Light';
	}

	/*selection-3*/
	.selection-3 {
	}
	.selection-3 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 83.89vh;
		background: url('../assets/60.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-3 .cont_ {
		height: 70%;
	}
	.selection-3 .list-con {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 4.91vh;
	}
	.selection-3 .list_div {
		position: relative;
		width: 11.82vw;
		height: 18.85vw;
		margin: 0 0.26vw;
		cursor: pointer;
	}
	
	.selection-3 .list_div_ {
		position: absolute;
		left: 0;
		top: 0;
		width: 11.82vw;
		height: 18.5vw;
		background: #fff;
		z-index: 10;
		-webkit-transition: all 0.8s;
      	transition: all 0.8s;
	}
	.selection-3 .list_div_bg {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 11.82vw;
		height: 10.47vw;
	}
	.selection-3 .list_div_bg img {
		width: 3.75vw;
		height: 3.75vw;
	}
	.selection-3 .list_div p {
		width: 90%;
		margin: 4.26vh auto 0;
		color: #999999;
		text-align: center;
		font-size: 0.84vw;
		font-family: 'PingFangSC-Light';
	}
	.selection-3 .list_div_bg:after {
		position: absolute;
		left: 0;
		bottom: -2.6vw;
		content: '';
		width: 3.7vw;
		height: 4.11vw;
	}
	.selection-3 .list_01 {
		background: url('../assets/67.jpg') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_01:after {
		background: url('../assets/61.svg') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_02 {
		background: url('../assets/68.jpg') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_02:after {
		background: url('../assets/62.svg') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_03 {
		background: url('../assets/69.jpg') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_03:after {
		background: url('../assets/63.svg') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_04 {
		background: url('../assets/70.jpg') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_04:after {
		background: url('../assets/64.svg') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_05 {
		background: url('../assets/71.jpg') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_05:after {
		background: url('../assets/65.svg') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_06 {
		background: url('../assets/72.jpg') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_06:after {
		background: url('../assets/66.svg') center center no-repeat;
		background-size: 100% 100%;
	}

	.mob {
		display: none;
	}

	@media screen and (max-width: 750px) { 
		.mob {
			display: block;
		}
		/*selection-1*/
		.selection-1 {
			background: url('../assets/017.jpg') center center no-repeat;
			background-size: cover;
		}
		.selection-1 .cont {
			height: 60%;
		}
		.selection-1 h1 {
			height: auto;
			margin-bottom: 6.11vh;
			line-height: 11.39vw;
			font-size: 8vw;
		}
		.selection-1 h1 strong {
			line-height: 9.53vw;
			font-size: 8vw;
		}

		/*selection-2*/
		.selection-2 {
			height: 142.74vh;
		}
		.selection-2 .cont {
			height: 100%;
		}
		.selection-2 .list-con {
			margin-top: 7.45vh;
		}
		.selection-2 .list_div {
			margin: 0 6.13vw;
		}
		.selection-2 .list_div img {
			width: 32.27vw;
			height: 32.27vw;
			margin: 0 auto 2.44vh;
		}
		.selection-2 .list_div p {
			font-size: 4.27vw;
		}
		/*selection-3*/
		.selection-3 {
			height: 127.29vh;
		}
		.selection-3 .cont {
			height: 104.75vh;
			background: url('../assets/018.jpg') center center no-repeat;
			background-size: cover;
		}
		.selection-3 .cont_ {
			height: 80%;
		}
		#swiperCon {
			width: 60.53vw;
			height: 106.8vw;
			margin-top: 3.3vh;
		}
		.selection-3 .list-con {
			margin-top: 4.91vh;
		}
		.selection-3 .list_div {
			width: 60.53vw;
			height: 96.53vw;
			margin: 0;
		}
		
		.selection-3 .list_div_ {
			width: 60.53vw;
			height: 96.53vw;
		}
		.selection-3 .list_div_bg {
			width: 60.53vw;
			height: 60.53vw;
		}
		.selection-3 .list_div_bg img {
			width: 15.75vw;
			height: 15.75vw;
		}
		.selection-3 .list_div p {
			width: 88%;
			margin: 6.26vh auto 0;
			font-size: 4.33vw;
		}
		.selection-3 .list_div_bg:after {
			left: -1vw;
			bottom: -10.6vw;
			width: 15.7vw;
			height: 16.11vw;
		}

	}
	@media screen and (min-width: 751px) {
		.selection-2 .list_div:hover {
			-webkit-transform: scale(1.2);  
			transform: scale(1.2);
			-webkit-transition: all 0.8s;
	      	transition: all 0.8s;
		}
		.selection-2 .list_div:hover img {
		    box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.1);
		    -webkit-transition: all 0.8s;
	      	transition: all 0.8s;
		}

		.selection-3 .list_div_:hover {
			box-shadow: 0 8px 21px 0 rgba(0,0,0,0.6);
			-webkit-transform: scale(1.2);  
			transform: scale(1.2);
		    -webkit-transition: all 0.8s;
	      	transition: all 0.8s;
	      	z-index: 20;
		}

	}
</style>
