import { useEffect, useState } from "react"

export default function spinCounter(){
    const [spin,setspin] = useState(0)
    useEffect(() => {
        while(true){
            setTimeout(function(){ setspin(spin+1) }, 500)
        }
      }, []);
    return(
        <div>
            I have spun {spin} times
        </div>
    )
}