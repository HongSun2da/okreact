import axios from "axios";
import React from "react";

function AjaxTest() {
    const baseURL = "http://localhost:4000/api/hello";
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        // 동기 호출  
        // axios.get(baseURL).then((response) => {
        //     setPost(response.data);
        // });

        axios.post(baseURL, {
            name: 'hongsun 입니다.'
          }).then((response) => {
            setPost(response.data);
        });
       

    // 비동기 호출 방법  
    //   async function Doit(){
    //     try{
    //         const response = await axios.get(baseURL);
    //         setPost(response.data);
    //     } catch(error){
    //         console.log(error);
    //     }
    //   }

    //   Doit();


    }, []);
  
    if (!post) return null;
  
    return (
      <div>
        <h1>{post.message}</h1>
      </div>
    );
  }
  
export default AjaxTest
  
