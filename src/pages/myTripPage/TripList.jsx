import { Link } from "react-router-dom"

import { PlaneTakeoff, UsersRound, CircleDollarSign } from "lucide-react"
import { useEffect, useState } from "react"
import { GetPlaceDetail, PHOTO_URL } from "@/lib/mapPhoto"

const TripList = ( {trip} ) => {
  const [ photoUrl, setPhotoUrl ] = useState()

  useEffect(() => {
    const getPlacePhoto = async () => {
      const data = {
        textQuery: trip?.userSelect?.Location?.label
      }
  
      await GetPlaceDetail(data).then(resp => {
        const getDataPlaceName = resp.data.places[0].photos[3].name
        const PhotoUrl = PHOTO_URL.replace('{NAME}', getDataPlaceName)

        setPhotoUrl(PhotoUrl)
      })
    }
    
    if (trip) {
      getPlacePhoto();
    }
  }, [ trip ])
  
  return (
    <div>
      <Link to={'/create/' + trip?.id}>
        <div className="flex w-full h-[150px] rounded-lg overflow-hidden mb-2">
          <img src={photoUrl ||'/landing.png'} alt="hotelImage" 
            className="object-cover h-[150px] w-full hover:scale-125 transition-all rounded-lg"
          />
        </div>
      </Link>

      <div className="line-clamp-1 mb-2">
        <p>{trip?.userSelect?.Location?.label}</p>
      </div>

      <div className="flex flex-col gap-1 overflow-x-auto whitespace-nowrap custom-scrollbar">
        <div className="flex border p-2 rounded-lg gap-3">
          <PlaneTakeoff />
          <p>天數:</p>
          <p className="">{trip?.userSelect?.Days}</p>
        </div>

        <div className="flex border p-2 rounded-lg gap-3">
          <UsersRound />
          <p>人數:</p>
          <p>{trip?.userSelect?.People}</p>
        </div>

        <div className="flex border p-2 rounded-lg gap-3">
          <CircleDollarSign />
          <p>預算: </p>
          <p>{trip?.userSelect?.Budget}</p>
        </div>
      </div>
    </div>
  )
}

export default TripList