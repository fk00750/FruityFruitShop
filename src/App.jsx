import { BrowserRouter, Routes, Route } from "react-router-dom";
// Error Pages
import { Unauthorized, PageIsNotFound } from "./Collection/ErrorCollection";
// All Pages
import {
  Home,
  Cart,
  Fruits,
  SignIn,
  SignUp,
  SingleProduct,
} from "./Collection/PageCollection";
// Others include Auth, Context,Map,User,Navigation
import {
  AuthProvider,
  Context,
  Layout,
  MapBox,
  RequireAuth,
  User,
  Navigation,
} from "./Collection/OtherCollection";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Context>
            <Navigation></Navigation>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/fruits" element={<Fruits />} />
                {/* SingUp & SignIn  */}
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} exact />
                {/* Error Pages  */}
                <Route path="unauthorized" element={<Unauthorized />} />
                <Route path="page_missing" element={<PageIsNotFound />} />
                <Route
                  path="/products/:_id"
                  exact
                  element={<SingleProduct />}
                />
                {/* map */}
                <Route path="/map" element={<MapBox />} exact />

                {/* protected routes */}
                <Route element={<RequireAuth />}>
                  <Route path="/me" element={<User />} />
                  <Route path="/cart" element={<Cart />} exact />
                </Route>
              </Route>
            </Routes>
          </Context>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
