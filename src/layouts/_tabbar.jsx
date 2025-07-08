import React, { useState, useEffect, useContext } from 'react';
import { View } from '@tarojs/components';
import CustomTabBar from '@/components/CustomTabBar';
import Taro from '@tarojs/taro';
import AppContext from '@/context/AppContext';

const TAB_PAGES = [
  '/pages/index/index',
  '/pages/play/index',
  '/pages/shop/index',
  '/pages/order/index',
  '/pages/user/index'
];

const TabbarLayout = ({ children }) => {
  const {tabActive, setTabActive} = useContext(AppContext);

  // 切换 Tab 页面
  const handleSwitchTab = (index) => {
    const url = TAB_PAGES[index];
    Taro.switchTab({ url,
        complete: () => {
          setTabActive(index);
        }
     });
  };

  return (
    <View style={{ flex: 1 }}>
      {children}
      <CustomTabBar active={tabActive} onChange={handleSwitchTab} />
    </View>
  );
};

export default TabbarLayout;