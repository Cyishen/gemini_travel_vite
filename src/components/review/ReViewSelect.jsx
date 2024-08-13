import { PlaneTakeoff, UsersRound, CircleDollarSign } from "lucide-react"


const ReViewSelect = ( { tripData } ) => {
  return (
    <div>
      <p>搜尋的選項</p>

      <div className="flex flex-col">
        <h2 className="font-bold text-2xl mb-5">{tripData?.userSelect?.Location?.label}</h2>

        <div className="flex gap-3 overflow-x-auto whitespace-nowrap custom-scrollbar">
          <div className="flex border p-2 rounded-lg gap-3">
            <PlaneTakeoff />
            <p>天數:</p>
            <p className="">{tripData?.userSelect?.Days}</p>
          </div>

          <div className="flex border p-2 rounded-lg gap-3">
            <UsersRound />
            <p>人數:</p>
            <p>{tripData?.userSelect?.People}</p>
          </div>

          <div className="flex border p-2 rounded-lg gap-3">
            <CircleDollarSign />
            <p>預算: </p>
            <p>{tripData?.userSelect?.Budget}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReViewSelect