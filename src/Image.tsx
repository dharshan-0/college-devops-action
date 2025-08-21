import { useState, useRef } from 'react';
import axios from 'axios';

const fetchNekoImage = async () => {
   try {
      const res = await axios.get('https://api.nekosia.cat/api/v1/images/catgirl');
      const json = res.data;
      const link = json.image.original.url
      console.log(link);
      return link

   } catch (err) {
      console.error(err);
   }
};


export default function Image() {
   const [url, setUrl] = useState("")
   const ref = useRef(true)


   if (ref.current) {
      fetchNekoImage().then((val => setUrl(val)))
      ref.current = false
   }
   
   const reset = () => {
      console.log("Clicked")
      ref.current = true
      setUrl("")
   }
         
   console.log("hi1") 
      


	return (
		<>
		<button onClick={() => reset()}>Reload</button>
		<img  src={url} alt="Just an anime image"/>
		</>
	)
}
