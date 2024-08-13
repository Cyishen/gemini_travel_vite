import Wrapper from "@/components/Wrapper"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { doc, getDoc } from "firebase/firestore"
import { db } from "@/lib/firebaseDb"

import ReViewSelect from "@/components/review/ReViewSelect"
import ReHotel from "@/components/review/ReHotel"
import RePlan from "@/components/review/RePlan"

const ViewPage = () => {
  const { id } = useParams()

  const [data, setData] = useState([])

  useEffect(() => {
    const GetData = async () => {
      const docRef = doc(db, 'tripDataModel', id)
      const docSnap = await getDoc(docRef)
  
      if(docSnap.exists()) {
        // console.log('Document',docSnap.data())
        setData(docSnap.data())
      } else {
        console.log("No such document!")
      }
    }

    if (id) {
      GetData();
    }
  }, [id])

  console.log(data)

  return (
    <section className="h-full w-full mb-20">
      <Wrapper className='flex flex-col items-center sm:p-10'>
        <div className="sm:p-10 border w-full p-5 rounded-2xl">
          {/* SELECT */}
          <ReViewSelect tripData={data}/>

          {/* HOTEL */}
          <ReHotel tripData={data} />

          {/* PLAN */}
          <RePlan tripData={data} />
        </div>
      </Wrapper>
    </section>
  )
}

export default ViewPage