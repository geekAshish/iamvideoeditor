
import CallToActionAndFooter from './components/Footer';
import GlowHeadline from './components/GlowingText/GlowingText';
import AboutMe from './components/sections/About'
import Testimonials from './components/Testimonials';
import VideoEditingIntro from './components/TextFromRight/TextFromRight';
import { YouTubeCarousel } from './components/YoutubeCarousel/YoutubeCarousel';
import VideoEditorHero from './VideoAlchamy'
import ShortFormGrid from './components/ShortFormGrid';


function App() {

  const myVideos = [
        'https://youtu.be/FS03aWTVLUg?si=FFfcRzZ0wKWYf92D',
        'https://youtu.be/QlyJOIBbMf8?si=SDE86bRjLOzOgqVX',
        'https://youtu.be/mleTrrUBc60?si=ygOKIkUCMAxLoBgA',
    ];

  return (
    <>
    {/* <RippleGridComponent /> */}
      <VideoEditorHero />

      <VideoEditingIntro />

      <AboutMe />


      <GlowHeadline
        orangeText="Long-Form"
        whiteText="Content"
        className=""
      />

      <YouTubeCarousel videoLinks={myVideos} />

      <GlowHeadline
        orangeText="Short-Form"
        whiteText="Content"
        className=""
      />

      <ShortFormGrid />

      <Testimonials />

      <CallToActionAndFooter />
    </>
  )
}

export default App
