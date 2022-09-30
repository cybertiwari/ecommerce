import styles from "../styles/Home.module.scss";
import Card from "../components/Card";

const Home = (props) => {
	return (
		<section className={styles.home}>
			<div className={styles.container}>
				{/* <div className={styles.row}>
            
          </div> */}
				<div className={styles.row}>
					{props.products.map((product, key) => <Card product={product} key={key} />)}
				</div>
			</div>
		</section>
	);
};

export default Home;
