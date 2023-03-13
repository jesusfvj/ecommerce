import { NavBar, MainImage, Body, Footer } from '../../components/index.js';

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