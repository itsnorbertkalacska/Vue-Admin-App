const ProductStore = {
  data: {
    products: []
  },
  methods: {
    addProduct (name) {
      const product = {
        id: Date.now(),
        name
      }
      ProductStore.data.products.push(product)
    },
    deleteProduct (id) {
      ProductStore.data.products = ProductStore.data.products.filter(product => (product.id !== id))
    },
    updateProduct (product) {
      ProductStore.data.products = ProductStore.data.products.map(item => {
        if (item.id === product.id) return product
        else return item
      })
    },
    getById (id) {
      return ProductStore.data.products.filter(product => (product.id === id))[0]
    }
  }
}

export default ProductStore
