import { client } from "./lib/sanityClient";

export const getProjects = async () => {
    const projects = await client.fetch(`
        *[_type == "project"] | order(order asc) {
            _id,
            thumbnail,
            title,
            slug,
            tagline,
            description,
            techStack,
            category,
            featured,
            status,
            caseStudy,
            year,
            liveUrl,
            githubUrl
        }
    `);
    return projects;
}   
