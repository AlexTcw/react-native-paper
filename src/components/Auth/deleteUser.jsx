const deleteUser = async (userId) => {
    try {
        const response = await fetch(`/e-potros-posts.delete/:id${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Error al eliminar usuario');
        }
        return true;
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        throw error;
    }
};

export default deleteUser;
