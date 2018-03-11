<template>
  <div>
    <h1 v-if="product">{{product.name}}</h1>
    <form v-on:submit="updateProduct(editProduct)" v-if="product">
      <input type="text" v-model="editProduct.name" placeholder="Name"><br>
      <input type="number" v-model="editProduct.price" placeholder="Price"><br>
      <textarea v-model="editProduct.description" placeholder="Description"></textarea><br>
      <button type="button" v-on:click="deleteProduct(product.id)">Delete</button>
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import ProductStore from '@/stores/ProductStore'

export default {
  name: 'ProductDetail',
  data () {
    return {
      editProduct: null,
      product: null
    }
  },
  mounted () {
    this.product = ProductStore.methods.getById(this.$route.params.id)
    if (this.product) this.editProduct = Object.assign({}, this.product)
    else this.$router.push('/')
  },
  methods: {
    deleteProduct (id) {
      if (confirm('Are you sure you want to delete this product?')) {
        ProductStore.methods.deleteProduct(id)
        this.$router.push('/')
      }
    },
    updateProduct (product) {
      ProductStore.methods.updateProduct(product)
      this.$router.push('/')
    }
  }
}
</script>
