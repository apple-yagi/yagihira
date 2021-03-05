// old version
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

// new version
const darklogo = 'https://d27fueny0694oh.cloudfront.net/gif/darklogo.gif'
const logo = 'https://d27fueny0694oh.cloudfront.net/gif/logo.gif'
const darkicon_h = 'https://d27fueny0694oh.cloudfront.net/img/darkiconh.png'
const darkicon_y = 'https://d27fueny0694oh.cloudfront.net/img/darkicony.png'
const darkprofile_h =
  'https://d27fueny0694oh.cloudfront.net/img/darkprofileh.png'
const darkprofile_y =
  'https://d27fueny0694oh.cloudfront.net/img/darkprofiley.png'
const icon_h = 'https://d27fueny0694oh.cloudfront.net/img/iconh.png'
const icon_y = 'https://d27fueny0694oh.cloudfront.net/img/icony.png'
const profile_h = 'https://d27fueny0694oh.cloudfront.net/img/profileh.png'
const profile_y = 'https://d27fueny0694oh.cloudfront.net/img/profiley.png'

export default (context: any, inject: any) => {
  const urls = {
    // old
    hira_walk: hira_walk,
    hira_zonbi_walk: hira_zonbi_walk,
    close_black: close_black,
    close_white: close_white,
    left_arrow: left_arrow,
    menu_black: menu_black,
    menu_white: menu_white,
    job_it_dokata: job_it_dokata,
    pose_kiri_man: pose_kiri_man,

    // new
    darklogo,
    logo,
    darkicon_h,
    darkicon_y,
    darkprofile_h,
    darkprofile_y,
    icon_h,
    icon_y,
    profile_h,
    profile_y,
  }
  inject('urls', urls)
}
