import { useRouter } from 'next/router'

function ProjectPage() {
    const router = useRouter()
    let q = router.query
    console.log(q.projectId)

    return <h1>The Project Detail Page</h1>
}

export default ProjectPage;