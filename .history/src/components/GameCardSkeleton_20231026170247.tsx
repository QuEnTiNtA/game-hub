import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton height='200px'></Skeleton>
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton