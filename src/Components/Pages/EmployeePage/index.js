import { useState } from "react";
import { InputLabel, EmployeeTableData, DropDownLabel, DatePickerLabel } from "../../Molecules";
import { Button,DropDown } from "../../Atoms";
import Modal from "react-modal";
import "./index.css";
import validator from 'validator';


export const EmployeePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");
  const [emailValidation, setEmailValidation] = useState("");

  const handleOnClick = async() => {
    validations();
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(dob);
    console.log(age);
    console.log(salary);
    console.log(department);
  };

  const validations =()=>{
    const emailV = validator.isEmail(email);
    if(!emailV){
      setEmailValidation("Incorrect Email");
    }else{
      setEmailValidation("")
    }

  }

  const handleToggelModal = (event) => {
    event.preventDefault();
    setIsModalOpen(!isModalOpen);
  };

  const handleEdit = (event,index) => {
    event.preventDefault();
    setIsModalOpen(!isModalOpen);
  };

  const handelModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-end">
          <div className="btn-container d-flex object-fit-contain">
            <div className="first-btn p-3">
              <Button
                label="Add Employee"
                type="primary"
                onClick={handleToggelModal}
              />
            </div>
            <div className="second-btn p-3">
              <Button
                label="Switch to deparment"
                type="info"
                onClick={handleOnClick}
              />
            </div>
          </div>
        </div>
        <div className="table-container">
          <EmployeeTableData setFirstName={setFirstName} handleEdit={handleEdit}/>
          <DropDown/>
        </div>
      </div>
      <div className="modal-wrapper ">
        <Modal isOpen={isModalOpen} className="Modal">
          <div className="d-flex justify-content-end">
            <Button type="close" onClick={handelModalClose} />
          </div>
          <div className="form-wrapper d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col">
                <InputLabel
                  typographyLabel="First Name"
                  InputFieldPlaceHolder="Enter first name"
                  setValue={setFirstName}
                  value={firstName}
                />
              </div>
              <div className="col">
                <InputLabel
                  typographyLabel="Last Name"
                  InputFieldPlaceHolder="Enter last name"
                  setValue={setLastName}
                  value={lastName}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <InputLabel
                  typographyLabel="Email Address"
                  InputFieldPlaceHolder="Enter email address"
                  setValue={setEmail}
                  value={email}
                />
                {emailValidation!= "" && <p>{emailValidation}</p>}
              </div>
              <div className="col ">
                <DatePickerLabel
                  typographyLabel="Date of Birth"
                  InputFieldPlaceHolder="Enter Date of Birth"
                  setValue={setDob}
                  value={dob}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <InputLabel
                  typographyLabel="Age"
                  InputFieldPlaceHolder="Enter age"
                  setValue={setAge}
                  value={age}
                />
              </div>
              <div className="col ">
                <InputLabel
                  typographyLabel="Salary"
                  InputFieldPlaceHolder="Enter salary"
                  setValue={setSalary}
                  value={salary}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <DropDownLabel
                  typographyLabel="Department"
                  InputFieldPlaceHolder="Enter department"
                  setValue={setDepartment}
                  value={department}
                />
              </div>
            </div>
            <div className="row">
              <div className="col btn-container">
                <Button
                  label="Add User"
                  onClick={handleOnClick}
                  type="primary"
                  style="w-100"
                />
              </div>
              <div className="col btn-container">
                <Button
                  label="Cancle"
                  onClick={handelModalClose}
                  type="danger"
                  style="w-100"
                  
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};
