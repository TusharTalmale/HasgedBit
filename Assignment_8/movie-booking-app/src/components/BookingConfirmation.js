import React from "react";

const BookingConfirmation = () => {
  const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
  const bookingID = Math.floor(100000 + Math.random() * 900000); // Random 6-digit ID

  return (
    <div>
      <h1>Booking Confirmed!</h1>
      <p>Booking ID: <strong>{bookingID}</strong></p>
      <p>Name: {bookingDetails.name}</p>
      <p>Email: {bookingDetails.email}</p>
      <p>Mobile: {bookingDetails.mobile}</p>
    </div>
  );
};

export default BookingConfirmation;
