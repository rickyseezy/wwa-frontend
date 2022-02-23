import {Fragment} from "react";
import Link from 'next/link'

function ProjectsPage() {
    return <Fragment>
        <h1>The Projects Page</h1>
        <Link href="/projects/1">Go to detail page</Link>
    </Fragment>
}

export default ProjectsPage;