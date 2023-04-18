<template>
  <div class="home">
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
			<video class="video1" src="../assets/video_01.mp4" autoplay="" loop=""></video>
			<div class="con">
				<app-header></app-header>
			  	<div class="cont">
				  	<div class="cont_">
				  		<h1>领先立体的<strong>新营销商城综合解决方案</strong></h1>
				  		<p>让天下没有难做的生意！<span></span>让广告没有到不了的地方！<br/>
						   让管理更加系统！<span></span>让经营更加轻松！</p>
					    <img class="codes" src="../assets/Group14.png" alt="">
					  	<p style="text-align:center">立即扫码体验</p>
				  		<div class="down-con" @click="slideDown">
					  		<div class="down">
					  		</div>
					  		<div class="slidedown">Scroll Down</div>
				  		</div>
				  	</div>
			  	</div>
			</div>
		</div>
		<div class="selection selection-2">
			<div class="con">
			  	<div class="cont">
				  	<div class="cont_">
				  		<p>管理效率低<strong>？</strong>渠道管控难<strong>？</strong>用户体验差<strong>？</strong>广告效果差<strong>？</strong>粉丝难聚集<strong>？</strong>营业额下降<strong>？</strong></p>
						<h2><img src="../assets/1.svg" alt="">帮您解决行业<strong>6</strong>大危机！</h2>
				  	</div>
			  	</div>
			</div>
		</div>
		<div class="selection selection-3">
			<div class="con">
			  	<div class="cont">
				  	<div class="cont_">
				  		<div class="discr-con">
				  			<h2 class="title">解决了什么问题？</h2>
				  			<p class="discr">“猩派客”新营销商城综合解决方案解决市场<strong>6</strong>大痛点！</p>
				  		</div>	
				  		<ul>
				  			<li>
				  				<div class="list_div list_div_01">
				  					<p>加速互联网＋的改造升级，让你轻松提升效率！</p>
				  				</div>
				  				<div class="list_div list_div_02">
				  					<p>小程序，公众号吸粉，快速聚集粉丝！</p>
				  				</div>
				  			</li>
				  			<li>
				  				<div class="list_div list_div_03">
				  					<p>改善了用户体验，让每一次的用户支付都成为您吸粉的重要入口！</p>
				  				</div>
				  				<div class="list_div list_div_04">
				  					<p>提高企业主的的营收收益，增加了其他赚钱机会！</p>
				  				</div>
				  			</li>
				  			<li>
				  				<div class="list_div list_div_05">
				  					<p>解决了企业主线上线下粉丝互动的问题！</p>
				  				</div>
				  				<div class="list_div list_div_06">
				  					<p>解决了广告主的精准投放方式！降低了广告成本！提高了效率！让企业主轻松赚取广告分润！</p>
				  				</div>
				  			</li>
				  		</ul>
				  	</div>
			  	</div>
			</div>
		</div>
		<div class="selection selection-4">
		  	<div class="cont">
			  	<div class="cont_">
			  		<div class="discr-con">
			  			<h2 class="title">产品展示</h2>
			  		</div>	
			  		<div class="poster-con">
				  		<div id="zturn" class="poster-list">
							<div class="poster-item" style="position: absolute; left: 50%; margin-left: -10.47vw; z-index: 5; opacity: 1;">
								<img src="../assets/20.png" alt="">
								<p>用户端</p>
							</div>
							<div class="poster-item" style="position: absolute; right: 50%; margin-right: 6.88vw; z-index: 4; opacity: 1;transform: scale(0.91);">
								<img src="../assets/21.png" alt="">
							</div>
							<div class="poster-item" style="position: absolute; left: 50%; margin-left: 0.88vw; z-index: 3; opacity: 1; transform: scale(0.91);">
								<img src="../assets/22.png" alt="">
							</div>
						</div>
						<div class="poster-list">
							<div class="zturn-item">
								<img src="../assets/23.png" alt="">
								<p>后台管理</p>
							</div>
						</div>
			  		</div>
			  	</div>
		  	</div>
		</div>
		<div class="selection selection-5">
		  	<div class="cont">
			  	<div class="cont_">
			  		<div class="discr-con">
			  			<h2 class="title">产品模式</h2>
			  		</div>	
			  		<div class="round-center-con">
			  			<div class="round-center-con_">
				  			<div class="round-center">
				  				<div class="round-con_"></div>
				  				<div class="round-con">
				  					<div class="con">
					  					<img src="../assets/25.svg" alt="">
					  					<p>用户端</p>
				  					</div>
				  				</div> 
				  			</div>
				  			<div class="round round_01">
				  				<div class="round-con">
					  				<img src="../assets/27.svg" alt="">
				  					<p>优选商品</p>
				  				</div>
				  			</div>
				  			<div class="round round_02">
				  				<div class="round-con">
					  				<img src="../assets/28.svg" alt="">
				  					<p>分享立减</p>
				  				</div>
				  			</div>
				  			<div class="round round_03">
				  				<div class="round-con">
					  				<img src="../assets/29.svg" alt="">
				  					<p>我的订单</p>
				  				</div>
				  			</div>
				  			<div class="round round_04">
				  				<div class="round-con">
					  				<img src="../assets/30.svg" alt="">
				  					<p>我的收藏</p>
				  				</div>
				  			</div>
				  			<div class="round round_05">
				  				<div class="round-con">
					  				<img src="../assets/31.svg" alt="">
				  					<p>在线客服</p>
				  				</div>
				  			</div>
			  			</div>
			  			<div class="round-center-con_">
				  			<div class="round-center">
				  				<div class="round-con_"></div>
				  				<div class="round-con">
				  					<div class="con">
					  					<img src="../assets/26.svg" alt="">
					  					<p>后台管理</p>
				  					</div>
				  				</div> 
				  			</div>
				  			<div class="round round_01">
				  				<div class="round-con">
					  				<img src="../assets/32.svg" alt="">
				  					<p>粉丝管理</p>
				  				</div>
				  			</div>
				  			<div class="round round_02">
				  				<div class="round-con">
					  				<img src="../assets/33.svg" alt="">
				  					<p>商品管理</p>
				  				</div>
				  			</div>
				  			<div class="round round_03">
				  				<div class="round-con">
					  				<img src="../assets/34.svg" alt="">
				  					<p>订单管理</p>
				  				</div>
				  			</div>
				  			<div class="round round_04">
				  				<div class="round-con">
					  				<img src="../assets/35.svg" alt="">
				  					<p>财务管理</p>
				  				</div>
				  			</div>
				  			<div class="round round_05">
				  				<div class="round-con">
					  				<img src="../assets/36.svg" alt="">
				  					<p>系统管理</p>
				  				</div>
				  			</div>
			  			</div>
			  		</div>
			  	</div>
		  	</div>
		</div>
		<div class="selection selection-6">
		  	<div class="cont">
			  	<div class="cont_">
			  		<div class="discr-con">
			  			<h2 class="title">优势分析</h2>
			  		</div>	
			  		<div class="img_con">
			  			<img src="../assets/38.png" alt="">
			  			<img src="../assets/39.png" alt="">
			  		</div>
			  	</div>
		  	</div>
		</div>
		<div class="selection selection-7">
		  	<div class="cont">
			  	<div class="cont_">
			  		<div class="discr-con">
			  			<h2 class="title">应用行业</h2>
			  		</div>	
			  		<div class="list-con">
			  			<div class="list_div">
			  				<div class="list_div_con">
				  				<div class="list_div_ list_div_bg_01">
				  					<img src="../assets/46.svg" alt="">
				  				</div>
				  				<p>餐饮业</p>
			  				</div>
			  			</div>
			  			<div class="list_div">
			  				<div class="list_div_con">
				  				<div class="list_div_ list_div_bg_02">
				  					<img src="../assets/47.svg" alt="">
				  				</div>
				  				<p>商超业</p>
			  				</div>
			  			</div>
			  			<div class="list_div">
			  				<div class="list_div_con">
				  				<div class="list_div_ list_div_bg_03">
				  					<img src="../assets/48.svg" alt="">
				  				</div>
				  				<p>酒店业</p>
			  				</div>
			  			</div>
			  			<div class="list_div">
			  				<div class="list_div_con">
				  				<div class="list_div_ list_div_bg_04">
				  					<img src="../assets/49.svg" alt="">
				  				</div>
				  				<p>旅游业</p>
			  				</div>
			  			</div>
			  			<div class="list_div">
			  				<div class="list_div_con">
				  				<div class="list_div_ list_div_bg_05">
				  					<img src="../assets/50.svg" alt="">
				  				</div>
				  				<p>娱乐业</p>
			  				</div>
			  			</div>
			  			<div class="list_div">
			  				<div class="list_div_con">
				  				<div class="list_div_ list_div_bg_06">
				  					<img src="../assets/51.svg" alt="">
				  				</div>
				  				<p>更多行业</p>
			  				</div>
			  			</div>
			  		</div>
			  	</div>
		  	</div>
		</div>
		<div class="selection selection-8">
			<div class="cont">
				<div class="cont_">
					<h3>猩派客新营销商城</h3>
					<h4>—— 低门槛、轻运营、高收入！<br/>
					抢占未来经济先机！</h4>
				</div>
			</div>
			<app-footer></app-footer>
		</div>
	</div>
	<div class="mob">		
		<div class="selection selection-1">
			<img class="video1" src="../assets/video_01.gif"></img>
			<div class="con">
				<app-header></app-header>
			  	<div class="cont">
				  	<div class="cont_">
				  		<div class="h1">
					  		<h1>领先立体的<br/><strong>新营销商城<br/>综合解决方案</strong></h1>
				  		</div>
				  		<p>让天下没有难做的生意！让广告没有到不了的地方！<br/>
						   让管理更加系统！让经营更加轻松！</p>
						<div class="weixin_mask" v-if="isMask">
							<div class="weixin_mask_" @click="isMasks"></div>
							<div class="weixin-con">
								<img class="codes" src="../assets/Group14.png" alt="">
						  		<p style="text-align:center">长按识别小程序码</p>
							</div>
						</div>
						<div class="btn_weixin" @click="isMasks">体验小程序</div>
				  		<div class="down-con" @click="slideDown">
					  		<div class="down">
					  		</div>
					  		<div class="slidedown">Scroll Down</div>
				  		</div>
				  	</div>
			  	</div>
			</div>
		</div>
		<div class="selection selection-2">
			<div class="con">
			  	<div class="cont">
				  	<div class="cont_">
				  		<p>管理效率低<strong>？</strong>渠道管控难<strong>？</strong><br/>
				  		用户体验差<strong>？</strong>广告效果差<strong>？</strong><br/>
				  		粉丝难聚集<strong>？</strong>营业额下降<strong>？</strong></p>
				  		<img src="../assets/1.svg" alt="">
						<h2>帮您解决行业<strong>6</strong>大危机！</h2>
				  	</div>
			  	</div>
			</div>
		</div>
		<div class="selection selection-3">
			<div class="con">
			  	<div class="cont">
				  	<div class="cont_">
				  		<div class="discr-con">
				  			<h2 class="title">解决了什么问题？</h2>
				  			<p class="discr">“猩派客”新营销商城<br/>综合解决方案解决市场<strong>6</strong>大痛点！</p>
				  		</div>	
				  		<ul>
				  			<li>
				  				<div class="list_div list_div_01">
				  					<p>加速互联网＋的改造升级，让你轻松提升效率！</p>
				  				</div>
				  			</li>
				  			<li>
				  				<div class="list_div list_div_02">
				  					<p>小程序，公众号吸粉，快速聚集粉丝！</p>
				  				</div>
				  			</li>
				  			<li>
				  				<div class="list_div list_div_03">
				  					<p>改善了用户体验，让每一次的用户支付都成为您吸粉的重要入口！</p>
				  				</div>
				  			</li>
				  			<li>
				  				<div class="list_div list_div_04">
				  					<p>提高企业主的的营收收益，增加了其他赚钱机会！</p>
				  				</div>
				  			</li>
				  			<li>
				  				<div class="list_div list_div_05">
				  					<p>解决了企业主线上线下粉丝互动的问题！</p>
				  				</div>
				  			</li>
				  			<li>
				  				<div class="list_div list_div_06">
				  					<p>解决了广告主的精准投放方式！降低了广告成本！提高了效率！让企业主轻松赚取广告分润！</p>
				  				</div>
				  			</li>
				  		</ul>
				  	</div>
			  	</div>
			</div>
		</div>
		<div class="selection selection-4">
		  	<div class="cont">
			  	<div class="cont_">
			  		<div class="discr-con">
			  			<h2 class="title">产品展示</h2>
			  		</div>	
			  		<div id="zturn" class="poster-list">
						<div class="poster-item" style="position: absolute; left: 50%; margin-left: -17.47vw; z-index: 5; opacity: 1;">
							<img src="../assets/20.png" alt="">
						</div>
						<div class="poster-item" style="position: absolute; right: 50%; margin-right: 6.88vw; z-index: 4; opacity: 1;transform: scale(0.91);">
							<img src="../assets/21.png" alt="">
						</div>
						<div class="poster-item" style="position: absolute; left: 50%; margin-left: 7.88vw; z-index: 3; opacity: 1; transform: scale(0.91);">
							<img src="../assets/22.png" alt="">
						</div>
					</div>
					<img class="code" src="../assets/53.png" alt="">
					<p>用户端</p>
					<p class="small">长按识别，立即体验</p>
					<div class="posters-list">
						<img src="../assets/010.png" alt="">
					</div>
					<p>后台管理</p>
			  	</div>
		  	</div>
		</div>
		<div class="selection selection-5">
		  	<div class="cont">
			  	<div class="cont_">
			  		<div class="discr-con">
			  			<h2 class="title">产品模式</h2>
			  		</div>	
		  			<div class="round-center-con_ round-center_01">
			  			<div class="round-center">
			  				<div class="round-con_"></div>
			  				<div class="round-con">
			  					<div class="con">
				  					<img src="../assets/25.svg" alt="">
				  					<p>用户端</p>
			  					</div>
			  				</div> 
			  			</div>
			  			<div class="round round_01">
			  				<div class="round-con">
				  				<img src="../assets/27.svg" alt="">
			  					<p>优选商品</p>
			  				</div>
			  			</div>
			  			<div class="round round_02">
			  				<div class="round-con">
				  				<img src="../assets/28.svg" alt="">
			  					<p>分享立减</p>
			  				</div>
			  			</div>
			  			<div class="round round_03">
			  				<div class="round-con">
				  				<img src="../assets/29.svg" alt="">
			  					<p>我的订单</p>
			  				</div>
			  			</div>
			  			<div class="round round_04">
			  				<div class="round-con">
				  				<img src="../assets/30.svg" alt="">
			  					<p>我的收藏</p>
			  				</div>
			  			</div>
			  			<div class="round round_05">
			  				<div class="round-con">
				  				<img src="../assets/31.svg" alt="">
			  					<p>在线客服</p>
			  				</div>
			  			</div>
		  			</div>
		  			<div class="round-center-con_ round-center_02">
			  			<div class="round-center">
			  				<div class="round-con_"></div>
			  				<div class="round-con">
			  					<div class="con">
				  					<img src="../assets/26.svg" alt="">
				  					<p>后台管理</p>
			  					</div>
			  				</div> 
			  			</div>
			  			<div class="round round_01">
			  				<div class="round-con">
				  				<img src="../assets/32.svg" alt="">
			  					<p>粉丝管理</p>
			  				</div>
			  			</div>
			  			<div class="round round_02">
			  				<div class="round-con">
				  				<img src="../assets/33.svg" alt="">
			  					<p>商品管理</p>
			  				</div>
			  			</div>
			  			<div class="round round_03">
			  				<div class="round-con">
				  				<img src="../assets/34.svg" alt="">
			  					<p>订单管理</p>
			  				</div>
			  			</div>
			  			<div class="round round_04">
			  				<div class="round-con">
				  				<img src="../assets/35.svg" alt="">
			  					<p>财务管理</p>
			  				</div>
			  			</div>
			  			<div class="round round_05">
			  				<div class="round-con">
				  				<img src="../assets/36.svg" alt="">
			  					<p>系统管理</p>
			  				</div>
			  			</div>
		  			</div>
			  	</div>
		  	</div>
		</div>
		<div class="selection selection-6">
		  	<div class="cont">
			  	<div class="cont_">
			  		<div class="discr-con">
			  			<h2 class="title">优势分析</h2>
			  		</div>	
		  			<img style="margin-top:14.18vh" src="../assets/38.png" alt="">
		  			<img style="margin-bottom:0" src="../assets/39.png" alt="">
			  	</div>
		  	</div>
		</div>
		<div class="selection selection-7">
		  	<div class="cont">
			  	<div class="cont_">
			  		<div class="discr-con">
			  			<h2 class="title">应用行业</h2>
			  		</div>	
			  		<div id="swiperCon" class="swiper-container clearfix">
			          	<div class="swiper-wrapper">
			            	<div class="swiper-slide">
					  			<div class="list_div">
					  				<div class="list_div_con">
						  				<div class="list_div_ list_div_bg_01">
						  					<img src="../assets/46.svg" alt="">
						  				</div>
						  				<p>餐饮业</p>
					  				</div>
					  			</div>
			            	</div>
			            	<div class="swiper-slide">
					  			<div class="list_div">
					  				<div class="list_div_con">
						  				<div class="list_div_ list_div_bg_02">
						  					<img src="../assets/47.svg" alt="">
						  				</div>
						  				<p>商超业</p>
					  				</div>
					  			</div>
			            	</div>
			            	<div class="swiper-slide">
					  			<div class="list_div">
					  				<div class="list_div_con">
						  				<div class="list_div_ list_div_bg_03">
						  					<img src="../assets/48.svg" alt="">
						  				</div>
						  				<p>酒店业</p>
					  				</div>
					  			</div>
			            	</div>
			            	<div class="swiper-slide">
					  			<div class="list_div">
					  				<div class="list_div_con">
						  				<div class="list_div_ list_div_bg_04">
						  					<img src="../assets/49.svg" alt="">
						  				</div>
						  				<p>旅游业</p>
					  				</div>
					  			</div>
			            	</div>
			            	<div class="swiper-slide">
					  			<div class="list_div">
					  				<div class="list_div_con">
						  				<div class="list_div_ list_div_bg_05">
						  					<img src="../assets/50.svg" alt="">
						  				</div>
						  				<p>娱乐业</p>
					  				</div>
					  			</div>
			            	</div>
			            	<div class="swiper-slide">
					  			<div class="list_div">
					  				<div class="list_div_con">
						  				<div class="list_div_ list_div_bg_06">
						  					<img src="../assets/51.svg" alt="">
						  				</div>
						  				<p>更多行业</p>
					  				</div>
					  			</div>
			            	</div>
			            </div>
			            <div class="swiper-pagination"></div>
			        </div>
			  	</div>
		  	</div>
		</div>
		<div class="selection selection-8">
			<div class="cont">
				<div class="cont_">
					<h3>—— 猩派客新营销商城 ——</h3>
					<h4>低门槛、轻运营、高收入</h4>
					<h2>抢占未来经济先机</h2>
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
  name: 'Home',
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

	$('.round-center-con_').on('click', function() {
		if($(this).hasClass('round_sel')) {
			$(this).removeClass('round_sel');
		} else {
			$(this).addClass('round_sel').siblings().removeClass('round_sel');
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
	.video1 {
	    position: relative;
	    left: 0;
	    top: -10%;
	    z-index: -1;
	    width: 110%;
	    height: 110%;
	    -o-object-fit: fill;
	    object-fit: fill;
	}
	/*selection-1*/
	.selection-1 .con {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.6);
	}
	.selection-1 h1 {
		height: 5.69vw;
		color: #FFFFFF;
		text-align: center;
		line-height: 3.39vw;
		font-size: 3.2vw;
		font-family: 'PingFangSC-Regular';
		font-weight: 600;
	}
	.selection-1 h1 strong {
		display: inline-block;
		color: #FF973F;
		line-height: 4.53vw;
		font-size: 3.2vw;
		font-family: 'PingFangSC-Regular';
	}
	.selection-1 p {
		margin-bottom: 3.46vh;
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
	
	.selection-1 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 55%;
		color: #FFFFFF;
		text-align: center;
		line-height: 2.34vw;
		font-size: 1.3vw;
	}
	.selection-1 .codes {
		width: 10.05vw;
		margin: 0 auto 1.85vh;
	}
	
	/*selection-2*/
	.selection-2 {
		background: url('../assets/11.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-2 .con {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 85%;
	}
	.selection-2 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 70vw;
		height: 21.3vw;
		background: url('../assets/10.svg') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-2 .cont p {
		margin-bottom: 1.88vh;
		color: #FFFFFF;
		font-size: 1.56vw;
		font-family: 'PingFangSC-Thin';
	}
	.selection-2 .cont p strong {
		color: #FF973F;
		font-family: 'PingFangSC-Medium';
	}
	.selection-2 .cont img {
		display: inline-block;
		width: 7.95vw;
		margin-right: 1.41vw;
	}
	.selection-2 .cont h2 {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		font-size: 2.86vw;
		font-family: 'PingFangSC-Medium';
	}
	.selection-2 .cont h2 strong {
		color: #FF973F;
		font-size: 3.9vw;
		font-family: 'PingFangSC-Semibold';
	}

	/*selection-3*/
	.selection-3 {
		background: url('../assets/12.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-3 .con {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 88%;
	}
	.selection-3 .title {
		text-indent: 1em;
	}
	.selection-3 .discr strong {
		color: #FF983E;
		line-height: 2.19vw;
		font-size: 2.34vw;
		font-family: 'PingFangSC-Semibold';
	}
	.selection-3 ul {
		margin-top: 9.54vh;
	}
	.selection-3 li {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1.7vh;
	}
	.selection-3 .list_div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 26.3vw;
		height: 5.21vw;
		margin: 0 2.71vw;
		padding-left: 5.21vw;
		color: #FFFFFF;
		font-size: 1.04vw;
		font-family: 'PingFangSC-Light';
	}
	.selection-3 .list_div p {
		width: 90%;
	}
	.selection-3 .list_div_01 {
		background: url('../assets/13.png') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_div_02 {
		background: url('../assets/14.png') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_div_03 {
		background: url('../assets/15.png') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_div_04 {
		background: url('../assets/16.png') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_div_05 {
		background: url('../assets/17.png') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_div_06 {
		background: url('../assets/18.png') center center no-repeat;
		background-size: 100% 100%;
	}

	/*selection-4*/
	.selection-4 {
		background: url('../assets/19.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-4 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 88%;
	}
	.selection-4 .cont_ {
		width: 100%;
	}
	.selection-4 .poster-con {
		display: inline-flex;
		justify-content: center;
		width: 100%;
		margin-top: 7.17vh;
	}
	.selection-4 .poster-list {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 38.02vw;
		height: 52.5vh;
	}
	.selection-4 .poster-item {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 95%;
	}
	.selection-4 .poster-item img {
		width: 14.79vw;
		height: 24.69vw;
	}
	.selection-4 .zturn-item {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 95%;
	}
	.selection-4 .zturn-item img {
		width: 38.02vw;
	}
	.selection-4 .poster-item p {
		position: absolute;
		left: 0;
		bottom: -3.02vw;
		width: 100%;
		text-align: center;
		color: #FFFFFF;
		font-size: 1.5vw;
		font-family: 'PingFangSC-Thin';
	}
	.selection-4 .zturn-item p {
		position: absolute;
		left: 0;
		bottom: -3.02vw;
		width: 100%;
		text-align: center;
		color: #FFFFFF;
		font-size: 1.5vw;
		font-family: 'PingFangSC-Thin';
	}

	/*selection-5*/
	.selection-5 {
		background: url('../assets/24.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-5 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 95%;
	}
	.selection-5 .round-center-con {
		display: flex;
		width: 100%;
		margin-top: 13.59vh;
	}
	.selection-5 .round-center-con_ {
		position: relative;
		width: 18.23vw;
		height: 18.23vw;
		margin: 0 8.91vw;
		-webkit-transition: all 0.4s;
      	transition: all 0.4s;
	}
	.selection-5 .round-center {
		display: flex;
		justify-content: center;
		align-items: center;
		-webkit-transition: all 0.8s;
      	transition: all 0.8s;
	}
	.selection-5 .round-center .round-con {
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		z-index: 10;
		-webkit-transition: all 0.8s;
      	transition: all 0.8s;
	}
	.selection-5 .round-center .con {
		width: 100%;
		-webkit-transition: all 0.4s;
	    transition: all 0.4s;
	}
	.selection-5 img {
		display: block;
		width: 4.54vw;
		height: 4.54vw;
		margin: 0 auto 1.85vh;
	}
	.selection-5 .round-center p {
		text-align: center;
		color: #666;
		font-size: 1.76vw;
		font-family: 'PingFangSC-Medium';
	}

	.selection-5 .round-con_ {
		position: absolute;
		left: 0;
		top: 0;
		width: 18.23vw;
		height: 18.23vw;
		border-radius: 50%;
		background: #fff;
		z-index: 2;
		-webkit-transition: all 0.8s;
      	transition: all 0.8s;
	}
	

	.selection-5 .round {
		position: absolute;
		left: 0;
		top: 50%;
		right: 0;
		bottom: 0;
		margin: 0 auto;
		transform: translateY(-50%);
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 6.73vw;
		height: 6.73vw;
		border-radius: 50%;
		background: #fff;
		z-index: 1;
		-webkit-transition: all 1.8s;
      	transition: all 1.8s;
	}
	.selection-5 .round img {
		display: block;
		width: 2.4vw;
		height: 2.4vw;
		margin: 0 auto;
	}
	.selection-5 .round p {
		color: #666;
		font-size: 0.94vw;
		font-family: 'PingFangSC-Light';
	}
	

	/*selection-6*/
	.selection-6 {
		background: url('../assets/37.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-6 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 95%;
	}
	.selection-6 .img_con {
		margin-top: 9.07vh;
	}
	.selection-6 .img_con img {
		width: 32.18vw;
		margin: 0 3.56vw;
	}

	/*selection-7*/
	.selection-7 {
		background: url('../assets/40.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-7 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 95%;
	}
	.selection-7 .list-con {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 16.72vh;
	}
	.selection-7 .list_div {
		width: 11.82vw;
		margin: 0 0.29vw;
		cursor: pointer;
		-webkit-transition: all 0.8s;
	    transition: all 0.8s;
	}
	.selection-7 .list_div_con {
		width: 100%;
	}
	.selection-7 .list_div_ {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 16.61vw;
	}
	.selection-7 .list_div_bg_01 {
		background: url('../assets/41.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-7 .list_div_bg_02 {
		background: url('../assets/42.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-7 .list_div_bg_03 {
		background: url('../assets/43.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-7 .list_div_bg_04 {
		background: url('../assets/44.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-7 .list_div_bg_05 {
		background: url('../assets/45.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-7 .list_div_bg_06 {
		background: url('../assets/46.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-7 .list_div img {
		display: block;
		width: 4.64vw;
		height: 4.64vw;
		margin: 0 auto;
	}
	.selection-7 .list_div p {
		height: 4.64vw;
		color: #000000;
		text-align: center;
		line-height: 4.64vw;
		font-size: 1.3vw;
		font-family: 'PingFangSC-Light';
		background-color: #fff;
	}
	

	/*selection-8*/
	.selection-8 {

	}
	.selection-8 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 84.26vh;
		background: url('../assets/52.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-8 .cont_ {
		position: absolute;
		left: 9.17vw;
		top: 12.68vw;
	}
	.selection-8 h3 {
		margin-bottom: 1.77vh;
		color: #FF983E;
		text-align: left;
		font-size: 1.82vw;
		font-family: 'PingFangSC-Light';
	}
	.selection-8 h4 {
		color: #FFFFFF;
		text-align: left;
		font-size: 2.86vw;
		font-family: 'PingFangSC-Regular';
	}

	@media screen and (max-width: 750px) {
		.mob {
			display: block;
		}
		.video1 {
		    width: 200%;
		}

		/*selection-1*/
		.selection-1 .con {
			background: rgba(0, 0, 0, 0.65);
		}
		.selection-1 .btn_weixin {
			width: 45.33vw;
			height: 10.67vw;
			margin: 0 auto;
			border-radius: 100px;
			text-align: center;
			line-height: 10.67vw;
			background: #ff973f;
			font-size: 5vw;
			font-family: 'PingFangSC-Regular';
		}
		.selection-1 .weixin_mask {
			position: fixed;
			left: 0;
			top: 0;
			width: 100vw;
			height: 100vh;
			z-index: 9999;
		}
		.selection-1 .weixin_mask_ {
			position: absolute;
			left: 0;
			top: 0;
			width: 100vw;
			height: 100vh;
			background: rgba(0, 0, 0, 0.8);
			z-index: 1;
		}
		.selection-1 .weixin-con {
			position: absolute;
			left: 0;
			top: 35%;
			right: 0;
			margin: 0 auto;
			width: 50%;
			/*height: 50%;*/
			z-index: 2;
		}
		.selection-1 .weixin-con .codes {
			width: 38.05vw;
		}
		.selection-1 .h1 {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 68vw;
			height: 54.13vw;
			margin: 0 auto 4.11vh;
			background: url('../assets/00002.png') center center no-repeat;
			background-size: 100% 100%;
		}
		.selection-1 h1 {
			height: auto;
			margin: 0;
			padding: 5vw;
			line-height: 11.2vw;
			font-size: 8vw;
		}
		.selection-1 h1 strong {
			line-height: 11.2vw;
			font-size: 8vw;
		}
		.selection-1 p {
			line-height: 6.34vw; 
			font-size: 3.8vw;
		}
		.selection-1 p span {
			display: inline-block;
			width: 2vw;
		}
		
		.selection-1 .cont {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 66%;
			color: #FFFFFF;
			text-align: center;
			line-height: 2.34vw;
			font-size: 1.3vw;
		}
		
		/*selection-2*/
		.selection-2 {
			background: url('../assets/001.jpg') center center no-repeat;
			background-size: 110% 100%;
		} 
		.selection-2 .con {
			height: 100%;
		}
		.selection-2 .cont {
			width: 100%;
			height: 100%;
			background: none;
		}
		.selection-2 .cont_ {
			height: 65%;
		}
		.selection-2 .cont p {
			margin-bottom: 13.88vh;
			text-align: center;
			font-size: 5.33vw;
		}
		.selection-2 .cont p strong {
			color: #FF973F;
		}
		.selection-2 .cont img {
			display: block;
			width: 30.95vw;
			margin: 0 auto 5.6vh;
		}
		.selection-2 .cont h2 {
			font-size: 6.67vw;
			font-family: 'PingFangSC-Medium';
		}
		.selection-2 .cont h2 strong {
			color: #FF973F;
			font-size: 9.33vw;
			font-family: 'PingFangSC-Medium';
		}

		/*selection-3*/
		.selection-3 {
			height: 114.24vh;
			background: url('../assets/002.jpg') center center no-repeat;
			background-size: cover;
		}
		.selection-3 .discr strong {
			line-height: 9.19vw;
			font-size: 8vw;
			font-family: 'PingFangSC-Semibold';
		}
		.selection-3 .con {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
		}
		.selection-3 ul {
			margin-top: 7.54vh;
		}
		.selection-3 li {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 1.25vh;
		}
		.selection-3 .list_div {
			width: 73.6vw;
			height: 14.67vw;
			margin: 0;
			padding-left: 14.67vw;
			font-size: 3.2vw;
		}
		.selection-3 .list_div p {
			width: 93%;
		}

		/*selection-4*/
		.selection-4 {
			height: 162.62vh;
			background: url('../assets/009.jpg') center center no-repeat;
			background-size: cover;
		}
		.selection-4 .cont {
			height: 100%;
		}
		.selection-4 .poster-con {
			align-items: center;
			width: 100%;
			margin-top: 4.17vh;
		}
		.selection-4 .poster-list {
			width: 100%;
			height: 62.93vw;
			margin-top: 12.11vh;
		}
		.selection-4 .poster-item {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
		}
		.selection-4 .poster-item img {
			width: 35.47vw;
			height: 62.93vw;
		}
		.selection-4 .posters-list img {
			display: block;
			width: 100vw;
		}
		.selection-4 p {
			margin-top: 1.48vh;
			color: #FFFFFF;
			text-align: center;
			font-size: 5.33vw;
		}
		.selection-4 .small {
			margin-top: 0;
			font-size: 3.2vw;
		}
		.selection-4 .code {
			display: block;
			width: 33.07vw;
			height: 33.07vw;
			margin: 3.15vh auto 0;
		}

		/*selection-5*/
		.selection-5 {
			height: 120.11vh;
			background: url('../assets/011.jpg') center center no-repeat;
			background-size: cover;
		}
		.selection-5 .cont_ {
			width: 100%;
			height: auto;
			-webkit-transition: all 0.4s;
	      	transition: all 0.4s;
		}
		.selection-5 .cont {
			height: 100%;
		}
		.selection-5 .round-center-con_ {
			position: relative;
			width: 64.33vw;
			height: 64.33vw;
			margin: 0 3.91vw;
		}
		.selection-5 .round-center_01 {
			margin: 17.41vh auto 0;
		}
		.selection-5 .round-center_02 {
			margin: 4.68vh auto 0;
		}
		.selection-5 .round-center .round-con {
			-webkit-transition: all 0.4s;
	      	transition: all 0.4s;
		}
		.selection-5 .round-center .con {
			width: 100%;
			-webkit-transition: all 0.4s;
	      	transition: all 0.4s;
		}
		.selection-5 img {
			display: block;
			width: 12.13vw;
			height: 12.13vw;
			margin: 0 auto 1.48vh;
		}
		.selection-5 .round-center p {
			text-align: center;
			color: #666;
			font-size: 6vw;
			font-family: 'PingFangSC-Medium';
		}

		.selection-5 .round_sel .round-center {
			-webkit-transition: all 0.4s;
	      	transition: all 0.4s;
		}

		.selection-5 .round-con_ {
			position: absolute;
			left: 0;
			top: 0;
			width: 64.33vw;
			height: 64.33vw;
			border-radius: 50%;
			background: #fff;
			z-index: 2;
			-webkit-transform: scale(0.8);  
			transform: scale(0.8);
			-webkit-transition: all 0.4s;
	      	transition: all 0.4s;
		}
		.selection-5 .round_sel .round-con_ {
			-webkit-transform: scale(0.5);  
			transform: scale(0.5);
			-webkit-transition: all 0.4s;
	      	transition: all 0.4s;
		}
		.selection-5 .round_sel .con {
			-webkit-transform: scale(0.65);  
			transform: scale(0.65);
			-webkit-transition: all 0.4s;
	      	transition: all 0.4s;
		}
		.selection-5 .round {
			width: 22.73vw;
			height: 22.73vw;
			-webkit-transition: all 0.4s;
	      	transition: all 0.4s;
		}
		.selection-5 .round img {
			width: 6.4vw;
			height: 6.4vw;
		}
		.selection-5 .round p {
			font-size: 3.04vw;
		}
		.selection-5 .round_sel .round {
			-webkit-transition: all 0.4s;
	      	transition: all 0.4s;
		}
		.selection-5 .round_sel .round_01 {
			transform: translateY(-180%);
		}
		.selection-5 .round_sel .round_02 {
			transform: translateX(-130%) translateY(-80%);
		}
		.selection-5 .round_sel .round_03 {
			transform: translateX(-65%) translateY(70%);
		}
		.selection-5 .round_sel .round_04 {
			transform: translateX(65%) translateY(70%);
		}
		.selection-5 .round_sel .round_05 {
			transform: translateX(130%) translateY(-80%);
		}

		/*selection-6*/
		.selection-6 {
			height: 141.65vh;
			background: url('../assets/012.jpg') center center no-repeat;
			background-size: cover;
		}
		.selection-6 .cont {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
		}
		.selection-6 img {
			display: block;
			width: 90%;
			height: auto;
			margin: 0 auto 7.68vh;
		}

		/*selection-7*/
		.selection-7 {
			background: url('../assets/015.jpg') center center no-repeat;
			background-size: cover;
		}
		.selection-7 .cont {
			height: 100%;
		}
		#swiperCon {
			width: 72vw;
			height: 108.8vw;
			margin-top: 13.72vh;
		}
		.selection-7 .list_div {
			width: 72vw;
			height: 108.8vw;
			margin: 0;
		}
		.selection-7 .list_div_con {
			width: 100%;
		}
		.selection-7 .list_div_ {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 80.07vw;
		}

		.selection-7 .list_div img {
			width: 18.67vw;
			height: 23.73vw;
		}
		.selection-7 .list_div p {
			height: 20.73vw;
			line-height: 20.73vw;
			font-size: 6.67vw;
		}

		/*selection-8*/
		.selection-8 {
			background: #111;
		}
		.selection-8 .cont {
			height: 76.7vh;
			background: url('../assets/016.jpg') center center no-repeat;
			background-size: cover;
		}
		.selection-8 .cont_ {
			position: static;
		}
		.selection-8 h3 {
			margin-bottom: 2.7vh;
			text-align: center;
			font-size: 4.27vw;
		}
		.selection-8 h4 {
			text-align: center;
			line-height: 13.33vw;
			font-size: 6.67vw;
		}
		.selection-8 h2 {
			color: #fff;
			text-align: center;
			line-height: 13.33vw;
			font-size: 9.33vw;
			font-family: 'PingFangSC-Regular';
		}
	}

	@media screen and (min-width: 751px) {
		.selection-5 .round-center-con_:hover .round-center {
			-webkit-transition: all 0.8s;
	      	transition: all 0.8s;
		}
		.selection-5 .round-center-con_:hover .con {
			-webkit-transform: scale(0.65);  
			transform: scale(0.65);
			-webkit-transition: all 0.4s;
	      	transition: all 0.4s;
		}
		.selection-5 .round-center-con_:hover .round-con_ {
			-webkit-transform: scale(0.5);  
			transform: scale(0.5);
			-webkit-transition: all 0.4s;
	      	transition: all 0.4s;
		}
		.selection-5 .round-center-con_:hover .round {
			-webkit-transition: all 0.8s;
	      	transition: all 0.8s;
		}
		.selection-5 .round-center-con_:hover .round_01 {
			transform: translateY(-190%);
		}
		.selection-5 .round-center-con_:hover .round_02 {
			transform: translateX(-130%) translateY(-80%);
		}
		.selection-5 .round-center-con_:hover .round_03 {
			transform: translateX(-80%) translateY(70%);
		}
		.selection-5 .round-center-con_:hover .round_04 {
			transform: translateX(80%) translateY(70%);
		}
		.selection-5 .round-center-con_:hover .round_05 {
			transform: translateX(130%) translateY(-80%);
		}

		.selection-7 .list_div:hover {
			box-shadow: 0 8px 21px 0 rgba(0, 0, 0, 0.6);
		    -webkit-transform: scale(1.05) translateY(-5px);
		    transform: scale(1.05) translateY(-5px);
		    -webkit-transition: all 0.8s;
		    transition: all 0.8s;
		}
	}
</style>
