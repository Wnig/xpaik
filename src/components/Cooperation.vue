<template>
    <div class="cooperation">
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
				  		<h1><strong>“猩派客”</strong>新营销商城服务平台<br/>
							代理商全国火热招募中<br/>… …</h1>
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
				  			<h2 class="title">盈利模式</h2>
				  			<p class="discr">猩派客渠道盈利方式</p>
				  		</div>
				  		<div class="list-con">
				  			<div class="list_div">
				  				<div class="list_div_con">
					  				<div class="list_div_ list_div_bg_01">
					  				</div>
					  				<p>线上广告收入</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_con">
					  				<div class="list_div_ list_div_bg_02">
					  				</div>
					  				<p>销售佣金</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_con">
					  				<div class="list_div_ list_div_bg_03">
					  				</div>
					  				<p>标准软件服务费收入</p>
				  				</div>
				  			</div>
				  			<div class="list_div">
				  				<div class="list_div_con">
					  				<div class="list_div_ list_div_bg_04">
					  				</div>
					  				<p>定制化软件服务费收入</p>
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
							<h2 class="title">发展蓝图</h2>
							<p class="discr">店盟1-2年<br/>发展蓝图</p>
						</div>
						<div class="map">
							<img src="../assets/83.png" alt="">
							<span class="c_01">北<br/>京</span> 
							<span class="c_02">河<br/>南</span>
							<span class="c_03">江<br/>苏</span>
							<span class="c_04">上<br/>海</span>
							<span class="c_05">浙<br/>江</span>
							<span class="c_06">湖<br/>南</span>
							<span class="c_07">福<br/>建</span>
							<span class="c_08">广<br/>东</span>
							<span class="c_09">四<br/>川</span>
							<span class="c_10">重<br/>庆</span>
						</div>
						<ul>
							<li><i class="y_dot"></i>首批已覆盖区域</li>
							<li><i class="b_dot"></i>业务布局中</li>
							<li><i class="g_dot"></i>暂无发展计划</li>
						</ul>
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
				  		<h1><strong>“猩派客”</strong>新营销商城<br/>服务平台<br/>
							代理商全国火热招募中<br/>… …</h1>
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
				  			<h2 class="title">盈利模式</h2>
				  			<p class="discr">猩派客渠道盈利方式</p>
				  		</div>
				  		<div id="swiperCon" class="swiper-container clearfix">
				          	<div class="swiper-wrapper">
				            	<div class="swiper-slide">
						  			<div class="list_div">
						  				<div class="list_div_con">
							  				<div class="list_div_ list_div_bg_01">
							  				</div>
							  				<p>线上广告收入</p>
						  				</div>
						  			</div>
				            	</div>
				            	<div class="swiper-slide">
						  			<div class="list_div">
						  				<div class="list_div_con">
							  				<div class="list_div_ list_div_bg_02">
							  				</div>
							  				<p>销售佣金</p>
						  				</div>
						  			</div>
				            	</div>
				            	<div class="swiper-slide">
						  			<div class="list_div">
						  				<div class="list_div_con">
							  				<div class="list_div_ list_div_bg_03">
							  				</div>
							  				<p>标准软件服务费收入</p>
						  				</div>
						  			</div>
				            	</div>
				            	<div class="swiper-slide">
						  			<div class="list_div">
						  				<div class="list_div_con">
							  				<div class="list_div_ list_div_bg_04">
							  				</div>
							  				<p>定制化软件服务费收入</p>
						  				</div>
						  			</div>
				            	</div>
				            </div>
				            <div class="swiper-pagination"></div>
				        </div>
				  	</div>
				</div>
			</div>
			<div class="selection selection-3">
			  	<div class="cont">
				  	<div class="cont_">
				  		<div class="discr-con">
							<h2 class="title">发展蓝图</h2>
							<p class="discr">店盟1-2年<br/>发展蓝图</p>
						</div>
						<div class="map">
							<img src="../assets/021.png" alt="">
							<span class="c_01">北<br/>京</span> 
							<span class="c_02">河<br/>南</span>
							<span class="c_03">江<br/>苏</span>
							<span class="c_04">上<br/>海</span>
							<span class="c_05">浙<br/>江</span>
							<span class="c_06">湖<br/>南</span>
							<span class="c_07">福<br/>建</span>
							<span class="c_08">广<br/>东</span>
							<span class="c_09">四<br/>川</span>
							<span class="c_10">重<br/>庆</span>
						</div>
						<ul>
							<li><i class="y_dot"></i>首批已覆盖区域</li>
							<li><i class="b_dot"></i>业务布局中</li>
							<li><i class="g_dot"></i>暂无发展计划</li>
						</ul>
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
  name: 'Cooperation',
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
		background: #f5f5f5;
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
		margin-top: 10.72vh;
	}
	.selection-2 .list_div {
		width: 14.43vw;
		height: 21.3vw;
		margin: 0 1.35vw;
		cursor: pointer;
		-webkit-transition: all 0.5s;
	    transition: all 0.5s;
	}
	.selection-2 .list_div_con {
		width: 100%;
		height: 100%;
	}
	.selection-2 .list_div_ {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 15.73vw;
	}
	.selection-2 .list_div_bg_01 {
		background: url('../assets/79.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-2 .list_div_bg_02 {
		background: url('../assets/80.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-2 .list_div_bg_03 {
		background: url('../assets/81.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-2 .list_div_bg_04 {
		background: url('../assets/82.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-2 .list_div p {
		height: 5.57vw;
		color: #999999;
		text-align: center;
		line-height: 5.57vw;
		font-size: 1.3vw;
		font-family: 'PingFangSC-Light';
		background-color: #fff;
	}
	

	/*selection-3*/
	.selection-3 {
		height: 116.11vh;
		background: url('../assets/85.jpg') center center no-repeat;
		background-size: cover;
	}

	.selection-3 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	.selection-3 .discr-con {
		position: absolute;
		left: 9.32vw;
		top: 14.81vh;
		width: 23.44vw;
	}
	.selection-3 .title {
		margin-bottom: 4.17vh;
		text-align: left;
	}
	.selection-3 .title:after {
		margin: 0;
	}
	.selection-3 .discr {
		color: #FFFFFF;
		text-align: left;
		font-size: 1.67vw;
	}
	.selection-3 .map {
		position: relative;
		width: 55.68vw;
	}
	.selection-3 .map img {
		display: block;
		width: 100%;
		margin: 0 auto;
	}
	.selection-3 ul {
		position: absolute;
		right: 11.04vw;
		bottom: 33.81vh;
	}
	.selection-3 li {
		margin-bottom: 2.5vh;
		color: #FFFFFF;
		font-size: 1.04vw;
	}
	.selection-3 li i {
		display: inline-block;
		width: 0.83vw;
		height: 0.83vw;
		margin-right: 0.63vw;
		border-radius: 50%;
	}
	.selection-3 .y_dot {
		background: #FFB800;
	}
	.selection-3 .b_dot {
		background: #65C7F1;
	}
	.selection-3 .g_dot {
		background: #999999;
	}
	.selection-3 .map span {
		position: absolute;
		color: #000000;
		line-height: 1.1vw;
		font-size: 0.9vw;
		font-family: 'PingFangSC-Semibold';
	}
	.map .c_01 {
		right: 24.5%;
    	bottom: 57.5%;
    	-webkit-animation: float_01 2.6s infinite;
    	animation: float_01 2.6s infinite;
	}
	.map .c_02 {
		right: 28.5%;
    	bottom: 37.5%;
    	-webkit-animation: float_02 1.6s infinite;
    	animation: float_02 1.6s infinite;
	}
	.map .c_03 {
		right: 16.2%;
    	bottom: 37.5%;
    	-webkit-animation: float_02 2s infinite;
    	animation: float_02 2s infinite;
	}
	.map .c_04 {
		right: 13%;
    	bottom: 32.5%;
    	-webkit-animation: float_01 1.6s infinite;
    	animation: float_01 1.6s infinite;
	}
	.map .c_05 {
		right: 15%;
    	bottom: 26.5%;
    	-webkit-animation: float_02 3s infinite;
    	animation: float_02 3s infinite;
	}
	.map .c_06 {
		right: 30.5%;
    	bottom: 19.5%;
    	-webkit-animation: float_01 3s infinite;
    	animation: float_01 3s infinite;
	}
	.map .c_07 {
		right: 18.5%;
    	bottom: 15.5%;
    	-webkit-animation: float_02 1.3s infinite;
    	animation: float_02 1.3s infinite;
	}
	.map .c_08 {
		right: 26.5%;
    	bottom: 8.5%;
    	-webkit-animation: float_01 2.5s infinite;
    	animation: float_01 2.5s infinite;
	}
	.map .c_09 {
		right: 48.5%;
    	bottom: 26.5%;
    	-webkit-animation: float_02 2.8s infinite;
    	animation: float_02 2.8s infinite;
	}
	.map .c_10 {
		right: 38.5%;
    	bottom: 26.5%;
    	-webkit-animation: float_01 2s infinite;
    	animation: float_01 2s infinite;
	}
	
	@media screen and (max-width: 750px) {
		/*selection-1*/
		.selection-1 {
			background: url('../assets/019.jpg') center center no-repeat;
			background-size: cover;
		}
		.selection-1 .cont {
			height: 70%;
			line-height: 11.2vw;
			font-size: 8vw;
		}
		.selection-1 h1 {
			height: auto;
			margin-bottom: 6.11vh;
			line-height: 11.2vw;
			font-size: 8vw;
		}
		.selection-1 h1 strong {
			line-height: 11.2vw;
			font-size: 8vw;
		}

		/*selection-2*/
		.selection-2 .cont {
			height: 100%;
		}
		#swiperCon {
			width: 65.6vw;
			height: 105.53vw;
			margin-top: 3vh;
		}
		.selection-2 .list_div {
			width: 65.6vw;
			height: 96.53vw;
			margin: 0;
		}
		.selection-2 .list_div_con {
			width: 100%;
			height: 100%;
		}
		.selection-2 .list_div_ {
			width: 100%;
			height: 71.2vw;
		}
		.selection-2 .list_div p {
			height: 25.33vw;
			line-height: 25.33vw;
			font-size: 6.67vw;
		}
		
		/*selection-3*/
		.selection-3 {
			height: 143.24vh;
			background: none;
		}
		.selection-3 .cont {
			height: 120.7vh;
			background: url('../assets/020.jpg') center center no-repeat;
			background-size: cover;
		}
		.selection-3 .discr-con {
			position: static;
			width: 100%;
			padding-top: 7.95vh;
			padding-left: 9.87vw;
		}
		.selection-3 .title {
			margin-bottom: 4.17vh;
			text-align: left;
		}
		.selection-3 .title:after {
			margin: 0;
		}
		.selection-3 .discr {
			font-size: 3.2vw;
		}
		.selection-3 .map {
			width: 100%
		}
		.selection-3 .map img {
			display: block;
			width: 100%;
			margin: 0 auto;
		}
		.selection-3 ul {
			position: absolute;
			right: 65vw;
    		bottom: 90.81vh;
		}
		.selection-3 li {
			margin-bottom: 0.45vh;
			color: #FFFFFF;
			font-size: 3.2vw;
		}
		.selection-3 li i {
			display: inline-block;
			width: 2.13vw;
			height: 2.13vw;
			margin-right: 0.63vw;
			border-radius: 50%;
		}
		.selection-3 .map span {
			position: absolute;
			color: #000000;
			line-height: 4vw;
			font-size: 3.2vw;
		}

		.map .c_01 {
			right: 39.5%;
    		bottom: 55.5%;
	    	-webkit-animation: float_01 2.6s infinite;
	    	animation: float_01 2.6s infinite;
		}
		.map .c_02 {
			right: 45.5%;
	    	bottom: 37.5%;
	    	-webkit-animation: float_02 1.6s infinite;
	    	animation: float_02 1.6s infinite;
		}
		.map .c_03 {
			right: 26.2%;
	    	bottom: 37.5%;
	    	-webkit-animation: float_02 2s infinite;
	    	animation: float_02 2s infinite;
		}
		.map .c_04 {
			right: 21%;
	    	bottom: 32.5%;
	    	-webkit-animation: float_01 1.6s infinite;
	    	animation: float_01 1.6s infinite;
		}
		.map .c_05 {
			right: 24%;
	    	bottom: 26.5%;
	    	-webkit-animation: float_02 3s infinite;
	    	animation: float_02 3s infinite;
		}
		.map .c_06 {
			right: 48.5%;
	    	bottom: 19.5%;
	    	-webkit-animation: float_01 3s infinite;
	    	animation: float_01 3s infinite;
		}
		.map .c_07 {
			right: 29.5%;
	    	bottom: 15.5%;
	    	-webkit-animation: float_02 1.3s infinite;
	    	animation: float_02 1.3s infinite;
		}
		.map .c_08 {
			right: 40.5%;
	    	bottom: 8.5%;
	    	-webkit-animation: float_01 2.5s infinite;
	    	animation: float_01 2.5s infinite;
		}
		.map .c_09 {
			right: 77.5%;
	    	bottom: 26.5%;
	    	-webkit-animation: float_02 2.8s infinite;
	    	animation: float_02 2.8s infinite;
		}
		.map .c_10 {
			right: 61.5%;
	    	bottom: 26.5%;
	    	-webkit-animation: float_01 2s infinite;
	    	animation: float_01 2s infinite;
		}
	}
	@media screen and (min-width: 751px) {
		.selection-2 .list_div:hover {
			box-shadow: 0 8px 30px 0 rgba(0, 0 ,0, 0.1);
		    -webkit-transform: scale(1.05) translateY(-5px);
		    transform: scale(1.05) translateY(-5px);
		    -webkit-transition: all 0.5s;
		    transition: all 0.5s;
		}
	}
</style>
