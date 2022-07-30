import { Box, Button } from "@chakra-ui/react"
import { NextPage } from "next"
import React, { useEffect } from "react"
import { FaSpotify } from "react-icons/fa"

const Home: NextPage = () => {
  useEffect(() => {
    console.log("aaa")
  }, [])

  return (
    <Box alignItems="center">
      <Button
        onClick={() => {
          alert("aa")
        }}
        leftIcon={<FaSpotify />}
        colorScheme="green"
      >
        Login to Spotify
      </Button>
    </Box>
  )
}

export default Home
