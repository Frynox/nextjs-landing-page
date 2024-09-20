import HeroComponent from './components/HeroComponent.jsx';
import PlansComponent from './components/PlansComponent.jsx';
import BenefitsComponent from './components/BenefitsComponent.jsx';
import CommentsComponent from './components/CommentsComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';

export default function HomePage() {
  return (
    <main>
      <HeroComponent />
      <PlansComponent />
      <BenefitsComponent />
      <CommentsComponent />
      <FooterComponent />
    </main>
  );
}
