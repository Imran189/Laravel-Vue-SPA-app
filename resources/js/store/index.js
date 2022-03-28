import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        message:'Welcome to Dashboard',
        user:{},
      }
    },
    getters:{
        getMessage(state){
            return state.message;
        },
        getUser(state){
            return state.user;
        }
    },
    mutations: {
       SET_USER(state,data){
           state.user = data
       }
      },
  })

 export default store