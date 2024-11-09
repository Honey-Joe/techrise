import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const RegisterForm = () => {
  const [selectedOption1, setSelectedOption1] = useState("");

  // List of options for each select
  const options1 = ["Code Crack", "Web Maestro", "Quiz Quest", "InnovExhibit"];
  const options2 = ["Tech Link", "Quiet Quest", "Design Dazzle", "Brand Blast"];

  // Map of which options in the second select should be disabled
  // based on selections in the first select (mapping to multiple options)
  const disableMap = {
    "Code Crack": ["Tech Link"],
    "Web Maestro": ["Quiet Quest"],
    "Quiz Quest": ["Design Dazzle"],
    InnovExhibit: ["Quiet Quest", "Tech Link"],
  };

  // Function to handle selection change in the first select
  const handleSelect1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  // State for the second select
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleSelect2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const [data, setData] = useState([]);
  const { reset, register, control, handleSubmit } = useForm({
    mode: "onChange",
  });

  const fetchdta = async (data) => {
    const data1 = await axios.get(
      "https://backendtest-nu.vercel.app/?vercelToolbarCode=l6xoaVPekClcrjz"
    );
    setData(data1.data);
    // console.log(data.data);
  };

  const onsubmit = async (data) => {
    try {
      // Post data using Axios
      const response = await axios.post(
        "https://backendtest-nu.vercel.app/?vercelToolbarCode=l6xoaVPekClcrjz",
        data
      );
      alert("Form submitted successfully!");
      return (
        <>
          <div></div>
        </>
      );
    } catch (error) {
      alert("Form submission failed.");
    }
    reset();
  };
  useEffect(() => {
    fetchdta();
  }, []);
  return (
    <div>
      <form
        action=""
        method="post"
        onSubmit={handleSubmit(onsubmit)}
        className="w-full"
      >
        <div className="flex justify-center">
          <div className="flex flex-col gap-5 justify-center items-center ">
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="part id"
                className="font-[Fredoka] font-medium text-[20px]"
              >
                Name
              </label>
              <input
                type="text"
                name="partid"
                id="partid"
                placeholder="Enter Your Name"
                {...register("name")}
                className="shadow-md border p-3 rounded-md w-full"
                required
              />
            </div>
            <div className="flex flex-col gap-2 justify-center items-start">
              <label
                htmlFor="email "
                className="font-[Fredoka] font-medium text-[20px]"
              >
                Email{" "}
              </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="email"
                {...register("email")}
                className="shadow-md border pr-28 pl-3 py-3 rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col gap-2 justify-center items-start">
              <label
                htmlFor=""
                className="font-[Fredoka] font-medium text-[20px]"
              >
                College
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="college"
                {...register("college")}
                className="shadow-md border pr-28 pl-3 py-3 rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col gap-2 justify-center items-start">
              <label
                htmlFor="Dept"
                className="font-[Fredoka] font-medium text-[20px]"
              >
                Department
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="dept"
                {...register("dept")}
                className="shadow-md border pr-28 pl-3 py-3 rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="font-[Fredoka] font-medium text-[20px]">Technical Event</label>
              <select {...register("ev1")} value={selectedOption1} onChange={handleSelect1Change} className="shadow-md border pr-28 pl-3 py-3 rounded-lg">
                <option value="">Select an option</option>
                {options1.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-[Fredoka] font-medium text-[20px]">Non Technical Event</label>
              <select {...register("ev2")} value={selectedOption2} onChange={handleSelect2Change} className="shadow-md border pr-28 pl-3 py-3 rounded-lg">
                <option value="">Select an option</option>
                {options2.map((option) => (
                  <option
                    key={option}
                    value={option}
                    disabled={
                      disableMap[selectedOption1] &&
                      disableMap[selectedOption1].includes(option)
                    }
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="border rounded-lg px-5 py-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
