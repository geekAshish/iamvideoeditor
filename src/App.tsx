
import CallToActionAndFooter from './components/Footer';
import GlowHeadline from './components/GlowingText/GlowingText';
import AboutMe from './components/sections/About'
import Testimonials from './components/Testimonials';
import VideoEditingIntro from './components/TextFromRight/TextFromRight';
import { YouTubeCarousel } from './components/YoutubeCarousel/YoutubeCarousel';
import VideoEditorHero from './VideoAlchamy'

function App() {

  const myVideos = [
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
        'https://youtu.be/LXb3EKWsInQ',
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
        whiteText="edits"
        className=""
      />

      <YouTubeCarousel videoLinks={myVideos} />

      <Testimonials />

      <CallToActionAndFooter />
    </>
  )
}

export default App
