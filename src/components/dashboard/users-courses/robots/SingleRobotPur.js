import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLoaderData, redirect } from "react-router-dom";
import { store } from "../../../../store";
import { userFetch } from "../../../utils/http";
import InactiveM from "../../modals/InactiveM";
import { motion } from "framer-motion";

const SingleRobotPur = () => {
  const { id } = useParams();
  const [robot, setRobot] = useState(null);
  const navigate = useNavigate();
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchRobot = async () => {
      try {
        const { data } = await userFetch.get(
          `https://chimetrading.com/api/chime/singleRobot?slug=${id}`
        );
        setRobot(data?.data);
      } catch (error) {
        console.error("Error fetching the robot data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRobot();
  }, [id]);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }

    if (data?.status === "banned") {
      alert("Unauthorized user");
      navigate("/");
    }

    if (data?.status === "inactive") {
      setShowModal(true);
    }
  }, [data, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const closeModal = () => {
    setShowModal(false);
  };

  if (!robot) {
    return <div>No data available</div>;
  }

  const { title, image, zip, description } = robot;

  return (
    <section>
      <div>
        <motion.div
          className="h-full mx-auto px-4 py-8 bg-cyan-100 md:h-screen"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 pt-[130px] md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <motion.img
                src={image}
                alt={title}
                className="w-full md:max-w-lg rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div>
              <motion.h1
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {title}
              </motion.h1>
              <motion.p
                className="text-gray-600 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Author: Okeke C. Christian
              </motion.p>
              <motion.p
                className="text-gray-600 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {description}
              </motion.p>
              <motion.p
                className="text-red-600 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <strong>Important:</strong> Instructions on how to download the
                robot are listed in the detailed file. Please download it and
                follow the instructions inside the videos and files.
              </motion.p>

              <motion.a
                href={zip}
                download
                className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Download robot
              </motion.a>
            </div>
          </div>
        </motion.div>

        {showModal && <InactiveM onClose={closeModal} />}
      </div>
    </section>
  );
};

export default SingleRobotPur;

export const s_robLoader = async () => {
  const state = store.getState();
  const user = state.usersState.user;

  if (!user) {
    return redirect("/");
  }

  try {
    const res = await userFetch.get("details", {
      params: { email: user.name },
    });

    const data = res?.data;
    return data;
  } catch (error) {
    console.error(error);
    return redirect("/");
  }
};
