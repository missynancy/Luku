import type { JSX } from 'preact';
import { useState } from 'preact/hooks';

export default function InteractiveSignup(): JSX.Element {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="signup-card" aria-label="Newsletter signup">
      <h3>Get simple wellness tips in your inbox</h3>
      <p>Join the list for practical nutrition, fitness, and remote-work wellness ideas.</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <label>
          Email address
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={email}
            onInput={(event) => setEmail(event.currentTarget.value)}
          />
        </label>
        <button className="btn btn-primary" type="submit">
          {submitted ? 'Thanks!' : 'Subscribe'}
        </button>
      </form>
      {submitted && <p>Thanks for signing up. We will reach out with simple wellness ideas soon.</p>}
    </section>
  );
}
