export default function Convertisseur(Celsius: number): number | string {
	if (typeof Celsius === "number") {
		return Math.trunc( Celsius* (9 / 5) + 32);
	} else {
		return "ERREUR";
	}
}

console.log(Convertisseur(-37)); // -34
console.log(Convertisseur(14)); // 57
console.log(Convertisseur(0)); // 32
//console.log(Convertisseur("abc")); // Données en entrée non-correctes.
