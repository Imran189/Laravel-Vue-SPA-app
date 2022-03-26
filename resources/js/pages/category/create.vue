<template lang="">
    <div class="container py-4">
        <div class="row">
            <div class="col-md-8 offset-2">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-item-center">
                        <h5>Create Category</h5>
                        <router-link class="btn btn-info" :to="{name: 'Category'}">Category List</router-link>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 offset-3">
                                <form @submit.prevent="createCategory">
                                    <div class="form-group">
                                     <label for="" class="mb-2">Category Name:</label>
                                     <input type="text" v-model="categoryForm.name" class="form-control" name="name"  placeholder="Category Name" />
                                     <div v-if="categoryForm.errors.has('name')" v-html="categoryForm.errors.get('name')" />
                                    </div>   
                                    <div class="form-group">
                                     <button type="submit" class="btn btn-primary mt-3">Submit</button>
                                    </div>  
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Form from 'vform';

export default {
    data: () => ({
    categoryForm: new Form({
      name: '',    
    })
   }),
    methods: {
        async createCategory() {
             const response = await this.categoryForm.post('/api/category')
            .then(response=>{
                this.categoryForm.name='',
                this.$toast.success(`Category Added`);
               
                 console.log(response);
            })
           
        }
    },
}
</script>
<style lang="">
    
</style>