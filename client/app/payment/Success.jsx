import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import axios from "axios";

const Success: NextPage = () => {
  const router = useRouter();
  const [result, setResult] = (useState < string) | (null > null);

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const response = await axios.post(
          `http://localhost/payment/pay/${router.query.payment_id}`
        );
        setResult(response.data.result.status);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (router.query.payment_id) {
      fetchPaymentStatus();
    }
  }, [router.query.payment_id]);

  return (
    <React.Fragment>
      <div className="p-4">
        <div className="alert alert-success">
          Payment Successfully Completed
        </div>
        {result && <p>Status: {result}</p>}
      </div>
    </React.Fragment>
  );
};

export default Success;
