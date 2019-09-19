<template>
  <header class="header">
    <div class="container">
      <div class="header-left">
        <h1 class="site-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 280 348">
            <g fill="none" fill-rule="evenodd">
              <polygon fill="#E1E7FA" points="0 0 140 0 280 137 0 137" />
              <polygon
                fill="#5D64FF"
                points="0 0 140 0 280 140 140 140 140 280 0 139.489"
                transform="translate(0 68)"
              />
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
  border-bottom: 1px solid #ebecf1;
  height: var(--header-height);

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
    margin-right: 10px;
  }
}

.header-left {
  height: 100%;
}
</style>