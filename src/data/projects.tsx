export type Projects = {
  year: string;
  projects: Project[];
}[];

export interface Project {
  title: string;
  url: string;
  description?: string;
  iconName?: string;
  stats?: string;
}

export const projects: Projects = [
  {
    year: '2022',
    projects: [
      {
        title: 'Personal Portfolio',
        url: 'https://github.com/Sn0wye/snowye.dev',
        description: "This portfolio. It's open souce!",
        iconName: 'book'
      },
      {
        title: 'Feed Ignite',
        url: 'https://github.com/deviego/feed-ignite',
        description: 'Projeto Da trilha Ignite da Rocketseat',
        iconName: 'savings'
      },
      {
        title: 'Front e back com melhor do Typescript',
        url: 'https://github.com/deviego/Next-trpc-zod-StudyandPractice-',
        description:
          'projeto com de feedbacks com o melhor do Typescript',
        iconName: 'assignment'
      },
      {
        title: 'Expense Balance', 
        url: 'https://github.com/deviego/expense-balance',
        description: 'Um Projeto que cuida dos gastos mensais.',
        iconName: 'bolt'
      },
      {
        title: 'Beautiful Salon',
        url: 'https://deviego.github.io/BeautySalon/'
      },
      {
        title: 'Space Gallery',
        url: 'https://github.com/deviego/gallery-dvx',
        description: 'Galeria com que busca imagens de uma API da Nasa',
      }
    ]
  }
];
