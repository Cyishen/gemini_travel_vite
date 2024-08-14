import { peopleAmi, phonepayAmi } from "@/lib"

export const SelectDays = [
  {id: 1, day: '1'},
  {id: 2, day: '2'},
  {id: 3, day: '3'},
]
export const SelectPeople = [
  {
    id: 1,
    title: '1人',
    desc: '一個人的行程',
    icon: peopleAmi,
    people: '1 person'
  },
  {
    id: 2,
    title: '2人',
    desc: '相親相愛 Couple',
    icon: peopleAmi,
    people: '2 people' 
  },
  {
    id: 3,
    title: '3~5人',
    desc: '家庭 Family',
    icon: peopleAmi,
    people: '3 to 5 people'
  },
  {
    id: 4,
    title: '一群人',
    desc: '好友相聚 Friends',
    icon: peopleAmi,
    people: '5 to 10 people'
  }
]

export const SelectBudget = [
  {
    id: 1,
    title: '省錢',
    desc: '小資族首選',
    icon: phonepayAmi,
  },
  {
    id: 2,
    title: '一般',
    desc: '一般',
    icon: phonepayAmi,
  },
  {
    id: 3,
    title: '豪華',
    desc: '享受',
    icon: phonepayAmi,
  }
]

export const PROMPT_EN = 'Generate Travel Plan for Location: {location} for {days} Days for {people} with a {budget} budget, Give me a HotelOptions list with HotelName, HotelAddress, HotelPrice, HotelImageUrl, GeoCoordinates, Rating, Description and suggest itinerary with PlaceName, PlaceDetails, PlaceImageUrl, GeoCoordinates, TicketPrice, Time to travel each of the location for {days} days with each day plan with best time to visit in JSON format.'

export const PROMPT_TW = '請幫我規劃一個{days}天{people}的{location}旅遊行程，預算要{budget}，並提供飯店選項列表HotelOptions，包含HotelName、HotelAddress、HotelPrice、HotelImageUrl、GeoCoordinates、Rating和Description，HotelName與HotelAddress翻譯成中文，HotelPrice換成台幣,HotelImageUrl使用GeoCoordinates到google拿到圖片。此外，請提供每日行程建議PlaceOptions，包括Day、Places（景點），每個景點包含PlaceName、PlaceDetail、PlaceImageUrl、GeoCoordinates、TicketPrice、Time與EstimatedStayTime。請將以上所有資訊以JSON格式呈現，屬性名稱使用英文，內容使用中文。'


export const PROMPT_FOOD_EN ='Generate Travel Plan for Location: {location} for {Days} Days for {people} people with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with Food Spot Name, Food Spot Details, Food Spot Image Url, Geo coordinates, Recommended Restaurants, Recommended Restaurant Images, Recommended Dishes, and Recommended Dish Prices in JSON format.'

export const PROMPT_FOOD = '請幫我規劃一個{days}天{people}人的{location}美食之旅行程，預算要{budget}，並提供飯店選項列表，包含飯店名稱、地址、價格、飯店圖片網址、地理座標、評分和飯店描述。此外，也請提供行程建議，包含美食景點名稱、美食景點詳細資訊、美食景點圖片網址、地理座標、推薦商家、推薦商家圖片、推薦美食和推薦美食價格。請將所有資訊以JSON格式呈現，格式使用英文的屬性名稱，內容使用中文'

