import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, DatePicker, Button, Alert } from "antd";
import "antd/dist/antd.css";
import { useApi } from "../providers/ApiProvider";

export const FormComponent = ({ buttonText, userInfo }) => {
  const { addNewUser, updateUser } = useApi();
  const navigate = useNavigate();
  //Message states for response from server
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //State for date format
  const [birthDate, setBirthDate] = useState("");

  //Handle function after form submit
  const onFinish = (values) => {
    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      birthDate: birthDate,
    };

    //Add new user to database function
    const addUserToDb = async () => {
      try {
        const res = await addNewUser(user);
        setMessage(res);
      } catch (error) {
        setErrorMessage(error?.response?.data?.errors?.[0]?.message);
        console.log(error);
      }
    };

    //Update current user function
    const updateUserInDb = async () => {
      try {
        const res = await updateUser(userInfo._id, user);
        setMessage(res);
      } catch (error) {
        setErrorMessage(error?.response?.data?.errors?.[0]?.message);
      }
    };

    //Main purpose of the FormComponent. Update current user || add new user
    userInfo ? updateUserInDb() : addUserToDb();

    //return to users page after 3 seconds
    setTimeout(() => {
      navigate("/users");
    }, 3000);
  };

  //Input handle function to storage date data
  const onChange = (date, dateString) => {
    setBirthDate(dateString.toString());
  };

  return (
    <Form
      size="large"
      name="basic"
      initialValues={
        userInfo
          ? {
              firstName: userInfo.firstName,
              lastName: userInfo.lastName,
              email: userInfo.email,
            }
          : {
              remember: true,
            }
      }
      onFinish={onFinish}
      autoComplete="off"
    >
      {/* Display response messages  */}
      {message && <Alert message={message} type="success" showIcon />}
      {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
      <br />
      <Form.Item
        label="Firstname"
        name="firstName"
        rules={[
          {
            required: true,
            message: "Please input your firstname!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Lastname"
        name="lastName"
        rules={[
          {
            required: true,
            message: "Please input your lastname!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="birthDate"
        label="Birth Date"
        rules={[
          {
            type: "date",
            required: true,
          },
        ]}
      >
        <DatePicker onChange={onChange} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          {/*  Pass data as prop. So the button can change the inner content */}
          {buttonText}
        </Button>
      </Form.Item>
    </Form>
  );
};
