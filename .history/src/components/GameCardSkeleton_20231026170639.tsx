import {Card, CardBody, Skeleton, SkeletonText} from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card width=''>
        <Skeleton height='200px'></Skeleton>
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton