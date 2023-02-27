import { NavBar, MainImage, Body, Animation, Footer, Mosaic } from '../../components/index.js';

export function Home() {
  return (
    <div className="home">
      <NavBar />
      <Animation />
      <MainImage location="home-path"/>
      <Body>
        <Mosaic />
      </Body>
      <Footer />
    </div>
  );
}