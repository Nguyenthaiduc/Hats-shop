import React, { FC } from 'react';
import './ErrorAlert.scss';
import {Alert} from 'reactstrap';

interface Props {
    message: string;
}

const ErrorAlert: FC<Props> = ({ message }) => {
	return <Alert fade={true} className='error-alert' color="danger">{message}</Alert>;
};

export default ErrorAlert;