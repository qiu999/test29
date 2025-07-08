export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/shop/index',
    'pages/play/index',
    'pages/order/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#333',
    selectedColor: '#007AFF',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'static/images/tab_bar/i_h.png',
        selectedIconPath: 'static/images/tab_bar/i_h_o.png'
      },
      {
        pagePath: 'pages/shop/index',
        text: '点餐',
        iconPath: 'static/images/tab_bar/i_p.png',
        selectedIconPath: 'static/images/tab_bar/i_p_o.png'
      },
      {
        pagePath: 'pages/play/index',
        text: '潮玩',
        iconPath: 'static/images/tab_bar/i_s.png',
        selectedIconPath: 'static/images/tab_bar/i_s.png'
      }, {
        pagePath: 'pages/order/index',
        text: '订单',
        iconPath: 'static/images/tab_bar/i_o.png',
        selectedIconPath: 'static/images/tab_bar/i_o_o.png'
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: 'static/images/tab_bar/i_m.png',
        selectedIconPath: 'static/images/tab_bar/i_m_o.png'
      }
    ]
  }
})
