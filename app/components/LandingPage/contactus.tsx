"use client";
import Image from "next/image";
import { useState } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useAppDispatch } from "@/services/redux/store";
import { ContactPayload } from "@/services/redux/type";
import { AddContact } from "@/services/redux/middleware/addcontact";
import { message } from "antd";
export default function Contactus() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    countryName: "US",
    description: "",
    services: [] as string[],
    file: null as File | null,
  });

  const [selectOpen, setSelectOpen] = useState(false);
  const [checkedServices, setCheckedServices] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const countryOptions = [
    { name: "US", code: "+1" },
    { name: "PK", code: "+92" },
    { name: "UK", code: "+44" },
  ];
  const serviceColumns = [
    ["Website design", "Mobile app design", "UX design", "User research"],
    ["AI Modelling", "AI Chatbot", "Mobile App Development", "Web Development"],
    ["AI Avatar", "NLP", "E-commerce", "Other"],
  ];
  const toggleService = (service: string) => {
    setCheckedServices((prev) => {
      const newServices = prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service];

      setFormData((prevData) => ({
        ...prevData,
        services: newServices,
      }));

      return newServices;
    });
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };

  const handleCountryChange = (event: any) => {
    const selected = countryOptions.find(
      (item) => item.name === event.target.value
    );

    if (selected) {
      setFormData((prev) => ({
        ...prev,
        countryName: selected.name,
        countryCode: selected.code,
      }));
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { fullName, email, phone, description, services, file } = formData;

  if (!fullName.trim()) {
    message.warning("Full name is required.");
    return;
  }

  if (!email.trim()) {
    message.warning("Email is required.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    message.warning("Please enter a valid email address.");
    return;
  }

  if (!phone.trim()) {
    message.warning("Phone number is required.");
    return;
  }

  const phoneRegex = /^[0-9]{7,15}$/;
  if (!phoneRegex.test(phone)) {
    message.warning("Please enter a valid phone number.");
    return;
  }

  if (!description.trim()) {
    message.warning("Description is required.");
    return;
  }

  if (!services || services.length === 0) {
    message.warning("Please select at least one service.");
    return;
  }

  if (!file) {
    message.warning("Please upload a file.");
    return;
  }

  try {
    await dispatch(AddContact(formData)).unwrap();
    message.success("Form submitted successfully!");

    // Reset form after success
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      countryCode: "+1",
      countryName: "US",
      description: "",
      services: [],
      file: null,
    });
    setCheckedServices([]);
    setSelectedFile(null);
  } catch (error) {
    console.error("Submission failed:", error);
    message.error("Submission failed. Please try again.");
  }
};


  return (
    <div className="py-[51px] px-[24px] flex gap-[40px] bg-[#FFFFFF]  xl:px-[100px] lg:px-[70px] md:px-[50px] definedcolDir">
      <div className="w-full flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex gap-[8px] items-center">
            <Image src="/dot.svg" alt="dot" width={9} height={9} />
            <p className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
              Contact us
            </p>
          </div>
          <p className="font-clash font-semibold lg:text-[38px] text-[#000000] lg:leading-[48px]  md:text-[28px] md:leading-[38px] text-[24px] leading-[34px]">
            Reach out for free consultations
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
          <div className="flex gap-[24px] definedNinecol">
            {/* Full Name */}
            <div className="flex flex-col gap-[6px] w-full ">
              <label
                htmlFor="fullName"
                className="font-inter font-medium text-[14px] text-[#344054]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your name"
                className="border border-[#D0D5DD] text-[#000000] h-[48px] flex justify-center px-[16px] py-[12px] bg-[#FFFFFF] rounded-[8px] placeholder:text-[#667085] focus:outline-none focus:ring-0"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[6px] w-full">
              <label
                htmlFor="email"
                className="font-inter font-medium text-[14px] text-[#344054]"
              >
                Email Address
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="border border-[#D0D5DD] text-[#000000] bg-[#FFFFFF] h-[48px] flex justify-center px-[16px] py-[12px] rounded-[8px] placeholder:text-[#667085] focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Phone and File Upload */}
          <div className="flex gap-[24px] definedNinecol">
            {/* Phone Input */}
            <div className="flex flex-col gap-[6px] w-full">
              <label className="font-inter font-medium text-[14px] text-[#344054]">
                Phone number
              </label>

              <div className="flex border h-[48px] flex justify-center border-[#D0D5DD] rounded-[8px] overflow-hidden items-center px-[16px] py-[12px] gap-2">
                {/* Country Name Dropdown */}
                <FormControl
                  variant="standard"
                  sx={{
                    minWidth: "fit-content", // 👈 Fit content
                    cursor: "pointer",
                  }}
                >
                  <Select
                    value={formData.countryName}
                    onChange={handleCountryChange}
                    onOpen={() => setSelectOpen(true)}
                    onClose={() => setSelectOpen(false)}
                    disableUnderline
                    IconComponent={() => (
                      <Image
                        src="/contact/arrow.svg"
                        alt="dropdown"
                        width={20}
                        height={20}
                        style={{
                          transition: "transform 0.3s ease",
                          transform: selectOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    )}
                    sx={{
                      fontSize: "14px",
                      fontFamily: "Inter", // ✅ Font for selected item
                      color: "#101828",
                      lineHeight: "100%",
                      width: "fit-content",
                      padding: 0, // ✅ Fit content width
                      pr: 0,
                      "& fieldset": { border: "none" },
                      "& .MuiSelect-select": {
                        paddingRight: "0px !important", // ✅ override padding
                        paddingLeft: "0px !important", // optional, if you want no horizontal padding
                        minWidth: "0px",
                        display: "flex",
                        alignItems: "center",
                      },
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          fontFamily: "Inter", // ✅ Font for dropdown items
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "#101828",
                        },
                      },
                    }}
                  >
                    {countryOptions.map((item) => (
                      <MenuItem
                        key={item.name}
                        value={item.name}
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: "400",
                          fontSize: "14px",
                          color: "#101828",
                          lineHeight: "100%",
                        }}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Country Code (static) */}
                <span className="text-sm text-gray-700 font-medium whitespace-nowrap">
                  {formData.countryCode}
                </span>

                {/* Phone Input */}
                <input
                  type="text"
                  placeholder="(555) 000-0000"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-0 py-[0px] text-[#000000] bg-[#FFFFFF] text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[6px] w-full">
              <label className="font-inter font-medium text-[14px] text-[#344054]">
                File Attachments
              </label>
              <div className="flex items-center gap-[12px]">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="bg-[#FF5F1F] text-white px-[16px] py-[10px] rounded-[8px] flex items-center gap-[8px]">
                    <Image
                      src="/contact/Cloud-Upload.svg"
                      alt="upload"
                      width={24}
                      height={24}
                    />
                    <span className="font-inter font-medium text-[16px] leading-[24px] text-white">
                      Upload
                    </span>
                  </div>
                </label>

                {selectedFile && (
                  <div className="flex items-center gap-2 text-sm">
                    <p className="text-[#0F172A] underline">
                      {selectedFile.name}
                    </p>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="text-[#000000]"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="font-inter font-medium text-[14px] text-[#344054] leading-[20px]">
              Services
            </p>
            <div className="flex justify-between flex-wrap gap-[15px] sm:flex-row flex-col">
              {serviceColumns.map((column, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-[16px]">
                  {column.map((service) => {
                    const isChecked = checkedServices.includes(service);
                    return (
                      <div
                        key={service}
                        className="flex gap-[12px] items-center cursor-pointer"
                        onClick={() => toggleService(service)}
                      >
                        <div
                          className={`custom-checkbox ${
                            isChecked ? "checked" : ""
                          }`}
                          style={{
                            width: 20,
                            height: 20,
                            border: isChecked ? "none" : "1px solid #D0D5DD",

                            borderRadius: 4,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: isChecked ? "#FF5F1F" : "#FFFFFF",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {isChecked && (
                            <Image
                              src="/contact/ttick.svg"
                              alt="tick"
                              width={12}
                              height={9.4}
                            />
                          )}
                        </div>

                        <p className="font-inter font-medium text-[16px] text-[#344054] leading-[24px]">
                          {service}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[6px] ">
            <p className="font-inter font-medium text-[14px] text-[#344054] leading-[20px]">
              How can we help?
            </p>
            <textarea
              name="description"
              id="description"
              value={(formData as any).description || ""}
              onChange={handleChange}
              placeholder="Tell us a little about the project..."
              className="border border-[#D0D5DD] bg-[#FFFFFF] text-[#000000] px-[16px] py-[12px] rounded-[8px] placeholder:text-[#667085] resize-none focus:outline-none focus:ring-0"
              style={{ height: "100px" }}
            />
          </div>

          <button
            type="submit"
            className="bg-[#123042] text-white py-[12px] px-[24px] rounded-[40px] w-fit font-lato font-bold text-[16px] text-white leading-[100%]"
          >
            Submit Request
          </button>
        </form>
      </div>

      {/* Contact Info Right Column */}
      <div className="max-w-[377px] flex flex-col gap-[40px] contact-box ">
        <div className="w-full md:h-[543px] rounded-[12px] bg-[#FF5F1F] flex items-end h-[300px]">
          <Image
            src="/contact/play.png"
            alt="play"
            width={180}
            height={120}
            className="mb-[-35px] ml-[-20px]"
          />
        </div>
        <div className="flex flex-col gap-[16px]">
          <p className="text-[#757575] text-[14.54px] leading-[150%]">
            For same-day reservations or special requests, feel free to give us
            a call!
          </p>
          <div className="flex gap-[16px] items-center">
            <div className="w-[48px] h-[48px] bg-[#FF5F1F] rounded-full flex items-center justify-center">
              <Image
                src="/contact/Mail.svg"
                alt="email"
                height={24}
                width={24}
              />
            </div>
            <p className="font-Pop font-semibold sm:text-[16px] text-[14px] text-[#123042] leading-[20px] sm:leading-[25.2px]">
              umar@meetpraidux.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
