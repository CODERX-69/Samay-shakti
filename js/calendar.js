new Vue({
  el: "#app",
  data: {
    i: 0,
    year: [],
    month: [],
    week: [],
    selectedDate: {},
  },
  created() {
    this.getWeekBlock();
  },
  watch: {
    selectedDate() {
      console.log(this.selectedDate.actual.toISOString().split("T")[0]);
    },
  },
  methods: {
    // Helper Functions:
    getOrdinalNum(n) {
      return (
        n +
        (n > 0
          ? ["th", "st", "nd", "rd"][
              (n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10
            ]
          : "")
      );
    },
    addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    },
    getWeekBlock() {
      let today = new Date();
      let prevMonday = new Date();

      let n = today.getDay();

      prevMonday.setDate(today.getDate() - (n - 1) + this.i * 7);

      this.prevMonday = prevMonday;

      // Flush this.week to empty Array:
      this.week = [];

      this.month = [];

      this.year = [];

      for (var i = 0; i < 7; i++) {
        let day = this.addDays(this.prevMonday, i);

        let currentDayToday = false;
        if (today.getTime() == day.getTime()) {
          currentDayToday = true;
        }

        this.week.push({
          ordinal: this.getOrdinalNum(day.getDate()),
          active: false,
          currentDayToday: currentDayToday,
          actual: new Date(day.setHours(0, 0, 0, 0)),
        });

        this.month.indexOf(day.toLocaleString("default", { month: "long" })) ===
        -1
          ? this.month.push(day.toLocaleString("default", { month: "long" }))
          : this.month;
        this.year.indexOf(
          day.toLocaleString("default", { year: "numeric" })
        ) === -1
          ? this.year.push(day.toLocaleString("default", { year: "numeric" }))
          : this.year;
      }
    },
    getNextWeek() {
      this.i++;
      this.getWeekBlock();
    },
    getPreviousWeek() {
      this.i--;
      this.getWeekBlock();
    },
    setActiveDay(activeDay) {
      this.selectedDate = activeDay;
      this.week.forEach((day) => {
        if (activeDay == day) {
          day.active = true;
        } else {
          day.active = false;
        }
      });
    },
  },
});
