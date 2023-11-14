import BlogList from "./BlogList";
import useFetch from "./useFetch";

export default function Home() {
    const { data, isLoading, error } = useFetch('http://localhost:8000/blogs')


    return (

        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && <BlogList data={data} title='All Blogs' />}
        </div>
    )
}