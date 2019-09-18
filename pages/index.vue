<template>
  <div class="container">
    <h1>Freefolk</h1>
    <div class="desc">{{ $siteConfig.description }}</div>
    <div class="showcase">
      <details><summary>More contents are coming soon..</summary>
      
      <p>
        We're working on some new projects, stay tuned!
      </p>
      </details>
    </div>
    <div class="footer">
      <div class="footer-left">
        <span class="copyright">&copy; {{ $siteConfig.title }} some rights reserved</span>
      </div>
      <div class="footer-right">
        <svg
          id="i-github"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="1em"
          height="1em"
        >
          <path
            stroke-width="0"
            fill="currentColor"
            d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"
          />
        </svg>
        <a class="github-link" href="https://github.com/freefolk" target="_blank">GitHub</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  margin-top: 30px;
}

.showcase {
  margin-top: 100px;
}

.footer {
  border-top: 1px solid #e2e2e2;
  padding-top: 60px;
  margin-top: 60px;
  font-size: 0.9rem;
  color: #a5a5a5;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .copyright {
    text-transform: uppercase;
  }

  & .footer-right {
    display: flex;
    align-items: center;
  }

  & a {
    color: inherit;

    &:hover {
      color: #000;
    }
  }

  & svg {
    margin-right: 5px;
  }
}
</style>