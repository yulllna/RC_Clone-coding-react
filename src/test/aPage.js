import { useEffect } from "react";
import { Link } from "react-router-dom";

function APage() {
    useEffect(() => {
        //화면 랜더링
        console.log("페이지 A에 들어옴");

        return () => {
            //화면이 사라질때
            console.log("페이지 A에서 나감");
        };
    }, []); //state

    return (
        <>
            <h1>페이지 A입니다.</h1>
            <Link to="/bPage">b 페이지로 이동</Link>
        </>
    );
}

export default APage;
