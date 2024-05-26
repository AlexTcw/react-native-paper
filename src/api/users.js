import {API_URL} from '../utils/constants';

export async function loginApi(formData) {
    try {
        const url = `${API_URL}/auth/local`;
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

export async function registerApi(formData) {
    try {
        const url = `${API_URL}/auth/local/register`;
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
