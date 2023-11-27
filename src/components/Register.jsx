/* TODO - add your code to create a functional React component that renders a registration form */
import { useState } from "react"

const Register = () => {
    // console.log('Register here')
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [email, setEmail] = useState("")
const [error, setError] = useState(null)

const handleSubmit = async (event) => {
event.preventDefault();
// console.log('hello')
try {
const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register", 
{
    method: "POST", 
    headers: { 
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({ 
        username: username, 
        password: password,
        email: email 
      }) 
});
const result = await response.json();
console.log(result);

} catch (error) {
    setError(error.message);
  }

}

    return ( 
<> 
        <h1>Hi There, friend!</h1> 
        <h3>Enter your details and start your book collection right away</h3>

        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                
                <label>
                    Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>

                <label>
                    Email: <input value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>

                <label>
                    Favorite book: <input />
                </label>
                
                <button>Sign Up! </button>
            </form>
        </div>

</>   
    
    
    )

    }
    
    export default Register;