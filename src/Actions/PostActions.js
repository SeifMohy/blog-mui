import * as api from "../APIs"

export const getPosts = () => async (dispatch) => {
    try{
        console.log("trying to get post");
        const response = await api.getPosts(); //to destruct received data and take data
        dispatch({type : "FETCH_ALL", payload: response.data.data }); //return data to reducer
    } catch(err){
        console.log(err); //error handling
    }
};

export const addPost = (newPost) => async(dispatch) =>{
    try{
        await api.addPosts(newPost); //adding post to data base
        const response = await api.getPosts(); //returning data including new post
        console.log(response)
        dispatch({type : "ADD_POST", payload: response.data.data}); //return data to reducer
    } catch(err){
        console.log(err); //error handling
    }
};

export const updatePost = (id, updatedPost) => async(dispatch) =>{
    try{
        await api.updatePost(id, updatedPost); //changing updated post to data base
        const {data} = await api.getPosts(); //returning data including updated post
        dispatch({type : "UPDATE_POST", payload: data.data }); //return data to reducer
    } catch(err){
        console.log(err); //error handling
    }
}

export const deletePost = (id) => async(dispatch) =>{
    try{
        await api.deletePost(id); //changing deleted post to data base
        const {data} = await api.getPosts(); //returning data including deleted post
        dispatch({type : "DELETE_POST", payload: data.data }); //return data to reducer
    } catch(err){
        console.log(err); //error handling
    }
}

// export const addComment = (id, newComment) => async(dispatch) =>{
//     try{
//         const response = await api.addComment(id, newComment); //adding post to data base
//         //const response = await api.getPostById(id); //returning data including new post
//         console.log(response)
//         dispatch({type : "ADD_COMMENT", payload: response.data.data}); //return data to reducer
//     } catch(err){
//         console.log(err); //error handling
//     }
// };