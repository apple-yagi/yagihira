const hira_walk = 'https://d27fueny0694oh.cloudfront.net/gif/hira_walk.gif'
const hira_zonbi_walk =
  'https://d27fueny0694oh.cloudfront.net/gif/hira_zonbi_walk.gif'
const close_black = 'https://d27fueny0694oh.cloudfront.net/svg/close-black.svg'
const close_white = 'https://d27fueny0694oh.cloudfront.net/svg/close-white.svg'
const left_arrow = 'https://d27fueny0694oh.cloudfront.net/svg/left-arrow.svg'
const menu_black = 'https://d27fueny0694oh.cloudfront.net/svg/menu-black.svg'
const menu_white = 'https://d27fueny0694oh.cloudfront.net/svg/menu-white.svg'
const job_it_dokata =
  'https://d27fueny0694oh.cloudfront.net/img/job_it_dokata.png'
const pose_kiri_man =
  'https://d27fueny0694oh.cloudfront.net/img/pose_kiri_man.png'

export default (context: any, inject: any) => {
  const urls = {
    hira_walk: hira_walk,
    hira_zonbi_walk: hira_zonbi_walk,
    close_black: close_black,
    close_white: close_white,
    left_arrow: left_arrow,
    menu_black: menu_black,
    menu_white: menu_white,
    job_it_dokata: job_it_dokata,
    pose_kiri_man: pose_kiri_man,
  }
  inject('urls', urls)
}
