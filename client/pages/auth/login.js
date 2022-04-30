import React, {useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import { loginRequest, logoutRequest } from '@/modules/auth/login';
import { Login } from '@/components/auth/Login';
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    userid: '',
    password: ''
})
const dispatch = useDispatch()
const onChange = e => {
    e.preventDefault()
    const {name, value} = e.target;
    setUser({
        ...user,
        [name]: value
    })
}
const onSubmit = e => {
    e.preventDefault()
    alert('>>')
    dispatch(loginRequest(user))
    router.push("/user/profile");
}
  return (
    <Login onChange={onChange} onSubmit={onSubmit}/>
  );
};

const mapStateToProps = state => ({isLoggined: state.login.isLoggined});
const loginActions = {loginRequest, logoutRequest}
export default connect(mapStateToProps, loginActions)(LoginPage);