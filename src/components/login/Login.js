import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full py-50 flex justify-center items-center px-4">
      <div className="flex flex-col gap-16 items-center">
        <h1 className="text-2xl font-semibold">Register For</h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          
          <div
            onClick={() => navigate('/login/resellerlogin')}
            className="flex flex-col gap-2 items-center shadow-lg p-6 rounded-lg cursor-pointer bg-white hover:scale-105 transition-transform duration-200"
          >
            <img
              src="/assets/authorized-reseller-seal-stam-illustration-600nw-144650060.webp"
              alt="Reseller"
              className="w-16 h-16 object-cover"
            />
            <div className="text-base font-semibold">As a Reseller</div>
          </div>

          
          <div
            onClick={() => navigate('/login/distributorlogin')}
            className="flex flex-col gap-2 items-center shadow-lg p-6 rounded-lg cursor-pointer bg-white hover:scale-105 transition-transform duration-200"
          >
            <img
              src="/assets/distributor-icon.png"
              alt="Distributor"
              className="w-16 h-16 object-cover"
            />
            <div className="text-base font-semibold">As a Distributor</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
