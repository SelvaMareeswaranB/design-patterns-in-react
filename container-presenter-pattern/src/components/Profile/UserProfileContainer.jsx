import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import UserProfilePresnter from "./UserProfilePresnter";

const UserProfileContainer = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(userId){
    fetchUserData();
    fetchUserPosts();
    }
  }, [userId]);
  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`
      );
      setUser(response.data);
    } catch (err) {
      setError("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };
console.log(error)
  const fetchUserPosts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}/posts`
      );
      setPosts(response.data);
    } catch (err) {
      console.error("Failed to fetch posts");
    }
  };

  const handleRetry = () => {
    fetchUserData();
  };

  const handleUpdateUser = async (updatedUserData) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`,
        updatedUserData
      );
      setUser(response.data);
      return { success: true };
    } catch (err) {
      return { success: false, error: "Failed to update profile" };
    }
  };

  return (
    <UserProfilePresnter
      posts={posts}
      loading={loading}
      error={error}
      user={user}
      onRetry={handleRetry}
      onUpdateUser={handleUpdateUser}
    />
  );
};

export default UserProfileContainer;

UserProfileContainer.propTypes = {
  userId: PropTypes.string.isRequired,
};
