export type TimeLeft ={
    days: number,
    hours: number,
    minutes: number,
}

export const getTimeLeft = (targetDate: Date): TimeLeft =>{
const difference = targetDate.getTime() - new Date().getTime();
return{
    days: Math.floor(difference / (1000 * 60 *60 *24)),
    hours: Math.floor(difference/ (1000 *60 *60) %24),
    minutes: Math.floor(difference / (1000 *60) % 60),
   }
}