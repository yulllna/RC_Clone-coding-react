import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BPage() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const movieAsync = setTimeout(() => {
            setMovie(["어벤져스", "오징어게임", "킹덩", "DP"]);
        }, 2000);

        return () => {
            clearTimeout(movieAsync);
        };
    }, []);

    return (
        <>
            <h1>페이지 B입니다.</h1>
            {movie.length > 0 ? (
                movie.map((item, index) => <p key={index}>{item}</p>)
            ) : (
                <p>...로딩중입니다.</p>
            )}
            <Link to="/cPage">c 페이지로 이동</Link>
        </>
    );
}

export default BPage;
