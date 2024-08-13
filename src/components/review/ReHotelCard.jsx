import { Link } from "react-router-dom"
import { Star, CircleDollarSign } from 'lucide-react'

import { useEffect, useState } from "react"
import { GetPlaceDetail, PHOTO_URL } from "@/lib/mapPhoto"

const ReHotelCard = ( { hotel } ) => {
  const [ photoUrl, setPhotoUrl ] = useState()

  useEffect(() => {
    const getPlacePhoto = async () => {
      const data = {
        textQuery: hotel?.HotelName
      }
  
      await GetPlaceDetail(data).then(resp => {
        const getDataPlaceName = resp.data.places[0].photos[3].name
        const PhotoUrl = PHOTO_URL.replace('{NAME}', getDataPlaceName)

        setPhotoUrl(PhotoUrl)
      })
    }
    
    if (hotel) {
      getPlacePhoto();
    }
  }, [ hotel ])
  
  return (
    <div className="border rounded-lg shadow-md hover:bg-gray-100">
      <div className="border rounded-t-lg relative overflow-hidden">
        <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.HotelName+',' +hotel?.HotelAddress} target={'_blank'}
        >
          <div className="flex w-full min-h-[150px] relative">
            <img src={photoUrl || '/landing.png'} alt="hotelImage" 
              className="object-cover h-[150px] w-full hover:scale-125 transition-all"
            />
          </div>
        </Link>
      </div>

      <div className="flex flex-col px-2 pb-2">
        <div className="flex items-start font-bold text-lg h-14 line-clamp-2">
          {hotel.HotelName}
        </div>

        <div className="font-light text-gray-500 h-14 line-clamp-2">
          {hotel.HotelAddress}
        </div>

        <div className='flex items-center gap-1'>
          <CircleDollarSign className='h-4 w-4' />
          <p className="price">平均 NT,{hotel.HotelPrice}</p>
        </div>

        <div className='flex items-center gap-1'>
          <Star className='h-4 w-4 text-star-2 fill-star-2' />
          <h3>分數 {hotel.Rating}</h3>
        </div>
      </div>
    </div>
  )
}

export default ReHotelCard