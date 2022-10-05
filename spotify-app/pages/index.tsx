import React from 'react'
import GradientLayout from '../components/GradientLayouts'
import styles from '../styles/Home.module.css'
import prisma from '../lib/prisma'

const Home = () => {
  return (
    <GradientLayout
      color="red"
      subtitle="profile"
      title="Ibrahim Kadri"
      description="15 public playlist"
      image="https://avatars.githubusercontent.com/u/73664886?v=4"
      roundImage >
      <div style={{ fontSize: "100px", color: "white" }}>Home Page</div>
    </GradientLayout>
  )
}

export const getServerSideProps = async ( req ) => {
  const artists = await prisma.artist.findMany({});
  console.log(artists)
  return {
    props: {
      artists
    }
  }
}


export default Home;