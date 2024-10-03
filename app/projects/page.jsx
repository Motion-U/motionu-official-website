import Heading from "../components/Heading";
import ProjectPostCard from "../components/ProjectPostCard";
import {fetchProjects} from "@/external/contentful";
import contentful from "contentful";

export default async function projectsPage() {


    const project = await fetchProjects();

    return (
        <section>
            <div className="text-center my-7">
                <Heading text={"Projects"}></Heading>
            </div>
            <p className="mx-40 text-center text-gray-600 mb-7">
                Our projects exclusively revolve around system development undertaken by
                club members, specifically for entrepreneurial activities. These
                initiatives involve designing, creating, and implementing tech solutions
                aimed at fostering entrepreneurship within the community, equipping
                members with practical skills and experience to succeed in innovative
                ventures.
            </p>
            <div className="grid grid-cols-2 gap-4 gap-y-10 mx-60">
            <ProjectPostCard />
            <ProjectPostCard />
            <ProjectPostCard />
            </div>
        </section>
    );
}
