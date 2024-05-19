import { QueryClient, QueryClientProvider } from "react-query";
import {Outlet, Route, BrowserRouter as Router, Routes,} from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./ProtectedRoute";
import LOGIN from "./components/Log-in/Log-in";
import UserProfile from "./components/UserProfile/userProfile";
import updateProfile from "./components/UserProfile/UpdateProfile";

import About from "./components/about/About";
import Footer from "./components/common/footer/footer";
import Header from "./components/common/header/header";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import SIGNUP from "./components/sign-up/Sign-up";
import { StoreProvider } from "./store";

import Dashboard from "./components/admin-dashboard/Dashboard";
import AllStudents from "./components/admin-dashboard/User/AllUsers";
import CreateNewStudent from "./components/admin-dashboard/User/CreateNewUser";
import EditFormStudent from "./components/admin-dashboard/User/EditFormUser";
import Aside_Admin from "./components/common/asidebar-admin/asidebar";

import CreateRoadmap from "./components/admin-dashboard/roadmap/AddRoadmap";
import CreateSteps from "./components/admin-dashboard/roadmap/steps/CreateSteps";

import AllSteps from "./components/admin-dashboard/roadmap/steps/AllSteps";
import MyRoadmaps from "./components/admin-dashboard/roadmap/MyRoadmaps";
import AllRoadmaps from"./components/allroadmaps/RoadmapsHome";
import SelectRoadmap from "./components/SelectRoadmap/SelectRoadmap";
import AllResouces from "./components/admin-dashboard/roadmap/steps/resources/AllResouces";
export const REST_API_BASE_URL = "http://localhost:9090/api";

// Create a new queryClient instance

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      {" "}
      <Router>
        <QueryClientProvider client={queryClient}>
          <StoreProvider>
            <Routes>
              <Route
                path="/admin"
                element={
                  <>
                    <Aside_Admin />
                    <Outlet />
                  </>
                }
              >
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="students" element={<AllStudents />} />
                <Route path="student-add" element={<CreateNewStudent />} />
                <Route path="student-edit/:id" element={<EditFormStudent />} />
                <Route path="createroadmap" element={<CreateRoadmap />} />
                <Route path="roadmaps/:id" element={<MyRoadmaps />} />
                <Route path="roadmap/steps/:id" element={<AllSteps />} />
                <Route path="roadmap/steps/resources/:id" element={<AllResouces />} />
                <Route path="create-steps/:id" element={<CreateSteps />} />
              </Route>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Outlet />
                    <Footer />
                  </>
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="allroadmaps" element={<AllRoadmaps/>}/>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route exact path="/sign-up" element={<SIGNUP />} />
                <Route exact path="/login" element={<LOGIN />} />
                <Route path="/userProfile" element={<UserProfile />} />
                <Route path="/s/:id" element={<SelectRoadmap />} />
              </Route>
            </Routes>
          </StoreProvider>
        </QueryClientProvider>
      </Router>
    </>
  );
}

export default App;
