function timeConversion(s) {
    let militaryTime = ""
    const amOrPm = s.slice(-2)
    const timeWithoutAmPm = s.slice(0,-2)
    const [hours, minutes, seconds] = timeWithoutAmPm.split(":")
    if(amOrPm === "AM"){
        if(hours === "12"){
            militaryTime = `00:${minutes}:${seconds}`
        }else{
            militaryTime = timeWithoutAmPm;
        }

    }else{
        if(hours === "12"){
            militaryTime = `${hours}:${minutes}:${seconds}`
        }else{
            militaryTime = `${parseInt(hours)+12}:${minutes}:${seconds}`
        }
    }
    
    return militaryTime;

}

console.log(timeConversion("12:45:54PM"))