import Link from "next/link"

export default function Feed({feed}){
    return <div>
        <div >
            <h1>All Projects</h1>
            {feed?.map(project => {
                return <div key={project.id}>
                    <Link  href={`/project/${project.id}`}>
                    <a>
                        <h1>{project.title}</h1>
                    </a>
                    </Link>
                    <p>{project?.content}</p>
                </div>
            })}
        </div>
    </div>
}