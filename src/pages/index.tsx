import { Box, Button } from "@chakra-ui/react"
import { NextPage } from "next"
import React, { useCallback, useEffect, useState } from "react"
import { FaSpotify } from "react-icons/fa"

const Top: NextPage = () => {
  const functions = new Set()

  const [count, setCount] = useState<number>(0)
  useEffect(() => {
    setInterval(() => {
      console.log("1")
    }, 2000)
  }, [])

  const onPressToHome = useCallback(() => {
    setCount(count + 1)
  }, [count])

  console.log(functions)

  return (
    <Box>
      <Button onClick={onPressToHome} leftIcon={<FaSpotify />} colorScheme="green">
        Login to Spotify {count}
      </Button>
    </Box>
  )
}

export default Top
