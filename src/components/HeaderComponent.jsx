import Socials from '../modules/Socials';
import Logo from '../modules/Logo';
import NavigationComponent from './NavigationComponent';

export default function Header() {
	return (
		<header className="container-xl w-100 d-flex flex-column flex-md-row flex-lg-row justify-content-between align-items-center pt-3 pb-3">
			<Logo reverse={false} />
			<NavigationComponent />
			<Socials reverse={false} />
		</header>
	)
}
