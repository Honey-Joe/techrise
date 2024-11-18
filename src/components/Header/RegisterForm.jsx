import axios from "axios";
import { useForm } from "react-hook-form";
import {  useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {  Dialog, Pane } from "evergreen-ui";

const RegisterForm = () => {
  const [isDialog, setIsDialog] = useState(false);

  const schema = z.object({
    email: z
      .string()
      .email("Invalid email address")
      .refine(
        async (email) => {
          const isAvailable = await checkEmailExists(email);
          return isAvailable;
        },
        { message: "Email already exists" }
      ),
    name: z.string().min(1, { message: "Enter your Name" }),
    college: z.string().min(1, { message: "Enter your College Name" }),
    dept: z.string().min(1, { message: "Enter your Department" }),
    contact: z.string().min(10, {message:"Enter your Phone Number Correctly !"})

    // Other fields like password can be added here
  });
  const checkEmailExists = async (email) => {
    try {
      const response = await axios.post(
        "https://techx-24backend.vercel.app/email",
        { email }
      );
      return response.data.message === "Email Available";
    } catch (er) {
      return false; // Email exists if error occurs
    }
  };

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
  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onsubmit = async (data) => {
    try {
      // Post data using Axios
      const response = await axios.post(
        "https://techx-24backend.vercel.app/",
        data
      );
      setIsDialog(true);
      console.log(data)
      
    } catch (error) {
      alert("Form Not Submitted")
    }

    reset();
  };

  return (
    <div>
      <form
        action=""
        method="post"
        onSubmit={handleSubmit(onsubmit)}
        className="w-full py-5"
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
              />
              <p className="text-red-500">{errors.name?.message}</p>
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
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
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
              />
              <p className="text-red-500">{errors.college?.message}</p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="part id"
                className="font-[Fredoka] font-medium text-[20px]"
              >
                Contact
              </label>
              <input
                type="string"
                name="partid"
                id="partid"
                placeholder="Enter Your Name"
                {...register("contact")}
                className="shadow-md border p-3 rounded-md w-full"
              />
              <p className="text-red-500">{errors.contact?.message}</p>
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
              />
              <p className="text-red-500">{errors.dept?.message}</p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="part id"
                className="font-[Fredoka] font-medium text-[20px]"
              >
                Degree
              </label>
              <select name="degeree" id="degree" {...register("degree")} required>
                <option value="UG">UG</option>
                <option value="PG">PG</option>
              </select>
              <p className="text-red-500">{errors.name?.message}</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="font-[Fredoka] font-medium text-[20px]">
                Technical Event
              </label>
              <select
                {...register("event1")}
                value={selectedOption1}
                onChange={handleSelect1Change}
                className="shadow-md border pr-28 pl-3 py-3 rounded-lg"
              >
                <option value="">Select an option</option>
                {options1.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-[Fredoka] font-medium text-[20px]">
                Non Technical Event
              </label>
              <select
                {...register("event2")}
                value={selectedOption2}
                onChange={handleSelect2Change}
                className="shadow-md border pr-28 pl-3 py-3 rounded-lg"
              >
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

            <button
              type="submit"
              onsubmit={() => setIsDialog(true)}
              className="border rounded-lg px-10 py-3 bg-black text-white  shadow-lg "
            >
              Submit
            </button>
            <Pane>
          <Dialog
            isShown={isDialog}
            title="TechX 24"
            onCloseComplete={() => setIsDialog(false)}
            hasFooter={true}
          >
            <div>
              <p className="font-[Fredoka] text-[20px] font-bold">Congratulation ! You're registered to TECHX'24</p>
            </div>
          </Dialog>

        </Pane>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
