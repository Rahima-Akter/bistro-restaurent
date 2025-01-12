import SharedBanner from '../../shared/SharedBanner/SharedBanner';
import bannerImg from '../../assets/menu/banner3.jpg'
import TodaysOffer from './TodaysOffer';
import PizzaBanner from './PizzaBanner';
import Salads from './Salads';
import Soups from './Soups';
import DessertBanner from './DessertBanner';
const OurMenu = () => {
    return (
        <div>
            <SharedBanner img={bannerImg} pyl="20" mt="8%" title="OUR MENU" description="WOULD YOU LIKE TO TRY A DISH" />
            <TodaysOffer />
            <DessertBanner />
            <PizzaBanner />
            <Salads />
            <Soups />
        </div>
    );
};

export default OurMenu;