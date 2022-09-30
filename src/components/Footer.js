import "../styles/footer.css"

const Footer = () => {
	return (
		<div className="footer-dark">
			<footer>
				<div className="container">
					<div className="row">
						<div className="col item social">
							<a href="https://www.facebook.com/suniltiwari.dev" target="_blank"><i className="fa fa-facebook"></i></a>
							<a href="https://twitter.com/_suniltiwari" target="_blank"><i className="fa fa-twitter"></i></a>
							<a href="https://github.com/cybertiwari" target="_blank"><i className="fa fa-github"></i></a>
							<a href="https://www.instagram.com/__suniltiwari/" target="_blank"><i className="fa fa-instagram"></i></a>
							<a href="https://www.linkedin.com/in/sunil-tiwari-swe/" target="_blank"><i className="fa fa-linkedin"></i></a>
						</div>
					</div>
					<p className="copyright"><a href="https://suniltiwari.dev" target="_blank">Sunil Tiwari</a> &copy; 2022</p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
