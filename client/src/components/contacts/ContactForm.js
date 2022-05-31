import React, { useState, useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactForm = () => {
	const contactContext = useContext(ContactContext)

	const { addContact, current } = contactContext

	useEffect(() => {
		if (current !== null) {
			setContact(current)
		} else {
			setContact({
				name: '',
				email: '',
				dob: '',
				type: 'personal'
			})
		}
	}, [contactContext, current])
	
	const [contact, setContact] = useState({
		name: '',
		email: '',
		dob: '',
		type: 'personal'
	})

	const { name, email, dob, type } = contact

	const onChange = e => setContact({
		...contact,
		[e.target.name]: e.target.value
	})

	const onSubmit = e => {
		e.preventDefault()

		addContact(contact)

		setContact({
			name: '',
			email: '',
			dob: '',
			type: 'personal'
		})
	}

	return (
		<form onSubmit={onSubmit}>
			<h2 className="text-primary">Add Contact</h2>
			<input
				type="text"
				placeholder="Name"
				name="name"
				value={name}
				onChange={onChange}
			/>
			<input
				type="email"
				placeholder="Email"
				name="email"
				value={email}
				onChange={onChange}
			/>
			<input
				type="text"
				placeholder="Date of Birth"
				name="dob"
				value={dob}
				onChange={onChange}
			/>
			<h5>Contact Type</h5>
			<input
				type="radio"
				name="type"
				value="personal"
				checked={
					type === 'personal'
				}
				onChange={onChange}
			/> Personal {' '}
			<input
				type="radio"
				name="type"
				value="professional"
				checked={
					type === 'professional'
				}
				onChange={onChange}
			/> Professional
			<div>
				<input
					type="submit"
					value="Add Contact"
					className="btn btn-primary btn-block"
				/>
			</div>
		</form>
	)
}

export default ContactForm