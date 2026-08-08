import React from 'react'
import Section1 from "./components/Section1"
import img from './assets/img.png'

const App = () => {
  const users = [
    {
      img: img,
      intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum iste ipsa, iure corporis nam velit.',
      tag: 'Satisfied',
      color: 'royalBlue'
    },
    {
      img: img,
      intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum iste ipsa, iure corporis nam velit.',
      tag: 'UnderServed',
      color: 'lightseagreen'
    },
    {
      img: img,
      intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum iste ipsa, iure corporis nam velit.',
      tag: 'UnderBanked',
      color: 'teal'
    },
    {
      img: img,
      intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum iste ipsa, iure corporis nam velit.',
      tag: 'UnderArrest',
      color: 'pink'
    },
    {
      img: img,
      intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum iste ipsa, iure corporis nam velit.',
      tag: 'UnderWear',
      color: 'orange'
    }
  ];

  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App