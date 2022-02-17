import React, { useState, useRef } from "react";
import {
  SignInFromContainer,
  LogoImg,
  InputField,
  InputFieldPassword,
  SubmitButton,
  BtnLink,
  FSignInButtom,
  GSignInButton,
} from "./Elements";
import Logo from "../../../../assets/images/logo2.png";
import { Form, Row, Col, Divider, Tooltip, message } from "antd";
import { FaUser, FaKey } from "react-icons/fa";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./style.scss";
import Schema from "async-validator";
import { EmailRegEx, NumberRegEx } from "../../../../helpers/regex";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';


Schema.warning = function () {};

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const BtnRef = useRef(null);

  const [form] = Form.useForm();
  const onFinish = (values) => {
    BtnRef.current.blur();
    setLoading(true);
    message.success("Hello");
    form.resetFields();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const onFinishFailed = () => {
    BtnRef.current.blur();
    message.error("Please fill out the form");
  };

  const onGoogleLogin = (response) => {
    console.log(response);
  };

  return (
    <SignInFromContainer>
      <NavLink to="/">
        <LogoImg src={Logo} alt="Logo Img" />
      </NavLink>
      <Form
        form={form}
        name="signin-form"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={"optional"}
      >
        <Form.Item
          name="email"
          label={<label className="formLabel">Email or Phone Number</label>}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Credential Required",
            },
            () => ({
              validator(_, value) {
                if (EmailRegEx.test(value)) {
                  return Promise.resolve();
                } else if (NumberRegEx.test(value) && value.length === 13) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    new Error("Not an Email or a Phone Number")
                  );
                }
              },
            }),
          ]}
        >
          <InputField
            placeholder={"Email or Phone Number"}
            prefix={<FaUser color="#545454" />}
          />
        </Form.Item>
        <Form.Item
          name="Password"
          label={<label className="formLabel">Password</label>}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
            {
              min: 6,
              message: "Must be more than 6 characters",
            },
          ]}
        >
          <InputFieldPassword
            settings={{
              colorScheme: {
                levels: ["#ff3333", "#fe940d", "#ffd908", "#cbe11d", "#42ba96"],
              },
              height: 3,
              alwaysVisible: false,
            }}
            placeholder={"Pass****"}
            prefix={<FaKey color="#545454" />}
          />
        </Form.Item>
        <Form.Item>
          <SubmitButton
            type="primary"
            htmlType="submit"
            loading={loading}
            ref={BtnRef}
          >
            Sign In
          </SubmitButton>
        </Form.Item>
        <Row justify="space-between">
          <Col span={15}>
            <BtnLink to="/signup">Forgot Password</BtnLink>
          </Col>
          <Col span={3.5}>
            <BtnLink to="/signup">Sign Up</BtnLink>
          </Col>
        </Row>
      </Form>

      <Divider />
      <Tooltip title="Sign in with Facebook">
        <FacebookLogin
          appId={`${process.env.REACT_APP_FAUTHKEY}`}
          callback={onGoogleLogin}
          render={(renderProps) => (
            <FSignInButtom
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              fields="name,email,picture"
              type="primary"
              icon={<FacebookFilled />}
            >
              Sign In
            </FSignInButtom>
          )}
        />
      </Tooltip>
      <Tooltip title="Sign in with Google" placement="bottom">
        <GoogleLogin
          clientId={`${process.env.REACT_APP_GAUTHKEY}`}
          render={(renderProps) => (
            <GSignInButton
              type="primary"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              icon={<GoogleOutlined />}
            >
              Sign In
            </GSignInButton>
          )}
          onSuccess={onGoogleLogin}
        />
      </Tooltip>
    </SignInFromContainer>
  );
};

export default SignInForm;
