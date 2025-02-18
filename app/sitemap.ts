import { gigboosterservices } from "@/data/data";



export default async function sitemap () {
    try {
        const template = gigboosterservices.map((temp:any) => {
            return{
                url: `https://gigboosterai.vercel.app/${temp.slug}`
            }
        })
        return [{
            url:'https://gigboosterai.vercel.app',
        },...template]

    } catch (error) {
;
        return [];
    }
}
