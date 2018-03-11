<template>
  <div id="app">
    <div class="wrapper">
      <Header />
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-3">
            <Sidebar />
          </div>

          <div class="col-12 col-md-9">
            <router-view/>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import Sidebar from '@/components/shared/sidebar'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrapper {
  min-height: calc(100vh - 100px);
}
</style>
