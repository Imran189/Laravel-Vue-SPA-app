<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Edit Product - {{ productForm.title }} </h5>
                        <router-link :to="{name: 'Product'}" class="btn btn-primary">Product List</router-link>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 offset-3">
                                <form @submit.prevent="saveProduct">
                                    <div class="form-group mb-2">
                                        <label for="">Product Title</label>
                                        <input type="text" v-model="productForm.title" class="form-control" name="title" placeholder="product title" :class="{ 'is-invalid': productForm.errors.has('title') }">
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="">Select Product Category</label>
                                        <select name="category_id" class="form-control" v-model="productForm.category_id" :class="{ 'is-invalid': productForm.errors.has('category_id') }">
                                            <option style="display:none;" value="" selected>Select Category</option>
                                            <option :value="category.id" v-for="category in categories" :key="category.id"> {{ 
                                                category.name }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="">Product Price</label>
                                        <input type="text" v-model="productForm.price" class="form-control" name="price" placeholder="product price" :class="{ 'is-invalid': productForm.errors.has('price') }">
                                    </div>
                                    <div class="row mb-2">
                                        <div class="col-8">
                                            <div class="form-group">
                                                <label for="">Product Image</label>
                                                <input type="file" class="form-control-file"  @change="onImageChange" :class="{ 'is-invalid': productForm.errors.has('image') }">
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div style="width: 100%; max-height: 150px; overflow:hidden">
                                                <img :src="image" alt="" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Product Description</label>
                                        <textarea v-model="productForm.description" class="form-control" name="description" placeholder="product description" :class="{ 'is-invalid': productForm.errors.has('description') }" rows="3"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success mt-2">Update Product</button>
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
import { Form } from 'vform'

export default {
    
    data: () => ({
    productForm: new Form({
                title: '',
                price: '',
                image: '',
                description: '',
                _method: 'put',
            }),
            image: '',
            categories: [],
   }),

    
    methods: {
        loadProductData(){
            let id = this.$route.params.id;
            
            axios.get(`/api/product/${id}/edit`).then(response => {
                let product = response.data;
                
                this.productForm.title = product.title;
                this.productForm.price = product.price;
                this.productForm.description = product.description;
                this.productForm.category_id = product.category_id;
                this.image = product.image;
            });
        },

        async saveProduct() {
            let id = this.$route.params.id;
             const response =  this.productForm.put(`/api/product/${id}`)
             .then(({ data }) => {
                this.image = data.image;
                this.$toast.success(`Product Updated Successfully`);
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
        this.loadProductData();
        this.loadCategories();
    }
}
</script>

<style>
</style>