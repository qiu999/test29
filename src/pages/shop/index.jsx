import React from 'react';
import TabbarLayout from '../../layouts/_tabbar';
import './index.scss'
import { View, Button } from '@tarojs/components';
import { Image, Swiper  } from '@nutui/nutui-react-taro';



function Index() {
  const randomImageUrl = `https://picsum.photos/${300}/${200}?random=${Math.floor(Math.random() * 1000)}`;
  const randomImageUrl2 = `https://picsum.photos/${300}/${200}?random=${Math.floor(Math.random() * 1000)}`;
  const randomImageUrl3 = `https://picsum.photos/${300}/${200}?random=${Math.floor(Math.random() * 1000)}`;


  return (
    <TabbarLayout>
      <View>
       <Swiper> 
        <Swiper.Item> 
          <Image src={randomImageUrl3} />
        </Swiper.Item>
        <Swiper.Item> 
          <Image src={randomImageUrl} />
        </Swiper.Item>
        <Swiper.Item> 
          <Image src={randomImageUrl2}  />
        </Swiper.Item>
       </Swiper>

      </View>
    </TabbarLayout>
  );
}

export default Index;