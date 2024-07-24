import axios from "axios";

const url="http://localhost:5042/api"; // base urk
export const client = axios.create({
baseURL: url,
});


export const endPoints = {

chars : "/States",
locations : "/Jobs", 
  
};