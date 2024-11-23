export default class Data {
    static format(date: Date): string {
        
        const pad = (n: number) => n.toString().padStart(2, "0");
        
        const dt = date ?? new Date();
        const year = dt.getFullYear();
        const month = pad(dt.getMonth() +1);
        const day = pad(dt.getDate());
        const hour = pad(dt.getHours());
        const minute = pad(dt.getMinutes());

        return `${year}-${month}-${day}T${hour}:${minute}`
    }
    static unformat(date: string): Date {
        const [year, month, day] = date.split("T")[0].split("-");
        const [hour, minute] = date.split("T")[1].split(":");
        
        return new Date(
            parseInt(year),
            parseInt(month) -1,
            parseInt(day),
            parseInt(hour),
            parseInt(minute)
        )
    }
}

// const currentDate = Data.format(new Date())

// console.log("\n Date formated: ", currentDate)
// console.log("\n Date deformated: ", Data.unformat(currentDate))

