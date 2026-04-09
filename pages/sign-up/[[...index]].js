import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { fetchGlobalAllData } from '@/lib/db/SiteDataApi'
import { DynamicLayout } from '@/themes/theme'

const THEMES_WITH_AUTH_PAGES = ['gitbook', 'magzine', 'proxio', 'starter']

/**
 * 注册
 * @param {*} props
 * @returns
 */
const SignUp = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutSignUp' {...props} />
}

export async function getStaticProps(req) {
  const { locale } = req

  const from = 'SignIn'
  const props = await fetchGlobalAllData({ from, locale })

  delete props.allPages
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

/**
 * catch-all route for clerk
 * @returns
 */
export function getStaticPaths() {
  if (!THEMES_WITH_AUTH_PAGES.includes(BLOG.THEME)) {
    return {
      paths: [],
      fallback: false
    }
  }

  return {
    paths: [
      { params: { index: [] } }, // 使 /sign-up 路径可访问
      { params: { index: ['sign-up'] } } // 明确 sign-up 生成路径
    ],
    fallback: false
  }
}
export default SignUp
