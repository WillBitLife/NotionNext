
// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.willbitlife.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3', // API默认请求地址,可以配置成自己的地址例如：https://[xxxxx].notion.site/api/v3
  // Important page_id！！！Duplicate Template from  https://tanghh.notion.site/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  THEME: process.env.NEXT_PUBLIC_THEME || 'next', // 当前主题，在themes文件夹下可找到所有支持的主题；主题名称就是文件夹名，例如 example,fukasawa,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2021, // e.g if leave this empty, current year will be used.

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径，开启后所有文章URL都以 .html 结尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60, // 更新缓存间隔 单位(秒)；即每个页面有60秒的纯静态期、此期间无论多少次访问都不会抓取notion数据；调大该值有助于节省Vercel资源、同时提升访问速率，但也会使文章更新有延迟。
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto'], // light 日间模式 ， dark夜间模式， auto根据时间和主题自动夜间模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 夜间模式起至时间，false时关闭根据时间自动切换夜间模式

  // 欢迎语在此配置，英文逗号隔开 ,  即可支持多个欢迎语打字效果。
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi，我是一个程序员, Hi，我是一个打工人,Hi，我是一个干饭人,欢迎来到我的博客🎉',

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // 支持Menu类型的菜单，替代了3.12版本前的Page类型

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'will', // 您的昵称 例如 willbitlife
  BIO: process.env.NEXT_PUBLIC_BIO || '一个普通的干饭人🍚', // 作者简介
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://willbitlife.com', // 网站地址
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Will\'s Blog', // 网站关键词 英文逗号隔开
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon 配置, 默认使用 /public/favicon.ico，支持在线图片，如 https://img.imesong.com/favicon.png
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXX
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', // 备案查询链接，如果用了萌备等备案请在这里填写
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '', // 公安备案号，例如 '浙公网安备3xxxxxxxx8号'

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否开启RSS订阅功能

  // 其它复杂配置
  // 原配置文件过长，且并非所有人都会用到，故此将配置拆分到/conf/目录下, 按需找到对应文件并修改即可
  ...require('./conf/comment.config'), // 评论插件
  ...require('./conf/contact.config'), // 作者联系方式配置
  ...require('./conf/post.config'), // 文章与列表配置
  ...require('./conf/analytics.config'), // 站点访问统计
  ...require('./conf/image.config'), // 网站图片相关配置
  ...require('./conf/font.config'), // 网站字体
  ...require('./conf/right-click-menu'), // 自定义右键菜单相关配置
  ...require('./conf/code.config'), // 网站代码块样式
  ...require('./conf/animation.config'), // 动效美化效果
  ...require('./conf/widget.config'), // 悬浮在网页上的挂件，聊天客服、宠物挂件、音乐播放器等
  ...require('./conf/ad.config'), // 广告营收插件
  ...require('./conf/plugin.config'), // 其他第三方插件 algolia全文索引
  ...require('./conf/performance.config'), // 性能优化配置

  // 高级用法
  ...require('./conf/layout-map.config'), // 路由与布局映射自定义，例如自定义特定路由的页面布局
  ...require('./conf/notion.config'), // 读取notion数据库相关的扩展配置，例如自定义表头
  ...require('./conf/dev.config'), // 开发、调试时需要关注的配置

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 是否允许复制页面内容 默认允许

  // 侧栏布局 是否反转(左变右,右变左) 已支持主题: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  PREVIEW_CATEGORY_COUNT: 16, // 首页最多展示的分类数量，0为不限制
  PREVIEW_TAG_COUNT: 16, // 首页最多展示的标签数量，0为不限制

  POST_WAITING_TIME_FOR_404:
    process.env.NEXT_PUBLIC_POST_WAITING_TIME_FOR_404 || '8', // 文章加载超时时间，单位秒

  // QRCodeCDN
  QR_CODE_CDN:
    process.env.NEXT_PUBLIC_QR_CODE_CDN ||
    'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

  // 作废配置
  AVATAR: process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // 作者头像，被notion中的ICON覆盖
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'Will\'s BLOG', // 站点标题，被notion中的页面标题覆盖
  HOME_BANNER_IMAGE:
    process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // 首页背景大图
  DESCRIPTION:
    process.env.NEXT_PUBLIC_DESCRIPTION || 'Will\'s Bit Life', // 站点描述

  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
