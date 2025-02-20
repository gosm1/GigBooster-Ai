import { gigboosterservices } from "@/data/data";

// Define an interface for the expected structure of the items in gigboosterservices
interface GigBoosterService {
    slug: string; // Adjust the type if slug is not a string
}

export default async function sitemap () {
    try {
        const template = gigboosterservices.map((temp: GigBoosterService) => {
            return {
                url: `https://gigboosterai.vercel.app/${temp.slug}`
            }
        })
        return [{
            url: 'https://gigboosterai.vercel.app',
        }, ...template]

    } catch (error) {
        return [];
    }
}
