const hira_walk = 'http://d27fueny0694oh.cloudfront.net/gif/hira_walk.gif'
const hira_zonbi_walk =
  'http://d27fueny0694oh.cloudfront.net/gif/hira_zonbi_walk.gif'

export default (context: any, inject: any) => {
  const urls = {
    hira_walk: hira_walk,
    hira_zonbi_walk: hira_zonbi_walk,
  }
  console.log(urls)
  inject('urls', urls)
}