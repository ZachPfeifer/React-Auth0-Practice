import React from "react";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading />;
  }

  return (
    <div className="conatiner-fluid wrapper mb-5">
      <div className=" row align-items-center profile-header mb-5 text-center text-md-left">
        <div className="col-md-2">
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md">
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </div>
      </div >
      <div className="row">
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </div>
    </div>
  );
};

export default Profile;
