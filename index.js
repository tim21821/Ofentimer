$(document).ready(function () {
    // declare variables
    let start = new Date();
    let finish = new Date();
    let heatTime = new Time(0, 0);
    let holdTime = new Time(0, 0);
    let cooldownTime = new Time(0, 0);
    let runTime = new Time(0, 0);

    $("#startDate").change(function () {
        start.setTime(Date.parse($("#startDate").val()));
        finish.setTime(start.getTime());
        updatePage(runTime, finish);
    });

    $("#heatHour").change(function () {
        heatTime.hour = Number(Number($("#heatHour").val()));
        runTime = getTotalTime(heatTime, holdTime, cooldownTime);
        finish.setTime(getFinishTime(start, runTime));
        updatePage(runTime, finish);
    });
    $("#heatMinute").change(function () {
        heatTime.minute = Number(Number($("#heatMinute").val()));
        runTime = getTotalTime(heatTime, holdTime, cooldownTime);
        finish.setTime(getFinishTime(start, runTime));
        updatePage(runTime, finish);
    });

    $("#holdHour").change(function () {
        holdTime.hour = Number(Number($("#holdHour").val()));
        runTime = getTotalTime(heatTime, holdTime, cooldownTime);
        finish.setTime(getFinishTime(start, runTime));
        updatePage(runTime, finish);
    });
    $("#holdMinute").change(function () {
        holdTime.minute = Number(Number($("#holdMinute").val()));
        runTime = getTotalTime(heatTime, holdTime, cooldownTime);
        finish.setTime(getFinishTime(start, runTime));
        updatePage(runTime, finish);
    });

    $("#cooldownHour").change(function () {
        cooldownTime.hour = Number(Number($("#cooldownHour").val()));
        runTime = getTotalTime(heatTime, holdTime, cooldownTime);
        finish.setTime(getFinishTime(start, runTime));
        updatePage(runTime, finish);
    });
    $("#cooldownMinute").change(function () {
        cooldownTime.minute = Number(Number($("#cooldownMinute").val()));
        runTime = getTotalTime(heatTime, holdTime, cooldownTime);
        finish.setTime(getFinishTime(start, runTime));
        updatePage(runTime, finish);
    });
})

function updatePage(totalTime, finish) {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    };    
    $("#runHour").val(totalTime.hour);
    $("#runMinute").val(totalTime.minute);
    $("#finishText").text(`Der Ofen ist fertig am ${finish.toLocaleString("de-DE", options)}.`)
}

function getTotalTime(heatTime, holdTime, cooldownTime) {
    return Time.add(heatTime, holdTime, cooldownTime);
}

function getFinishTime(start, runTime) {
    return start.getTime() + runTime.milliseconds;
}
