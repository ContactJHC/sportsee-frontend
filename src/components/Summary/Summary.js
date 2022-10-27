import './Summary.css'



export default function Summary({name, number, icon}) {
  return (
    <div className='categoryContainer'>
        <div className='categorySummary'>
            <div className='categoryIcon'>
            <img className='iconImages' src={`${icon}`} alt={`${name}`}/>
            </div>
            <div className='categoryText'>
            <div className='categoryNumber'>{number}</div>
            <div className='categoryName'>{name}</div>
            </div>
        </div>
    </div>
  )
}
