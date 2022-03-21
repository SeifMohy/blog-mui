export const addingPosts = (post) => {
    return {
        type: "ADD",
        payload: post
    }
}

export const deletingPosts = (id) => {
    return {
        type: "DELETE",
        payload: id
    }
}

export const savingPosts = (posts) => {
    return {
        type: "SAVE",
        payload: posts
    }
}