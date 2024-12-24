export interface NewsRequest{
    title: string;
    description: string;
    author: string;
}

export const getAllNews = async () =>{
    const response = await fetch("http://localhost:5192/News");
    return response.json();
}

export const createNews = async (newsRequest: NewsRequest) =>{
    await fetch("http://localhost:5192/News", {
        method:"POST",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(newsRequest)
    })
}

export const updateNews = async (id: string, newsRequest: NewsRequest) =>{
    await fetch(`http://localhost:5192/News/${id}`, {
        method:"PUT",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(newsRequest)
    })
}

export const deleteNews = async (id: string) =>{
    await fetch(`http://localhost:5192/News/${id}`, {
        method:"DELETE",
    })
}