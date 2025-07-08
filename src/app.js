import React, { useEffect } from 'react'
import { useDidShow, useDidHide } from '@tarojs/taro'
// 全局样式
import './app.scss'
import '@nutui/nutui-react-taro/dist/styles/theme-jmapp.scss'
import { AppContextProvider } from '@/context/AppContext'
function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  return <AppContextProvider>{props.children}</AppContextProvider>
}

export default App
