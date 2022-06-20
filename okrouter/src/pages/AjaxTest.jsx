import axios from "axios";
import React from "react";

function AjaxTest() {
    const baseURL = import.meta.env.VITE_API_SERVER + "/api/hello";
    const [post, setPost] = React.useState(null);

    async function getData() {
      const data = {
        name: document.getElementById('name').value
      }
      const response = await axios.post(baseURL, data);
      console.log(response.data);
      setPost(response.data);
    }
  

    React.useEffect(() => {
        // 동기 호출  
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });

        // axios.post(baseURL, {
        //     name: 'hongsun 입니다.'
        //   }).then((response) => {
        //     setPost(response.data);
        // });
       

      // 비동기 호출 방법  
      // async function SendName(){
      //   try{
      //       const data = {
      //         name : document.getElementById('name').value
      //       }
      //       const response = await axios.post(baseURL, data)
      //       setPost(response.data);
      //   } catch(error){
      //       console.log(error);
      //   }
      // }

      //SendName();


    }, []);
  
    if (!post) return null;
  
    return (
      <div>
        <input type="name" id="name" />
        <button onClick={getData}>send</button>
        <h1>{post.message}</h1>
      </div>
    );
  }
  
export default AjaxTest
  
