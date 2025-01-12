import SharedBanner from '../../shared/SharedBanner/SharedBanner';
import bannerImg from '../../assets/menu/ourShop.png'

const OurShop = () => {
    return (
        <div>
            <SharedBanner img={bannerImg} pyl="20" mt="8%" title="OUR MENU" description="WOULD YOU LIKE TO TRY A DISH" />
        </div>
    );
};

export default OurShop;