import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        message:'Welcome to Dashboard',
        user:{},
        authenticated:false,

      }
    },
    getters:{
        getMessage(state){
            return state.message;
        },
        getUser(state){
            store.commit('SET_AUTHENTICATED', true);
            return state.user;
        }, 
        getAuthenticated(state){           
           return state.authenticated;
        }
    },
    mutations: {
       SET_USER(state,data){
           state.user = data
       },
       SET_AUTHENTICATED(state,data){
           state.authenticated = data;
       }
      },
  })

 export default store