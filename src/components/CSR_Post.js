export default function CSR_Post({ post }) {
  const { title, body, id } = post;
  return (
    <div
      style={{
        padding: "0.75rem",
        marginBottom: "1rem",
        fontSize: "0.875rem",
        color: "#3182CE",
        backgroundColor: "#BFDBFE",
        borderRadius: "0.5rem",
      }}
    >
      <p style={{ fontWeight: "500" }}>
        {id}. {title}
      </p>
      <p>{body}</p>
    </div>
  );
}
