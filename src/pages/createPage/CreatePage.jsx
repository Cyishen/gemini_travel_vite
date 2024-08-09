import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/Wrapper"
import { SelectBudget, SelectPeople } from "@/constants/options";

import { useEffect, useState } from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import toast from "react-hot-toast";

const CreatePage = () => {
  const [place, setPlace] = useState()
  const [formDate, setFormDate] = useState({})

  const handleInputChange = (name, value) => {
    setFormDate((pre)=>{
      return {
        ...pre,
        [name]: value,
      }
    })
  }

  useEffect(() => {
  }, [formDate])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formDate.Location || !formDate.People || !formDate.Budget || !formDate.Days) {
      toast.error('請輸入完整資訊', {
        // icon: '',
      });
      return
    }
    console.log(formDate)
  }


  return (
    <section className="w-full mt-10 mb-10">
      <Wrapper className='flex flex-col items-center sm:p-10'>
        <div className="sm:p-10 bg-gray-100 w-full p-5 rounded-2xl">
          <h1 className="text-6xl">輕鬆規劃</h1>

          <form onSubmit={handleSubmit} className="flex flex-col mt-10 sm:p-10 gap-10">
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
            <div className="">
              <p className="text-2xl mb-5">天數</p>
              <Input 
                type="number" 
                onChange={(e) => handleInputChange('Days', e.target.value)}
              />
            </div>

            <div className="">
              <p className="text-2xl mb-5">預算</p>
              
              <div className="grid sm:grid-cols-3 gap-5">
                {SelectBudget.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => handleInputChange('Budget', item.title)}
                    className={`flex flex-col border p-4 bg-white rounded-xl cursor-pointer ${formDate?.Budget == item.title && 'bg-blue-200' }`}
                  > 
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <p>{item.icon}</p>
                    <p className="text-lg font-light text-gray-500 mt-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <p className="text-2xl mb-5">人數</p>

              <div className="grid sm:grid-cols-3 gap-5">
                {SelectPeople.map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => handleInputChange('People', item.people)}
                    className={`flex flex-col border p-4 bg-white rounded-xl cursor-pointer ${formDate?.People == item.people && 'bg-blue-200' }`}
                  > 
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <p>{item.people}</p>
                    <p className="text-lg font-light text-gray-500 mt-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <Button size="lg" type="submit">建立</Button>
          </form>
        </div>
      </Wrapper>
    </section>
  )
}

export default CreatePage