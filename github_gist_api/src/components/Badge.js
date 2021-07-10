import "./Badge.css";

export default function Badge({ language }) {
  return (
    <div className="badge">
      <p className="badge-text">{language}</p>
    </div>
  );
}
