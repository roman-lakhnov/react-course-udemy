import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

const NewMeetupPage = () => {
	const history = useHistory()
	function addMeetupHandler(meetupData) {
		fetch(
			'https://react-getting-started-ceed7-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
			{
				method: 'POST',
				body: JSON.stringify(meetupData),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		).then(()=>{
      history.replace('/')
    })
	}
	return (
		<section>
			<h1>Add new Meetup</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	)
}

export default NewMeetupPage
