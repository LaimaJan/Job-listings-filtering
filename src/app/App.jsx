import './App.css';
import HeadingDesktop from '../../images/bg-header-desktop.svg';
import HeadingMobile from '../../images/bg-header-mobile.svg';
import JobCard from './components/JobCard/JobCard';
import data from '../app/data.json';
import React, { useState } from 'react';

function App() {
	const [filterBy, setFilterBy] = useState([]);
	const [show, setShow] = useState(false);
	const keys = ['role', 'level', 'languages', 'tools'];

	const handleClick = (e) => {
		const value = e.target.innerText;
		if (!filterBy.includes(value)) {
			setFilterBy((prevFilterBy) => [...prevFilterBy, value]);
			setShow(true);
		}
	};

	const clearInput = () => {
		setFilterBy([]);
		setShow(false);
	};

	let allValues = [];
	const filteredData = data.filter((element) => {
		allValues = [];
		keys.forEach(function (key) {
			if (Array.isArray(element[key])) {
				allValues = allValues.concat(element[key]);
			} else {
				allValues.push(element[key]);
			}
		});

		let matchedParams = 0;
		filterBy.forEach(function (param) {
			if (allValues.indexOf(param) >= 0) {
				matchedParams++;
			}
		});

		return matchedParams === filterBy.length;
	});

	const deleteFilter = (index) => {
		setFilterBy((prevState) => {
			const updatedFilter = [...prevState];
			updatedFilter.splice(index, 1);
			return updatedFilter;
		});
	};

	return (
		<div className="App">
			<div className="heading">
				<img
					src={HeadingDesktop}
					srcSet={`${HeadingMobile} 375w, ${HeadingDesktop} 1440w`}
					alt="Heading"
					className="heading-image"
				/>
			</div>

			<div
				className="search-bar-container"
				style={{ visibility: show ? 'visible' : 'hidden' }}
			>
				<div className="search-bar">
					<ul>
						{filterBy.map((state, index) => {
							return (
								<li key={index}>
									<p>{state}</p>
									<button
										className="delete-button"
										onClick={() => deleteFilter(index)}
									>
										<img src="../../images/close.png" alt="close button" />
									</button>
								</li>
							);
						})}
					</ul>

					<button type="button" onClick={clearInput} className="clear-button">
						Clear
					</button>
				</div>
			</div>

			<div className="job-listing-container">
				<div className="jobs-list-container">
					{filteredData.map((element) => {
						return (
							<JobCard
								key={element.id}
								companyImage={element.logo}
								jobPosition={element.position}
								postedAt={element.postedAt}
								jobContract={element.contract}
								jobLocation={element.location}
								filter={element.languages}
								newBadge={element.new}
								featuringBadge={element.featured}
								jobLanguages={element.languages}
								jobRole={element.role}
								jobTools={element.tools}
								jobLevel={element.level}
								onClick={(e) => handleClick(e)}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
