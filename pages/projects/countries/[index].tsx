import React from 'react'
import TopCauses from "@components/top-causes/TopCauses";
import ProjectsLayout from "@components/layouts/projects/ProjectsLayout";


function index() {
  return (
    <ProjectsLayout>
    <TopCauses />
  </ProjectsLayout>
  )
}

export default index