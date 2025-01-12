import SharedBanner from '../../shared/SharedBanner/SharedBanner';
import bannerImg from '../../assets/menu/ourShop.png'
import FoodTabs from './FoodTabs';

const OurShop = () => {
    return (
        <div>
            <SharedBanner img={bannerImg} pyl="16" mt="8%" title="our shop" description="WOULD YOU LIKE TO TRY A DISH??" />
            <FoodTabs />
        </div>
    );
};

export default OurShop;