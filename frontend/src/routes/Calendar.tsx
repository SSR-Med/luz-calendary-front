// Dependencies
import { useEffect } from "react";
import { useNavigate } from "react-router";
// Helpers
import RefreshToken from "../helpers/token/RefreshToken"
export default function Calendary(){
    const navigate = useNavigate()
    useEffect(()=>{
        RefreshToken(navigate)
    },[])
    return (
        <>
        </>
    )
}