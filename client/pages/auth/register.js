import React, {useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import {registerRequest} from '@/modules/auth/register';
import {Register} from '@/components/auth/Register';

const RegisterPage = () => {
    const [user, setUser] = useState({
        userid: '',
        password: '',
        email: '',
        name: '',
        phone: '',
        birth: '',
        address: ''
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
        dispatch(registerRequest(user))
    }
    return (<Register onChange={onChange} onSubmit={onSubmit}/>);
};
// register: 리듀서 이름, isRegistered: state 이름
const mapStateToProps = state => ({isRegistered: state.register.isRegistered});
const registerActions = {registerRequest}
export default connect(mapStateToProps, registerActions)(RegisterPage);