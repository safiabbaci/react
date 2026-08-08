import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
  return (
    <div className='py-5 flex items-center justify-between h-[88vh] px-9 gap-10'>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default PageContent