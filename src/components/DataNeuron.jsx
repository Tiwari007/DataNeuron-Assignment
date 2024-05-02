import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiCounts from './ApiCounts';
import UserData from './UserData';

const apiUrl = "https://5000-tiwari007-dataneuronass-esy0p7krmxc.ws-us112.gitpod.io"

const DataNeuron = () => {
  const [userData, setUserData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state
  const [isDataAltered, setIsDataAltered] = useState(false)

  const fetchData = async () => {
    setLoading(true); // Set loading to true when fetching starts
    try {
      const response = await axios.get(`${apiUrl}/data`);
      const { userData, count } = response.data;
      setUserData(userData);
      setCount(count);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false when fetching ends
    }
  };

  useEffect(() => {
    fetchData();
  }, [isDataAltered]); // Empty dependency array to run only once on component mount

  const dataAltered = () => {
    setIsDataAltered(!isDataAltered)
  }


  return (
    <div className="p-4 h-screen">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <UserData userData={userData} dataAltered = {dataAltered} />
          <ApiCounts count={count} />
        </>
      )}
    </div>
  );
};

export default DataNeuron;
