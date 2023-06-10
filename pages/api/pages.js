import data from "../../data/data.json";

export default function handler(req, res) {
  const { services, blogs } = data;

  // Extract the IDs for services with the prefix "services/"
  const serviceIds = services.map((service) => `services/${service.id}`);

  // Extract the IDs for blogs with the prefix "blogs/"
  const blogIds = blogs.map((blog) => `blogs/${blog.id}`);

  // Combine the serviceIds and blogIds arrays
  const ids = [...serviceIds, ...blogIds];

  // Return the ids as a JSON response
  res.status(200).json(ids);
}
