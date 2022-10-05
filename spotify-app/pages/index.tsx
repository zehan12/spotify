import React from 'react'
import GradientLayout from '../components/GradientLayouts'
import styles from '../styles/Home.module.css'
import prisma from '../lib/prisma'
import { Flex, Box, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { useMe } from '../lib/hooks'

const Home = ({ artists }) => {

  const { user, isLoading } = useMe();

  if ( isLoading ) {
    return null
  }
  console.log(user,"ueer------------------")
  return (
    <GradientLayout
      color="purple"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlist`}
      image="https://avatars.githubusercontent.com/u/73664886?v=4"
      roundImage >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">Top artist this month</Text>
          <Text fontSize="md" >only visible to you</Text>
        </Box>
        <Flex justify="space-between">
          {artists.map((artist) => (
            <Box padding="20px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image src="https://placekitten.com/300/300" 
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>

            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export const getServerSideProps = async (req) => {
  const artists = await prisma.artist.findMany({});
  return {
    props: {
      artists
    }
  }
}


export default Home;