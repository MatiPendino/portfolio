
function getDemoButton ({ demoUrl }) {
    if (demoUrl) {
      return (
        <div className='col-6 col-4'>
          <a href={demoUrl} className='button-portfolio button' target='_blank'>Demo</a>
        </div>
      )
    }
  }
  
  function getRepoButton ({ repoUrl }) {
    if (repoUrl) {
      return (
        <div className='col-6 col-4'>
          <a href={repoUrl} className='button-portfolio button' target='_blank'>Repo</a>
        </div>
      )
    }
  }
  
  export function Project ({ projectId, imagePath, projectName, technologies, demoUrl, repoUrl }) {
    const demoButton = getDemoButton({ demoUrl })
    const repoButton = getRepoButton({ repoUrl })
  
    return (
      <div className='col-12 col-lg-4 aos-animate' data-aos='zoom-in-up' data-aos-duration='500' data-aos-delay='500'>
        <div className='w-100 portfolio-box' id={`${projectId}-box`}>
          <img className='w-100' id={`${projectId}-image`} src={imagePath} alt={`${projectName} Project`} />
          <div className='portfolio-details' id={`${projectId}-detail`}>
            <h4 className='text-center'>{projectName}</h4>
            <p className='text-center'>{technologies}</p>
            <div className='row text-center'>
              {demoButton}
              {repoButton}
            </div>
          </div>
        </div>
      </div>
    )
  }
  