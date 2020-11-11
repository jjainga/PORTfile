import axios from "axios";

// Export an object with a "search" 
const User = "jjainga"
const API = {
  search: function() {return axios.get("https://api.github.com/users/"+ User +"/repos")},
  searchLanguages: function(url) {return axios.get(url)}
}

export default API;