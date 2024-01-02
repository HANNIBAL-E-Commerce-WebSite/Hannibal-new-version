"use client";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import axios from "axios";

const Success: NextPage<SuccessProps> = ({ result }) => {
  const router = useRouter();

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
    <>
      <div className="p-4">
        <div className="alert alert-success">
          Payment Successfully Completed
        </div>
        {result && <p>Status: {result}</p>}
      </div>
    </>
  );
};

Success.getInitialProps = async (ctx) => {
  const { query } = ctx;
  let result = null;

  if (query.payment_id) {
    try {
      const response = await axios.post(
        `http://localhost/payment/pay/${query.payment_id}`
      );
      result = response.data.result.status;
    } catch (error) {
      console.error(error);
    }
  }

  return { result };
};

export default Success;
