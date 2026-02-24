import Link from 'next/link';

export default function ThanksPage() {
  return (
    <>
      <section
        className="hero"
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <div style={{ textAlign: 'center', padding: '0 20px' }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>Thank You!</h1>
          <h2 style={{ color: 'var(--accent-primary)', marginBottom: '30px', fontSize: '1.8rem' }}>
            Your message has been sent successfully
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--text-color-muted)' }}>
            Thanks for reaching out! I&apos;ll get back to you as soon as possible.
          </p>
          <Link href="/" className="btn">
            Back to Portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
