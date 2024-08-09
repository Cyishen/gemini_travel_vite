export const SelectPeople = [
  {
    id: 1,
    title: 'One',
    desc: 'One description',
    icon: '1',
    people: '1 person'
  },
  {
    id: 2,
    title: 'Two',
    desc: 'Two description',
    icon: '2',
    people: '2 people'
  },
  {
    id: 3,
    title: 'Family',
    desc: 'Family description',
    icon: '3',
    people: '3 to 5 people'
  },
  {
    id: 4,
    title: 'Group',
    desc: 'Group description',
    icon: '4',
    people: '5 to 10 people'
  }
]

export const SelectBudget = [
  {
    id: 1,
    title: 'Cheap',
    desc: 'Cheap description',
    icon: '5',
  },
  {
    id: 2,
    title: 'Normal',
    desc: 'Normal description',
    icon: '6',
  },
  {
    id: 3,
    title: 'Luxury',
    desc: 'Luxury description',
    icon: '7',
  }
]

export const PROMPT_EN = 'Generate Travel Plan for Location: {location} for {days} Days for {people} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo coordinates, ticket Pricing, Time to travel each of the location for {days} days with each day plan with best time to visit in JSON format.'

export const PROMPT_TW = '請幫我規劃一個{days}天{people}人的{location}旅遊行程，預算要{budget}，並提供飯店選項列表，包含飯店名稱、地址、價格、飯店圖片網址、地理座標、評分和飯店描述。此外，也請提供行程建議，包含景點名稱、景點詳細資訊、景點圖片網址、地理座標、門票價格、每個景點的預計停留時間。請將所有資訊以JSON格式呈現，並使用中文'

export const PROMPT_FOOD_EN ='Generate Travel Plan for Location: {location} for {Days} Days for {people} people with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with Food Spot Name, Food Spot Details, Food Spot Image Url, Geo coordinates, Recommended Restaurants, Recommended Restaurant Images, Recommended Dishes, and Recommended Dish Prices in JSON format.'

export const PROMPT_FOOD = '請幫我規劃一個{days}天{people}人的{location}美食之旅行程，預算要{budget}，並提供飯店選項列表，包含飯店名稱、地址、價格、飯店圖片網址、地理座標、評分和飯店描述。此外，也請提供行程建議，包含美食景點名稱、美食景點詳細資訊、美食景點圖片網址、地理座標、推薦商家、推薦商家圖片、推薦美食和推薦美食價格。請將所有資訊以JSON格式呈現，並使用中文'

