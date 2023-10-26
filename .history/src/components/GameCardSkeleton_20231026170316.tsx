import {Card, CardBody, Skeleton, SkeletonText} from '@ch'

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