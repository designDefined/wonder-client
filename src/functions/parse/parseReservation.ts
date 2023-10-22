import { Wonder } from "../../entity/wonder";

type ParsedPeriod =
  | { status: "finished" }
  | {
      status: "reserveSoon" | "reserveNow";
      daysLeft: number;
      hourLeft: number;
    };

export const parseReservationProcessPeriod = (
  reservationProcess: Wonder["reservationProcess"],
): ParsedPeriod => {
  if (!reservationProcess) return { status: "finished" };
  const startsAt = new Date(reservationProcess.startsAt);
  const endsAt = new Date(reservationProcess.endsAt);
  const now = new Date();
  if (endsAt < now) return { status: "finished" };
  const until = now < startsAt ? startsAt : endsAt;
  const daysLeft = Math.floor((until.getTime() - now.getTime()) / 86400000);
  const hourLeft = Math.floor(
    ((until.getTime() - now.getTime()) % 86400000) / 3600000,
  );
  return {
    status: now < startsAt ? "reserveSoon" : "reserveNow",
    daysLeft,
    hourLeft,
  };
};
