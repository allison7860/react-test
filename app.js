import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const user = {
firstName: 'Allison',
lastName: 'Powell'
};

const today = new Date();

const element = (
	<div className="col">
		<p>Hello my name is, {formatName(user)}!</p>
		<p>This Date is {today.toTimeString()}</p>
	</div>
);

ReactDOM.render(
element,
document.getElementsByClassName('col')[0]
)
