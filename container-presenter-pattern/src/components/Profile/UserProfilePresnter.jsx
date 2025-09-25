import { useState } from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorMessage from "../shared/ErrorMessage";
import ProfileHeader from "./ProfileHeader";
import PostList from "../Post/PostList";

const UserProfilePresnter = ({
  user,
  posts,
  loading,
  error,
  onRetry,
  onUpdateUser,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  if (error) {
    return (
      <ErrorMessage
        title={"Something Went Wrong"}
        message={error}
        onRetry={onRetry}
      />
    );
  }

  if (loading) {
    return <LoadingSpinner message={"Loading User Profile"} />;
  }
  const handleSaveProfile = async () => {
    const result = await onUpdateUser(formData);
    if (result.success) {
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    if (user) {
      setFormData({
        name: user?.name,
        email: user?.email,
        bio: user?.bio,
      });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <div className="user-profile">
      <ProfileHeader
        user={user}
        isEditing={isEditing}
        formData={formData}
        onStartEditing={() => setIsEditing(true)}
        onSaveProfile={handleSaveProfile}
        onCancelEdit={handleCancelEdit}
        onInputChange={handleInputChange}
      />
      <PostList posts={posts} />
    </div>
  );
};

export default UserProfilePresnter;

UserProfilePresnter.propTypes = {
  user: PropTypes.object,
  posts: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  onRetry: PropTypes.func,
  onUpdateUser: PropTypes.func,
};
