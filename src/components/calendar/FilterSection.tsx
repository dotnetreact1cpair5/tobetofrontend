import React, { useState } from "react";

interface HandleAddEventFunction {
  (newEvent: { title: string; start: Date; trainer: string }): void;
}

const FilterSection = ({
  handleAddEvent,
}: {
  handleAddEvent: HandleAddEventFunction;
}) => {
  const [newEventTitle, setNewEventTitle] = useState("");
  const [selectedTrainer, setSelectedTrainer] = useState("");
  const [manualTrainer, setManualTrainer] = useState("");
  const [trainers, setTrainers] = useState<string[]>([]);

  const handleAddButtonClick = () => {
    if (newEventTitle.trim() !== "") {
      const newEvent = {
        title: newEventTitle,
        start: new Date(),
        trainer: selectedTrainer || manualTrainer,
      };
      handleAddEvent(newEvent);
      setNewEventTitle("");
      setSelectedTrainer("");
      setManualTrainer("");
    } else {
      alert("Lütfen geçerli bir etkinlik başlığı girin.");
    }
  };

  const handleAddTrainer = () => {
    if (manualTrainer.trim() !== "") {
      setTrainers([...trainers, manualTrainer]);
      setSelectedTrainer(manualTrainer);
      setManualTrainer("");
    }
  };

  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Eğitim Arama</h2>
        <input
          type="text"
          id="search-event"
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Eğitim arayın..."
        />
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Eğitmen</h2>
        <div className="relative">
          <select
            id="trainer-select"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={selectedTrainer}
            onChange={(e) => setSelectedTrainer(e.target.value)}
          >
            <option value="">Eğitmen Seçiniz</option>
            {trainers.map((trainer, index) => (
              <option key={index} value={trainer}>
                {trainer}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Eğitmen Ekle</h2>
        <div className="flex">
          <input
            type="text"
            value={manualTrainer}
            onChange={(e) => setManualTrainer(e.target.value)}
            className="border border-gray-300 rounded-md p-2 flex-grow mr-2"
            placeholder="Manuel eğitmen ismi"
          />
          <button
            onClick={handleAddTrainer}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Ekle
          </button>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Eğitim Durumu</h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              id="eventEnded"
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="eventEnded" className="ml-2">
              Bitmiş Dersler
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="eventContinue"
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="eventContinue" className="ml-2">
              Devam Eden Dersler
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="eventBuyed"
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="eventBuyed" className="ml-2">
              Satın Alınmış Dersler
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="eventNotStarted"
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="eventNotStarted" className="ml-2">
              Başlamamış Dersler
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="text-lg font-semibold mb-2">Yeni Etkinlik Başlığı:</h2>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Yeni etkinlik başlığı girin..."
          />
          <button
            onClick={handleAddButtonClick}
            className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;