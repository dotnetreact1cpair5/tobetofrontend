function ApplicationTab() {
  return (
    <li>
      <button
        className="focus:border-b-4 border-black"
        onClick={() => toggleTab(1)}
      >
        Basvurularim
      </button>
    </li>
  );
}
export default ApplicationTab;
