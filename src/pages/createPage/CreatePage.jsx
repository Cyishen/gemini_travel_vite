import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/Wrapper"
import { PROMPT_TW , SelectBudget, SelectPeople, SelectDays } from "@/constants/options";
import chatSession from "@/lib/gemini";

import { useEffect, useRef, useState } from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import toast from "react-hot-toast";
import { Loader2 } from 'lucide-react'
import { DotLottiePlayer } from "@dotlottie/react-player";

import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/clerk-react";

import { doc, setDoc } from "firebase/firestore"; 
import { db } from "@/lib/firebaseDb";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const existingUser = useUser()
  const navigate = useNavigate()
  const refs = useRef([]);
  const peopleRef = useRef([]);

  const [isLoading, setIsLoading] = useState(false);
  const [place, setPlace] = useState()
  const [formDate, setFormDate] = useState({
    Location: '',
    Days: '',
    People: '',
    Budget: '',
  })
  const handleInputChange = (name, value) => {
    setFormDate((pre)=>{
      return {
        ...pre,
        [name]: value,
      }
    })
  }

  useEffect(() => {
    // console.log(formDate)
  }, [formDate])

  const handleSubmitTrip = async (e) => {
    e.preventDefault()

    if (formDate?.Days > 3) {
      toast.error('天數不能超過 3 天');
      return;
    }

    if (!formDate?.Days || !formDate?.Location || !formDate?.People || !formDate?.Budget) {
      toast.error('請輸入完整資訊');
      return
    }

    setIsLoading(true)

    const FINAL = PROMPT_TW 
      .replace('{location}', formDate?.Location.label)
      .replace('{days}', formDate?.Days)
      .replace('{people}', formDate?.People)
      .replace('{budget}', formDate?.Budget)

    // console.log(FINAL)
    const result = await chatSession.sendMessage(FINAL);
    const travelJson = result.response.text();

    save(travelJson)
    
    setIsLoading(false)
  }

  //TODO* SAVE TO DATABASE
  const save = async (tripData) => {
    const dotId = Date.now().toString()
    await setDoc(doc(db, "tripDataModel", dotId), {
      userSelect: formDate,
      tripData: JSON.parse(tripData),
      userEmail: existingUser?.user?.emailAddresses[0]?.emailAddress,
      id: dotId,
    });

    navigate('/create/' + dotId)
  }

  const handleMoneyHover = (index) => {
    if (refs.current[index] === null) return;

    refs.current[index].seek(0);
    refs.current[index].play();
  };

  const peopleIconHover = (index) => {
    if (peopleRef.current[index] === null) return;
    
    peopleRef.current[index].seek(0);
    peopleRef.current[index].play();
  }

  return (
    <section className="w-full mt-10 mb-10">
      <Wrapper className='flex flex-col items-center sm:p-10'>
        <div className="sm:p-10 bg-gray-100 w-full p-5 rounded-2xl">
          <h1 className="text-6xl">輕鬆規劃</h1>

          <form onSubmit={handleSubmitTrip} className="flex flex-col mt-10 sm:p-10 gap-10">
            {/* LOCATION */}
            <div className="">
              <p className="text-2xl mb-5">去哪裡</p>

              <GooglePlacesAutocomplete
                apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
                selectProps={{
                  place,
                  onChange: (value) => { 
                    setPlace(value)
                    handleInputChange('Location', value) 
                  },
                }}
              />
            </div>

            {/* OTHER */}
            {/* <div>
              <p className="text-2xl mb-5">天數</p>
              <Input 
                type="number" 
                onChange={(e) => handleInputChange('Days', e.target.value)}
              />
            </div> */}

            <div>
              <p className="text-2xl mb-5">天數</p>

              <div className="flex gap-3">
                {SelectDays.map((item) => (
                  <div key={item.id} 
                    className={`flex justify-center w-[100px] flex-shrink-0 border py-1 bg-white rounded-md cursor-pointer ${formDate?.Days == item.day &&' border-black' }`}
                    onClick={() => handleInputChange('Days', item.day)}
                  >
                    <p>{item.day}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-2xl mb-5">預算</p>
              
              <div className="flex overflow-x-scroll custom-scrollbar whitespace-wrap gap-3">
                {SelectBudget.map((item, index) => (
                  <div
                    onMouseEnter={() => handleMoneyHover(index)}  
                    key={item.id}
                    onClick={() => handleInputChange('Budget', item.title)}
                    className={`flex flex-col w-[130px] md:w-[180px] flex-shrink-0 border p-4 bg-white rounded-xl cursor-pointer ${formDate?.Budget == item.title &&' border-black' }`}
                  > 
                    <h2 className="text-2xl font-bold">{item.title}</h2>

                    <DotLottiePlayer 
                      ref={(e) => (refs.current[index] = e)} 
                      src={item.icon}
                      className="w-10 h-10" 
                      autoplay 
                    />
                    <p className="text-lg font-light text-gray-500 mt-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-2xl mb-5">人數</p>

              <div className="flex overflow-x-scroll custom-scrollbar whitespace-wrap gap-3">
                {SelectPeople.map((item, index) => (
                  <div
                    onMouseEnter={() => peopleIconHover(index)}   
                    key={item.id} 
                    onClick={() => handleInputChange('People', item.people)}
                    className={`flex flex-col w-[130px] md:w-[180px] flex-shrink-0 border p-4 bg-white rounded-xl cursor-pointer ${formDate?.People == item.people && 'border-black' }`}
                  > 
                    <h2 className="text-2xl font-bold">{item.title}</h2>

                    <DotLottiePlayer 
                      ref={(e) => (peopleRef.current[index] = e)} 
                      src={item.icon}
                      className="w-10 h-10" 
                      autoplay 
                    />

                    <p className="text-lg font-light text-gray-500 mt-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-full">
              <SignedIn>
                <Button
                  variant="forVideo"
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  { isLoading 
                    ? <div className="flex items-center gap-3">
                        <Loader2 className='animate-spin h-6 w-6 text-zinc-500' />
                        <p>載入中...</p>
                      </div>
                    : '立即出發' 
                  }
                </Button>
              </SignedIn>

              <SignedOut>
                <SignInButton
                  mode="modal"
                >
                  <Button 
                    variant="forVideo" 
                    type="submit"
                    className="w-full"
                  >
                    登入出發
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
          </form>
        </div>
      </Wrapper>
    </section>
  )
}

export default CreatePage