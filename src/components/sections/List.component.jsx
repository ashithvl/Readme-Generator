import React, {useState, useEffect} from 'react'

const ListComponent = () => {
    const [listItem, setListItem] = useState(["This is list 1", "This is list 2"])

  return (
    <div className="border border-neutral-400 border-dashed p-2 mb-4 hover:border-green-400">
        
        <ul className='list-disc pl-4'>
            {listItem.map((lisI)=>{
                return <li>{lisI}</li>
            })}
        </ul>
    </div>
  )
}

export default ListComponent;