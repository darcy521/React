import React from 'react'

export default function Filter(){
    return (
      <div className='filter'>
        <div className='filter-result'>{} Products</div>
        <div className='filter-sort'>
            Order{" "}
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>
        <div className='filter-size'>
            Filter{" "}
            <select>
                <option>1</option>
                <option>2</option>
            </select>
        </div>
      </div>
    )
  }

