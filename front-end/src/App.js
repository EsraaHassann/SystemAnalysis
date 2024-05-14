import { QueryClient, QueryClientProvider } from "react-query";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./ProtectedRoute";
import LOGIN from "./components/Log-in/Log-in";
import UserProfile from "./components/UserProfile/userProfile";
import About from "./components/about/About";
import Footer from "./components/common/footer/footer";
import Header from "./components/common/header/header";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import SIGNUP from "./components/sign-up/Sign-up";
import { StoreProvider } from "./store";
import Aside_Student from "./components/common/asidebar-student/asidebar";

import Dashboard from "./components/admin-dashboaerd/Dashboard";
import AllStudents from "./components/admin-dashboaerd/Students/AllStudent";
import CreateNewStudent from "./components/admin-dashboaerd/Students/CreateNewStudent";
import EditFormStudent from "./components/admin-dashboaerd/Students/EditFormStudent";
import Aside_Admin from "./components/common/asidebar-admin/asidebar";

import All_Instructor from "./components/admin-dashboaerd/Instructor/All_Instructor";
import CreateNewInstructor from "./components/admin-dashboaerd/Instructor/CreateNewInstructor";
import EditFormInstructor from "./components/admin-dashboaerd/Instructor/EditFormInstructor";

import CreateRoadmap from "./components/admin-dashboard/roadmap/AddRoadmap";
import AllSteps from "./components/admin-dashboaerd/roadmap/AllSteps";
import CreateSteps from "./components/admin-dashboaerd/roadmap/CreateSteps";
import MyRoadmaps from "./components/admin-dashboard/roadmap/MyRoadmaps";

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
                  // <ProtectedRoute
                  //   element={
                  //     <>
                  //       <Aside_Admin />
                  //       <Outlet />
                  //     </>
                  //   }
                  //   allowedRoles={["ADMIN"]}
                  // />
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
                <Route path="create-steps/:id" element={<CreateSteps />} />

                <Route path="instructors" element={<All_Instructor />} />
                <Route
                  path="instructor-add"
                  element={<CreateNewInstructor />}
                />
                <Route
                  path="instructor-edit/:id"
                  element={<EditFormInstructor />}
                />
              </Route>
              <Route
                path="/student"
                element={
                  <ProtectedRoute
                    element={
                      <>
                        <Aside_Student />
                        <Outlet />
                      </>
                    }
                    allowedRoles={["STUDENT"]}
                  />
                }
              >
                <Route path="dashboard" element={<DASHBOARD />} />
              </Route>

              <Route
                path="/instructor"
                element={
                  <ProtectedRoute
                    element={
                      <>
                        <Aside_Instructor />
                        <Outlet />
                      </>
                    }
                    allowedRoles={["INSTRUCTOR"]}
                  />
                }
              >
                <Route path="dashboard" element={<DASHBOARD />} />
                <Route path="CreateRoadmap" element={<CreateRoadmap />} />
                <Route path="my-course/play/:id" element={<AllSteps />} />
                <Route path="upload-video/:id" element={<CreateSteps />} />
                <Route path="my-courses/:id" element={<MyRoadmaps />} />
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
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route exact path="/sign-up" element={<SIGNUP />} />
                <Route exact path="/login" element={<LOGIN />} />
                <Route path="/userProfile" element={<UserProfile />} />
              </Route>
            </Routes>
          </StoreProvider>
        </QueryClientProvider>
      </Router>
    </>
  );
}

export default App;
