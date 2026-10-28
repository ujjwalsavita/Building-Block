// import { SignupForm } from "./components/login"
import { useState } from "react"
import { LoginForm } from "./components/login-form"
import { SignupForm } from "./components/signup-form";


function App() {
  const [isLogin, setLogin] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      {isLogin ? (
        <LoginForm
          className="w-full max-w-3xl"
          onToggle={() => setLogin(false)}
        />
      ) : (
        <SignupForm
          className="w-full max-w-3xl"
          onToggle={() => setLogin(true)}
        />
      )}
    </div>
    // <div className="flex min-h-screen items-center justify-center p-4">
    //   {
    //     isLogin ? <LoginForm className="w-full max-w-3xl"/> :
    //     <SignupForm className="w-full max-w-3xl"/>
    //   }
    // {/* <SignupForm className="w-full max-w-3xl"/> */}
    
    // </div>
  )
}

export default App
