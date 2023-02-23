import React from 'react'
import styled from 'styled-components'
import { useViewPort } from '../hooks'

const moviesList = [
  // "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg",
  // "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg",
  // "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg",
  // "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg",
  // "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg",
  // "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg",
  // "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg",
  // "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg",
  // "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg",
  // "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg",
]

const SearchMovies = () => {

  const [windowWidth] = useViewPort()

  return (
    <SearchPane>
        {
          moviesList && moviesList.length > 0 ? (
            <div
            className='searchContent'
            style={{
              gridTemplateColumns : `repeat(${
                windowWidth > 1200 ? 5 :
                windowWidth > 992 ? 4 :
                windowWidth > 768 ? 3 :
                windowWidth > 600 ? 2 : 1

              } , auto)`
            }}
            >
              {
                moviesList.map((movie , index) =>(
                  <div className='movieItem'>
                  <img src={movie} alt="" />
                    <span>MovieName</span>
                  </div>
                ))
              }
            </div>
          ) : (
            <NotFound>
              <h1>Your search for " adawdawaw" did not have any matches</h1>
            </NotFound>
          )
        }
    </SearchPane>
  )
}

export default SearchMovies

const SearchPane = styled.div`
  width : 100% ;
  min-height : 92vh ;
  padding-top : 80px ;
  background : var(--color-background) ;
  transition : all 0.3s linear ;

  .searchContent {
    padding : 40px 60px ;
    display : grid ;
    gap : 8px ;

    &:hover movieItem {
      opacity : 0.7 ;
    }

    .movieItem {
      position : relative ;
      max-width : 400px ;
      width : 100% ;
      height : 200px ;
      border-radius : 12px ;
      margin : 20px 0 ;
      overflow : hidden ;
      transform : scale(1);
      transition : all 0.3s linear ;

      &:hover {
        transform : scale(1.2);
        z-index : 10 ;
        opacity : 1;
      }

      img{
        width : 100% ;
        height : 100% ;
        object-fit : cover ;
      }

      span{
        position : absolute ;
        left : 0 ;
        bottom : 0 ;
        right : 0 ;
        text-align : center ;
        padding : 4px ;
        background : rgba(0 , 0 ,0 ,0.5);
        color : var(--color-white);
        font-weight : bold ;
      }
    }
  }
`

const NotFound = styled.div`
padding : 8rem ;
color : var(--color-white);
`