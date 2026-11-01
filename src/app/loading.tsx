export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="loading">
      <span className="loading__symbol" aria-hidden="true">
        ✦
      </span>

      <p>Discovering the wizarding world...</p>
    </div>
  );
}
