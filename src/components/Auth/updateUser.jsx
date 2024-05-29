const updateUser = async (userId, userData) => {
    try {
        const response = await fetch(`/e-potros-posts.update/:id${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error('Error al actualizar usuario');
        }
        return true;
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        throw error;
    }
};

export default updateUser;
