export default function layout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="w-fit mx-auto ">
      {/* Include shared UI here e.g. a header or sidebar */}
      <h1>layout of auth page </h1>

      {children}
    </section>
  );
}
