<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-items">
        <div class="footer-item">
          &copy; Freefolk Software
        </div>
        <div class="footer-item">
          <a href="https://github.com/freefolk">GitHub</a>
        </div>
        <div class="footer-item">
          <a href="https://twitter.com/_egoistlily">Twitter</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 60px 0 100px 0;
  font-size: 0.7rem;
  color: #a5a5a5;

  & a {
    color: inherit;

    &:hover {
      color: #000;
    }
  }
}

.footer-items {
  display: flex;
  align-items: center;
}

.footer-item {
  &:not(:last-child):after {
    content: '·';
    margin: 0 10px;
  }
}
</style>