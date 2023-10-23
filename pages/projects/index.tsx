import TopCauses from "@components/top-causes/TopCauses";
import ProjectsLayout from "@components/layouts/projects/ProjectsLayout";

function ProjectsPage() {
  console.log('cause')
  return (
    <ProjectsLayout>
      <TopCauses />
    </ProjectsLayout>
  );
}

export default ProjectsPage;
