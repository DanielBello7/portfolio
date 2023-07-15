import { experience, skills } from '../constants';
import { FormattedMessage } from 'react-intl';
import { FaDownload } from 'react-icons/fa';
import { assets } from '../constants';
import { Fade } from 'react-awesome-reveal';
import React from 'react';
import WorkExperience from './WorkExperience';

export default function Resume() {
	const output = experience.map((item, index) => {
		return (
			<WorkExperience
				location={item.location}
				title={item.title}
				key={index}
				period={item.period}
			/>
		)
	});

	const skillsOutput = skills.map((skill, index) => (
		<h5 className='col-12' key={index}>{skill}</h5>
	));

	return (
		<div className='my-5 d-flex flex-column align-items-center'>
			<div className='col-12 col-md-7 col-lg-7 text-center mb-5'>

				<div className='w-100 position-relative'>
					<h3 className='h1 txt fw-bold resume'>
						<Fade triggerOnce>
							<a id="resume" href='#!' className='text-decoration-none text-dark'>
								<FormattedMessage id="resumeTitle" />
							</a>
						</Fade>
					</h3>
				</div>

				<Fade triggerOnce>
					<p className='text-center text-muted' id="resume-text">
						<FormattedMessage id="resumeMsg" />
					</p>
				</Fade>
			</div>

			<div className='w-100 d-flex flex-column flex-md-row flex-lg-row'>
				<div className='col-0 col-md-4 col-lg-4' />

				<div className='col-12 col-md-4 col-lg-4'>
					<Fade triggerOnce>
						<div className='my-5 text-center'>
							<h3 className='h1 txt fw-bold bg-dark text-white d-inline'>
								<FormattedMessage id="resumeType" />
							</h3>
							<h5 className='fw-bold txt h4 mt-5'>
								<FormattedMessage id="resumeResult" />
							</h5>
							<h5 className='txt h4'>
								<FormattedMessage id="resumeLocation" />
							</h5>
							<h5 className='txt h5'>
								<FormattedMessage id="resumePeriod" />
							</h5>
						</div>
					</Fade>
				</div>

				<div className='col-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center'>
					<Fade delay={500} triggerOnce>
						<div id="center-img">
							<img
								src={assets.user_img1}
								id="user-img"
								alt="user-img"
							/>
						</div>
					</Fade>
				</div>
			</div>


			<div className='col-12 col-md-12 col-lg-9 my-5 text-center'>
				<Fade triggerOnce>
					<h3 className='h1 txt fw-bold bg-dark text-white d-inline'>
						<FormattedMessage id="resumeExperience" />
					</h3>
				</Fade>
				<div className='mt-3 w-100 row gx-2 m-0 justify-content-between'>
					<Fade triggerOnce className='col-12 col-md-4 col-lg-4' cascade direction='up'>
						{output}
					</Fade>
				</div>
			</div>

			<div className='col-12 col-md-9 col-lg-9 my-5 text-center'>
				<Fade triggerOnce>
					<h3 className='h1 txt fw-bold bg-dark text-white d-inline'>
						<FormattedMessage id="resumeSub" />
					</h3>
				</Fade>
				<div className='mt-5 w-100 row gx-1 m-0 text-center'>
					<Fade triggerOnce className='col-4' cascade duration={200}>
						{skillsOutput}
					</Fade>
				</div>
			</div>

			<div className='col-9 my-5 text-center'>
				<Fade>
					<p>
						<FormattedMessage id="resumeInfo" />
					</p>
					<a
						href="/DanielBelloResume.pdf"
						download="Resume.pdf"
						className='btn btn-dark px-4'
					>
						<FaDownload className='me-2' />
						<span>
							<FormattedMessage id="resumeDownload" />
						</span>
					</a>
				</Fade>
			</div>
		</div>
	)
}
