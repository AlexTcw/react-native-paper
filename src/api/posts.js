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

export async function deletePost(id) {
    try {
        const url = `${API_URL}/e-potros-posts/${id}/`;
        const params = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        };

        console.log('Request URL:', url);
        console.log('Request Params:', params);

        const response = await fetch(url, params);

        if (!response.ok) {
            const errorResult = await response.json();
            console.log('Error Response:', errorResult);
            return errorResult;
        }

        // Si la respuesta es un 204 No Content, simplemente retorna un objeto vacío o un mensaje.
        console.log('Response: No Content');
        return { message: 'Post deleted successfully' };
    } catch (error) {
        console.log('Error:', error);
        return null;
    }
}

export async function updatePost(formData,id) {
    try {
        const url = `${API_URL}/e-potros-posts/${id}/`;
        const params = {
            method: "PUT",
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


