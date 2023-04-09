import { Body, Footer, MainImage, NavBar } from "../components"

export const About = () => {
  return (
    <div className="about">
      <NavBar />
      <MainImage location="about-path"/>
      <Body containerClassName="about-body-container"/>
      <Footer />
    </div>
  )
}