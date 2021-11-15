import React from 'react'
import { Skeleton, Stack } from '@chakra-ui/react'

export default function SkeletonProducts ({ numberBars = 10, size = '70%' }) {
  const createBars = () => {
    const skeleton = []
    for (let index = 0; index < numberBars; index++) {
      skeleton.push(<Skeleton height="73px" key={[index]} />)
    }
    return skeleton
  }

  return <Stack w={size}>{createBars()}</Stack>
}
