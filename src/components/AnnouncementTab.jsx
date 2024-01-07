function AnnouncementTab() {
  return (
    <li>
      <button
        className="focus:border-b-4 border-black "
        onClick={() => toggleTab(3)}
      >
        Duyuru ve Haberlerim
      </button>
    </li>
  );
}
export default AnnouncementTab;
