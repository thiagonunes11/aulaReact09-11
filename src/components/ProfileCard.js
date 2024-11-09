const ProfileCard = ({ name, bio, imageUrl }) => (
    <div className="profile-card">
          <img src={imageUrl} alt={`${name} profile`} width="100px" height="100px"  />
          <h2>{name}</h2>
          <p>{bio}</p>
        </div>
      );

export default ProfileCard