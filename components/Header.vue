<template>
  <header class="header">
    <div class="container">
      <div class="header-left">
        <h1 class="site-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 280 371">
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#F15C47"
                d="M37.5,296 C58.2106781,296 75,312.789322 75,333.5 C75,354.210678 58.2106781,371 37.5,371 C16.7893219,371 2.53632657e-15,354.210678 0,333.5 C-2.53632657e-15,312.789322 16.7893219,296 37.5,296 Z"
              />
              <path
                fill="#FFC40C"
                d="M37.5,0 L242.5,0 C263.210678,-3.80448985e-15 280,16.7893219 280,37.5 C280,58.2106781 263.210678,75 242.5,75 L37.5,75 C16.7893219,75 2.53632657e-15,58.2106781 0,37.5 C-2.53632657e-15,16.7893219 16.7893219,3.80448985e-15 37.5,0 Z"
              />
              <g transform="translate(0 148)">
                <path
                  fill="#3EBAEC"
                  d="M37.5,0 L112.5,0 C133.210678,-3.80448985e-15 150,16.7893219 150,37.5 C150,58.2106781 133.210678,75 112.5,75 L37.5,75 C16.7893219,75 2.53632657e-15,58.2106781 0,37.5 C-2.53632657e-15,16.7893219 16.7893219,3.80448985e-15 37.5,0 Z"
                />
                <path
                  fill="#3C449C"
                  d="M37.5,0 C58.2106781,-3.80448985e-15 75,16.7893219 75,37.5 C75,58.2106781 58.2106781,75 37.5,75 C16.7893219,75 2.53632657e-15,58.2106781 0,37.5 C-2.53632657e-15,16.7893219 16.7893219,3.80448985e-15 37.5,0 Z"
                />
              </g>
            </g>
          </svg>
          <saber-link to="/">{{ $siteConfig.title }}</saber-link>
        </h1>
      </div>
      <div class="header-right"></div>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.header {
  padding: 60px 0;

  & > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
}

.site-title {
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 1rem;
  height: 100%;
  font-weight: 700;

  & svg {
    margin-right: 12px;
  }
}

.header-left {
  height: 100%;
}
</style>