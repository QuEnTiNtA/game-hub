import {Card, CardBody, Skeleton, SkeletonText} from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton aheight='200px'a></Skeleton>
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton