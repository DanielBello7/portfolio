import Landing from '../components/LandingComponent';
import Contact from '../components/ContactComponent';
import WorkComponent from '../components/WorkComponent';
import Resume from '../components/ResumeComponent';

export default function Home() {
	return (
		<main className={`container-xl w-100 d-flex flex-column`}>
			<Landing />
			<br />
			<br />

			<WorkComponent />
			<br />
			<br />

			<Resume />
			<br />
			<br />

			<Contact />
		</main>
	);
}
