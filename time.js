class Time {
    constructor(hour, minute) {
        this.hour = hour;
        this.minute = minute;
    }

    get val() {
        let hourString;
        let minuteString;

        if (this.hour < 10) {
            hourString = "0" + this.hour;
        } else {
            hourString = this.hour.toString();
        }
        if (this.minute < 10) {
            minuteString = "0" + this.minute;
        } else {
            minuteString = this.minute.toString();
        }

        return hourString + ":" + minuteString;
    }

    get milliseconds() {
        return 60 * 60 * 1000 * this.hour + 60 * 1000 * this.minute;
    }

    set val(value) {
        const s = value.split(":");
        this.hour = Number(s[0]);
        this.minute = Number(s[1]);
    }

    static add(...args) {
        let hour = 0;
        let minute = 0;
        for (const t of args) {
            hour += t.hour;
            minute += t.minute;
        }
        return new Time(hour, minute);
    }
}
