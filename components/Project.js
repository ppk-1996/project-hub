import Link from "next/link";

export default function Project({ project }) {
    return <div>
        <Link href="/">
            <a>Back To Home</a>
        </Link>
        <div key={project?.id}>
            <h1>{project?.title}</h1>
            <p>{project?.content}</p>
        </div>
    </div>
}