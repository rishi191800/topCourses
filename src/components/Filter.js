import React from 'react'

function Filter(props) {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;
    function filterHandler(title){
        setCategory(title);
    }
    return (
        <div className='filter'>
            {
                filterData.map((data)=>{
                    return(<button key={data.id} onClick={()=>filterHandler(data.title)} className={`${category === data.title ? 'active' : ''}`} >{data.title}</button>);
                })
            }
        </div>
    )
}

export default Filter
