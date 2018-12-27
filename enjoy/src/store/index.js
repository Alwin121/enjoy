import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex) //安装使用这个功能

const store = new Vuex.Store({
	state:{
		isTopShow:true,
		isBottomShow:true
		//共享状态
	},

	actions:{
		
	},


	mutations:{
		showTop(state,payload){
			state.isTopShow = true
		},
		hideTop(state,payload){
			state.isTopShow = false
		},
		hideBottom(state,payload){
			state.isBottomShow = false
		},
		showBottom(state,payload){
			state.isBottomShow = true
		}
	}
		
})




//store "全局"对象
export default store  