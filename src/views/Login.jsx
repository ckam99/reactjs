import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg';
import { useFormik } from "formik";
import * as Yup from "yup";
import { navigate } from "@reach/router";
import { useSetRecoilState } from 'recoil'
import { isAuthState } from '../store/states/base'
import storage from "../store/local";
import Layout from '../components/layouts/Base';

const email = "admin@mail.com"
const password = "admin"

const LoginView = () => {

    const setAuth = useSetRecoilState(isAuthState)
    const [error, setError] = React.useState(false)
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email")
                .required("This field is required"),
            password: Yup.string()
                .required("This field is required")
                .min(4, "At least 4 characters"),
        }),
        onSubmit: (values) => {
            if (values.email !== email || values.password !== password) {
                setError(true)
            } else {
                storage.set('token', 'balbalaballsl')
                setAuth(true)
                navigate('/')
            }
        },
    });

    return <Wrapper>
        <Layout>
            <Layout.Head>
                <title>Sign out</title>
            </Layout.Head>
            <Layout.Container>
                <div className="page">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="center">
                            <img src={logo} alt="logo" width="250" />
                            <h1>Login</h1>
                        </div>
                        {error && (
                            <div className="alert alert-danger ">
                                <span>неверный адрес электронной почты или пароль</span>
                            </div>
                        )}

                        <div className="row mb-3" >
                            <div className="col-sm-12">
                                <input type="email" className="form-control" placeholder={email}
                                    name="email"
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <small className="error-text">{formik.errors.email}</small>
                                )}

                            </div>
                        </div>
                        <div className="row mb-3" >
                            <div className="col-sm-12  mb-3">
                                <input type="password" className="form-control" placeholder={password}
                                    name="password"
                                    value={formik.values.password}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.password && formik.touched.password && (
                                    <small className="error-text">{formik.errors.password}</small>
                                )}

                            </div>
                        </div>
                        <div className="row mb-3" >
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Layout.Container>
        </Layout>
    </Wrapper >
}

const Wrapper = styled.div`
.center {
    text-align: center;
  }
  .page {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  .error-text{
      color: red;
      font-size: 12px
  }
`
export default LoginView