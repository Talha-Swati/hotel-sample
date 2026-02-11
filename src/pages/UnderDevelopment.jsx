import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';

const UnderDevelopment = () => {
  return (
    <PageLayout
      seo={{
        title: 'Under Development | The Tiny Escape',
        description: 'The Tiny Escape website is currently under development.'
      }}
    >
      <section className="relative flex min-h-[70vh] items-center justify-center px-6 py-24">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8A6B45]">
            The Tiny Escape
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            This website is under development.
          </h1>
          <p className="mt-6 text-lg theme-muted">
            We are crafting a calm, design-forward experience. Please check back soon.
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border-2 border-current px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] transition-transform hover:-translate-y-0.5"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default UnderDevelopment;
