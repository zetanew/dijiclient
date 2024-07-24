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
    // Extract only digits from stateId
    const numericStateId = stateId.replace(/\D/g, '');
    console.log("triggered");
    console.log(numericStateId); // Log the numeric part of stateId
    const response = await client.get(`${endPoints.locations}?stateId=${numericStateId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching jobs for state ID ${stateId}: `, error);
    return [];
  }
}
