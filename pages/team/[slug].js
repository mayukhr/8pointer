import { useRouter } from 'next/router'

const Team = () => {
    const router = useRouter()
    const { slug } = router.query
  
    return <p>Team: {slug}</p>
}
  
export default Team