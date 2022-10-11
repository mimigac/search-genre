import { useState, useEffect } from 'react'
import { BrowserHistory } from 'history'
import { useParams } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import RestaurantCardList from 'RestaurantCardList'

const RestaurantList: React.FC<{ history: BrowserHistory }> = (props) => {
  const { genre } = useParams();
  const [genreRestaurants, setGenreRestaurants] = useState([])
  //ここ両方のloadとerrorを一つで管理してしまっている。
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    console.log(genre)
    const host = 'http://127.0.0.1:5000'
    console.log(`${host}/restaurant/:genre/${genre}`)
    fetch(`${host}/restaurant/:genre/${genre}`)
      .then((result) => result.json())
      .then((restaurants) => {
        console.log(restaurants)
        setGenreRestaurants(restaurants.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(true)
        setError(true)
      })
    // return () => {};
  }, [])

  if (loading) {
    return <div>loading</div>
  }

  if (error) {
    return <div>error</div>
  }
  return (
    <>
      <h2>{genre}</h2>
      <RestaurantCardList restaurants={genreRestaurants} />
    </>
  )
}

export default RestaurantList
