import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader = () => (
  <div>
    <Skeleton height={30} width={200} />
    <Skeleton height={100} count={3} />
  </div>
)

export default SkeletonLoader
