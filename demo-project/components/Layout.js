import Head from "next/head";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Lifology Demo</title>
				<meta name="description" content="demo of lifology dashboard" />
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
					crossOrigin="anonymous"
				></link>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
					integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
			</Head>
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
				<script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
					integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
					crossOrigin="anonymous"
				></script>
			</div>
		</div>
	);
};

export default Layout;
