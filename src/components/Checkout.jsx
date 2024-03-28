import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./TimeGridSelector.css";

const Checkout = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    catPercentile: "",
    varc: "",
    lrdi: "",
    quants: "",
    category: "",
    gender: "",
    resume: null,
    applicationForm: null,
    fresherOrWorkEx: "",
  });

  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];
  console.log(selectedItems);  // Log selectedItems to check if data has been passed

  const [availableTimes, setAvailableTimes] = useState({});

  useEffect(() => {
    // Fetch available time slots from an API or static data
    const fetchAvailableTimes = async () => {
      try {
        // Replace this with your actual API call or static data
        const response = {
          "2024-03-28": ["10:00", "11:00", "14:00", "15:00"],
          "2024-03-29": ["09:00", "12:00", "16:00", "18:00"],
          "2024-03-30": ["10:00", "13:00", "17:00", "19:00"],
        };
        setAvailableTimes(response);
      } catch (error) {
        console.error("Error fetching available time slots:", error);
      }
    };

    fetchAvailableTimes();
  }, []);

  const formatDate = (date) => date.toISOString().split("T")[0];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const allHours = Array.from(
    { length: 24 },
    (_, index) => index.toString().padStart(2, "0") + ":00"
  );

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col ">
          <div className="time-grid-selector justify-center mt-10 flex-col md:flex-row mx-5 my-5">
            <div className="calendar-container mb-4 md:mb-0 md:mr-4">
              <h1 className="text-xl font-semibold mb-2">
                Choose your meeting date:
              </h1>
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                minDate={new Date()}
              />
            </div>
            <div className="flex flex-col md:items-center">
              <h1 className="text-xl font-semibold mb-2">
                Book from the available time slots:
              </h1>
              <div className="time-grid grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {allHours.map((hour, index) => (
                  <button
                    key={index}
                    className={`time-slot py-2 rounded ${
                      selectedTime === hour
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleTimeSelect(hour)}
                    disabled={
                      !availableTimes[formatDate(selectedDate)]?.includes(hour)
                    }
                  >
                    {hour}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-2xl w-full ">
            <form action="" className="">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="px-5 py-3 w-full border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="px-5 py-3 w-full border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  placeholder="Contact Number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                  className="px-5 py-3 w-full border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  placeholder="Cat Percentile"
                  name="catPercentile"
                  value={formData.catPercentile}
                  onChange={handleInputChange}
                  required
                  className="px-5 py-3 w-full border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4 flex">
                <input
                  type="number"
                  placeholder="VARC"
                  name="varc"
                  value={formData.varc}
                  onChange={handleInputChange}
                  required
                  className="px-5 py-3 w-1/3 mr-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="number"
                  placeholder="LRDI"
                  name="lrdi"
                  value={formData.lrdi}
                  onChange={handleInputChange}
                  required
                  className="px-5 py-3 w-1/3 mr-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="number"
                  placeholder="Quants"
                  name="quants"
                  value={formData.quants}
                  onChange={handleInputChange}
                  required
                  className="px-5 py-3 w-1/3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="px-5 py-3 w-full border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="px-5 py-3 w-full border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4 flex items-center">
                <label htmlFor="resume" className="mr-5 text-lg">
                  Upload Your Current Resume:
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  required
                  className="border border-gray-300 rounded-lg "
                />
              </div>
              <div className="mb-4 flex items-center">
                <label htmlFor="applicationForm" className="mr-4 text-lg">
                  Upload Your Application Form For College:
                </label>
                <input
                  type="file"
                  id="applicationForm"
                  name="applicationForm"
                  onChange={handleFileChange}
                  required
                  className="border border-gray-300 rounded-lg "
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Fresher or Work-ex"
                  name="fresherOrWorkEx"
                  value={formData.fresherOrWorkEx}
                  onChange={handleInputChange}
                  required
                  className="px-5 py-3 w-full border border-gray-300 rounded-lg"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mb-5 mt-5">
          <button className="w-full max-w-md rounded-full bg-green-400 p-4 text-white text-xl md:text-2xl">
            Proceed To Payment
          </button>
          {selectedItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
