const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);

  return hours * 60 + minutes;
};

const isMeetingOutsideWorkingHours = (startWorking, endWorking, startMeeting, durationMeeting) => {
  const startWorkingMinutes = timeToMinutes(startWorking);
  const endWorkingMinutes = timeToMinutes(endWorking);
  const startMeetingMinutes = timeToMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + durationMeeting;

  return startMeetingMinutes >= startWorkingMinutes && endMeetingMinutes <= endWorkingMinutes;
};

isMeetingOutsideWorkingHours('08:00', '17:30', '14:00', 90); // true
isMeetingOutsideWorkingHours('8:0', '10:0', '8:0', 120);     // true
isMeetingOutsideWorkingHours('08:00', '14:30', '14:00', 90); // false
isMeetingOutsideWorkingHours('14:00', '17:30', '08:0', 90);  // false
isMeetingOutsideWorkingHours('8:00', '17:30', '08:00', 900); // false

