<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './font/style.css'
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  /* CSS reset */
  html{color:#000;background:#111;-webkit-tap-highlight-color:rgba(0,0,0,0);font-family: 'PingFangSC-Thin',"Microsoft YaHei","微软雅黑","sans-serif";font-size: 12px;}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,form,input,button,textarea,p,th,td,strong{padding:0;margin:0;font-family: 'PingFangSC-Thin',"Microsoft YaHei","微软雅黑","sans-serif";}
  table{border-collapse:collapse;border-spacing:0;}
  img{border:0;}
  a{text-decoration:none; color:#999; outline:none;}/*此处待添加默认链接颜色*/
  var,em,strong{font-style:normal;}
  em,strong,th,var{font-style:inherit;font-weight:inherit;}
  li{list-style:none;}
  caption,th{text-align:left;}
  h1,h2,h3,h4{font-size:100%;font-weight:normal;}
  input,button,textarea,select,option{font-family:inherit; font-size:inherit;font-style:inherit;font-weight:inherit;}
  input,button,textarea,select{*font-size:100%;}
  .clearfix:after {content:"\200B"; display:block; height:0; clear:both; }
  .clearfix { *zoom:1; }

  html {
    position: relative;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }
  #app {
  }
  .pc {
    width: 100%;
    overflow: hidden;
  }
  .selection {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  /*侧边按钮*/
  .sider-nav {
    position: fixed;
    right: 2.45vw;
    top: 50vh;
    width: 4.38vw;
    cursor: pointer;
    z-index: 1000;
  }
  .sider-nav .menu {
    width: 100%;
    height: 6.25vw;
    background: url('../src/assets/Group10.svg') center center no-repeat;
    background-size: 100% 100%;
  }
  .sider-nav #top {
    width: 3.25vw;
    height: 3.25vw;
    margin: 0 auto;
    background: #000;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
  }
  .sider-nav #top i {
    display: block;
    width: 100%;
    text-align: center;
    color: #fff;
    line-height: 3.25vw;
    font-size: 1.5vw;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
  }
  
  
  /*侧边栏*/
  .sider-nav-cons {
    position: fixed;
    right: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    transform: translate3d(0, 0, 0);
    z-index: 99999999;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .8s
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .sider-nav-cons- {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
  }
  .sider-nav-con {
    position: absolute;
    right: 0;
    top: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21.25vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.95);
    z-index: 2;
  }


  .sider-nav-con .cont {
    position: relative;
    width: 16.46vw;
  }
  /*弹窗*/
  .sider-nav-con .tips-mask {
    position: absolute;
    top: 40%;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13.44vw;
    height: 9.38vw;
    box-shadow: 0 11px 18px 0 rgba(0,0,0,0.18);
    border-radius: 5px;
    background: #FFFFFF;
    z-index: 100;
  }

  .sider-nav-con .tips-con h4 {
    margin-bottom: 1.02vh;
    color: #FF973F;
    font-size: 1.43vw;
    font-family: 'PingFangSC-Semibold';
  }
  .sider-nav-con .tips-con p {
    line-height: 2.99vw;
    font-family: 'PingFangSC-Regular';
    font-size: 1.23vw;
  }

  .sider-nav-con .tips-mask-con {
    width: 90%;
  }
  .sider-nav-con .success {
    width: 2.4vw;
    height: 2.4vw;
    margin-bottom: 2.11vh;
    background: url('../src/assets/Group26.svg') center center no-repeat;
    background-size: 100% 100%;
  } 
  .sider-nav-con .fail {
    width: 2.4vw;
    height: 2.4vw;
    margin-bottom: 1.11vh;
    background: url('../src/assets/Shape.svg') center center no-repeat;
    background-size: 100% 100%;
  } 
  .sider-nav-con .tips-mask h4 {
    margin-bottom: 1.02vh;
    color: #FF973F;
    font-size: 0.83vw;
    font-family: 'PingFangSC-Semibold';
  }
  .sider-nav-con .tips-mask p {
    line-height: 0.99vw;
    font-family: 'PingFangSC-Regular';
    font-size: 0.63vw;
  }

  
  
  .sider-nav-con .cancel {
    position: absolute;
    right: 0;
    top: -2.94vw;
    width: 2.29vw;
    height: 2.29vw;
    background: url('../src/assets/Group22.svg') center center;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .sider-nav-con p {
    font-size: 1.04vw;
    font-family: 'PingFangSC-Regular';
  }
  .sider-nav-con h3 {
    position: relative;
    font-size: 2.08vw;
    font-family: 'PingFangSC-Semibold';
  }
  .sider-nav-con h3:after {
    content: "";
    position: absolute;
    left: -5vw;
    bottom: -3.7vh;
    width: 25.25vw;
    height: 1px;
    background: #CDCDCD;
  }
  .sider-nav-con .error {
    text-align: center;
    color: #f00;
    font-size: 0.63vw;
  }
  .sider-nav-con .codes {
    display: block;
    width: 7.71vw;
    margin: 4.33vh auto 1.11vh;
  }
  .sider-nav-con input {
    display: block;
    width: 15.46vw;
    height: 2.92vw;
    outline: none;
    margin: 0 auto 1.39vh;
    padding-left: 1vw;
    border: 1px solid #CDCDCD;
    border-radius: 5px;
    background: transparent;
    font-family: 'PingFangSC-Regular';
  }
  .sider-nav-con .btn {
    width: 16.46vw;
    height: 2.92vw;
    margin: 0 auto 1vh;
    border-radius: 5px;
    text-align: center;
    line-height: 2.92vw;
    color: #FFFFFF;
    font-size: 1.04vw;
    font-family: 'PingFangSC-Semibold';
    background: #FF973F;
    cursor: pointer;
  }
  

  .down-con {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 5.7vh;
  }
  .down {
    position: relative;
    margin: 0 auto 1.59vh;
    width: 2.29vw;
    height: 3.75vw;
    background: url('../src/assets/4.svg') center center no-repeat;
    background-size: 100% 100%;
  }
  .down:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 1.6vh;
    margin: 0 auto;
    content: '';
    width: 0.26vw;
    height: 0.78vw;
    background: url('../src/assets/5.svg') center center no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    -webkit-animation: fall 1.2s infinite;
    animation: fall 1.2s infinite;
  }
  .slidedown {
    margin: 0 auto;
    width: 11.41vw;
    height: 2.76vw;
    line-height: 2.76vw;
    font-size: 1.04vw;
    cursor: pointer;
  }

  .title {
  	position: relative;
    color: #fff;
    text-align: center;
    font-size: 2.34vw;
    line-height: 2.34vw;
    font-family: 'PingFangSC-Regular';
  }
	
  .title:after {
    content: "";
    position: absolute;
    bottom: -3.98vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 2.92vw;
    height: 0.1vw;
	background: #FF983E;
  }
  .discr {
    width: 100%;
    margin-top: 7.41vh;
	color: #FFFFFF;
	text-align: center;
	font-size: 1.56vw;
    font-family: 'PingFangSC-Thin';
  }


  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
      bottom: 0;
  }
  .swiper-pagination-bullet {
    background: rgba(255,255,255);
  }
  .swiper-pagination-bullet-active {
    background: #FF983E;
  }

  .mob {
    display: none;
  }

  /*向下效果*/
  @-webkit-keyframes fall {
    0% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    60% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    100% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
  }
  @keyframes fall {
    0% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    60% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    100% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
  }

  /*漂浮*/
  @-webkit-keyframes float_01 {
    0% {
      -webkit-transform: translateY(5px);
      -moz-transform: translateY(5px);
      -ms-transform: translateY(5px);
      -o-transform: translateY(5px);
    }
    50% {
      -webkit-transform: translateY(-5px);
      -moz-transform: translateY(-5px);
      -ms-transform: translateY(-5px);
      -o-transform: translateY(-5px);
    }
    100% {
      -webkit-transform: translateY(5px);
      -moz-transform: translateY(5px);
      -ms-transform: translateY(5px);
      -o-transform: translateY(5px);
    }
  }
  @keyframes float_01 {
    0% {
      -webkit-transform: translateY(5px);
      -moz-transform: translateY(5px);
      -ms-transform: translateY(5px);
      -o-transform: translateY(5px);
    }
    50% {
      -webkit-transform: translateY(-5px);
      -moz-transform: translateY(-5px);
      -ms-transform: translateY(-5px);
      -o-transform: translateY(-5px);
    }
    100% {
      -webkit-transform: translateY(5px);
      -moz-transform: translateY(5px);
      -ms-transform: translateY(5px);
      -o-transform: translateY(5px);
    }
  }
  @-webkit-keyframes float_02 {
    0% {
      -webkit-transform: translateY(10px);
      -moz-transform: translateY(10px);
      -ms-transform: translateY(10px);
      -o-transform: translateY(10px);
    }
    50% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    100% {
      -webkit-transform: translateY(10px);
      -moz-transform: translateY(10px);
      -ms-transform: translateY(10px);
      -o-transform: translateY(10px);
    }
  }
  @keyframes float_02 {
    0% {
      -webkit-transform: translateY(10px);
      -moz-transform: translateY(10px);
      -ms-transform: translateY(10px);
      -o-transform: translateY(10px);
    }
    50% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    100% {
      -webkit-transform: translateY(10px);
      -moz-transform: translateY(10px);
      -ms-transform: translateY(10px);
      -o-transform: translateY(10px);
    }
  }
  @-webkit-keyframes float_03 {
     0% {
      -webkit-transform: translateY(30px);
      -moz-transform: translateY(30px);
      -ms-transform: translateY(30px);
      -o-transform: translateY(30px);
    }
    50% {
      -webkit-transform: translateY(-30px);
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -o-transform: translateY(-30px);
    }
    100% {
      -webkit-transform: translateY(30px);
      -moz-transform: translateY(30px);
      -ms-transform: translateY(30px);
      -o-transform: translateY(30px);
    }
  }
  @keyframes float_03 {
    0% {
      -webkit-transform: translateY(30px);
      -moz-transform: translateY(30px);
      -ms-transform: translateY(30px);
      -o-transform: translateY(30px);
    }
    50% {
      -webkit-transform: translateY(-30px);
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -o-transform: translateY(-30px);
    }
    100% {
      -webkit-transform: translateY(30px);
      -moz-transform: translateY(30px);
      -ms-transform: translateY(30px);
      -o-transform: translateY(30px);
    }
  }
  @-webkit-keyframes float_04 {
    0% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    50% {
      -webkit-transform: translateY(-15px);
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -o-transform: translateY(-15px);
    }
    100% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
  }
  @keyframes float_04 {
    0% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    50% {
      -webkit-transform: translateY(-15px);
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -o-transform: translateY(-15px);
    }
    100% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
  }

  @media screen and (max-width: 750px) {
    .mob {
      display: block;
    }
    .pc {
      display: none;
    }
    .down {
      margin: 0 auto 2.51vh;
      width: 9.6vw;
      height: 15.73vw;
    }
    .down:after {
      top: 2.6vh;
      width: 1.07vw;
      height: 3.2vw;
    }
    .slidedown {
      width: 100%;
      height: 4.76vw;
      line-height: 4.76vw;      
      font-size: 4.27vw;
    }
    .title {
      line-height: 9.34vw;
      font-size: 8vw;
    }
    
    .title:after {
      bottom: -5.91vh;
      margin: 0 auto;
      width: 14.93vw;
      height: 0.53vw;
    }
    .discr {
      margin-top: 11.52vh;
      font-size: 5.33vw;
    }

    /*侧边按钮*/
    .sider-nav {
      top: 65vh;
      width: 12.38vw;
    }
    .sider-nav .menu {
      height: 18vw;
      background: url('../src/assets/Group10.svg') center center no-repeat;
      background-size: 100% 100%;
    }
    .sider-nav #top {
      width: 9.25vw;
      height: 9.25vw;
    }
    .sider-nav #top i {
      line-height: 9.25vw;
      font-size: 4.5vw;
    }
    
    /*侧边栏*/
    .sider-nav-cons {
      position: fixed;
      right: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99999999;
      transform: translate3d(0, 0, 0);
    }

    .slide-enter-active, .slide-leave-active {
      transition: all .3s
    }

    .slide-enter, .slide-leave-to {
      transform: translate3d(100%, 0, 0);
    }

    .sider-nav-cons- {
      position: absolute;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: 1;
    }
    .sider-nav-con {
      width: 100vw;
      height: 100vh;
      background: rgba(255, 255, 255, 0.95);
      z-index: 2;
    }

    .sider-nav-con .cont {
      position: relative;
      width: 80vw;
    }
    /*弹窗*/
    .sider-nav-con .tips-mask {
      position: absolute;
      top: 30%;
      bottom: 0;
      right: 0;
      left: 0;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 68.44vw;
      height: 54.38vw;
      box-shadow: 0 11px 18px 0 rgba(0,0,0,0.18);
      border-radius: 5px;
      background: #FFFFFF;
      z-index: 100;
    }
    .sider-nav-con .tips-con h4 {
      margin-bottom: 1.02vh;
      color: #FF973F;
      font-size: 5.43vw;
      font-family: 'PingFangSC-Semibold';
    }
    .sider-nav-con .tips-con p {
      line-height: 8.99vw;
      font-family: 'PingFangSC-Regular';
      font-size: 5.23vw;
    }
    .sider-nav-con .tips-mask-con {
      width: 80%;
    }
    .sider-nav-con .success {
      width: 9.4vw;
      height: 9.4vw;
      margin-bottom: 2.11vh;
      background: url('../src/assets/Group26.svg') center center no-repeat;
      background-size: 100% 100%;
    } 
    .sider-nav-con .tips-mask .fail {
      width: 9.4vw;
      height: 9.4vw;
      margin-bottom: 1.11vh;
    } 
    .sider-nav-con .tips-mask h4 {
      margin-bottom: 2.02vh;
      font-size: 4.83vw;
    }
    .sider-nav-con .tips-mask p {
      line-height: 6.99vw;
      font-size: 4.63vw;
    }
    
    
    .sider-nav-con .cancel {
      top: -10.94vw;
      width: 11.73vw;
      height: 11.73vw;
    }
    .sider-nav-con p {
      font-size: 4.8vw;
    }
    .sider-nav-con h3 {
      font-size: 9.67vw;
    }
    .sider-nav-con h3:after {
      content: "";
      position: absolute;
      left: -13%;
      bottom: -3.7vh;
      width: 101vw;
      height: 1px;
      background: #CDCDCD;
    }
    .sider-nav-con .error {
      font-size: 4.63vw;
    }
    .sider-nav-con .codes {
      display: block;
      width: 7.71vw;
      margin: 4.33vh auto 1.11vh;
    }
    .sider-nav-con input {
      display: block;
      width: 77.87vw;
      height: 12vw;
      outline: none;
      margin: 0 auto 3.39vh;
      padding-left: 2vw;
      font-size: 4.27vw;
      font-family: 'PingFangSC-Regular';
    }
    .sider-nav-con .btn {
      width: 77.87vw;
      height: 13.87vw;
      margin: 0 auto 3vh;
      line-height: 13.87vw;
      font-size: 5.33vw;
    }
  }
  
  @media screen and (min-width: 751px) {
    .sider-nav #top:hover {
      background: #fff;
      -webkit-transition: all .5s ease;
      transition: all .5s ease;
    }
    .sider-nav #top:hover i {
      color: #000;
      -webkit-transition: all .5s ease;
      transition: all .5s ease;
    }
  }
</style>
