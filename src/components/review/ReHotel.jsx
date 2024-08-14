import ReHotelCard from "./ReHotelCard"


const ReHotel = ( { tripData } ) => {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl mb-5">推薦飯店</h2>

      {/* <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {tripData?.tripData?.HotelOptions?.map((hotel, index) => (
          <ReHotelCard key={index} hotel={hotel} />
        ))}
      </div> */}

      {/* SCROLL VIEW */}
      <div className="flex overflow-x-scroll custom-scrollbar whitespace-wrap gap-3 ">
        {tripData?.tripData?.HotelOptions?.map((hotel, index) => (
          <ReHotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  )
}

export default ReHotel