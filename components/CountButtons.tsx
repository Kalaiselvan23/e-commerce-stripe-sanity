
const CountButtons=({countValue}:{countValue:number})=>{
    console.log(countValue)
    return <div className='border-2 border-gray-500 rounded-2xl flex gap-2 items-center'>
    <button className='counter-btn'> - </button>
    <span> {countValue} </span>
    <button className='counter-btn'> + </button>
    </div>
  }
export default CountButtons