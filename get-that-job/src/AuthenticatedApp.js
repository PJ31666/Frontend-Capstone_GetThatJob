import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import FindThatJob from "./components/ProfessionalViews/FindThatJob.js";
import Following from "./components/ProfessionalViews/Following";
import MyProfile from "./components/ProfessionalViews/MyProfile";
import YourApplication from "./components/ProfessionalViews/YourApplication";
import { getUser } from "./service/userServices.js";

export function AuthenticateApp() {
  const [currentUser, setCurrentUser] = useState({});

  getUser()
  .then(u => setCurrentUser(u.find(element => element.user_id == sessionStorage.getItem("id"))))
  .catch(error => console.log(error) );

  return(
    <div>
      {/* <Routes>
        <Route path="/FindThatJob" element={<FindThatJob />} />
        <Route path="/YourApplication" element={<YourApplication />} />
        <Route path="/Following" element={<Following />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes> */}

        <FindThatJob />
    </div>
  )
}

{/* <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/signup3" element={<Signup3 />} />
        <Route path="/signupRec1" element={<SignupRec1 />} />
        <Route path="/signupRec2" element={<SignupRec2 />} />
        <Route path="/FindThatJob" element={<FindThatJob />} />
        <Route path="/YourApplication" element={<YourApplication />} />
        <Route path="/Following" element={<Following />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes> */}
