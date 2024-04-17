export const TimeAgo = (date) => {
    const milliseconds = date * 1000;
    const today = new Date().getTime();
    let difference = today - milliseconds;

    const year = Math.floor(difference/(1000*60*60*24*365));
    difference -= year*(1000*60*60*24*365);

    const month = Math.floor(difference/(1000*60*60*24*30));
    difference -= month*(1000*60*60*24*30);

    const week = Math.floor(difference/(1000*60*60*24*7));
    difference -= week*(1000*60*60*24*7);

    const days = Math.floor(difference/(1000*60*60*24));
    difference -= days*(1000*60*60*24);

    const hours = Math.floor(difference/(1000*60*60));
    difference -= hours*(1000*60*60);

    const minutes = Math.floor(difference/(1000*60));
    difference -= minutes*(1000*60);

    if(year >= 1) return (year > 1)? `${year} years ago`: `${year} year ago`;
    if(month >= 1) return (month > 1)? `${month} months ago`: `${month} month ago`;
    if(week >= 1) return (week > 1)? `${week} weeks ago`: `${week} week ago`;
    if(days >= 1) return (days > 1)? `${days} days ago`: `${days} day ago`;
    if(hours >= 1) return (hours > 1)? `${hours} hours ago`: `${hours} hour ago`;
    if(minutes >= 1) return (minutes > 1)? `${minutes} minutes ago`: `${minutes} minute ago`;
    return "Just now";
}