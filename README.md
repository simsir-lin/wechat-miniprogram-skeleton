# wechat-miniprogram-skeleton
> 小程序骨架屏效果组件

### 下载
``` bash
git clone https://github.com/simsir-lin/wechat-miniprogram-skeleton.git
```

### 示例
1. 打开[微信web开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，'本地小程序项目 - 添加项目'，项目目录选择为 example 目录

### 使用
1. 安装，在你的项目根目录执行
``` bash
npm install --save wechat-miniprogram-skeleton
```
2. 每次引入或更新需先执行微信开发者工具的 `npm 构建`，[微信官方 npm 文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)
3. 在你的页面json中添加
``` javascript
{
  "usingComponents": {
    "skeleton": "wechat-miniprogram-skeleton/skeleton",
    "skeleton-item": "wechat-miniprogram-skeleton/skeleton-item"
  }
}
```
4. 在wxml中即可使用组件
``` html
<skeleton loading="{{!loading}}">
  <skeleton-item placeholder-class="skeleton-text" content-class="normal-text">文字</skeleton-item>
  <skeleton-item placeholder-class="skeleton-block">
    <view class="normal-block">测试文字</view>
  </skeleton-item>
</skeleton>
```

### 注意
* 小程序基础库版本 2.2.1 或以上、及开发者工具 1.02.1808300 或以上开始

### skeleton props

| name     | description              | type     | default value |
| :---------------- | :----------------------- | :------  | :------------ |
| width             | 宽度                 | String    | 100%          |
| height             | 高度                 | String    | 100rpx          |
| backgroundColor  | 背景颜色                 | String    | rgba(255, 255, 255, 1)          |
| zIndex             |                  | Number    | 10          |
| loading             | 是否在加载中                 | Boolean    | false          |

### skeleton-item props

| name     | description              | type     | default value |
| :---------------- | :----------------------- | :------  | :------------ |
| backgroundColor  | 背景颜色                 | String    | #f4f4f4          |


### 贡献
如果你有好的意见或建议，欢迎给我提issue!
