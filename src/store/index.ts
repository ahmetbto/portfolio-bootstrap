import { createStore } from 'vuex'

const store = createStore({
  state: {
	    menuNumber: 0,
  },
  getters: {
	getMenuNumber: state=>{
		return state.menuNumber
	}
  },
  mutations: {
	 changeMenuNUmber:(state,payload)=> {
		state.menuNumber=payload



    },
  },
  actions: {
  },
  modules: {
  }
})
export default store
