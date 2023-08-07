import { useState } from 'react'
import { useI18n } from '../../../locales'
import { FeaturedProject } from '../../FeaturedProject'
import { StyledFeaturedProjects } from './styles'

type Projects = Array<{
  year: string
  projects: Project[]
}>

interface Project {
  title: string
  url: string
  description?: string
  iconName?: string
  stats?: string
}

interface FeaturedProjectsProps {
  featured: string[]
}

export const FeaturedProjects = ({ featured }: FeaturedProjectsProps) => {
  const [isHovered, setIsHovered] = useState('')
  const { scopedT } = useI18n()
  const t = scopedT('pages.projects')

  const projects: Projects = [
    {
      year: '2022',
      projects: [
        {
          title: t('portfolio.title'),
          url: 'https://github.com/deviego/deviego-portfolio',
          description: t('portfolio.description'),
          iconName: 'book'
        },
        {
          title: 'Zap GPT',
          url: 'https://github.com/deviego/zapgpt',
          description: t('zapgpt.description'),
          iconName: 'messageicon'
        },
        {
          title: 'Your Product',
          url: 'https://github.com/deviego/your-products',
          description: t('yourproducts.description'),
          iconName: 'assignment'
        },
        {
          title: 'Dino',
          url: 'https://github.com/deviego/dino',
          description: t('dino.description'),
          iconName: 'ps2'
        },
        {
          title: 'Alert',
          url: 'https://github.com/deviego/SendAlert',
          description: t('alert.description'),
          iconName: '@'
        },
        {
          title: 'Expense Balance',
          url: 'https://github.com/deviego/expense-balance',
          description: t('expense.description'),
          iconName: 'savings'
        },
        {
          title: 'ETH-Login',
          url: 'https://github.com/deviego/ETH-login',
          description: t('ethlogin.description'),
          iconName: 'wallet'
        },
        {
          title: 'Notificaton-Services',
          url: 'https://github.com/deviego/notification-services',
          description: t('notification.description'),
          iconName: 'bell icon'
        }
      ]
    }
  ]

  return (
    <StyledFeaturedProjects>
      {projects
        .map(item => {
          return item.projects.filter(project =>
            featured.includes(project.title)
          )
        })
        .filter(item => item.length > 0 && item)
        .flat()
        .map((item, index) => (
          <FeaturedProject
            key={index}
            project={item}
            onHover={setIsHovered}
            isHovered={item.title === isHovered}
          />
        ))}
    </StyledFeaturedProjects>
  )
}
