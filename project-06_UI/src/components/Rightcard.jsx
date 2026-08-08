import RightCardContent from './RightCardContent';

const Rightcard = (props) => {
  let img = props.img;
  console.log(img)
  
  return (
    <div className='h-full w-67 rounded-4xl overflow-hidden relative shrink-0'>
      <img src={img} className='h-full w-full object-cover' alt="Picture" />
      <RightCardContent img={img} id={props.id}  tag={props.tag} intro={props.intro} color={props.color}/>
    </div>
  )
}

export default Rightcard