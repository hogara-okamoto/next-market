"use client"
import { useState } from "react" 

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await fetch ("http://localhost:3000/api/user/register",
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify ({
                        name: name,
                        email: email,
                        password: password
                    })
                }
            )
            const jsonData = await response.json()
            alert(jsonData.message)
        } catch {
            alert("ユーザー登録失敗")
        }
    }
    return (
        <div>
            <h1>ユーザー登録</h1>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} 
                type="text" name="name" placeholder="名前" required />名前

                <input value={email} onChange={(e) => setEmail(e.target.value)} 
                type="text" name="email" placeholder="メールアドレス" required />メールアドレス
                
                <input value={password} onChange={(e) => setPassword(e.target.value)} 
                type="text" name="password" placeholder="パスワード" required />パスワード
                <button>登録</button>
            </form>
        </div>
    )
}

export default Register