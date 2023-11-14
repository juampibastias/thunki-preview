import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => (
    <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
        <div
            className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
        >
            <a
                href='https://calendar.app.google/cuBj3TdL3C4ZCDWN6'
                target='_BLANK'
            >
                <div className={`${styles.flexStart} flex-row`}>
                    <p className='font-poppins font-medium text-[18px] leading-[23.4px]'>
                        <span className='text-gradient'>Kickstart</span>
                    </p>
                    <img
                        src={arrowUp}
                        alt='arrow-up'
                        className='w-[23px] h-[23px] object-contain'
                    />
                </div>

                <p className='font-poppins font-medium text-[18px] leading-[23.4px]'>
                    <span className='text-gradient'>your project</span>
                </p>
            </a>
        </div>
    </div>
);

export default GetStarted;
