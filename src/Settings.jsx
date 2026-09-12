import { useOutletContext } from "react-router";

function Settings() {
    
    const {cnt,setCnt} = useOutletContext();

    return <>
    <button onClick={()=>(setCnt(cnt+1))}>{cnt}</button>
    </>
}
export default Settings;