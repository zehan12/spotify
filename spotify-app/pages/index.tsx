import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import GradientLayout from '../components/GradientLayouts'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
      <GradientLayout color="red" subtitle="profile" title="Zehan Khan" description="15 public playlist" image="https://avatars.githubusercontent.com/u/73664886?v=4" roundImage >
        <div>Home Page</div>
      </GradientLayout>
  )
}


export default Home;