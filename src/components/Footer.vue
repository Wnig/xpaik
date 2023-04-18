<template>
  <footer>
  	<div class="pc">
	  	<div class="footer">
	  		<h1>全国统一客服热线：4400-861-8089</h1>
	  		<p>闽ICP备16018304号-2</p>
	  	</div>
  	</div>
  	<div class="mob">
  		<h4>全国统一客服热线</h4>
  		<h1>400-861-8089</h1>
	  	<p>闽ICP备16018304号-2</p>
  	</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 16.11vh;
		background: #111;
	}
	h1 {
		margin-bottom: 1.02vh;
		color: #7A7A7A;
		font-family: 'PingFangSC-Light';
		font-size: 1.3vw;
	}
	p {
		color: #373737;
		font-size: 0.73vw;
		font-family: 'PingFangSC-Light';
	}
	.mob {
		display: none;
	}

	@media screen and (max-width: 750px) {
		.mob {
	      	display: block;
	    }

		footer {
			height: 23.19vh;
		}

		h4 {
			margin-bottom: 0.3vh;
			color: #7A7A7A;
			font-size: 3.73vw;
			font-family: 'PingFangSC-Regular';
		}
		h1 {
			margin-bottom: 1.48vh;
			font-size: 7vw;
		}
		p {
			font-size: 3.73vw;
		}
	}

</style>
