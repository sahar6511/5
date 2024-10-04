
import React from 'react'
import { useGetRoomsQuery } from "./redux/services/roomsApi";

const RoomsData = () => {
    const {data : selectedRoomsData,error,isLoding} = useGetRoomsQuery();
  return (
    <div>

{error ? (
        <p>دانشجویی با این شماره دانشجویی وجود ندارد</p>
      ) : isLoding ? (
        <p>Loading...</p>
      ) : selectedRoomsData ? (
        
        <div>
          {selectedRoomsData.map((item)=>(<li>{item.title}</li>))}
        </div>
        
      ) : null}
   
    </div>
  )
}

export default RoomsData