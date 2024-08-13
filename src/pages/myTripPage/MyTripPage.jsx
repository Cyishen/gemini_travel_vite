import Wrapper from "@/components/Wrapper"
import { useUser } from "@clerk/clerk-react"

import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/lib/firebaseDb"
import { useEffect, useState } from "react"
import TripList from "./TripList"


const MyTripPage = () => {
  const existingUser = useUser()
  const userEmail = existingUser?.user?.emailAddresses[0]?.emailAddress

  const [data, setData] = useState([])

  useEffect(() => {
    const GetData = async () => {
      const q = query(collection(db, "tripDataModel"), where("userEmail", "==", userEmail));
  
      const querySnapshot = await getDocs(q);
      setData([])
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, '=>', doc.data());
        setData(pre => [...pre, doc.data()])
      })
    }
  
    if (userEmail) {
      GetData();
    }
  }, [userEmail])

  return (
    <section className="w-full h-full mb-10">
      <Wrapper className='flex flex-col items-center sm:p-10'>
        <div className="h-full sm:p-10 border w-full p-5 rounded-2xl">
          <h2 className="font-bold text-2xl mb-10">想去的行程</h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {data.map((trip, index)=>(
              <TripList key={index} trip={trip} />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default MyTripPage