<template>
    <div class="container py-3">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Create Product</h5>
                        <router-link :to="{name: 'Product'}" class="btn btn-primary">Product List</router-link>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 offset-3">
                                <form @submit.prevent="createProduct">
                                    <div class="form-group mb-2">
                                        <label for="">Product Title</label>
                                        <input type="text" v-model="productForm.title" class="form-control" name="title" placeholder="product title">
                                     <div class="text-danger" v-if="productForm.errors.has('title')" v-html="productForm.errors.get('title')" />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="">Select Product Category</label>
                                        <select name="category_id" class="form-control" v-model="productForm.category_id" >
                                            <option style="display:none;" value="" selected>Select Category</option>
                                            <option :value="category.id" v-for="category in categories" :key="category.id"> {{ 
                                                category.name }}</option>
                                        </select>
                                        
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="">Product Price</label>
                                        <input type="text" v-model="productForm.price" class="form-control" name="price" placeholder="product price">
                                         <div class="text-danger" v-if="productForm.errors.has('price')" v-html="productForm.errors.get('price')" />
                                        
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="">Product Image</label>
                                        <input type="file" class="form-control-file"  @change="onImageChange">
                                         <div class="text-danger" v-if="productForm.errors.has('image')" v-html="productForm.errors.get('image')" />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="">Product Description</label>
                                        <textarea v-model="productForm.description" class="form-control" name="description" placeholder="product description" rows="3"></textarea>
                                         <div class="text-danger" v-if="productForm.errors.has('description')" v-html="productForm.errors.get('description')" />
                                    </div>
                                    <div class="form-group mb-2">
                                        <button type="submit" class="btn btn-success">Create Product</button>
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
import Form from 'vform';

export default {
    data: () => ({
    productForm: new Form({
                title: '',
                price: '',
                category_id: '',
                image: '',
                description: '',
            }),
            categories: [],
   }),

    methods: {
        createProduct(){

             const response =  this.productForm.post('/api/product')
            .then(response=>{
                this.productForm.title = '';
                this.productForm.price = '';
                this.productForm.image = '';
                this.productForm.description = '';
                this.$toast.success(`Product Added Successfully`);
               
                 console.log(response);
            })
           
        },
        onImageChange(e){
            const file = e.target.files[0]
            // Do some client side validation...
            this.productForm.image = file
        },
        loadCategories(){
            axios.get('/api/category').then(response => {
                this.categories = response.data;
            });
        }
    },
    mounted(){
        this.loadCategories();
    }
}
</script>

<style>
</style>