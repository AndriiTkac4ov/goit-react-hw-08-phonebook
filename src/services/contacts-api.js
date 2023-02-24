import axios from "axios";
import { privateApi } from "../http/http";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContacts() {
    const response = await privateApi.get(`/contacts`);
    return response.data;
}

export async function addContact(newContact) {
    const response = await privateApi.post(`/contacts`, newContact);
    return response.data;
}

export async function deleteContact(contactId) {
    const response = await privateApi.delete(`/contacts/${contactId}`);
    return response.data;
}

export async function updateContact(contactId) {
    const response = await privateApi.patch(`/contacts/${contactId}`);
    return response.data;
}