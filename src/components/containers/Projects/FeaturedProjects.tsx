import { useState } from 'react';
import { useI18n } from '../../../locales';
import { FeaturedProject } from '../../FeaturedProject';
import { StyledFeaturedProjects } from './styles';

type Projects = {
  year: string;
  projects: Project[];
}[];

interface Project {
  title: string;
  url: string;
  description?: string;
  iconName?: string;
  stats?: string;
}

interface FeaturedProjectsProps {
  featured: string[];
}

export const FeaturedProjects = ({ featured }: FeaturedProjectsProps) => {
  const [isHovered, setIsHovered] = useState('');
  const { scopedT } = useI18n();
  const t = scopedT('pages.projects');

  const projects: Projects = [
    {
      year: '2022',
      projects: [
        {
          title: t('portfolio.title'),
          url: 'https://github.com/Sn0wye/snowye.dev',
          description: t('portfolio.description'),
          iconName: 'book'
        },
        {
          title: 'Zap GPT',
          url: 'https://ifinance.snowye.dev',
          description: t('zapgpt.description'),
          iconName: 'zap'
        },
        {
          title: 'Your Product',
          url: 'https://spaces.snowye.dev/',
          description: t('yourproducts.description'),
          iconName: 'assignment'
        },
        {
          title: 'duque.dev',
          url: 'https://duque.dev',
          description: t('duquedev.description'),
          iconName: 'bolt'
        },
        {
          title: 'Coffee Delivery',
          url: 'https://coffee-delivery-pied.vercel.app/'
        },
        {
          title: 'Snowye UI (WIP)',
          url: 'https://snowye-ui.snowye.dev/',
          description: 'React Powered, accessible Component UI.',
          iconName: 'snowye-ui'
        }
      ]
    }
  ];

  return (
    <StyledFeaturedProjects>
      {projects
        .map(item => {
          return item.projects.filter(project =>
            featured.includes(project.title)
          );
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
  );
};
