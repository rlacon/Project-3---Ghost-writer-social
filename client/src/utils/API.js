import axios from "axios";

export default {
  // Gets all stories
  getStories: function() {
    return axios.get("/api/stories");
  },
  // Gets the story with the given id
  getStory: function(id) {
    return axios.get("/api/stories/" + id);
  },
  // Deletes the stories with the given id
  deleteStories: function(id) {
    return axios.delete("/api/stories/" + id);
  },
  // Saves a stories to the database
  saveStories: function(storiesData) {
    return axios.post("/api/stories", storiesData);
  }
};