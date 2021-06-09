export default function Search({ value, onChange, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cityName"
          placeholder="Enter Country"
          //value={value}
          //onChange={onChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
