<template>
  <div class="product">
    <div class="title" :style="{[`--title-color`]: titleColor}">{{ title }}</div>
    <div class="tagline" v-html="tagline"></div>
    <div class="description" v-html="description"></div>
    <div class="link" v-if="link"></div>
    <div class="coming-soon" v-else>Coming Soon..</div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    tagline: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String
    },
    titleColor: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.product {
  margin: 200px 0;
}

.title {
  font-weight: 700;
  position: relative;
  padding-left: 25px;

  &:before {
    content: '';
    display: inline-block;
    height: 4px;
    width: 15px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: var(--title-color);
  }
}

.tagline {
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 10px;
}

.coming-soon {
  margin-top: 20px;
  font-size: 0.8em;
  color: #555;
}
</style>