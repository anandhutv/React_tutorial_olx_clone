import { createContext,UseState } from "react";

export const PostContext = createContext(null)

function post ({children}) {
    const [postDetails,setPostDetails]=UseState()

    return (
        <PostContext.Provider value={{postDetails,setPostDetails}}> 
                {children}
        </PostContext.Provider>
    )
}
export default post