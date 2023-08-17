import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import ShippingPage from "../pages/ShippingPage";
import PaymentMethodPage from "../pages/PaymentMethodPage";
import PlaceOrderPage from "../pages/PlaceOrderPage";
import OrderPage from "../pages/OrderPage";
import OrderHistoryPage from "../pages/OrderHistoryPage";
import ProfilePage from "../pages/ProfilePage";
import SearchPage from "../pages/SearchPage";
import ProtectedRoute from "./ProtectedRoute";
import DashboardPage from "../pages/DashboardPage";
import AdminRoute from "./AdminRoute";
import ProductListPage from "../pages/ProductListPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/product/:slug" element={<ProductPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
      <Route path="/signin" element={<SigninPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>

      {/* Protected routes */}
      <Route
        path="/shipping"
        element={
          <ProtectedRoute>
            <ShippingPage />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/payment"
        element={
          <ProtectedRoute>
            <PaymentMethodPage />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/placeorder"
        element={
          <ProtectedRoute>
            <PlaceOrderPage />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/order/:id"
        element={
          <ProtectedRoute>
            <OrderPage />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/orderhistory"
        element={
          <ProtectedRoute>
            <OrderHistoryPage />
          </ProtectedRoute>
        }
      ></Route>
      {/* Admin routes */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <DashboardPage />
          </AdminRoute>
        }
      ></Route>
      <Route
        path="/admin/products"
        element={
          <AdminRoute>
            <ProductListPage />
          </AdminRoute>
        }
      ></Route>
    </Routes>
  );
}
