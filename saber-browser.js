import './css/global.css'

export default ({ setHead }) => {
  setHead(vm => {
    return {
      title: vm.$siteConfig.title.toUpperCase(),
      meta: [
        {
          name: 'description',
          content: vm.$siteConfig.description
        }
      ],
      link: [
        {
          href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap',
          rel: 'stylesheet'
        }
      ]
    }
  })
}