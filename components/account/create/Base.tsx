"use client";
import { navHeight } from "@/app/(root)/layout";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Loader from "@/components/shared/Loader";
import Select from "@/components/shared/Select";
import Title from "@/components/shared/Title";
import { useState } from "react";

const formData = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phone: "",
  availableBalance: "",
  imf: "",
  gender: "",
  accountType: "",
  blocked: "",
  street: "",
  city: "",
  state: "",
  country: "",
  postalCode: "",
  birthDate: "",
  status: "",
  cot: "",
  pin: "",
  password: "",
};

export default function Base() {
  const [values, setValues] = useState(formData);
  const [errors, setErrors] = useState(formData);
  const [loading, setLoading] = useState(false);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const style = "rounded-lg text-black";

  const submit = async () => {
    let formErrors = { ...errors };

    if (!values.firstName.trim()) {
      formErrors.firstName = "Please input your first name";
    } else {
      formErrors.firstName = "";
    }

    if (!values.middleName.trim()) {
      formErrors.middleName = "Please input your middle name";
    } else {
      formErrors.middleName = "";
    }

    if (!values.lastName.trim()) {
      formErrors.lastName = "Please input your last name";
    } else {
      formErrors.lastName = "";
    }
    if (!values.email.trim()) {
      formErrors.email = "Please input your email";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      formErrors.email = "Please input a valid email address";
    } else {
      formErrors.email = "";
    }

    const phone = Number(values.phone);
    if (!values.phone.trim()) {
      formErrors.phone = "Please input your phone number";
    } else if (isNaN(phone)) {
      formErrors.phone = "Please input a valid number";
    } else {
      formErrors.phone = "";
    }
    if (!values.availableBalance.trim()) {
      formErrors.availableBalance = "Please input available balance";
    } else {
      formErrors.availableBalance = "";
    }

    if (!values.imf.trim()) {
      formErrors.imf = "Please input IMF";
    } else {
      formErrors.imf = "";
    }
    if (!values.birthDate.trim()) {
      formErrors.birthDate = "Please input your Birth Date";
    } else {
      formErrors.birthDate = "";
    }

    if (!values.gender.trim()) {
      formErrors.gender = "Please select your gender";
    } else {
      formErrors.gender = "";
    }
    if (!values.accountType.trim()) {
      formErrors.accountType = "Please select account type";
    } else {
      formErrors.accountType = "";
    }

    if (!values.blocked.trim()) {
      formErrors.blocked = "Please select if account is blocked";
    } else {
      formErrors.blocked = "";
    }

    if (!values.street.trim()) {
      formErrors.street = "Please input street";
    } else {
      formErrors.street = "";
    }

    if (!values.city.trim()) {
      formErrors.city = "Please input city";
    } else {
      formErrors.city = "";
    }

    if (!values.state.trim()) {
      formErrors.state = "Please input state";
    } else {
      formErrors.state = "";
    }
    if (!values.country.trim()) {
      formErrors.country = "Please input country";
    } else {
      formErrors.country = "";
    }

    if (!values.postalCode.trim()) {
      formErrors.postalCode = "Please input postal code";
    } else {
      formErrors.postalCode = "";
    }

    if (!values.status.trim()) {
      formErrors.status = "Please select account status";
    } else {
      formErrors.status = "";
    }

    if (!values.cot.trim()) {
      formErrors.cot = "Please input COT";
    } else {
      formErrors.cot = "";
    }

    if (!values.pin.trim()) {
      formErrors.pin = "Please input PIN";
    } else if (!/^\d{4}$/.test(values.pin)) {
      formErrors.pin = "PIN must be 4 digits";
    } else {
      formErrors.pin = "";
    }

    if (!values.password.trim()) {
      formErrors.password = "Please input your password";
    } else if (values.password.length < 8) {
      formErrors.password = "Password must be at least 8 characters";
    } else {
      formErrors.password = "";
    }

    const hasErrors = Object.values(formErrors).some((error) => error !== "");
    if (hasErrors) {
      return setErrors(formErrors);
    }

    const url = `http://localhost:5000/register`;

    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
        }),
      });
      const result = await response.json();
      if(result.message == "Email already Exist"){
        setErrors({...errors, email: result.message})
      }
      if(result.message == "Phone number already Exist"){
        setErrors({...errors, phone: result.message})
      }
      if(result.message == "IMF already Exist"){
        setErrors({...errors, imf: result.message})
      }
      console.log(result)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="" style={{ height: `calc(100vh - ${navHeight})` }}>
      {loading && (
        <Loader />
      )}

      {!loading && (
        <div className="h-full">
          <div className="px-5">
            <Title title="Create Account" style="text-white" />
          </div>
          <div className="text-white grid grid-cols-4 gap-5 p-5 pt-0 ">
            <Input
              error={errors.firstName}
              value={values.firstName}
              label="First Name"
              onChange={onChange}
              style={style}
              name="firstName"
            />
            <Input
              error={errors.middleName}
              value={values.middleName}
              label="Middle Name"
              onChange={onChange}
              style={style}
              name="middleName"
            />
            <Input
              error={errors.lastName}
              value={values.lastName}
              label="Last Name"
              onChange={onChange}
              style={style}
              name="lastName"
            />
            <Input
              error={errors.email}
              value={values.email}
              label="Email"
              onChange={onChange}
              style={style}
              name="email"
            />
            <Input
              error={errors.phone}
              value={values.phone}
              label="Phone Number"
              onChange={onChange}
              style={style}
              name="phone"
            />
            <Input
              error={errors.birthDate}
              value={values.birthDate}
              label="Birth Date"
              onChange={onChange}
              style={style}
              name="birthDate"
            />
            <Input
              error={errors.availableBalance}
              value={values.availableBalance}
              label="Available Balance"
              onChange={onChange}
              style={style}
              name="availableBalance"
            />
            <Input
              error={errors.imf}
              value={values.imf}
              label="IMF"
              onChange={onChange}
              style={style}
              name="imf"
            />
            <Select
              error={errors.gender}
              value={values.gender}
              label="Gender"
              data={["", "male", "female", "rather not say"]}
              onChange={onChange}
              style={style}
              name="gender"
            />
            <Select
              error={errors.accountType}
              value={values.accountType}
              label="Account Type"
              data={["", "checking", "savings"]}
              onChange={onChange}
               style={style}
              name="accountType"
            />
            <Select
              error={errors.blocked}
              value={values.blocked}
              label="Blocked"
              data={["", "true", "false"]}
              onChange={onChange}
               style={style}
              name="blocked"
            />
            <Input
              error={errors.street}
              value={values.street}
              label="Street"
              onChange={onChange}
              style={style}
              name="street"
            />
            <Input
              error={errors.city}
              value={values.city}
              label="City"
              onChange={onChange}
              style={style}
              name="city"
            />
            <Input
              error={errors.state}
              value={values.state}
              label="State"
              onChange={onChange}
              style={style}
              name="state"
            />
            <Input
              error={errors.country}
              value={values.country}
              label="Country"
              onChange={onChange}
              style={style}
              name="country"
            />
            <Input
              error={errors.postalCode}
              value={values.postalCode}
              label="Postal Code"
              onChange={onChange}
              style={style}
              name="postalCode"
            />
            <Select
              error={errors.status}
              value={values.status}
              label="Status"
              data={["", "pending", "successful", "failed"]}
              onChange={onChange}
               
              style={style}
              name="status"
            />
            <Input
              error={errors.cot}
              value={values.cot}
              label="COT"
              onChange={onChange}
              style={style}
              name="cot"
            />
            <Input
              error={errors.pin}
              value={values.pin}
              label="PIN"
              onChange={onChange}
              style={style}
              name="pin"
            />
            <Input
              error={errors.password}
              value={values.password}
              label="Password"
              onChange={onChange}
              style={style}
              name="password"
            />
          </div>
          <div className="flex justify-end px-5">
            <div onClick={submit} className="">
              <Button
                title="Register"
                style="text-white bg-emerald-500 w-fit"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
