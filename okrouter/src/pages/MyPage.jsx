import axios from "axios";
import React from "react";



function MyPage() {
    const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
      // 동기 호출  
      //   axios.get(baseURL).then((response) => {
      //     setPost(response.data);
      //   });

      // 비동기 호출 방법  
      async function Doit(){
        try{
            const response = await axios.get(baseURL);
            setPost(response.data);
        } catch(error){
            console.log(error);
        }
      }

      Doit();


    }, []);
  
    if (!post) return null;
  
    return (
      <div id={post.id}>
        {post.userId}
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
  
export default MyPage
  
