function superbowlWin(record) {
    if (record.find(isAWin)) {
        return record.find(isAWin).year;
    }
}

const isAWin = (element) => element.result === "W";