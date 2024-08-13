import { GetPlaceDetail, PHOTO_URL } from "@/lib/mapPhoto"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const RePlanCard = ({ spot }) => {
  const [ photoUrl, setPhotoUrl ] = useState()

  useEffect(() => {
    const getPlacePhoto = async () => {
      const data = {
        textQuery: spot?.PlaceName
      }
  
      await GetPlaceDetail(data).then(resp => {
        const getDataPlaceName = resp.data.places[0].photos[3].name
        const PhotoUrl = PHOTO_URL.replace('{NAME}', getDataPlaceName)

        setPhotoUrl(PhotoUrl)
      })
    }
    
    if (spot) {
      getPlacePhoto();
    }
  }, [ spot ])
  
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+spot?.PlaceName} target={'_blank'}>
    <div className="flex border p-3 rounded-xl mb-3 shadow-md hover:bg-gray-100">
      <div className="flex items-center sm:self-center border rounded-lg min-w-[100px] h-[100px] mr-2 sm:mr-10 overflow-hidden">
        <img src={photoUrl || '/landing.png'} alt="show" className="object-cover h-[100px] w-[100px]" />
      </div>

      <div className="flex flex-col">
        <div className="relative">
          <p className="font-bold text-2xl mb-2">{spot.PlaceName}</p>
        </div>

        <div className="font-light text-gray-500">
          <p>時間: {spot.Time}</p>
          <p>預計停留時間: {spot.EstimatedStayTime}</p>
          <p className="mt-2 font-bold tracking-wider">{spot.PlaceDetail}</p>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default RePlanCard