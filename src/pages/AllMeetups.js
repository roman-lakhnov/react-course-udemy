import React from 'react'
import MeetupList from '../components/meetups/MeetupList'
import { useState } from 'react'
import { useEffect } from 'react'

const DUMMY_DATA = [
	{
		id: 'm1',
		title: 'This is a first meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
		address: 'Meetupstreet 5, 12345 Meetup City',
		description:
			'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
	},
	{
		id: 'm2',
		title: 'This is a second meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
		address: 'Meetupstreet 5, 12345 Meetup City',
		description:
			'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
	}
]
const AllMeetupsPage = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [loadedMeetups, setLoadedMeetups] = useState([])
	useEffect(() => {
		setIsLoading(true)
		fetch(
			'https://react-getting-started-ceed7-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
		)
			.then(response => {
				return response.json()
			})
			.then(data => {
				const meetups=[]
				for (const key in data){
					const meetup={
						id:key,
						...data[key]
					}
					meetups.push(meetup)
				}
				setIsLoading(false)
				setLoadedMeetups(meetups)
				console.log(meetups)
				
				console.log(data)
			})
	}, [])

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		)
	}

	return (
		<section>
			<h1>All Meetups</h1>
			<MeetupList meetups={loadedMeetups} />
		</section>
	)
}

export default AllMeetupsPage
