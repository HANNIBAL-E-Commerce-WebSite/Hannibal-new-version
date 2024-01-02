import React from "react";

const Fail: React.FC<FailProps> = () => {
  return (
    <div className="p-4">
      <div className="alert alert-danger">Payment Failed</div>
    </div>
  );
};

export default Fail;
