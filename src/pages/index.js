import Head from 'next/head'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import About from '../../components/About'
import Work from '../../components/Work'
import Experience from '../../components/Experience'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'



export default function Home() {
  return (
    <>
    <Head>
      <title>John Rohit Ernest</title>
    </Head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap');
    </style>
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  )
}
