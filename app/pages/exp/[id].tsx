import { useRouter } from "next/router";

function Exp(){
    const router = useRouter();
    const {id} = router.query;

    return <h1>{id}</h1>;
}

export default Exp;