import './css/global.css'

export default ({ setHead }) => {
  setHead(vm => {
    return {
      title: `${vm.$siteConfig.title} Studio`,
      meta: [
        {
          name: 'description',
          content: vm.$siteConfig.description
        }
      ]
    }
  })
}