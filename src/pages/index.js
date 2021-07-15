import * as React from 'react'
import Hero from '../components/Hero';
import Layout from '../components/layout/Layout';
// import Hero from '../components/Hero';


const IndexPage = () => {
  return (
    <Layout>
      <Hero></Hero>
        <section id="features" className="py-20 lg:pb-40 lg:pt-48">Features</section>
        <section id="services" className="py-20 lg:pb-40 lg:pt-48">Services</section>
        <section id="stats" className="py-20 lg:pb-40 lg:pt-48">Stats</section>
        <section id="testimonials" className="py-20 lg:pb-40 lg:pt-48">Testimonials</section>
    </Layout>
  )
}


export default IndexPage