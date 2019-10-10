<template>
  <div class="page">
    <Header />
    <div class="container">
      <div class="landing">
        <div class="desc">{{ $siteConfig.description }}</div>
        <div
          class="goal"
        >Our goal is to provide simple, effective open source softwares and services you would enjoy using.</div>
      </div>
      <Product
        v-for="product in products"
        :key="product.title"
        :title="product.title"
        :tagline="product.tagline"
        :description="product.description"
        :titleColor="product.titleColor"
        :link="product.link"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Product from '@/components/Product.vue'

export default Vue.extend({
  components: {
    Header,
    Footer,
    Product
  },

  data() {
    return {
      products: [
        {
          title: 'Evergarden',
          tagline: 'A design system for Vue.js',
          description: '',
          titleColor: '#37a065'
        }
      ]
    }
  }
})
</script>

<style scoped>
.landing {
  margin: 200px 0;
}

h1 {
  font-size: 7rem;
  font-weight: bold;
  margin: 0;
  margin-left: -7px;
  line-height: 1;
  margin-top: 100px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 4rem;
    margin-top: 20px;
  }
}

.desc {
  font-size: 2.6rem;
  font-weight: 700;
}

.goal {
  margin-top: 20px;
  color: #121212;
}
</style>
