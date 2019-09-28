import './css/global.css'

export default ({ setHead }) => {
  setHead(vm => {
    return {
      title: `Freefolk Software`,
      meta: [
        {
          name: 'description',
          content: vm.$siteConfig.description
        }
      ]
    }
  })
}