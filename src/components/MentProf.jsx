import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MentProf = ({ data, services, addOns }) => {
  const [selectedService, setSelectedService] = useState("");
  const [checkedItems, setCheckedItems] = useState({});
  const [gridColumns, setGridColumns] = useState("1fr");

  useEffect(() => {
    const updateGridColumns = () => {
      if (window.innerWidth >= 768) {
        setGridColumns("1fr 1fr");
      } else {
        setGridColumns("1fr");
      }
    };

    window.addEventListener("resize", updateGridColumns);
    updateGridColumns();

    return () => {
      window.removeEventListener("resize", updateGridColumns);
    };
  }, []);

  const handleServiceSelection = (e) => {
    const { value } = e.target;
    setSelectedService(value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };

  const getSelectedItems = () => {
    const selectedItems = [];
    if (selectedService) {
      selectedItems.push(selectedService);
    }
    for (const item in checkedItems) {
      if (checkedItems[item]) {
        selectedItems.push(item);
      }
    }
    return selectedItems;
  };

  const dataToSend = ["Service 1", "Service 2"];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: gridColumns,
        minHeight: "100vh",
      }}
      className="bg-gray-100"
    >
      <div className="card-profile">
        <div className="card-header">
          <div className="card-header-bar"></div>
          <span className="image-profile">
            {" "}
            <img
              src={data.image}
              alt={data.name}
              className="mb-4"
              style={{
                height: "190px",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </span>
          <div className="card-header-slanted-edge"></div>
        </div>

        <div className="card-body">
          <span className="name">{data.name}</span>
          <br />
          <span className="job-title">
            <u>{data.college}</u>
          </span>
          <div className="flex justify-center flex-col p-4  rounded-lg">
            <h3 className="text-lg font-bold mb-3">Bio</h3>
            <p className="text-gray-600">{data.bio}</p>
          </div>
          <div className="social-accounts">
            <a href="#">
              <svg
                viewBox="0 0 16 16"
                class="bi bi-facebook"
                fill="grey"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                viewBox="0 0 16 16"
                class="bi bi-twitter"
                fill="grey"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
              </svg>
              <span class="sr-only">Twitter</span>
            </a>
            <a href={`https://linkedin.com/in/${data.linkedinUsername}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                class="bi bi-linkedin"
                fill="grey"
                height="16"
                width="16"
              >
                <g>
                  <path
                    fill="#999"
                    d="M16 0C7.163 0 0 7.163 0 16c0 8.836 7.163 16 16 16s16-7.164 16-16c0-8.837-7.163-16-16-16z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M24.294 22.942v-6.137c0-3.288-1.755-4.818-4.096-4.818-1.889 0-2.735 1.039-3.206 1.768v-1.517h-3.558c.047 1.005 0 10.704 0 10.704h3.558v-5.978c0-.319.023-.639.117-.867.257-.639.842-1.301 1.825-1.301 1.288 0 1.803.981 1.803 2.42v5.727l3.557-.001zM9.685 10.777c1.24 0 2.013-.823 2.013-1.85-.023-1.05-.773-1.849-1.99-1.849s-2.012.799-2.012 1.849c0 1.028.772 1.85 1.967 1.85h.022zm1.779 12.165V12.238H7.907v10.704h3.557z"
                  ></path>
                </g>
              </svg>
              <span class="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md m-8">
        <h3 className="text-xl font-bold mb-4">Services</h3>
        {services.map((service) => (
          <div key={service.name} className="mb-4 flex items-center">
            <input
              type="radio"
              id={service.name}
              name="service"
              value={service.name}
              checked={selectedService === service.name}
              onChange={handleServiceSelection}
              className="form-radio h-5 w-5 text-green-500"
            />
            <label
              htmlFor={service.name}
              className="ml-2 text-lg font-semibold cursor-pointer flex-grow"
            >
              {service.name}
            </label>
            <span className="ml-auto text-orange-500 font-bold">
              {service.price}
            </span>
          </div>
        ))}

        <h3 className="text-xl font-bold mb-4 mt-8">Add-Ons</h3>
        {addOns.map((addOn) => (
          <div key={addOn.name} className="mb-4 flex items-center">
            <input
              type="checkbox"
              id={addOn.name}
              name={addOn.name}
              checked={checkedItems[addOn.name]}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-green-500"
            />
            <label
              htmlFor={addOn.name}
              className="ml-2 text-lg font-semibold cursor-pointer flex-grow"
            >
              {addOn.name}
            </label>
            <span className="ml-auto text-orange-500 font-bold">
              {addOn.price}
            </span>
          </div>
        ))}
        
        <Link
          to= "/checkout"
            state= {{ selectedItems: getSelectedItems() }}
          
          className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg mt-8 inline-block"
        >
          Proceed To Checkout
        </Link>

        <div>
          <h3>Selected Items:</h3>
          <ul>
            {getSelectedItems().map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MentProf;
