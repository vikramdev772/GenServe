import React, { useState } from "react";
import { Card, Radio, Tooltip } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";

const Billing = ({ darkTheme }) => {
  const [amount, setAmount] = useState("");
  const [buttonText, setButtonText] = useState("pay with card");

  const updateInput = (value) => {
    setAmount(value);
  };

  const handleRadioChange = (e) => {
    updateInput(`${e.target.value}$`);
  };

  return (
    <>
      <h1 className={`mb-10 mt-10 ${darkTheme ? "text-white" : "text-black"}`}>
        Billing
      </h1>

      <Card title="Balance" className="mb-10">
        <div className="balance-container">
          <p>Balance: $0.000</p>
          <p>Spend Limit: $30 /hr</p>
          <p>Current GPU Cloud Spend: $0.000/hr</p>
        </div>
      </Card>

      <Card title="Add Credit" className="mb-10">
        <div className="add-credits-container">
          <div className="add-credits-input-container">
            <div className="add-credits-tooltip">
              <Radio.Group
                onChange={handleRadioChange}
                className="mb-4 flex justify-flex-start"
              >
                <div className="flex flex-row gap-2 ">
                  <Radio.Button value="25">$25</Radio.Button>
                  <Radio.Button value="50">$50</Radio.Button>
                  <Radio.Button value="100">$100</Radio.Button>
                </div>
              </Radio.Group>
            </div>
            <div className="flex items-center justify-flex-start">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className="rounded border border-gray-400 p-2 w-full"
              />
            </div>
          </div>

          <div className="payment-icons-container mt-10">
            <button className="text-lg px-8 py-2 border-0 shadow-md bg-blue-500 text-white rounded-md transition duration-300 transform-gpu hover:bg-gradient-to-r from-blue-400 to-blue-600 active:translate-y-1">
              {buttonText}
            </button>
          </div>
        </div>
      </Card>

      <Card title="Automatic pay" className="mb-10">
        <div className="automatic-pay-container">
          <p>
            Configure automatic billing by adding a card to your account. When
            your balance nears your Auto-Pay threshold, we will attempt to
            reload RunPod credits by billing your saved card max once per hour
            for the Auto-Pay amount that is configured below.
          </p>
          <div className="add-credits-button-container flex  items-center justify-flex-start flex-row  gap-[100px]">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5700/5700956.png"
              alt=""
              className="w-12 h-12"
            />
            <div className="flex items-center p-2 border border-black rounded-md hover:border-gray-200">
              <Tooltip
                title="You must have at least $100 in credits to enable automatic payments"
                placement="bottom"
              >
                <div className="add-credits-button text-[12px]">
                   <CreditCardOutlined /> Add credits
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </Card>

      <Card
        title="Recent Transactions"
        className="mb-10"
        style={{ backgroundColor: "", color: "" }}
        headStyle={{ color: "" }}
      >
        <div className="recent-transactions-container">
          <div className="transaction-row">
            <div className="transaction-item">TIME</div>
            <div className="transaction-item">TYPE</div>
            <div className="transaction-item">PLATFORM</div>
            <div className="transaction-item">AMOUNT</div>
            <div className="transaction-item">INVOICE</div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Billing;
