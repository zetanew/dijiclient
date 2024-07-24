import { client, endPoints } from './api';

// Fetcher for all States
export async function fetchAllStates() {
  try {
    const response = await client.get(endPoints.chars);
    return response.data;
  } catch (error) {
    console.error('Error fetching all states: ', error);
    return [];
  }
}

// Fetcher for all Jobs
export async function fetchAllJobs() {
  try {
    const response = await client.get(endPoints.locations);
    return response.data;
  } catch (error) {
    console.error('Error fetching all jobs: ', error);
    return [];
  }
}

// Fetcher for Jobs by State ID
export async function fetchJobsByStateId(stateId) {
  try {
    const response = await client.get(`${endPoints.locations}?stateId=${stateId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching jobs for state ID ${stateId}: `, error);
    return [];
  }
}
