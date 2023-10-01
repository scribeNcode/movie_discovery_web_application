import "./Home.css"
import Header from "../../components/Header/Header"
import Card from "../../components/Card/Card"

function Home() {
  return (
    <div className="homePage_container">
        <div className="headerCardWrapper el1"><Header/></div>
        <section className="FeaturedMovieWrapper el2">
          <Card/>
          </section>
    </div>
  )
}
export default Home










// import "./Home.css"
// import Header from "../../components/Header/Header"
// import Card from "../../components/Card/Card"
// import FeaturedMovie from "../../components/Featured_Movie/FeaturedMovie"

// function Home() {
//   return (
//     <div className="homePage_container">
//         <div className="headerCardWrapper el1"><Header/></div>
//         <section className="FeaturedMovieWrapper el2">
//           <Card/>
//            {/* <FeaturedMovie/> */}
//           </section>
//     </div>
//   )
// }
// export default Home