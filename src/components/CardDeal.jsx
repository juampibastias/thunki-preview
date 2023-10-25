import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                AWS, GCP, Azure in a hybrid cloud ecosystem,
                <br className='sm:block hidden' /> selecting the right cloud for
                your benefit
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Our focus on FinOps and GreenOps ensures financial savvy and
                eco-responsibility in your tech endeavors. With Thunkify,
                embrace not just cutting-edge technology, but sustainable,
                cost-effective innovation that fuels your business value.
            </p>

            <Button styles={`mt-10`} />
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt='billing' className='w-[100%] h-[100%]' />
        </div>
    </section>
);

export default CardDeal;
