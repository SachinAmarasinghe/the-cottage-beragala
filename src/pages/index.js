import * as React from "react"
import AmenitiesSection from "../components/amenitiesSection"
import ArrivalSection from "../components/arrivalSection"
import ContactSection from "../components/contactSection"
import DiscoverSection from "../components/discoverSection"
import FaqSection from "../components/faqSection"
import GallerySection from "../components/gallerySection"
import HeroSection from "../components/heroSection"
import Layout from "../components/layout"
import ReviewsSection from "../components/reviewsSection"
import StorySection from "../components/storySection"
import '../styles/style.sass'

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <AmenitiesSection />
      <GallerySection />
      <DiscoverSection />
      <ArrivalSection />
      <ReviewsSection />
      <ContactSection />
      <FaqSection />
      <StorySection />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home | The Cottage Beragala</title>
