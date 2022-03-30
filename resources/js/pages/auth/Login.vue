<template lang="">
    <div class="container py-3">
        <div class="row">
            <div class="col-md-6 offset-3">
                <div class="card card-default">
                    <div class="card-header">
                        <h4 class=" text-center">Login page</h4>
                    </div>
                    <div class="card-body">
                        <form  @submit.prevent="login">
                            <div class="form-group mb-2">
                                <label for="">Email</label>
                                <input type="text" v-model="loginForm.email" class="form-control" placeholder="Email Here">
                                <div class="text-danger" v-if="loginForm.errors.has('email')" v-html="loginForm.errors.get('email')" />

                            </div>
                            <div class="form-group mb-2">
                                <label for="">Password</label>
                                <input type="password" v-model="loginForm.password" class="form-control" placeholder="Password Here">
                                <div class="text-danger" v-if="loginForm.errors.has('password')" v-html="loginForm.errors.get('password')" />
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-info px-4">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Form from 'vform';
export default {
    data: () => ({
    loginForm: new Form({
                email: 'user@gmail.com',
                password: 'password',
 
            }),          
   }),

    methods: {
       async login() {
            axios.get('/sanctum/csrf-cookie').then(response => {
               this.loginForm.post('/login').then(response=>{
                     this.getUserData();
                    this.$router.push({name:'Dashboard'})
                    this.$toast.success(`Log In Successful`);
               });
                
            });
            
        },
         getUserData(){
             axios.get('/api/user').then(response =>{
             let user = response.data;
             this.$store.commit('SET_USER', user);  
             
            });
        }
    },
    mounted () {
        
    },

}
</script>
<style lang="">
    
</style>