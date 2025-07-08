// src/components/CustomTabBar.jsx
import React, { useContext } from 'react';
import { View, Text } from '@tarojs/components';
import { Tabbar } from '@nutui/nutui-react-taro';
import { Home, Hi, Cart, Heart, User } from '@nutui/icons-react-taro';
import AppContext from '@/context/AppContext';

const ICONS = [Home, Hi, Cart, Heart, User];

const CustomTabBar = ({ onChange }) => {
    const {tabActive} =useContext(AppContext);
  const handleTabChange = (index) => {
    if (onChange && typeof onChange === 'function') {
      onChange(index);
    }
  };

  return (
    <Tabbar fixed value={tabActive} onSwitch={handleTabChange}>
      <Tabbar.Item title="首页" icon={<Home />} />
      <Tabbar.Item title="潮玩" icon={<Hi />} />
      <Tabbar.Item title="点餐" icon={<Heart /> } />
      <Tabbar.Item title="订单" icon={<Cart /> } />
      <Tabbar.Item title="我的" icon={<User /> } />
    </Tabbar>
  );
};

export default CustomTabBar;