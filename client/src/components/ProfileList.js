import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileList() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profiles');
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div>
      <h1>Candidate Profiles</h1>
      <ul>
        {profiles.map(profile => (
          <li key={profile.id}>
            {profile.name} - {profile.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileList;