const { useRouter } = require("next/router");

export default function Home(){
    const router = useRouter()
    const {id } = router.query

    return <h1>Home {id}</h1>

}