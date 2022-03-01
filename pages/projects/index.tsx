import TopCauses from "@components/top-causes/TopCauses";
import ProjectsLayout from "@components/layouts/projects/ProjectsLayout";
import Causes from "@components/causes/Causes";

function ProjectsPage() {
  return (
    <ProjectsLayout>
      <Causes />
    </ProjectsLayout>
  );
}

export default ProjectsPage;
