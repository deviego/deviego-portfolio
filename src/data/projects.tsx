export type Projects = Array<{
  year?: string
  projects: Project[]
}>

export interface Project {
  title: string
  url: string
  description?: string
  iconName?: string
  stats?: string
}

export const projects: Projects = [
  {
    year: '2022',
    projects: [
      {
        title: 'Beautiful Salon',
        url: 'https://deviego.github.io/BeautySalon/',
        description: 'Esse projeto está no ar, clique para ver!'
      },
      {
        title: 'Personal Portfolio',
        url: 'https://github.com/deviego/deviego-portfolio',
        description: 'Esse projeto é open source!',
        iconName: 'book'
      },
      {
        title: 'Space Gallery',
        url: 'https://github.com/deviego/gallery-dvx',
        description:
          'Galeria com que busca imagens de uma API da Nasa, esse foi um teste que fiz para uma vaga front end'
      },

      {
        title: 'Feed Ignite',
        url: 'https://github.com/deviego/feed-ignite',
        description: 'Projeto Da trilha Ignite da Rocketseat'
      },
      {
        title: 'Front e back com melhor do Typescript',
        url: 'https://github.com/deviego/Next-trpc-zod-StudyandPractice-',
        description: 'projeto com de feedbacks com o melhor do Typescript',
        iconName: 'assignment'
      }

    ]
  }
]
