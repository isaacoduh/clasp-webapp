"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import SecureLS from "secure-ls";
import axios from "axios";
import { headers } from "next/headers";

interface Profile {
  firstname: string;
  lastname: string;
  gender: string;
  marital_status: string;
  date_of_birth: string;
  country: string;
  state: string;
  city: string;
  phone: string;
  documentType: string;
  documentNumber: string;
  issuedDate: string;
  expiryDate: string;
  image: string;
}

const UserProfile = () => {
  const [profileData, setProfileData] = useState<Profile | null>(null);
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [ls, setLs] = useState<SecureLS | null>(null);

  useEffect(() => {
    // Initialize SecureLS and get token only on client side
    const secureLS = new SecureLS();
    setLs(secureLS);
    const tokenFromStorage = secureLS.get("token");
    setToken(tokenFromStorage);
  }, []);

  const formatDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month}-${day}`;
  };

  const formatISODateToInput = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toISOString().split("T")[0];
  };

  useEffect(() => {
    if (token) {
      fetchProfileInformation();
    }
  }, [token]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setProfileData((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const fetchProfileInformation = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/kyc`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const {
      firstname,
      lastname,
      gender,
      marital_status,
      date_of_birth,
      country,
      state,
      city,
      phone,
      documentType,
      documentNumber,
      issuedDate,
      expiryDate,
      image,
    } = response?.data?.kyc;
    // console.log(response?.data?.kyc);
    setProfileData({
      firstname,
      lastname,
      gender,
      marital_status,
      date_of_birth: formatDate(date_of_birth),
      country,
      state,
      city,
      phone,
      documentType,
      documentNumber,
      issuedDate: formatISODateToInput(issuedDate),
      expiryDate: formatISODateToInput(expiryDate),
      image,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setProfileData((prev: Profile | null) =>
          prev ? { ...prev, image: base64Image } : null
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/kyc/update`,
        profileData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        fetchProfileInformation();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <div>
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => router.back()}
          >
            Back
          </button>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-header">
                <h3>Account</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <h5>Profile</h5>
                  <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      name="firstname"
                      value={profileData?.firstname}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      name="lastname"
                      value={profileData?.lastname}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="date_of_birth" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="date_of_birth"
                      name="date_of_birth"
                      value={profileData?.date_of_birth}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select
                      name="gender"
                      className="form-control"
                      id="gender"
                      value={profileData?.gender}
                      onChange={handleInputChange}
                    >
                      <option>Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="marital_status" className="form-label">
                      Marital Status
                    </label>
                    <select
                      name="marital_status"
                      className="form-control"
                      id="marital_status"
                      value={profileData?.marital_status}
                      onChange={handleInputChange}
                    >
                      <option>Select Marital Status</option>
                      <option value="married">Married</option>
                      <option value="single">Single</option>
                      <option value="divored">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      name="country"
                      value={profileData?.country}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      name="state"
                      value={profileData?.state}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      value={profileData?.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={profileData?.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="documentType" className="form-label">
                      Document Type
                    </label>
                    <select
                      name="documentType"
                      className="form-control"
                      id="documentType"
                      value={profileData?.documentType}
                      onChange={handleInputChange}
                    >
                      <option>Select Document Type</option>
                      <option value="passport">Passport</option>
                      <option value="drivers_license">
                        Driver&apos;s License
                      </option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="documentNumber" className="form-label">
                      Document Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="documentNumber"
                      name="documentNumber"
                      value={profileData?.documentNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="issuedDate" className="form-label">
                      Document Issued Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="issuedDate"
                      name="issuedDate"
                      value={profileData?.issuedDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="expiryDate" className="form-label">
                      Document Expiry Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="expiryDate"
                      name="expiryDate"
                      value={profileData?.expiryDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                      Document Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    {profileData?.image && (
                      <img
                        src={profileData.image}
                        alt="Document"
                        style={{ marginTop: "10px", maxHeight: "200px" }}
                      />
                    )}
                  </div>
                  <button className="btn btn-secondary btn-block" type="submit">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
