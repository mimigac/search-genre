import styled from 'styled-components'
// import { Link } from "react-router-dom";

interface Restaurant {
  restaurant: {
    restaurant_id: string
    restaurant_name: string
    restaurant_photo: string
    local_url: string
    hashtag: string
    genre: string
    station: string
    budget_lunch: string
  }
  // additional: {
  //   use_hashtag: boolean;
  //   title: string;
  //   title_link: string;
  //   right_desk?: string;
  //   left_desk?: string;
  //   //不明
  //   restaurantData_first?: string;
  // };
}

//styled-components
const CardWrapper = styled.div`
  height: fit-content;
  width: 400px;
  margin: auto;
  display: flex;
  flex-flow: row;
  border: 1px solid rgba(220, 220, 220, 1);
  box-shadow: 0px 2px 10px rgba(229, 229, 235, 0.4);
  background-color: #f0edf8;
  border-radius: 3px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 2px 15px rgba(229, 229, 235, 0.6);
  }
`

const LinkTag = styled.a`
  text-decoration: none;
  color: #353e55;
  font-size: 14px;
  font-weight: 300;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Image = styled.div`
  width: 400px;
  height: 400px;
  padding: 0;
  content: '';
  filter: grayscale(40%);
  border: 1px solid rgba(220, 220, 220, 1);
`

// const CardBody = styled.div`
//   padding: 0px 16px 8px 16px;
//   height: auto;
//   width: auto;
//   display: flex;
//   flex-flow: column;
// `;

// const RestaurantName = styled.h2`
//   margin: 10px 0 0 0;
// `;

// const RestaurantDetailsRow = styled.div``;
// const HashTag = styled.span`
//   margin-right: 15px;
// `;

// const CostStationWrapper = styled.span``;

// const Buget = styled.div``;

// const StationData = styled.div``;

const RestaurantCard: React.FC<Restaurant> = (props) => {
  // let title = props.title;
  // if (title === "") {
  //   title = props.restaurant.restaurant_name;
  // }

  // const title_link = props.title_link;
  // let image = (
  //   <img
  //     // className={styles.restaurant_photo}
  //     // src={props.restaurant.local_url}
  //     alt={props.restaurant.restaurant_name}
  //     width={400}
  //     height={400}
  //   />
  // );

  // if (title_link !== "") {
  //   // title = (
  //   //   <a href={title_link}>
  //   //     <div>{title}</div>
  //   //   </a>
  //   // );
  //   // image = <a href={title_link}>{image}</a>;
  // }

  // let left_desk = "";
  // if (props.left_desk) {
  //   left_desk = props.left_desk;
  //   if (left_desk === "") {
  //     left_desk = props.restaurant.budget_lunch;
  //   }
  // }
  // let right_desk = "";
  // if (props.right_desk) {
  //   let right_desk = props.right_desk;
  //   if (right_desk === "") {
  //     right_desk = props.restaurant.station;
  //   }
  // }
  // let hashtag = [""];
  // let hashtagData: {
  //   link: string;
  //   tag: string;
  // }[] = [];
  // if (props.use_hashtag === true) {
  //   let hashtag_str = props.restaurant?.hashtag;
  //   if (hashtag_str == null) {
  //     hashtag_str =
  //       "[" +
  //       props.restaurant?.genre
  //         .replaceAll("（その他）", "")
  //         .replaceAll("、", ",") +
  //       "," +
  //       props.restaurant?.station +
  //       "]";
  //   }
  //   hashtag = hashtag_str
  //     .slice(1, -1)
  //     .replaceAll("'", "")
  //     .replaceAll(" ", "")
  //     .split(",")
  //     .slice(0, 5);
  //   hashtagData = hashtag.map((obj) => {
  //     const link = "/hashtag/" + obj;
  //     const tag = "#" + obj;
  //     let hashtagDatum: { link: string; tag: string } = {
  //       link: link,
  //       tag: tag,
  //     };
  //     return hashtagDatum;
  //   });
  // }

  return (
    <CardWrapper>
      <LinkTag href={'/recommend/' + props.restaurant.restaurant_id}>
        <ImageWrapper>
          <Image>
            <img
              src={props.restaurant?.local_url}
              alt={props.restaurant?.restaurant_name}
              width={400}
              height={400}
            />
          </Image>
        </ImageWrapper>
      </LinkTag>
    </CardWrapper>
  )
}
export default RestaurantCard
