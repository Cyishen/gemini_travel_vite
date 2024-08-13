import RePlanCard from "./RePlanCard";

const RePlan = ({ tripData }) => {
  const data = tripData?.tripData?.PlaceOptions;

  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl mb-5">推薦行程</h2>

      <div className="flex flex-col gap-5">
        {data?.map((place, index) => (
          <div key={index}>
            <h2 className="font-bold text-xl mb-3">{place.Day}</h2>

            {place.Places?.map((spot, spotIndex) => (
              <div key={spotIndex}>
                <RePlanCard spot={spot} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RePlan;
