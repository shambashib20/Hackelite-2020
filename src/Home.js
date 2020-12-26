import React from 'react'
import PrimarySearchAppBar from './Header'
import ImgMediaCard1 from './Card1'
import ImgMediaCard2 from './Card2'
import ImgMediaCard3 from './Card3'
import ImgMediaCard4 from './Card4'
import ImgMediaCard5 from './Card5'

function Home() {
    return (
        <div className="App"  >

        <div className = "header">
            <PrimarySearchAppBar />
        </div>
  
        <div className="Body-1">
          <ImgMediaCard1 className="one" />
          <ImgMediaCard2 className="two"/>
          <ImgMediaCard3 className="three"/>
        </div>
  
        <div className="Body-2">
          <ImgMediaCard4 className="four"/>
          <ImgMediaCard5 className="one"/>
      </div>

      </div>
    )
}

export default Home
