import {authUserSession} from "@/libs/auth-libs"
import Image from "next/image";
import Link from "next/link";


const Page = async() =>{
    const user = await authUserSession()
    return(
        <div className="text-color-primary flex justify-center flex-col items-center">
            <h5 className="text-2xl font-bold ">Welcome,{user?.name}</h5>
            
            <Image src={user?.image} alt="..." width={250} height={250} />

            <div className="py-8 flex flex-warp gap-4">
                <Link href="/users/dashboard/collection" className="bg-color-accent text-color-dark font-bold text-xl px-4 py-3" >My Collection</Link>
                <Link href="/users/dashboard/collection" className="bg-color-accent text-color-dark font-bold text-xl px-4 py-3" >My Comment</Link>

            </div>
        </div>
    )
}

export default Page