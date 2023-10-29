// api.js
import axios from "axios";

export const fetchApi = () => {
  return axios.get('http://localhost:3008/');
};


export const fetchApiDelete = (id) => {
  console.log("item", id)
  return axios.delete(`http://localhost:3008/delete/${id}`);
};


export const fetchApiPost = (itemData) => {
  console.log("item", itemData)
  return axios.post('http://localhost:3008/register/', itemData);
};

export const updateItemApi = (itemId, updatedData) => {
  return axios.put(`http://localhost:3008/update/${itemId}`, updatedData);
};



export const deleteApi = (data)=>{
  console.log("new id", data)
  return axios.post('http://localhost:3008/register/', data);
}