import React, { useState } from 'react';
import './style/signIn.sass';
import Button, { ButtonType } from '../../../components/button/button';
import Input, { InputType } from '../../../components/input/input';
import Axios from 'axios';

export default function SignIn() {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [token, setToken] = useState();

	// 调用登录接口
	async function signIn() {
		const result = await Axios.post(
			'http://localhost:8888/spring-oxygen/user/userSignIn',
			{
				account: username,
				password: password,
			},
		);
		setToken(result.data.data);
	}

	function ShowLoginStatus() {

		if (token == null) {
			return <h4>等待登录</h4>
		}else{
			return <h4>登录成功:{token}</h4>;
		}
	}

	return (
		<div className={'div-signIn'}>
			<ShowLoginStatus/>
			<Input
				which={InputType.LINE}
				className={'username'}
				placeholder={'username'}
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			/>
			<Input
				which={InputType.LINE}
				className={'password'}
				placeholder={'password'}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<Button which={ButtonType.NORMAL} onClick={signIn}>
				Click me
			</Button>
		</div>
	);
}