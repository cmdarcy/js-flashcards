import React from "react";
import styles from "./Card.module.css";

function Card({ title, description, extra_info }) {
	return (
		<div className={styles.card}>
			<div className={styles.card_inner}>
				<div className={styles.card_front}>
					<p>{title}</p>
				</div>
				<div className={styles.card_back}>
					<p>{description}</p>
					<p>{extra_info}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
