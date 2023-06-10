const EXTERNAL_DATA_URL = "https://www.hannahaghedo.com/api/pages";

function generateSiteMap(pages) {
  console.log("Pages:", pages); // Debugging statement
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the known URLs-->
       <url>
         <loc>https://hannahaghedo.com</loc>
       </url>
       <url>
         <loc>https://hannahaghedo.com/about</loc>
       </url>
       ${pages
         .map((path) => {
           return `
         <url>
             <loc>${`https://hannahaghedo.com/${path}`}</loc>
         </url>
       `;
         })
         .join("")}
     </urlset>
   `;
}

async function getPages() {
  try {
    const request = await fetch(EXTERNAL_DATA_URL);
    const response = await request.json();
    console.log("API Response:", response); // Debugging statement
    return response;
  } catch (error) {
    console.error("Error fetching pages:", error); // Error handling
    return []; // Return an empty array in case of error
  }
}

export async function getServerSideProps({ res }) {
  try {
    // We make an API call to gather the pages for our site
    const pages = await getPages();

    // We generate the XML sitemap with the pages
    const sitemap = generateSiteMap(pages);

    res.setHeader("Content-Type", "text/xml");
    // We send the XML to the browser
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error("Error generating sitemap:", error); // Error handling
  }

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}
