import { NavBar, MainImage, Body, Animation, Footer, Mosaic } from '../components';

export function Home() {
  return (
    <div className="home">
      <NavBar />
      <Animation />
      <MainImage location="home-path" classAttribute="home-triangle-body"/>
      <Body containerClassName="home-body-container">
        <Mosaic />
      </Body>
      <Footer />
    </div>
  );
}