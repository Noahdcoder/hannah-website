import data from "../../data/data.json";

export default function handler(req, res) {
  const { services, blogs } = data;

  // Combine the services and blogs arrays into a single array
  const items = [...services, ...blogs];

  // Extract the ids from the combined array
  const ids = items.map((item) => item.id);

  // Return the ids as a JSON response
  res.status(200).json(ids);
}
