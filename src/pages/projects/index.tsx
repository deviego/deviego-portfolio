import Head from 'next/head'
import { Base } from '../../components/Base'
import { AllProjects } from '../../components/containers/Projects/AllProjects'
import { FeaturedProjects } from '../../components/containers/Projects/FeaturedProjects'
import { getLocaleProps, useI18n } from '../../locales'
import { stripHtml } from '../../utils/stripHtml'

interface ProjectsProps {
  tagline: string
  primaryColor: string
  secondaryColor: string
}

export const getStaticProps = getLocaleProps(() => {
  const meta = {
    tagline: 'Apps. Libs. Open Source.',
    primaryColor: 'cyan',
    secondaryColor: 'green'
  }

  return { props: meta }
})

export default function Projects ({
  primaryColor,
  secondaryColor,
  tagline
}: ProjectsProps) {
  const { scopedT } = useI18n()
  const t = scopedT('pages.projects')

  return (
    <Base
      tagline={tagline}
      title={t('title')}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    >
      <Head>
        <title>{t('title')}</title>
        <meta content={t('title')} property='og:title' />
        <meta
          content={stripHtml(
            t('description')
          )}
          name='description'
        />
        <meta
          content={stripHtml(
            t('description')
          )}
          property='og:description'
        />
        <meta content='https://deviego.dev/projects' property='og:url' />
      </Head>

      <p
        dangerouslySetInnerHTML={{
          __html: t('description')
        }}
      />

      <h2>{t('featured')}</h2>
      <FeaturedProjects
        featured={[
          'Personal Portfolio',
          'Portfólio Pessoal',
          'Your Product',
          'Zap GPT',
          'Dino',
          'Alert',
          'Expense Balance',
          'ETH-Login',
          'Notificaton-Services'
        ]}
      />

      <h2>{t('all')}</h2>
      <AllProjects />
    </Base>
  )
}
