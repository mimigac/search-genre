import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import RestaurantCard from 'RestaurantCard'
import styled from 'styled-components'

interface Restaurant {
  // restaurant: {
  restaurant_id: string
  restaurant_name: string
  restaurant_photo: string
  local_url: string
  hashtag: string
  genre: string
  station: string
  budget_lunch: string
  // };
  // additional: {

  use_hashtag: boolean
  // title: string;
  // title_link: string;
  // right_desk?: string;
  // left_desk?: string;
  // //不明
  // restaurantData_first?: string;
  // }
}

const CustomSlider = styled(Slider)`
  width: 80%;
  margin: 0 auto;
  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
`

const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

interface Restaurants {
  restaurants: Restaurant[]
}

// interface api {
// restaurant: {
//   restaurant_name: string;
//   restaurant_photo: string;
//   local_url: string;
//   hashtag: string;
//   genre: string;
//   station: string;
//   budget_lunch: string;
// }
// }

const RestaurantList: React.FC<Restaurants> = (props) => {
  return (
    <>
      <CustomSlider {...settings}>
        {props.restaurants?.map((restaurant: Restaurant) => {
          console.log('single', restaurant)
          // let restaurantData: Restaurant = {
          //   restaurant: {
          //     restaurant_name: restaurant.restaurant.restaurant_name,
          //     restaurant_photo: restaurant.restaurant.local_url,
          //     local_url: restaurant.restaurant.local_url,
          //     hashtag: restaurant.restaurant.hashtag,
          //     genre: restaurant.restaurant.genre,
          //     station: restaurant.restaurant.station,
          //     budget_lunch: restaurant.restaurant.budget_lunch,
          //   },
          //   use_hashtag: true,
          //   title: restaurant.title,
          //   title_link: restaurant.title_link,
          // };
          return (
            <RestaurantCard
              restaurant={restaurant}
              // use_hashtag={true}
              // title={"koko"}
              // title_link={"koko"}
              //少し気持ち悪い
              // key={restaurant.restaurant.restaurant_name}
            />
          )
        })}
      </CustomSlider>
    </>
  )
}

export default RestaurantList
