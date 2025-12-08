import React from 'react';
import './App.css';

function App() {
	return (
		<div className="main-container">
			<div className="content-wrapper">

				{/* Header Section (Tanpa Card, agar clean di atas) */}
				<header className="main-header">
					<h1 className="name">ARIA MUSTOFA HIDAYAT</h1>
					<h2 className="role">BACKEND ENGINEER</h2>
					<div className="contact-info">
						<span>
							<a 
								href="mailto:ariamustofa@gmail.com" 
								className="contact-link"
							>
								ariamustofa@gmail.com
							</a>
						</span>
						<span className="separator">|</span>
						<span>085324082999</span>
						<span className="separator">|</span>
						<span>
							<a 
								href="https://www.linkedin.com/in/aria-mustofa-hidayat-b86a4b61/" 
								target="_blank" 
								rel="noopener noreferrer" 
							>
								LinkedIn
							</a>
						</span>
						<span className="separator">|</span>
						<span>Tangerang</span>
					</div>
				</header>

				{/* Section: Summary */}
				<section className="card">
					<h3 className="section-title">PROFESSIONAL SUMMARY</h3>
					<p className="summary-text">
						Backend Engineer with over 5 years of experience architecting and delivering high-performance microservices for nation-scale platforms (OSS) and enterprise applications (McDonald's). Expert in Node.js, PHP and TypeScript, with deep proficiency in database optimization (PostgreSQL/MySQL) and high-concurrency systems. Proven track record in reducing API latency, implementing secure API Gateways, and driving CI/CD automation. Looking for a challenging Senior/Lead role to leverage expertise in scalable system design.
					</p>
				</section>

				{/* Section: Competencies */}
				<section className="card">
					<h3 className="section-title">CORE COMPETENCIES</h3>
					<ul className="competencies-list">
						<li>
							<span className="comp-label">Languages</span>
							<span className="comp-value">PHP, JavaScript, TypeScript, Golang</span>
						</li>
						<li>
							<span className="comp-label">Frameworks</span>
							<span className="comp-value">Laravel, CodeIgniter, Express.js, NestJS, Echo, Fiber</span>
						</li>
						<li>
							<span className="comp-label">Databases</span>
							<span className="comp-value">PostgreSQL, MySQL, MongoDB, Redis (Caching Strategy)</span>
						</li>
						<li>
							<span className="comp-label">Infra & DevOps</span>
							<span className="comp-value">Docker, CI/CD (GitLab/Github), Linux</span>
						</li>
						<li>
							<span className="comp-label">Architecture</span>
							<span className="comp-value">Microservices, RESTful APIs, Monolith</span>
						</li>
						<li>
							<span className="comp-label">Tools</span>
							<span className="comp-value">Git, Postman, Swagger, Jira, Slack</span>
						</li>
					</ul>
				</section>

				{/* Section: Experience */}
				<section className="card">
					<h3 className="section-title">PROFESSIONAL EXPERIENCE</h3>

					<div className="job-item">
						<div className="job-header">
							<h4 className="company">FREELANCE BACKEND ENGINEER</h4>
							<span className="separator hidden-mobile">|</span>
							<span className="location">Remote / Self-Employed</span>
						</div>
						<div className="date-range">Jan 2025 - Present</div>
						<ul className="job-details">
							<li>Developing and maintaining custom backend solutions for clients, focusing on scalability and clean architecture.</li>
							<li>Upgraded legacy applications to microservices, resulting in improved throughput and lower resource consumption compared to the previous architecture.</li>
						</ul>
					</div>

					<div className="job-item">
						<div className="job-header">
							<h4 className="company">PT. INFOMEDIA SOLUSI HUMANIKA (TELKOM GROUP)</h4>
							<span className="separator hidden-mobile">|</span>
							<span className="location">Jakarta</span>
						</div>
						<div className="job-role">Backend Engineer (Project: National Online Single Submission - OSS)</div>
						<div className="date-range">Apr 2024 - Mar 2025</div>
						<ul className="job-details">
							<li>Engineered and maintained core microservices for the OSS Platform, a high-traffic national system handling thousands of transactions daily.</li>
							<li>Significantly reduced API latency by implementing Redis caching for frequently accessed data and optimizing PostgreSQL queries.</li>
							<li>Collaborated with frontend teams to integrate RESTful APIs, improving overall system responsiveness and user experience.</li>
							<li>Refactored legacy codebases to improve maintainability and adherence to Clean Code principles.</li>
						</ul>
					</div>

					<div className="job-item">
						<div className="job-header">
							<h4 className="company">PT. SOLUSI KONVERGEN INDONESIA - OSS</h4>
							<span className="separator hidden-mobile">|</span>
							<span className="location">Jakarta</span>
						</div>
						<div className="job-role">Backend Engineer (Project: National Online Single Submission - OSS)</div>
						<div className="date-range">Jun 2022 - Mar 2024</div>
						<ul className="job-details">
							<li>Development for BSRE Digital Signature integration, designing a secure API Gateway that handled sensitive user data.</li>
							<li>Implemented fully automated CI/CD pipelines, reducing deployment time from hours to minutes and minimizing human error.</li>
							<li>Designed the database schema for high-volume logging systems, ensuring data integrity and fast retrieval.</li>
							<li>Conducted code reviews and mentored junior developers on best practices in API Security and documentation.</li>
						</ul>
					</div>

					<div className="job-item">
						<div className="job-header">
							<h4 className="company">PT. ANTIKODE DESAIN EXPERIENSIA</h4>
							<span className="separator hidden-mobile">|</span>
							<span className="location">Tangerang</span>
						</div>
						<div className="job-role">Backend Developer</div>
						<div className="date-range">Jan 2020 - May 2022</div>
						<ul className="job-details">
							<li>Built and maintained the backend for McDonald's MGM (My Gamification Module) using Laravel, supporting high-concurrency user spikes during nationwide promo campaigns.</li>
							<li>Collaborated closely with UI/UX designers to deliver seamless API integration for Content Management Systems (CMS).</li>
							<li>Developed a custom dashboard for client reporting, improving data visibility for the marketing team.</li>
						</ul>
					</div>

					<div className="job-item">
						<div className="job-header">
							<h4 className="company">PT. DUSDUSAN DOT COM</h4>
							<span className="separator hidden-mobile">|</span>
							<span className="location">Jakarta</span>
						</div>
						<div className="job-role">Backend Developer</div>
						<div className="date-range">Jan 2019 - Dec 2019</div>
						<ul className="job-details">
							<li>Managed and tuned MySQL databases for an E-commerce platform, handling complex inventory and transaction queries.</li>
							<li>Optimized database indexing strategies to handle high-transaction volumes during flash sales.</li>
						</ul>
					</div>
				</section>

				{/* Section: Education */}
				<section className="card">
					<h3 className="section-title">EDUCATION</h3>
					<div className="job-item">
						<div className="job-header">
							<h4 className="company">BUDI LUHUR UNIVERSITY</h4>
							<span className="separator hidden-mobile">|</span>
							<span className="location">Jakarta</span>
						</div>
						<div className="job-role">Computer Science Engineering | GPA: 3.50 / 4.00</div>
						<div className="date-range">Jan 2015 - Mar 2017</div>
					</div>
				</section>

			</div>
		</div>
	);
}

export default App;
