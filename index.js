function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrapper = `*`) {
    return function motivation(youAre = "special") {
            return `You are ${wrapper}${youAre}${wrapper}!`;
        };
}