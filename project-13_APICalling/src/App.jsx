// import axios from 'axios';

import { useState } from "react";

const App = () => {

  //Using Fetch

  // async function btnClick() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   console.log(response);
  // }
  
  // const btnClick = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/user');
  //   const data = await response.json();
  //   console.log(data);
  // }

  //Using AXIOS

  // const btnClick = async () => {
    //const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    //console.log(response.data);

    //Destructuring
    // const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(data);
  // }

  const [data, setData] = useState([]);

  const btnClick = async () => {
    const response = await axios.get('https://picsum.photos/vs/list')
    setData(response.data);
  }

  return (
    <div>
      <button onClick={btnClick}>Get Data</button>
      {data.map(function(elem, idx){
        return <h3>{idx}: Hello ,{elem.author}</h3>
      })}
    </div>
  )
}

export default App