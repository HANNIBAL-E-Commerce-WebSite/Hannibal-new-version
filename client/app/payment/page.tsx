"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormState {
  [key: string]: string;
}

const Payment: React.FC = () => {
  const [form, setForm] = useState<FormState>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("http://localhost:8000/payment/pay", form)
      .then((res) => {
        console.log("eee");
        const { result } = res.data;
        window.location.href = result.link;
      })
      .catch((err) => console.log(err));
  };

  console.log(form);

  return (
    <div>
      <div className="p-4">
        <h2>Amount</h2>
        <form className="">
          <input
            type="text"
            name="amount"
            className="form-control"
            onChange={handleChange}
          />
          <button className="buttons" onClick={onSubmit}>
            pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
