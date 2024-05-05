class Stopwatch {
    constructor(counterPanel) {
        this.seconds = 0
        this.minutes = 0
        this.hours = 0
        this.interval = null
        this.counterPanel = counterPanel
    }

    start() {
        if (this.interval) return
        const oneSecond = 1000
        this.interval = setInterval(() => this.counter(), oneSecond)
    }

    stop() {
        clearInterval(this.interval)
        this.interval = null
    }

    reset() {
        this.stop()

        this.hours = 0
        this.minutes = 0
        this.seconds = 0

        this.updateCounterPanel()
    }

    counter() {
        this.seconds++
        if (this.seconds >= 60) {
            this.minutes++
            this.seconds = 0
        }
        if (this.minutes >= 60) {
            this.hours++
            this.minutes = 0
        }
        this.updateCounterPanel()
    }

    updateCounterPanel() {
        const timeString = `${this.formatNumber(this.hours)}:${this.formatNumber(this.minutes)}:${this.formatNumber(this.seconds)}`
        this.counterPanel.innerText = timeString
    }

    formatNumber(number) {
        return number < 10 ? `0${number}` : number
    }
}

const counterPanel = document.querySelector("#counterPanel")
const stopwatch = new Stopwatch(counterPanel)

const btnStart = document.querySelector("#start")
btnStart.addEventListener("click", () => {
    stopwatch.start()
})

const btnStop = document.querySelector("#stop")
btnStop.addEventListener("click", () => {
    stopwatch.stop()
})

const btnReset = document.querySelector("#reset")
btnReset.addEventListener("click", () => {
    stopwatch.reset()
})