import { FormattedMessage } from 'react-intl';
import { FaEye, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Work(props) {
	const { id, title, tags, desc, img, repo, link, handleClick } = props;
	const navigate = useNavigate();
	const HandleNavigation = () => navigate(`/project/${id}`);

	const output = tags.map((tag, index) => {
		return (
			<p className='tag mb-2' key={index}>
				{tag}
			</p>
		)
	});

	return (
		<div className='col-12 col-md-12 col-lg-12 d-flex flex-column' id="project" style={{ height: '380px' }}>
			<div className='w-100' id="asset-img" onClick={HandleNavigation} style={{ height: '55%' }}>
				<img
					className="w-100 border border-2 rounded-4 mb-2 h-100 asst-img"
					src={img}
					style={{ objectFit: 'cover' }}
					alt="asset-img"
				/>
			</div>

			<h5 className='fw-bold txt my-2 w-100'>{title}</h5>

			<div className='d-flex w-100 flex-row overflow-hidden mb-2 f'>
				{output.slice(0, 2)}
				{output.length > 2 && <p className='tag mb-2'>+{output.length - 2}</p>}
			</div>

			<p className='text-muted example-text mb-3 d-flex flex-grow-1'>
				{desc}
			</p>

			<div className='mt-3 d-flex flex-row'>
				<a
					className='btn btn3'
					href={link}
					rel="noreferrer"
					target="_blank"
				>
					<FaEye className='me-2' />
					<span>
						<FormattedMessage id="workPreviewButton" />
					</span>
				</a>
				<a
					className='btn btn4 ms-2'
					href={repo}
					target="_blank"
					rel="noreferrer"
					onClick={() => !repo && handleClick()}
				>
					<FaGithub className='me-2' />
					<span>
						<FormattedMessage id="workGithubButton" />
					</span>
				</a>
			</div>
		</div>
	);
}
