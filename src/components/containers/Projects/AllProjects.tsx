import { projects } from '../../../data/projects'

export const AllProjects = () => {
  return (
    <>
      {projects.map((item, index) => (
        <div key={index}>
          <ul>
            {item.projects.map((project, index) => (
              <li key={index}>
                <a href={project.url} target='_blank' rel='noreferrer'>
                  {project.title}
                </a>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
