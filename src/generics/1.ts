import axios from "axios";

async function fetchData(url: string): Promise<Date | never> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
