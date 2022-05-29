import { Form, Input, DatePicker, Button } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import { useApi } from "../providers/ApiProvider";
import { Alert } from "antd";
import { useNavigate } from "react-router-dom";

export const FormComponent = ({ buttonText, userInfo }) => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { addNewUser, updateUser } = useApi();
  const [birthDate, setBirthDate] = useState("");
  const navigate = useNavigate();

  const onFinish = (values) => {
    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      birthDate: birthDate,
    };
    const addUserToDb = async () => {
      try {
        const res = await addNewUser(user);
        setMessage(res);
      } catch (error) {
        setErrorMessage(error.response.data.errors.message);
        console.log(error);
      }
    };
    const updateUserInDb = async () => {
      try {
        const res = await updateUser(userInfo._id, user);
        setMessage(res);
      } catch (error) {
        setErrorMessage(error.response.data.errors.message);
      }
    };
    userInfo ? updateUserInDb() : addUserToDb();

    setTimeout(() => {
      navigate("/users");
    }, 3000);
  };

  const onChange = (date, dateString) => {
    setBirthDate(dateString.toString());
  };
  console.log(errorMessage);
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
      {message && <Alert message={message} type="success" showIcon />}
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
          {buttonText}
        </Button>
      </Form.Item>
    </Form>
  );
};
