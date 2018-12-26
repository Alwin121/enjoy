import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex) //安装使用这个功能

const store = new Vuex.Store({
	state:{
		isShow:true,
		datalist:[],
		title:""
		//共享状态
	},

	actions:{
		
	},


	mutations:{
	}
		
})




//store "全局"对象
export default store  