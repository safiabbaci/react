import Rightcard from './Rightcard';

const RightContent = (props) => {
  return (
    <div className='h-full w-2/3 p-4 flex gap-3 flex-nowrap overflow-x-auto scrollbar-none'>
      {props.users.map(function(elem, idx){
        return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} color={elem.color}/>
      })}
    </div>
  )
}

export default RightContent