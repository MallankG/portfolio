"use client";

export default function ContactSection() {
    return (
        <div className="section-container">
            <div className="section-content">
                <h1 className="section-title">Get In Touch</h1>
                <p className="section-description">
                    Have a project in mind? Let's talk!
                </p>
                <div className="contact-container">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="your@email.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Your message..." rows={4} />
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                    <div className="contact-info">
                        <div className="info-item">
                            <span className="info-label">Email</span>
                            <span className="info-value">hello@example.com</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Location</span>
                            <span className="info-value">San Francisco, CA</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
