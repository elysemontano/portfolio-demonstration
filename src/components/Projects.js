import React from 'react'

const Projects = () => {
  const projects = [
    {name: 'Apartment App', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'Cat Tinder', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'Text Based Game', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
  ]
  return (
    <div className='projects' id='projects'>
      <h1>Projects</h1>
      <div className='projects-flex'>
        {projects.map(project => {
          return(
            <div className='project-card'>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects