import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { resolvePostProps } from '@/lib/db/SiteDataApi'
import { DynamicLayout } from '@/themes/theme'

const THEMES_WITH_DASHBOARD = ['gitbook', 'magzine', 'proxio', 'starter']
const dashboardPaths = [
  { params: { index: [] } },
  { params: { index: ['membership'] } },
  { params: { index: ['balance'] } },
  { params: { index: ['user-profile'] } },
  { params: { index: ['user-profile', 'security'] } },
  { params: { index: ['order'] } },
  { params: { index: ['affiliate'] } }
]

/**
 * 根据notion的slug访问页面
 * 只解析一级目录例如 /about
 * @param {*} props
 * @returns
 */
const Dashboard = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutDashboard' {...props} />
}

export async function getStaticProps({ locale }) {
  const prefix = 'dashboard'
  const props = await resolvePostProps({
    prefix,
    locale,
  })

  return {
    props,
    revalidate: process.env.EXPORT
      ? undefined
      : siteConfig(
        'NEXT_REVALIDATE_SECOND',
        BLOG.NEXT_REVALIDATE_SECOND,
        props.NOTION_CONFIG
      )
  }
}

export const getStaticPaths = () => {
  // 当前只有部分主题实现了 dashboard 布局。
  // 对未实现的主题继续预渲染会在构建阶段生成一批无意义页面，且容易触发导出/预渲染异常。
  if (!THEMES_WITH_DASHBOARD.includes(BLOG.THEME)) {
    return {
      paths: [],
      fallback: false
    }
  }

  return {
    paths: dashboardPaths,
    fallback: false
  }
}

export default Dashboard
