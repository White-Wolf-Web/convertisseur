"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Convertisseur from "@/components/Convertisseur";

export default function Home() {
	const [tempCelsius, setTempCelsius] = useState(0);
	const tempFahrenheit = Convertisseur(tempCelsius);

	return (
		<main className={styles.main}>
			<h1>Convertisseur</h1>
			<section className={styles.container}>
				<div className={styles.celsiusContainer}>
					<h2><label htmlFor="tempCelsius">Température en Celsius :</label></h2>
					<input type="number" id="tempCelsius" name="tempCelsius" value={tempCelsius} onChange={(e) => setTempCelsius(Number(e.target.value))} />
					<p>{tempFahrenheit} °F</p>
				</div>
        <div className={styles.fahrenheitContainer}>
					<h2><label htmlFor="tempFahrenheit">Température en Fahrenheit</label></h2>
					<input type="number" id="tempFahrenheit" name="tempFahrenheit" value={tempCelsius} onChange={(e) => setTempCelsius(Number(e.target.value))} />
					<p>{tempFahrenheit} °F</p>
				</div>
			</section>
		</main>
	);
}
