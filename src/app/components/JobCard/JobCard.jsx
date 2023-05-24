import Dot from '../../../../images/full-stop.png';
import './JobCard.css';

export default function JobCard({
	companyImage,
	newBadge,
	featuringBadge,
	jobPosition,
	postedAt,
	jobContract,
	jobLocation,
	jobLanguages,
	jobRole,
	jobTools,
	jobLevel,
	onClick,
}) {
	return (
		<div className="job-card">
			<div className="job-card-content">
				<div className="company-image">
					<img src={companyImage} alt={companyImage} />
				</div>
				<div className="job-description">
					<div className="company-info">
						<p className="company-name">Photosnap</p>
						{newBadge ? (
							<div className="new-listing badge">
								<p>{newBadge ? 'NEW!' : ''}</p>
							</div>
						) : (
							''
						)}

						{featuringBadge ? (
							<div className="featured-listing badge">
								<p>{featuringBadge ? 'FEATURING' : ''}</p>
							</div>
						) : (
							''
						)}
					</div>
					<div className="job-position">
						<p value={jobPosition}>{jobPosition}</p>
					</div>
					<div className="job-info">
						<p className="job-posted-at">{postedAt}</p>
						<div className="dot">
							<img src={Dot} alt="dot between words" />
						</div>
						<p className="job-contract">{jobContract}</p>
						<div className="dot">
							<img src={Dot} alt="dot between words" />
						</div>
						<p className="job-location">{jobLocation}</p>
					</div>
				</div>
			</div>
			<div className="job-filters">
				<span onClick={onClick} value={jobRole}>
					{jobRole}
				</span>
				<span onClick={onClick} value={jobLevel}>
					{jobLevel}
				</span>
				{jobLanguages.map((language) => {
					return (
						<span key={language} value={language} onClick={onClick}>
							{language}
						</span>
					);
				})}
				{jobTools.map((tools) => {
					return (
						<span key={tools} value={tools} onClick={onClick}>
							{tools}
						</span>
					);
				})}
			</div>
		</div>
	);
}
