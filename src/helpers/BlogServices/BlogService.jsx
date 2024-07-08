import { useEffect, useState } from "react";
import { BlogURL, mainBlogURL } from "./BlogUrl.jsx"
import axios from "axios"

export const useFetchBlogs = (currentPage, category = null) => {
    const [blogs, setBlogs] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoadingBlogs, setIsLoadingBlogs] = useState(false);

    useEffect(() => {
        setIsLoadingBlogs(true);
        const categoryQuery = category ? `&category=${category}` : '';
        const pageQuery = currentPage ? `page=${currentPage}` : '';
        axios.get(BlogURL + pageQuery + categoryQuery)
            .then(res => {
                setBlogs(res.data.data);
                // console.log(res.data.data)
                setTotalPages(res.data.pagination.total_pages);
            })
            .finally(() => setIsLoadingBlogs(false));
    }, [currentPage, category]);
    return { blogs, totalPages, isLoadingBlogs };
};



export async function getBlogByID(id) {
    try {

        const response = await axios.get(mainBlogURL + `/${id}`);
        if (response.status === 200) {
            const blog = response.data;
            return blog;
        } else {
            throw new Error(`Failed to get blog with id =  ${id}`);
        }
    } catch (error) {
        throw new Error(`Error: ${error.message}`);
    }
}