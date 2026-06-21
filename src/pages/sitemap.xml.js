const EXTERNAL_DATA_URL = 'https://restaurant-web-dxxa.vercel.app';

function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/menu</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/about</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/cart</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/login</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/my-booking</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/reservations</loc>
     </url>
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
    const sitemap = generateSiteMap();

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default function SiteMap() { }