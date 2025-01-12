import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../shared/FoodCards/FoodCard';

const FoodTabs = () => {
    return (
        <div className='lg:w-10/12 w-11/12 mx-auto my-12'>
            <Tabs>
                <TabList className="flex justify-center items-center mb-8 uppercase">
                    <Tab>salads</Tab>
                    <Tab>pizzas</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>

                <TabPanel>
                    <div className='w-full'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='w-full'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default FoodTabs;