import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';
const ACCESS_TOKEN = process.env.PERSONAL_ACCESS_TOKEN as string;

export async function fetchGitHubUser(username: string) {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${ACCESS_TOKEN}`,
      },
    });
    return response.data; 
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
}
