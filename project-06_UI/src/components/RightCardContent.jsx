
const RightCardContent = (props) => {
    
  return (
    <div className="absolute top-0 left-0 h-full w-full px-6 py-4 flex justify-between flex-col">

      <h2 className="h-12 w-12 bg-white rounded-full flex items-center justify-center font-semibold">
        {props.id + 1}
      </h2>
      <div className="text-white text-[16px]">
        <p className="leading-normal mb-7">
          {props.intro}
        </p>
        <div className="flex items-center justify-between">
          <button style={{backgroundColor:props.color}} className="px-5 py-2 rounded-3xl font-medium">
            {props.tag}
          </button>
          <button style={{backgroundColor:props.color}} className="px-5 py-2 rounded-3xl font-medium">
            {"->"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
