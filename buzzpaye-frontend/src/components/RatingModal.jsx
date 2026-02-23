import React, { useState, useEffect } from "react";

const RatingModal = ({ isOpen, onClose, onSubmit, influencerName }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (isOpen) setRating(0);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-secondary p-6 rounded-xl text-white w-80 shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-primary">
          Rate {influencerName}
        </h2>

        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`text-3xl ${
                star <= rating ? "text-yellow-400" : "text-gray-500"
              }`}
              onClick={() => setRating(star)}
            >
              ★
            </button>
          ))}
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSubmit(rating);
              onClose();
            }}
            className="px-4 py-2 bg-primary text-white rounded-md"
            disabled={rating === 0}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
