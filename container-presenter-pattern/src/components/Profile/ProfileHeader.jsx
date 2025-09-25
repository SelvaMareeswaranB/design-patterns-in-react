import PropTypes from "prop-types";

const ProfileHeader = ({
  user,
  formData,
  isEditing,
  onStartEditing,
  onInputChange,
  onCancelEdit,
  onSaveProfile,
}) => {
  return (
    <div className="profile-header">
      <img
        src={user?.avatar || "/default-avatar.png"}
        alt={`${user?.name}'s avatar`}
        className="avatar"
      />

      {!isEditing ? (
        <div className="profile-info">
          <h1>{user?.name}</h1>
          <p className="email">{user?.email}</p>
          <p className="bio">{user?.bio}</p>
          <button onClick={onStartEditing} className="edit-btn">
            Edit Profile
          </button>
        </div>
      ) : (
        <div className="profile-form">
          {/* Name */}
          <div className="form-field">
            <input
              type="text"
              value={formData?.name}
              onChange={(e) => onInputChange("name", e.target.value)}
              placeholder="Name"
            />
          </div>

          {/* Email */}
          <div className="form-field">
            <input
              type="email"
              value={formData?.email}
              onChange={(e) => onInputChange("email", e.target.value)}
              placeholder="Email"
            />
          
          </div>

          {/* Bio */}
          <div className="form-field">
            <textarea
              value={formData?.bio}
              onChange={(e) => onInputChange("bio", e.target.value)}
              placeholder="Bio"
            />
          </div>

          <div className="form-actions">
            <button onClick={onCancelEdit}>Cancel</button>
            <button onClick={onSaveProfile}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

ProfileHeader.propTypes = {
  user: PropTypes.object,
  formData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    bio: PropTypes.string,
  }),
  isEditing: PropTypes.bool,
  onStartEditing: PropTypes.func,
  onInputChange: PropTypes.func,
  onCancelEdit: PropTypes.func,
  onSaveProfile: PropTypes.func,

};

export default ProfileHeader;
