// // import { SignupForm } from "./components/login"
// import { useState } from "react"
// import { LoginForm } from "./components/login-form"
// import { SignupForm } from "./components/signup-form";


// function App() {
//   const [isLogin, setLogin] = useState(true);

//   return (
//     <div className="flex min-h-screen items-center justify-center p-4">
//       {isLogin ? (
//         <LoginForm
//           className="w-full max-w-3xl"
//           onToggle={() => setLogin(false)}
//         />
//       ) : (
//         <SignupForm
//           className="w-full max-w-3xl"
//           onToggle={() => setLogin(true)}
//         />
//       )}
//       {/* <div>
//         <div class="absolute bottom-8 left-0 right-0 animate-drive-fixed"><img src="https://customer-assets.emergentagent.com/job_electric-rides-6/artifacts/014b797m_women-driver-BNJh4seE.png" alt="NURA Auto" class="h-20 w-auto" style="transform: scale(3); transform-origin: center center;" /></div>
//       </div>  */}
        

      
//     </div>
      
//   )
// }

// export default App


import { useState } from "react";
import { LoginForm } from "./components/login-form";
import { SignupForm } from "./components/signup-form";

function App() {
  const [isLogin, setLogin] = useState(true);

  return (
    <div className="relative flex min-h-screen items-center justify-center p-4">
      {/* Login / Signup Form */}
      <div className="relative z-10 w-full max-w-3xl">
        {isLogin ? (
          <LoginForm onToggle={() => setLogin(false)} />
        ) : (
          <SignupForm onToggle={() => setLogin(true)} />
        )}
      </div>

      {/* Bottom Image */}
      {/* <div className="fixed bottom-8 left-0 z-20 w-full pointer-events-none">
        <img
          src="https://customer-assets.emergentagent.com/job_electric-rides-6/artifacts/014b797m_women-driver-BNJh4seE.png"
          alt="NURA Auto"
          className="mx-auto h-20 w-auto"
        />
      </div> */}
      {/* Moving Auto */}
<div className="fixed bottom-8 left-0 z-20 w-full overflow-hidden pointer-events-none">
  <div className="animate-drive w-fit">
    <img
      src="https://customer-assets.emergentagent.com/job_electric-rides-6/artifacts/014b797m_women-driver-BNJh4seE.png"
      alt="NURA Auto"
      className="h-20 w-auto"
    />
  </div>
</div>
    </div>
  );
}

export default App;