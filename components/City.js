import React from 'react';

export const cities=[
    {name:'Mumbai', value:'Mumbai'},
    {name:'Ahmedabad', value:'Ahmedabad'},
    {name:'Hyderabad',value:'Hyderabad'},
    {name:'Metro City 1',value:'Metro City 1'},
    {name:'Metro City 2',value:'Metro City 2'},
    {name:'Metro City Outskirt',value:'Metro City Outskirts'}
]

const City=({city,setCity})=>{
    const handleCityChange=(e)=>{
        setCity(e.target.value)
    }
    return(
        <div>
            <label htmlFor='propertyType' className='container-center-label-above-field'>City</label>
            <select value={city} onChange={handleCityChange}>
                <option>Select City</option>
                {
                    cities.map((city)=>(
                        <option key={city.value} value={city.value}>
                            {city.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default City;