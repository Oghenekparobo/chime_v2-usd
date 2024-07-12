import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  redirect,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CoursesPur from "../components/cart/courses-purchased/CoursesPur";
import { store } from "../store";
import { cartFetch, userFetch } from "../components/utils/http";
import { insertUserDet } from "../features/users/UsersSlice";
// import { useCurrency } from "../contexts/CurrencyContext";
import UserCheckout from "../components/checkout/UserCheckout";
import Stripe from "../components/payments/stripe/Stripe";
import Telegram from "../components/telegram/Telegram";

const Checkout = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const telegram = queryParams.get("telegram-payment");
  const statusParam = queryParams.get("status");
  const messageParam = queryParams.get("message");

  const tele = localStorage.getItem("telegram");

  useEffect(() => {
    if (
      statusParam === "failed" &&
      messageParam === "payment was successful but the user does not exist" &&
      tele === "true"
    ) {
      localStorage.setItem("telegram", "false");
      window.location.href = "https://t.me/+w2DV7vqf0TplNDk0";
    }
  }, [statusParam, messageParam, tele]);

  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.usersState.userDet);
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [country, setCountry] = useState("");

  useEffect(() => {
    const savedCountry = localStorage.getItem("country");
    setCountry(savedCountry || "Nigeria");
  }, []);

  const { data: userData } = useLoaderData();
  const { data: cartData } = useQuery({
    queryKey: ["cart"],
    queryFn: () => cartFetch.get(`fetch?email=${localStorageUser?.name}`),
    enabled: !!localStorageUser?.name,
  });

  const totalAmount = cartData?.data?.data?.total_amount;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!localStorageUser && userDetails) {
      navigate("/");
    }
  }, [localStorageUser, userDetails, navigate]);

  return (
    <>
      {telegram ? (
        <Telegram />
      ) : (
        <div className="bg-gray-200 flex justify-center items-center py-8 lg:py-10 xl:py-40">
          <div className="w-full max-w-7xl mx-auto p-8 rounded-lg flex flex-col md:flex-row max-h-[97vh] overflow-y-auto">
            {/* Payment Options Section */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
              <div className="flex items-center mb-6">
                <img
                  src="https://chime-five.vercel.app/chimeLogo.jpeg"
                  alt="Logo"
                  className="w-12 h-12 mr-4"
                />
                <h2 className="text-xl font-bold">Checkout</h2>
              </div>

              <UserCheckout
                userData={userData}
                userDetails={userDetails}
                localStorageUser={localStorageUser}
                country={country}
                totalAmount={totalAmount}
              />

              <section className="stripe mt-10">
                <Stripe
                  userData={userData}
                  userDetails={userDetails}
                  localStorageUser={localStorageUser}
                  totalAmount={totalAmount}
                />
              </section>
            </div>

            {/* Other Section */}
            <div className="w-full md:w-1/2 md:pl-4">
              {/* Courses Purchased */}
              {cartData?.data?.data?.products && (
                <CoursesPur cartProducts={cartData?.data?.data?.products} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;

export const checkoutLoader = async () => {
  const state = store.getState();
  const user = state.usersState.user;

  if (!user) {
    return redirect("/login");
  }

  try {
    const res = await userFetch.get("details", {
      params: { email: user.name },
    });

    const data = res?.data;

    if (data) {
      const userDet = {
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        middle_name: data.middle_name || "",
      };

      store.dispatch(insertUserDet(userDet));
    }

    return data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return redirect("/");
  }
};
