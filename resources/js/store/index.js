import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        message:'Welcome to Dashboard',
        user:{},
        auth:false,

      }
    },
    getters:{
        getMessage(state){
            return state.message;
        },
        getUser(state){ 
            return state.user;
        }, 
        getAuthenticated(state){           
           return state.auth;
        }
    },
    mutations: {
       SET_USER(state,data){
           state.user = data
       },
       SET_AUTHENTICATED(state,data){
           state.auth = data;
       }
      },
  })

 export default  store