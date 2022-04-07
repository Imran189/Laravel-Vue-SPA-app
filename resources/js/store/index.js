import { createStore } from 'vuex'
import router from '../router'
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
      actions:{
        authUser ({ commit, dispatch }) {
            return axios.get('/api/user').then((response) => {
                commit('SET_AUTHENTICATED', true)
                commit('SET_USER', response.data)
                localStorage.setItem("auth", true);
                
                if(router.currentRoute.name !== null){
                    router.push({ name: 'Dashboard' })
                };

            }).catch(() => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', null)
                localStorage.removeItem("auth");

                if(router.currentRoute.name !== 'login'){
                    router.push({ name: 'LoginVue' })
                };
            })
        },
      }
  })

 export default  store