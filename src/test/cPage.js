import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CPage() {
    const navigate = useNavigate();
    //const history = useHistory();
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState(false);

    useEffect(() => {
        if (password.length > 1 && password.length < 5) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [password]);

    const goAPage = () => {
        navigate("/");
        //history.push('/');
    };

    return (
        <>
            <h1>페이지 C입니다.</h1>
            <input
                placeholder="비밀번호를 입력하세요"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            {valid ? (
                <p style={{ color: "red" }}>
                    비밀번호는 5자리 이상이여야 합니다,
                </p>
            ) : (
                <br />
            )}

            <button onClick={goAPage}>a 페이지로 이동</button>
        </>
    );
}

export default CPage;
