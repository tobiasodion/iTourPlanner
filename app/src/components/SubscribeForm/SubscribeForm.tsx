import { useState } from "react";
import './SubscribeForm.css';

function SubscribeForm() {
    const [email, setEmail] = useState<string>('');

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted email:', email);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    return (
        <form className="subscribe-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
                <input type="email"
                    className="email"
                    onChange={handleEmailChange}
                    value={email}
                    placeholder="Enter your email"
                    required />
            </div>
            <div>
                <button className={email.length === 0 ? 'disabled-button' : ''} disabled={email.length === 0} type="submit">
                    Subscribe
                </button>
            </div>
        </form>
    )
}

export default SubscribeForm;