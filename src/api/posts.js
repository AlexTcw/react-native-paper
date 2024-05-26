import { API_URL } from "../utils/constants";

export async function recoverData() {
    try {
        const url = `${API_URL}/e-potros-posts`;
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        console.log('Request URL:', url);
        console.log('Request Options:', requestOptions);

        const response = await fetch(url, requestOptions);
        const result = await response.json();

        if (!response.ok) {
            console.log('Error Response:', result);
            return result;
        }

        console.log('Response:', result);
        return result;
    } catch (error) {
        console.log('Error:', error);
        return null;
    }
}

export async function publishPost(formData) {
    try {
        const url = `${API_URL}/e-potros-posts`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        };

        console.log('Request URL:', url);
        console.log('Request Params:', params);

        const response = await fetch(url, params);
        const result = await response.json();

        if (!response.ok) {
            console.log('Error Response:', result);
            return result;
        }

        console.log('Response:', result);
        return result;
    } catch (error) {
        console.log('Error:', error);
        return null;
    }
}


